import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import ROICalculator from '@/components/ROICalculator';

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-gradient-to-b from-black to-[#183c13] py-8 md:py-16 rounded-b-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-24">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-8xl font-extrabold leading-tight text-center mb-6">
                Your Entire Business.<br />One AI–Powered Tool.
              </h1>
              <p className="text-xl md:text-3xl text-gray-300 text-center mb-2">
                Replace your SaaS stack, centralize ops, and launch in 2 weeks. Built for speed. Ready for AI.
              </p>
            </>
          }
        >
          <ROICalculator />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Hero;