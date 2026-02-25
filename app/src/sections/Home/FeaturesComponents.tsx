import React from "react";
import { Maximize2 } from "lucide-react";
import type { Feature } from "../Typeelement";

export default function FeaturesComponents({
  feature,
  index,
  setSelectedFeature,
}: {
  feature: Feature;
  index: number;
  setSelectedFeature: React.Dispatch<
    React.SetStateAction<Feature | null>
  >;
}) {
  // ✅ 높이 조건 정리
  const isLarge = index === 0 || index === 3;   // 660px
  const isMedium = index === 1;                 // 350px
  const isAuto = index === 4;                   // auto

  return (
    <div
      key={feature.id}
      style={
        feature.backgroundImage
          ? {
              backgroundImage: `url(${feature.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      className={`
        group relative rounded-2xl p-6 shadow-sm
        bg-white h-full overflow-hidden cursor-pointer
        hover:shadow-xl transition-all duration-300
        
        ${isLarge ? "md:col-span-2 lg:col-span-2 lg:h-[680px]" : ""}
        ${isMedium ? "lg:h-[330px]" : ""}
        ${isAuto ? "lg:h-auto" : ""}
        ${!isLarge && !isMedium && !isAuto ? "lg:h-[180px]" : ""}
      `}
      onClick={() => setSelectedFeature(feature)}
    >
      {/* Gradient Overlay */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br
          ${feature.bgGradient}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        `}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* 상단 영역 */}
        <div>
          <div className="flex items-start justify-between mb-4 ">
            <h3 className="text-2xl font-bold text-gray-900">
              {feature.title}
            </h3>
        
           

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFeature(feature);
              }}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors "
            >
              <Maximize2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <p className="text-gray-600 text-md leading-relaxed break-keep">
            {feature.description}
          </p>
        </div>
    


        {/* 하단 이미지 영역 */}
        {feature.image && (
          <div className="mt-auto pt-4">
            <div
              className={`
                flex justify-center items-center
                rounded-sm overflow-hidden border border-gray-200 py-4
                ${
                  isLarge
                    ? "h-[500px]"
                    : isMedium
                    ? "h-[170px]"
                    : "h-[500px]"
                }
                ${feature.color}
              `}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[85%] h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}