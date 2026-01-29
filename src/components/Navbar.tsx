import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-6 max-width bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/APG Logo 2.svg" 
            alt="APG Software Logo" 
            className="h-12 w-auto bg-gray-900 rounded-lg px-2 py-1"
          />
          <h1 className="text-2xl font-bold">APG Software</h1>
        </Link>
        
        {/* Desktop Navigation */}
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

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-brand-green text-black hover:bg-opacity-90 px-6 py-2 relative overflow-hidden" onClick={() => window.open('https://go.apgsoftware.com', '_blank')}>
            <GlowEffect 
              colors={['#90F23C', '#ffffff', '#90F23C', '#7AE82C']}
              mode="rotate"
              blur="medium"
              duration={2}
              scale={1.8}
            />
            <span className="relative z-10">Book a Call</span>
          </Button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          aria-label="Toggle mobile menu"
        >
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 transform ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 transform ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 pb-8 space-y-4 border-t border-border/40 mt-6">
          <Link 
            to="/" 
            className="block text-lg hover:text-brand-green transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block text-lg hover:text-brand-green transition-colors py-2"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          {isHomePage && (
            <>
              <a 
                href="#ai-system" 
                className="block text-lg hover:text-brand-green transition-colors py-2"
                onClick={closeMobileMenu}
              >
                AI System
              </a>
              <a 
                href="#ai-agents" 
                className="block text-lg hover:text-brand-green transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Agents
              </a>
              <a 
                href="#live-app-preview" 
                className="block text-lg hover:text-brand-green transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Live Preview
              </a>
            </>
          )}
          
          {/* Mobile CTA Button */}
          <div className="pt-6 pb-2">
            <Button className="w-full bg-brand-green text-black hover:bg-opacity-90 px-6 py-3 relative overflow-hidden" onClick={() => window.open('https://go.apgsoftware.com', '_blank')}>
              <GlowEffect 
                colors={['#90F23C', '#ffffff', '#90F23C', '#7AE82C']}
                mode="rotate"
                blur="medium"
                duration={2}
                scale={1.8}
              />
              <span className="relative z-10">Book a Call</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
