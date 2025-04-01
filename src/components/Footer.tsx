
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-darkGreen text-creamWhite mt-20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-mintGreen mb-4">Email ROI Insights</h3>
            <p className="text-sm">
              Helping e-commerce businesses maximize their email marketing investments with accurate ROI calculations and analytics.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-mintGreen mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#calculator" className="text-sm hover:text-mintGreen transition-colors">ROI Calculator</a></li>
              <li><a href="#explanation" className="text-sm hover:text-mintGreen transition-colors">Learn About Email ROI</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-mintGreen mb-4">Contact</h3>
            <p className="text-sm">
              Have questions about our calculator? <br />
              Email us at: <a href="mailto:info@emailroiinsights.com" className="hover:text-mintGreen transition-colors">info@emailroiinsights.com</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-mintGreen/30 text-center text-sm">
          <p>© {currentYear} Email ROI Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
