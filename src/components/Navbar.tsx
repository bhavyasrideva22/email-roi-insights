
import React from 'react';
import { Calculator } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-darkGreen shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calculator className="h-6 w-6 text-creamWhite" />
          <span className="text-creamWhite font-semibold text-xl">Email ROI Insights</span>
        </div>
        <div>
          <a 
            href="#calculator" 
            className="text-creamWhite hover:text-mintGreen transition-colors duration-200"
          >
            Calculator
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
