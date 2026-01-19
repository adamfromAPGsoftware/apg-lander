import React from 'react';
import { Button } from "@/components/ui/button";
import { DashboardPreview } from './DashboardPreview';

const LiveAppPreview = () => {
  return <section id="live-app-preview" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What You're Missing</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Click through a real system you could have running in 90 days or less.
        </p>
      </div>

      <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden border border-border animate-fade-in animation-delay-200 bg-white">
        <DashboardPreview />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center p-8 max-w-md bg-black bg-opacity-70 rounded-lg">
            <Button className="bg-brand-green text-black hover:bg-opacity-90 text-lg py-7 px-8 shadow-lg shadow-brand-green/20 hover:scale-105 transition-all" onClick={() => window.open('https://crm.apgsoftware.com/demo/app/dashboard', '_blank')}>
              Try Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default LiveAppPreview;