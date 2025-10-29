import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section id="cta" className="py-16 md:py-32 max-width">
      <div className="bg-brand-green bg-opacity-10 rounded-xl p-8 md:p-16 text-center border border-brand-green border-opacity-30 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">90 Days or Less to the Last Tool You'll Ever Need</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
          Let's replace your stack and launch your AI-powered system.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-brand-green text-black hover:bg-opacity-90 text-lg py-6 px-8" onClick={() => window.open('https://go.apgsoftware.com/lead-filtering', '_blank')}>
            Book Your Discovery Call
          </Button>
          <Button 
            className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-800 hover:border-gray-700 text-lg py-6 px-8 transition-all"
            onClick={() => window.open('https://go.apgsoftware.com', '_blank')}
          >
            Try the Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
