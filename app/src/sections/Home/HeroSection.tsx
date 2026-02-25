import { Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';

import asset1 from "/assets/website_6-BVPelSqa.png";



// Lazy load Three.js background to avoid SSR issues
const AnimatedBackground = lazy(() => import('@/components/three/AnimatedBackground'));

export default function HeroSection() {
  return (
    <section className="relative  overflow-hidden">
      {/* Three.js Animated Background */}
   

      {/* Content */}
      <div className="relative z-10 w-full pt-16 lg:pt-20   ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid  gap-4 items-center mt-10">
            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col justify-center ">
 <h1 className="text-4xl text-center sm:text-4xl lg:text-5xl font-bold leading-tight">
  현장 스마트 계측
  <br className="sm:block hidden" />
  <span className="sm:ml-3">
    실시간 안전 상태 플랫폼
  </span>
</h1>
             <p className="text-md sm:text-lg text-center text-gray-600 mt-8 max-w-xl mx-auto break-keep">
  현장별 센서 데이터를 실시간으로 분석하고 변화를 즉시 파악합니다.
  <br className="hidden sm:block" />
  이상 발생 시 알림을 통해 빠른 대응이 가능합니다.
</p>
          

         
            </div>

            {/* Right Content - Dashboard Preview */}
            
            <div className="relative h-[300px]
sm:h-[400px]
md:h-[500px]
lg:h-[700px]
               justify-center flex items-center">

                <Suspense>
         <div className=" 
         
     absolute left-1/2 -translate-x-1/2 w-[160vw] h-full  " >
                    
        <AnimatedBackground />          
            <div className="absolute inset-0 bg-gradient-to-b h-20 from-white via-white/80 to-transparent pointer-events-none" />
          </div>

      </Suspense>
              <div className="relative 
              w-[95%] flex  *: justify-center
              items-center
              h-[80%]
              bg-gray-400/50

          
              mt-10
              rounded-2xl overflow-hidden shadow-2xl border ">
                    <div className="absolute bottom-10">
                <Button
                 onClick={() => {
    window.location.href = "https://gs.safesignal.cloud/admin/home";
  }}
                 className="
bg-orange-500
hover:bg-orange-600
text-white
px-8 py-3
sm:px-10 sm:py-4
lg:px-14 lg:py-6
text-sm sm:text-base
font-semibold
rounded-md
shadow-lg shadow-orange-500/30
transition-all
hover:shadow-xl hover:shadow-orange-500/40
"
                >
                  데모 체험하기
                  
                </Button>
               
              </div>
               
               <img 
               className='h-full w-full p-3'
               src={asset1}>
               </img >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t  to-transparent pointer-events-none" />
              </div>
              
              {/* Floating badges */}
           
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}