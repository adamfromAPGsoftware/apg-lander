import React from 'react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: '🧰',
      title: "You're Running a Service–Based Business",
      description: "Agencies, consultants, construction firms and other operators who are juggling clients, projects, and internal workflows across too many tools."
    },
    {
      icon: '💸',
      title: "You're Spending $3,000+/Month on SaaS Tools",
      description: "You're paying for project management, CRM, quoting, chat, and docs tools — but none of them actually work together or reflect your real processes."
    },
    {
      icon: '🤖',
      title: "You Want to Automate, But Nothing's Ready",
      description: "You know AI could save you time, but your systems are too scattered and unstructured for it to do anything useful."
    },
    {
      icon: '🧠',
      title: "You Need One Smart System That Just Works",
      description: "A single, AI-powered platform tailored to your business — built fast, easy to use, and ready to evolve as you grow."
    }
  ];

  return (
    <section id="target-audience" className="py-16 md:py-24 max-width">
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
                <span className="text-4xl">{audience.icon}</span>
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
