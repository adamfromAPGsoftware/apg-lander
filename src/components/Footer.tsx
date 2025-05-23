import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border max-width">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left side - Logo and company info */}
        <div className="flex items-center gap-3">
          <img 
            src="/APG Logo 2.svg" 
            alt="APG Software Logo" 
            className="h-6 w-6 bg-gray-900 rounded px-0.5"
          />
          <div>
            <h3 className="font-bold text-foreground">APG Software</h3>
            <p className="text-xs text-muted-foreground">Custom business software, built in 14 days.</p>
          </div>
        </div>

        {/* Center - Address */}
        <div className="text-xs text-muted-foreground">
          1 Sussex Street, Barangaroo, NSW 2000
        </div>

        {/* Right side - Copyright and made with love */}
        <div className="text-xs text-muted-foreground">
          <p>&copy; 2025 APG Software. All rights reserved.</p>
          <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
            made with <span className="text-red-500">♥</span> in Sydney, Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
