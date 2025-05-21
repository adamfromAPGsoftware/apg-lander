import React from 'react';

const WhyDifferent = () => {
  const differentiators = [
    {
      title: "Break Free from SaaS Overload",
      description: "Eliminate $3,000+/month in SaaS subscriptions and manual processes by replacing them with a single streamlined system."
    },
    {
      title: "AI That Understands Your Business",
      description: "Sync all your operations with AI-powered automation built around your actual workflows—not generic templates."
    },
    {
      title: "One Tool to Run It All",
      description: "Ditch the 10+ tools. Get a fully tailored internal system designed specifically to manage your entire business from one place."
    }
  ];

  return (
    <section id="why-different" className="py-16 md:py-24 bg-[#111] rounded-xl max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're Different</h2>
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
