import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with <Heart size={16} className="text-red-400 mx-1" /> by Alex Morgan
            </p>
          </div>
          
          <div className="text-slate-400 text-sm">
            <p>&copy; 2024 Alex Morgan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;