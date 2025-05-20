
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800 max-width">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/168b5e80-e8e2-4f1c-b083-9dc3a6192668.png" 
              alt="APG Software Logo" 
              className="h-12 w-auto"
            />
            <h3 className="text-xl font-bold">APG Software</h3>
          </div>
          <p className="text-gray-400">
            Custom business software, built in 14 days.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Features</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Custom Systems</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">AI Integration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Development Process</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Case Studies</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Testimonials</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-brand-green transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} APG Software. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
