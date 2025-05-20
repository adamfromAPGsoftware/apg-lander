
import React from 'react';

const WhyDifferent = () => {
  const differentiators = [
    {
      title: "You own your system",
      description: "No ongoing subscriptions or per-seat pricing. Pay once, own forever."
    },
    {
      title: "Tailored to your workflows",
      description: "Built around your business processes, not forcing you into rigid templates."
    },
    {
      title: "Built by experts",
      description: "Our team has launched over 60+ custom tools for businesses of all sizes."
    },
    {
      title: "Consolidates your entire stack",
      description: "Replace 5-10 separate tools with one cohesive system."
    },
    {
      title: "Delivers real ROI — fast",
      description: "Average client sees positive ROI within the first quarter of use."
    }
  ];

  return (
    <section id="why-different" className="py-16 md:py-24 bg-[#111] rounded-xl max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Another CRM. Not Another Subscription.</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {differentiators.map((item, index) => (
          <div 
            key={index}
            className="bg-black p-6 rounded-xl border border-gray-800 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-bold mb-3 text-brand-green">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDifferent;
