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
      title: "Scope + Prototype",
      description: "Plan your system and build an interactive prototype"
    },
    {
      icon: "⚒️",
      title: "Develop",
      description: "Full platform delivered in 90 days or less"
    },
    {
      icon: "🔄",
      title: "Agile Sprints",
      description: "Expand with AI automations and advanced features"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-muted rounded-xl max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Process. Serious Results.</h2>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Connection line */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-border z-0"></div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card p-6 rounded-xl border border-border text-center z-10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-brand-green bg-opacity-20 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="hidden md:flex absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background border-2 border-border rounded-full w-8 h-8 items-center justify-center">
                <span className="text-sm font-semibold leading-none">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
