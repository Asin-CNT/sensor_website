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
  const isLarge = index === 0 || index === 3;
  const isMedium = index === 1;
  const isAuto = index === 4;

  return (
    <div
      onClick={() => setSelectedFeature(feature)}
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
        group relative rounded-2xl 
        p-5 sm:p-6
        bg-white shadow-sm hover:shadow-xl
        transition-all duration-300
        cursor-pointer

        overflow-visible lg:overflow-hidden

        ${index === 4 ? "hidden lg:block" : ""}

        h-auto

        ${isLarge ? "md:col-span-2 lg:col-span-2 lg:h-[680px]" : ""}
        ${isMedium ? "lg:h-[340px]" : ""}
        ${isAuto ? "lg:h-auto" : ""}
        ${!isLarge && !isMedium && !isAuto ? "lg:h-[200px]" : ""}
      `}
    >
      {/* Hover Gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br
          ${feature.bgGradient}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        `}
      />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* 상단 텍스트 */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              {feature.title}
            </h3>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFeature(feature);
              }}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Maximize2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep">
            {feature.description}
          </p>
        </div>

        {/* 이미지 영역 */}
        {feature.image && (
          <div className="mt-4 sm:mt-auto pt-2 sm:pt-4">
            <div
              className={`
                flex items-center justify-center
                rounded-lg border border-gray-200
                overflow-hidden

                /* 📱 모바일 크게 */
             

                /* 💻 데스크탑 */
                ${
                  isLarge
                    ? "lg:h-[500px]"
                    : isMedium
                    ? "lg:h-[200px]"
                    : "lg:h-[500px]"
                }

                ${feature.color}
              `}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="
                  w-full h-full
                  object-contain        /* 📱 모바일 꽉 채움 */
                  lg:w-[86%] lg:object-contain  /* 💻 데스크탑 유지 */
                "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}