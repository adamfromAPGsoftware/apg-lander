import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800 max-width text-center flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <img 
          src="/lovable-uploads/168b5e80-e8e2-4f1c-b083-9dc3a6192668.png" 
          alt="APG Software Logo" 
          className="h-8 w-8 mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">APG Software</h3>
        <p className="text-gray-400 text-lg mb-1">Custom business software, built in 14 days.</p>
        <p className="text-gray-500 text-sm">1 Sussex Street, Barangaroo, NSW 2000</p>
      </div>
      <hr className="w-full border-gray-800 my-8" />
      <div className="text-gray-400">
        <p>&copy; 2025 APG Software. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-500 flex items-center justify-center gap-1">
          made with <span className="text-red-500">♥</span> in Sydney, Australia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
