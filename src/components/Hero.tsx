import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import ROICalculator from '@/components/ROICalculator';

const Hero = () => {
  return (
    <section id="hero" className="pt-8 md:pt-16 pb-16 md:pb-24 max-width">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-8xl font-extrabold leading-tight text-center mb-6">
              Your Entire Business.<br />One AI–Powered Tool.
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 text-center mb-2">
              Replace your SaaS stack, centralize ops, and launch in <span className="relative inline-block"><span className="relative z-10">2 weeks</span><span className="absolute bottom-0 left-0 w-full h-1 bg-brand-green opacity-80"></span></span>. Built for speed. Ready for AI.
            </p>
          </>
        }
      >
        <ROICalculator />
      </ContainerScroll>
    </section>
  );
};

export default Hero;