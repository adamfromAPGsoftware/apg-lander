
import React from 'react';
import { Button } from "@/components/ui/button";

const LiveAppPreview = () => {
  return (
    <section id="app-preview" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What You're Missing</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Click through a real system you could have running in 14 days — for just $150/month in hosting.
        </p>
      </div>
      
      <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden border border-gray-800 animate-fade-in animation-delay-200">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center p-6">
            <p className="text-xl mb-4">Interactive Demo</p>
            <Button className="bg-brand-green text-black hover:bg-opacity-90">
              Try Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveAppPreview;
