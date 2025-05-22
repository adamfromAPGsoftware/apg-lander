import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import ROICalculator from '@/components/ROICalculator';

const Hero = () => {
  return (
    <section id="hero" className="pt-8 md:pt-16 pb-16 md:pb-24 max-width">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-center mb-6">
              Your Entire Business.<br />One AI–Powered Tool.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 text-center mb-2">
              Replace your SaaS stack, centralize ops, and launch in 2 weeks. Built for speed. Ready for AI.
            </p>
          </>
        }
      >
        <div className="flex items-center justify-center h-full w-full">
          <ROICalculator />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Hero;