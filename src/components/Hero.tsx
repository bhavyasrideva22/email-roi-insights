
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-darkGreen/10 to-mintGreen/10 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          Email Marketing ROI Calculator
        </h1>
        <p className="text-xl md:text-2xl text-charcoal/80 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Maximize your e-commerce revenue by understanding the true return on investment of your email marketing campaigns.
        </p>
        <Button 
          onClick={scrollToCalculator} 
          className="bg-goldAccent hover:bg-goldAccent/80 text-charcoal font-semibold px-8 py-6 rounded-full shadow-lg animate-scale-in transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: '0.4s' }}
        >
          Calculate Your ROI Now
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
