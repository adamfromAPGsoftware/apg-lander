import React from "react";
import { MagicText } from "@/components/ui/magic-text";

const howItWorksText = `Your team is losing 15-25 hours per employee, per week to busywork—status updates, file hunting, manual data entry, and juggling disconnected tools. We fix that. In 16 weeks, we build you a single platform that replaces your CRM, project management, messaging, and payroll tools—all synced with your accounting software automatically. But the real power is what comes next: AI that actually knows your business. Ask a question and get instant answers from your own data. Let AI assistants draft responses, generate reports, and handle routine tasks for each role on your team. You own it forever—no per-user fees, no vendor lock-in. Just a system built to evolve with your business.`;

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 max-width flex flex-col items-center">
      <div className="text-center mb-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          From scattered tools to AI-powered clarity in 16 weeks
        </p>
        <MagicText text={howItWorksText} />
      </div>
    </section>
  );
};

export default HowItWorks; 