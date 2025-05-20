
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-6 max-width">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">APG Software</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm hover:text-brand-green transition-colors">Features</a>
          <a href="#pricing" className="text-sm hover:text-brand-green transition-colors">Pricing</a>
          <a href="#about" className="text-sm hover:text-brand-green transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-brand-green transition-colors">Contact</a>
        </div>
        
        <div>
          <Button className="bg-brand-green text-black hover:bg-opacity-90">
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
