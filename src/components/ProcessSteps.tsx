
import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: "📞",
      title: "Discovery Call",
      description: "Understand your stack and requirements"
    },
    {
      icon: "🧠",
      title: "Map + Scope",
      description: "Plan your custom system architecture"
    },
    {
      icon: "⚒️",
      title: "2-Week MVP",
      description: "Live platform delivered and ready to use"
    },
    {
      icon: "🔄",
      title: "Iterate in Sprints",
      description: "Add AI and advanced features as you grow"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#111] rounded-xl max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Process. Serious Results.</h2>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Connection line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-800 z-0"></div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-black p-6 rounded-xl border border-gray-800 text-center z-10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-brand-green bg-opacity-20 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black border-2 border-gray-800 rounded-full w-8 h-8 text-sm flex items-center justify-center">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
