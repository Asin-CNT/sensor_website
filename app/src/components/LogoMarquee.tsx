import { useRef, useEffect, useState } from 'react';
import partner_company1 from '../../dist/assets/logo/partner-company_logo/parnerlogo_1.svg'
import partner_company2 from '../../dist/assets/logo/partner-company_logo/parnerlogo_2.svg'

import partner_company3 from '../../dist/assets/logo/partner-company_logo/parnerlogo_3.svg'
import partner_company4 from '../../dist/assets/logo/partner-company_logo/parnerlogo_4.svg'





interface Logo {
  name: string;
  svg: React.ReactNode;
}

const logos: Logo[] = [
  {
    name: '한국가스공사',
    svg: (
     <img src={partner_company1}></img>
    ),
  },
  {
    name: '국토교통부',
     svg: (
     <img src={partner_company2}></img>
    ),
  },
  {
    name: '한국도로공사',
      svg: (
     <img src={partner_company3}></img>
    ),
  },
  {
    name: '행정안전부',
    svg: (
     <img src={partner_company4}></img>
    ),
  },
];

export default function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-white overflow-hidden " ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-gray-500 text-md font-medium tracking-wide uppercase py-8">
          신뢰할 수 있는 파트너사
        </p>
      </div>
      
      <div className="relative">
        {/* Left fade */}
     
        {/* Marquee container */}
        <div 
          className={`flex gap-14 ${isVisible ? 'animate-marquee' : ''}`}
          style={{
            width: 'fit-content',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center px-10 py-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-w-[200px]"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
