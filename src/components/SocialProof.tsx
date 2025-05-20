
import React from 'react';

const SocialProof = () => {
  const reviews = [
    {
      author: "John D.",
      company: "Construction Firm",
      content: "APG Software revolutionized how we manage projects. We consolidated 6 tools into one and saved over $4,000 monthly.",
      stars: 5
    },
    {
      author: "Sarah M.",
      company: "Marketing Agency",
      content: "The custom system APG built for us is exactly what we needed. No more context switching between tools. Client onboarding is now a breeze.",
      stars: 5
    },
    {
      author: "Michael T.",
      company: "Consulting Group",
      content: "From discovery call to live system in 12 days. Exceeded all expectations and actually delivered on their promises.",
      stars: 4
    },
  ];

  // Function to render stars
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-700'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="social-proof" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Fast-Moving Teams</h2>
      </div>
      
      <div className="flex items-center justify-center mb-12 animate-fade-in animation-delay-200">
        <div className="flex items-center">
          {renderStars(5)}
        </div>
        <p className="ml-2 text-xl font-bold">4.9/5</p>
        <span className="mx-2 text-gray-500">|</span>
        <p className="text-gray-300">52 verified reviews</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="bg-[#111] p-6 rounded-xl border border-gray-800 animate-fade-in"
            style={{ animationDelay: `${200 + (index * 100)}ms` }}
          >
            <div className="flex mb-3">
              {renderStars(review.stars)}
            </div>
            <p className="text-lg mb-4">"{review.content}"</p>
            <div>
              <p className="font-semibold">{review.author}</p>
              <p className="text-sm text-gray-400">{review.company}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10 animate-fade-in animation-delay-600">
        <a href="#" className="text-brand-green hover:underline">Read More on Trustpilot</a>
      </div>
    </section>
  );
};

export default SocialProof;
