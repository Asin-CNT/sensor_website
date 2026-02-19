"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroSideGlowThree() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    /* ================= Renderer ================= */
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ================= Scene / Camera ================= */
    const scene = new THREE.Scene();
    
const CAMERA_SCALE = 20; // ← 여기까지 가도 됨

const camera = new THREE.OrthographicCamera(
  -CAMERA_SCALE,
   CAMERA_SCALE,
   CAMERA_SCALE,
  -CAMERA_SCALE,
   0,
   1
);

//camera.position.y = 30; // ↓ 값 조절
camera.updateProjectionMatrix();


    /* ================= Uniforms ================= */
    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },

      // 고정 색
      uLeftColor: { value: new THREE.Color("#1B2152") },   // dark
      uRightColor: { value: new THREE.Color("#F36C24") },  // orange

     // 톤다운 파라미터
uIntensity: { value: 3},   // 밝기는 유지
uThreshold: { value: 0.65 },    // ⬆ 윤곽 안 잡히게
uSoftness:  { value: 0.2 },   // ⬆ 경계 크게 퍼뜨림
uVignette:  { value: 0.55 },
    };

    /* ================= Shader ================= */
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms,
    vertexShader: `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;

        uniform float uTime;
        uniform vec2  uRes;

        uniform vec3  uLeftColor;
        uniform vec3  uRightColor;

        uniform float uIntensity;
        uniform float uThreshold;
        uniform float uSoftness;
        uniform float uVignette;

        // metaball field
  float metaball(vec2 p, vec2 c, float r) {
  vec2 diff = abs(p - c);

  // 🔥 네모 거리 계산
  float d = max(diff.x, diff.y);

  return (r * r) / (d * d + 0.0005);
}
        void main() {
          // 좌표 (-1 ~ 1), 비율 보정
          vec2 p = vUv * 2.0 - 1.0;
          float aspect = uRes.x / uRes.y;
          p.x *= aspect;

          float t = uTime;

          /* ===== 항상 겹쳐진 상태 ===== */
          vec2 cL = vec2(-0.25 * aspect, 0.0);
          vec2 cR = vec2( 0.25 * aspect, 0.0);

          // 이동 ❌ → 반지름만 서로 반대로 숨쉬기
      float rL = 0.8;
float rR = 0.8;

          float fL = metaball(p, cL, rL);
          float fR = metaball(p, cR, rR);
          float field = fL + fR;

          /* ===== 경계만 흔들림 ===== */
          float dynamicThreshold = uThreshold + 0.03 * sin(t * 0.6);
          float mask = smoothstep(
            dynamicThreshold - uSoftness,
            dynamicThreshold + uSoftness,
            field
          );

          /* ===== 색 비중 변화 (이동 없음) ===== */
       // 중심 기준 좌표
vec2 swirlP = p;

// 각도 계산
float angle = atan(swirlP.y, swirlP.x);

// 시간에 따라 회전
angle += uTime * 0.3;

// sin 기반 부드러운 S형 분리
float weight = 0.5 + 0.5 * sin(angle);

// 부드럽게 보정
weight = smoothstep(0.2, 0.8, weight);
          vec3 color = mix(uLeftColor, uRightColor, weight);

          /* ===== 중앙 UI 보호 ===== */
          float centerDist = length(vec2(
            (vUv.x - 0.5) * 1.1,
            (vUv.y - 0.5)
          ));
          float atten = 1.0 - smoothstep(0.0, 0.7, centerDist) * uVignette;

        float edgeFade = smoothstep(0.0, 0.9, mask);

vec3 rgb = color * mask * uIntensity * atten;
float alpha = edgeFade * 0.6 * atten;

          gl_FragColor = vec4(rgb, alpha);
        }
      `,
    });

    /* ================= Fullscreen Quad ================= */
 const quad = new THREE.Mesh(
  new THREE.PlaneGeometry(CAMERA_SCALE * 2, CAMERA_SCALE * 2),
  material
);
    scene.add(quad);


    /* ================= Resize ================= */
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ================= Loop ================= */
    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    /* ================= Cleanup ================= */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      scene.remove(quad);
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
  
      <div ref={mountRef} className="w-full h-[100%]" />
   
  );
}
