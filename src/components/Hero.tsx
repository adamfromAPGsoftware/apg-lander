
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="py-16 md:py-24 max-width">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Entire Business. One AI-Powered Tool.
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Replace your SaaS stack, centralize ops, and launch in 2 weeks. Built for speed. Ready for AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-brand-green text-black hover:bg-opacity-90 text-lg py-6 px-6">
              📞 Book Your Discovery Call
            </Button>
            <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:bg-opacity-10 text-lg py-6 px-6">
              💡 See What's Included
            </Button>
          </div>
        </div>
        
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animate-fade-in animation-delay-200">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            preload="metadata"
            poster="/placeholder.svg"
          >
            <source
              src="https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Industrial%20Revolution%20VSL%20(Compressed).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
