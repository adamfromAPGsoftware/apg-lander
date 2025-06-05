import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import BusinessToolsConvergence from '@/components/BusinessToolsConvergence';
import ROICalculator from '@/components/ROICalculator';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-8 md:pt-16 pb-32 md:pb-24 max-width">
      {/* Background Animation - positioned higher up on mobile */}
      <BusinessToolsConvergence className="absolute top-0 md:top-0 left-0 right-0 z-0 h-[250px] md:h-[300px]" />
      
      <div className="relative z-10">
        <div className="mb-8 md:mb-0">
          <ContainerScroll
            titleComponent={
              <>
                <div className="relative pt-48 md:pt-16 lg:pt-24">
                  <h1 className="text-4xl md:text-8xl font-extrabold leading-tight text-center mb-3 md:mb-6 relative z-20 text-gray-900">
                    Your Entire Business.<br />One AI–Powered Tool.
                  </h1>
                  <p className="text-xl md:text-3xl text-gray-600 text-center mb-0 md:mb-2 relative z-20">
                    Why rent tools at $3K+/month when you can own your system— AI-ready, and live in just <span className="relative inline-block"><span className="relative z-10">2 weeks</span><span className="absolute bottom-0 left-0 w-full h-1 bg-brand-green opacity-80"></span></span>
                  </p>
                </div>
              </>
            }
          >
            <ROICalculator />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;