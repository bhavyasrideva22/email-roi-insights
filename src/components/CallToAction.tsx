
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-darkGreen to-darkGreen/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Email Marketing ROI?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
          Use our calculator to discover the potential of your email campaigns and start making data-driven decisions today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToCalculator} 
            className="bg-goldAccent hover:bg-goldAccent/90 text-charcoal font-semibold px-8 py-6 rounded-full shadow-lg flex items-center"
          >
            Calculate Your ROI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full shadow-lg flex items-center"
            onClick={() => window.location.href = 'mailto:info@emailroiinsights.com'}
          >
            Contact Us
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
