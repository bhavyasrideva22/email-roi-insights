
import React from 'react';
import { CheckCircle, BarChart3, Mail, TrendingUp } from 'lucide-react';

const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="flex items-center mb-4">
        <div className="text-darkGreen mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-charcoal/80">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <div className="py-16 bg-mintGreen/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Calculate Your Email Marketing ROI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            icon={<BarChart3 size={28} />} 
            title="Data-Driven Decisions" 
            description="Make informed marketing budget allocations based on actual performance metrics."
          />
          <BenefitCard 
            icon={<CheckCircle size={28} />} 
            title="Validate Investment" 
            description="Confirm that your email marketing efforts are delivering positive returns for your business."
          />
          <BenefitCard 
            icon={<Mail size={28} />} 
            title="Optimize Campaigns" 
            description="Identify the most effective email strategies and refine your approach for better results."
          />
          <BenefitCard 
            icon={<TrendingUp size={28} />} 
            title="Grow Revenue" 
            description="Leverage insights to scale successful campaigns and boost your e-commerce sales."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
