import React from "react";
import { MagicText } from "@/components/ui/magic-text";

const howItWorksText = `We replace the dozens of disconnected tools your team may be using—like project trackers, chat apps, spreadsheets, and CRMs—with one simple platform that runs everything. This makes your business easier to manage, saves thousands per month, and ensures that all your company data is in one place, clearly organized and easy to access. That centralized data becomes the secret weapon for powerful AI agents that truly understand your operations—making them accurate, context-aware, and useful. Without this system, AI agents are generic and limited. With it, they become a reliable part of your team—responding to clients, creating reports, and completing tasks automatically.`;

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 max-width flex flex-col items-center">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          How we build you a system that can compete in the AI Revolution
        </p>
        <MagicText text={howItWorksText} />
      </div>
    </section>
  );
};

export default HowItWorks; 