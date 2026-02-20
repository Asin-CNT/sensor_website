import React from 'react'

import { Maximize2 } from 'lucide-react';

import type { Feature } from '../Typeelement'

export default function FeaturesComponents  ({
  feature,
  index,
  setSelectedFeature
}: {
  feature: Feature;
  index: number;
  setSelectedFeature: React.Dispatch<React.SetStateAction<Feature | null>>;
}) {
  return (
     <div
       style={
    feature.backgroundImage
      ? {
          backgroundImage: `url(${feature.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : undefined
  }
              key={feature.id}
              className={
`group relative bg-white rounded-2xl p-6 shadow-sm 
h-full
   ${feature.backgroundImage ? '' : 'bg-white'}
hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden
${
  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
}
${
  index === 0
    ? 'lg:h-[660px]'
    : index === 1
    ? 'lg:h-auto'
    : 'lg:h-[220px]'
}`



              }
              onClick={() => setSelectedFeature(feature)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br
                
                ${feature.bgGradient} 
                lg: h-[500px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 h-full  ">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                 <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                  <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Maximize2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                {/* Title */}
              
               

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Image Preview (for first feature) */}
                {feature.image && (
  <div className="relative mt-6 rounded-xl overflow-hidden border border-gray-200">

    <div
      className={`
        h-full
      
        flex
        ${index === 0 ? 'justify-center items-center  h-[500px] py-5 ' : 'justify-center items-center  py-2'}
        ${feature.color}
      `}
    >
      <div className="w-[80%] h-full">
        <img
          src={feature.image}
          alt={feature.title}
          className="relative z-10 w-full h-full object-fill object-center"
        />
      </div>
    </div>

  </div>
)}
              </div>
            </div>
  )
}
