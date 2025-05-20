
import React from 'react';
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <section id="hero" className="py-16 md:py-24 max-width">
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Entire Business.<br />
              One AI-Powered Tool.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-4">
              Replace your SaaS stack, centralize ops, and launch in 2 weeks. Built for speed. Ready for AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-brand-green text-black hover:bg-opacity-90 text-lg py-6 px-6">
                📞 Book Your Discovery Call
              </Button>
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:bg-opacity-10 text-lg py-6 px-6">
                💡 See What's Included
              </Button>
            </div>
          </div>

          {/* Right content - 3D scene */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Hero;
