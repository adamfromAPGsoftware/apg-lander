
import React from 'react';
import { Check } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    "Fully customized to your business",
    "Delivered in 14 days (guaranteed)",
    "Own it outright — no per-user pricing",
    "Ready for AI from day one (vector DB integrated)",
    "Built to evolve with bi-weekly sprints"
  ];

  return (
    <section id="value-proposition" className="py-16 md:py-24 bg-[#111] rounded-xl max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">One Custom System. Live in 2 Weeks.</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <li 
              key={index} 
              className="flex items-start space-x-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mt-1">
                <Check className="h-6 w-6 text-brand-green" />
              </div>
              <span className="text-xl">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValueProposition;
