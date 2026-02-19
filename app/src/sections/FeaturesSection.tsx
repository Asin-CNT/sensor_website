import { useState } from 'react';
import { Map, LineChart, FileText, Shield, Activity, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import FeatureComponent from './FeaturesComponents'
import website1 from '../../public/assets/website_1-C0QHkb2X.svg'
import webstie2 from '../../public/assets/website_2-CKyYmOQs.svg'
import website3 from '../../public/assets/website_3-BboLEwT0.svg'
import website4 from '../../public/assets/website_4-C7mGjW9a.svg'
import website5 from '../../public/assets/website_5-DhLbWVm5.svg'
import Lora from '../../public/assets/loralogo.png'
import type { Feature } from './Typeelement'
const features: Feature[] = [
  {
    id: 1,
    title: '지도 기반 현장 센서 모니터링',
    description: 'GIS 기반 지도에서 현장별 센서 상태를 한눈에 확인하고 위치 기반 데이터를 실시간으로 모니터링합니다.',
    icon: <Map className="w-6 h-6" />,
    image: website1,
    color: 'bg-gradient-to-b from-[#FEB494] to-[#1B2152]',
    bgGradient: 'from-blue-500/10 to-purple-500/10',
  },
  
  {
    id: 2,
    title: '시계열 센서 데이터',
    subtitle: '실시간 센서 데이터',
    image:webstie2,
    description: '시간에 따른 센서 데이터 변화를 그래프로 시각화하여 트렌드 분석과 예측이 가능합니다.',
    icon: <LineChart className="w-6 h-6" />,
    color: 'text-orange-600',
    bgGradient: 'from-orange-500/10 to-red-500/10',
  },
    {
    id: 5,
    title: ' 실시간 구조 안정성 평가',
    subtitle: '구조 안정성 평가',
    image:website4,
    description: '구조물의 안정성을 실시간으로 평가하고 변위, 침하 등의 데이터를 종합 분석합니다.',
    icon: <Activity className="w-6 h-6" />,
    color: 'text-red-600',
    bgGradient: 'from-red-500/10 to-orange-500/10',
  },
  {
    id: 3,
    title: '계측결과 AI 보고서 자동 생성',
    subtitle: '계측결과 AI 보고서 자동 생성',
    description: '수집된 데이터를 AI가 분석하여 전문적인 보고서를 자동으로 생성해 드립니다.',
    icon: <FileText className="w-6 h-6" />,
    color: 'text-purple-600',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 4,
    title: '실시간 안전 상태 모니터링',
    subtitle: '실시간 안전 상태 모니터링',
    description: '현장의 안전 상태를 실시간으로 모니터링하고 위험 요소를 즉시 감지하여 알립니다.',
    icon: <Shield className="w-6 h-6" />,
    color: 'text-green-600',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    backgroundImage:website3
  }, {
   id: 5,
title: '실시간 이상 감지 및 알림',
subtitle: '계측 데이터 기반 자동 알림',
description: '센서 데이터의 이상치 및 기준 초과를 실시간으로 감지하고 즉시 알림을 제공합니다. ',
icon: <Shield className="w-6 h-6" />,
color: 'text-red-600',
bgGradient: 'from-red-500/10 to-orange-500/10',
  },


];

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className=" mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            현장을 연결하는 데이터 인프라 기능
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            아신씨엔티의 통합 관리 시스템은 다양한 기능으로
            현장 데이터를 효율적으로 관리합니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
      
  if (index === 1) {
    return (
      <div key={feature.id} className="
      flex flex-col gap-6
      ">
        <FeatureComponent
          feature={features[1]}
          index={index}
          setSelectedFeature={setSelectedFeature}
        />
        <FeatureComponent
          feature={features[2]}
          index={index}
          setSelectedFeature={setSelectedFeature}
        />
      </div>
    );
  }
  
  if (index === 2) {
    return null; // 👈 여기서 건너뜀
  }

  return (
    <FeatureComponent
      key={feature.id}
      feature={feature}
      index={index}
      setSelectedFeature={setSelectedFeature}
    />
  );
})}
        </div>

        {/* Bottom Feature - Real-time Sensor Transmission */}
        <div className="mt-8 flex bg-[#F36C24] rounded-2xl p-8 text-white overflow-hidden relative
        
         flex-col
         justify-between
        ">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
           <div>
  <div className="
    flex 
    items-center 
    gap-4 
    h-14 
    rounded-2xl
  ">
    <img 
      className="h-[80%] px-1"
      src={Lora}
      alt=""
    />
    <h3 className="text-2xl font-bold leading-none">
      실시간 복합 센서 송신
    </h3>

</div>
          

              <p className="text-orange-100 mb-6">
                다중 센서 데이터를 통합한 실시간 계측·모니터링
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">IoT 정치계</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">IoT 초음파센서</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">IoT 균열계</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">IoT 침하계</span>
              </div>
              
            </div>
   <div className="
  relative 
  w-full
    /* 데스크탑 고정 높이 */
  rounded-xl 

">
  <img
    src={website5}
    alt="실시간 센서 모니터링"
    className="w-full h-full object-cover"
  />
</div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>

      {/* Feature Detail Dialog */}
      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <VisuallyHidden>
            <DialogTitle>{selectedFeature?.title}</DialogTitle>
          </VisuallyHidden>
          {selectedFeature && (
            <div className="p-2">
              <div className={`inline-flex items-center gap-2 ${selectedFeature.color} mb-4`}>
                {selectedFeature.icon}
                <span className="font-medium">기능 상세</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedFeature.title}
              </h2>
              {selectedFeature.subtitle && (
                <p className={`text-lg ${selectedFeature.color} mb-4`}>
                  {selectedFeature.subtitle}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedFeature.description}
              </p>
              {selectedFeature.image && (
                <img
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  className="w-full rounded-xl shadow-lg"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
