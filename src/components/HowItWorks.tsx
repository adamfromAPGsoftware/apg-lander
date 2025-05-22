import React from "react";
import { MagicText } from "@/components/ui/magic-text";

const howItWorksText = `We build you a single, AI-powered internal system that replaces your scattered tools with one central source of truth. You'll get a custom CRM that runs your entire business — no per user fees, no monthly SaaS drain — and it costs less than your current stack. All your data is structured for automation from day one, enabling AI Agents that actually work: chatbots, auto-tasking, smart reporting, and more. Delivered in 2 weeks. Built to grow with you.`;

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Top Arc SVG */}
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-20">
          <path fill="#fff" d="M0,80 Q720,0 1440,80 V0 H0 Z" />
        </svg>
      </div>
      <div className="text-center mb-10 animate-fade-in relative z-10 max-width mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How it Works</h2>
        <MagicText text={howItWorksText} />
      </div>
      {/* Bottom Arc SVG */}
      <div className="absolute bottom-0 left-0 w-full" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-20">
          <path fill="#fff" d="M0,0 Q720,80 1440,0 V80 H0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks; 