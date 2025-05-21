import React from 'react';
import AISystemAnimation from "./AISystemAnimation";
// import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

const Features = () => {
  const featuresList = [
    "Clients, Companies, Leads",
    "Dashboards, Projects, Invoicing",
    "Quoting & Estimates, Proposals",
    "Task Boards, Messaging, Client Portals",
    "Vector DB Sync, AI Agents Ready",
    "First Bi-Weekly Sprint included"
  ];

  return (
    <section id="features" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need, Nothing You Don't</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Your $20K system comes with everything your business needs to operate efficiently
        </p>
      </div>
      
      <div className="flex flex-col items-center mb-12">
        <AISystemAnimation />
      </div>
    </section>
  );
};

export default Features;
