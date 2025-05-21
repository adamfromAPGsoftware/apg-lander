
import React from 'react';
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

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
        {/* Additional top row of badges */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {featuresList.slice(0, 4).map((feature, index) => (
            <div 
              key={`top-${index}`}
              id={`badge-xarrow-top-${index}`}
              className="bg-[#111] p-6 rounded-xl border border-gray-800 flex items-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-brand-green bg-opacity-20 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-xl">{feature}</span>
            </div>
          ))}
        </div>
        
        <DatabaseWithRestApi 
          title="AI CRM System Integration"
          circleText="AI CRM"
          lightColor="#90F23C"
          badges={[
            "Clients",
            "Projects",
            "Tasks", 
            "Invoicing",
            "Companies",
            "Proposals",
            "Messages",
            "Reports"
          ]}
          buttonTexts={{
            first: "Business Logic",
            second: "AI Engine"
          }}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {featuresList.map((feature, index) => (
          <div 
            key={index}
            className="bg-[#111] p-6 rounded-xl border border-gray-800 flex items-center animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-brand-green bg-opacity-20 rounded-full p-2 mr-4">
              <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-xl">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
