import React from 'react';
import { Briefcase, DollarSign, Bot, Brain } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      iconColor: "text-blue-600",
      title: "You're Running a Service–Based Business",
      description: "Agencies, consultants, construction firms and other operators who are juggling clients, projects, and internal workflows across too many tools."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      iconColor: "text-amber-600",
      title: "You're Spending $3,000+/Month on SaaS Tools",
      description: "You're paying for project management, CRM, quoting, chat, and docs tools — but none of them actually work together or reflect your real processes."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      iconColor: "text-purple-600",
      title: "You Want to Automate, But Nothing's Ready",
      description: "You know AI could save you time, but your systems are too scattered and unstructured for it to do anything useful."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      iconColor: "text-pink-600",
      title: "You Need One Smart System That Just Works",
      description: "A single, AI-powered platform tailored to your business — built fast, easy to use, and ready to evolve as you grow."
    }
  ];

  return (
    <section id="target-audience" className="py-32 md:py-8 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
              <div className="bg-brand-green bg-opacity-20 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <div className={audience.iconColor}>{audience.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground">{audience.description}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;
