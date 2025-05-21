import React from "react";
import { MagicText } from "@/components/ui/magic-text";

const howItWorksText = `We build you a single, AI-powered internal system that replaces your scattered tools with one central source of truth. You'll get a custom CRM that runs your entire business — no per user fees, no monthly SaaS drain — and it costs less than your current stack. All your data is structured for automation from day one, enabling AI Agents that actually work: chatbots, auto-tasking, smart reporting, and more. Delivered in 2 weeks. Built to grow with you.`;

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 max-width flex flex-col items-center">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How it Works</h2>
        <MagicText text={howItWorksText} />
      </div>
    </section>
  );
};

export default HowItWorks; 