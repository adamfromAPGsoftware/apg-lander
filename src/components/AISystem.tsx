import React from 'react';
import AISystemAnimation from "./AISystemAnimation";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

const AISystem = () => {
  const featuresList = [
    "Clients, Companies, Leads",
    "Dashboards, Projects, Invoicing",
    "Quoting & Estimates, Proposals",
    "Task Boards, Messaging, Client Portals",
    "Vector DB Sync, AI Agents Ready",
    "First Bi-Weekly Sprint included"
  ];

  return (
    <section id="ai-system" className="py-16 md:py-24 pb-28 md:pb-36 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Train AI on your Founder's Brain, Not the Intern</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          An AI System is essential to build accurate AI Agents. We did our best to visualise how this works.
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <DatabaseWithRestApi
          badges={["Clients", "Projects", "Tasks", "Invoicing", "Leads", "Bills", "Transactions", "Suppliers", "Timesheets", "Reports", "Proposals", "Scope Docs", "Messages", "Announcements", "Companies"]}
          buttonTexts={{ first: "LegionDev", second: "v2_updates" }}
        />
      </div>
    </section>
  );
};

export default AISystem;
