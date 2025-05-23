import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="w-full py-6 max-width">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/APG Logo 2.svg" 
            alt="APG Software Logo" 
            className="h-12 w-auto bg-gray-900 rounded-lg px-2 py-1"
          />
          <h1 className="text-2xl font-bold">APG Software</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm hover:text-brand-green transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm hover:text-brand-green transition-colors">
            About
          </Link>
          {isHomePage && (
            <>
              <a href="#ai-system" className="text-sm hover:text-brand-green transition-colors">AI System</a>
              <a href="#ai-agents" className="text-sm hover:text-brand-green transition-colors">Agents</a>
              <a href="#live-app-preview" className="text-sm hover:text-brand-green transition-colors">Live Preview</a>
            </>
          )}
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
