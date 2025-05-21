import React from 'react';
import { Briefcase, Target, Construction, Users } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Construction,
      title: "Construction & Field Ops",
      description: "Streamline project management, team coordination, and client communications."
    },
    {
      icon: Target,
      title: "Agencies & Creative Teams",
      description: "Manage clients, projects, and deliverables in one centralized hub."
    },
    {
      icon: Briefcase,
      title: "Consulting Firms",
      description: "Track client engagements, deliverables, and internal knowledge."
    },
    {
      icon: Users,
      title: "Internal Ops & Automation Teams",
      description: "Build workflows and systems that scale with your organization."
    }
  ];

  return (
    <section id="target-audience" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
        <p className="text-lg md:text-xl text-brand-green font-semibold max-w-2xl mx-auto">
          Sick of $3000+/month of SaaS Subscriptions and want to be AI First adopters?
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((audience, index) => {
          const Icon = audience.icon;
          
          return (
            <div 
              key={index}
              className="bg-[#111] p-6 rounded-xl border border-gray-800 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-brand-green bg-opacity-20 rounded-full p-3">
                  <Icon className="h-8 w-8 text-brand-green" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-gray-300">{audience.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TargetAudience;
