
import React from 'react';
import { 
  BadgeIndianRupee, Mail, Calculator, 
  BarChart3, Target, CircleDollarSign, 
  PieChart, TrendingUp 
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const Explanation: React.FC = () => {
  return (
    <div id="explanation" className="py-16 bg-mintGreen/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-darkGreen/10 rounded-full mb-4">
            <BarChart3 className="h-6 w-6 text-darkGreen" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Understanding Email Marketing ROI</h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Learn how to interpret your email ROI calculations and use this data to optimize your 
            email marketing strategy for your e-commerce business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="bg-darkGreen text-white p-6">
              <h3 className="text-2xl font-semibold flex items-center">
                <Calculator className="mr-3 h-6 w-6" />
                What is Email Marketing ROI?
              </h3>
            </div>
            <div className="p-6">
              <p className="text-charcoal leading-relaxed mb-4">
                Email Marketing ROI (Return on Investment) is a crucial metric that measures the profitability of your 
                email marketing campaigns. It calculates the revenue generated from your email marketing efforts relative 
                to the costs associated with running those campaigns.
              </p>
              <p className="text-charcoal leading-relaxed mb-4">
                For e-commerce businesses in India, email marketing continues to be one of the most cost-effective 
                digital marketing channels, with an average ROI of ₹42 for every ₹1 spent. This powerful metric 
                helps businesses understand whether their email marketing strategies are yielding positive results and 
                identifies areas for optimization.
              </p>
              <div className="bg-mintGreen/10 border-l-4 border-darkGreen p-4 rounded mt-6">
                <p className="text-charcoal font-medium">
                  ROI Formula: (Revenue Generated - Campaign Cost) ÷ Campaign Cost × 100%
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="bg-darkGreen text-white p-6">
              <h3 className="text-2xl font-semibold flex items-center">
                <Target className="mr-3 h-6 w-6" />
                Key Email Marketing Metrics for E-commerce
              </h3>
            </div>
            <div className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-darkGreen font-medium">Open Rate</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-charcoal/80 leading-relaxed">
                      The percentage of recipients who open your email. The average open rate for e-commerce email 
                      campaigns in India ranges from 15-25%. A high open rate indicates effective subject lines and 
                      sender reputation. To improve open rates, personalize subject lines, optimize sending times, 
                      and maintain a clean email list.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-darkGreen font-medium">Click-Through Rate (CTR)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-charcoal/80 leading-relaxed">
                      The percentage of email recipients who clicked on one or more links in your email. For Indian 
                      e-commerce, average CTRs range from 2-5%. This metric measures your email content's effectiveness 
                      and relevance. Improve CTR with compelling calls-to-action, mobile-optimized design, and relevant 
                      offers tailored to customer preferences.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-darkGreen font-medium">Conversion Rate</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-charcoal/80 leading-relaxed">
                      The percentage of email recipients who completed a desired action (usually a purchase) after 
                      clicking through from your email. For e-commerce in India, average conversion rates from email 
                      typically range from 1-3%. This directly impacts your ROI calculation. Enhance conversions with 
                      personalized product recommendations, limited-time offers, and seamless checkout experiences.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-darkGreen font-medium">Average Order Value (AOV)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-charcoal/80 leading-relaxed">
                      The average amount spent when a customer places an order through your email campaigns. For Indian 
                      e-commerce, AOV varies widely by industry but is a critical component of your overall revenue 
                      calculation. Increase AOV through cross-selling, upselling, bundle offers, and loyalty programs 
                      that encourage higher spending.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-darkGreen font-medium">List Growth Rate</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-charcoal/80 leading-relaxed">
                      The rate at which your email subscriber list grows over time. A healthy list growth rate ensures 
                      sustainable email marketing success. Implement effective sign-up strategies across your website, 
                      social media channels, and physical stores (if applicable) to continuously expand your reach.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="bg-darkGreen text-white p-6">
              <h3 className="text-2xl font-semibold flex items-center">
                <TrendingUp className="mr-3 h-6 w-6" />
                Optimizing Your Email Marketing Strategy
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-mintGreen/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-darkGreen mb-3 flex items-center">
                    <PieChart className="mr-2 h-5 w-5" />
                    Segmentation Strategies
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    Segment your audience based on purchase history, browsing behavior, demographics, and engagement 
                    levels. Tailored campaigns for different segments can increase relevance and drive higher conversion 
                    rates, ultimately improving your ROI by 30-50% compared to non-segmented campaigns.
                  </p>
                </div>
                
                <div className="border border-mintGreen/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-darkGreen mb-3 flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Automated Email Campaigns
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    Implement automated email sequences for welcome series, abandoned cart recovery, post-purchase 
                    follow-ups, and re-engagement campaigns. Automated emails generate 320% more revenue per email 
                    than non-automated emails and require minimal ongoing maintenance once set up.
                  </p>
                </div>
                
                <div className="border border-mintGreen/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-darkGreen mb-3 flex items-center">
                    <CircleDollarSign className="mr-2 h-5 w-5" />
                    Cost Optimization
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    Regularly review your email marketing expenses, including platform costs, design resources, and 
                    team time. Identify opportunities to streamline processes, leverage automation, and negotiate 
                    better rates with email service providers to reduce costs without sacrificing quality.
                  </p>
                </div>
                
                <div className="border border-mintGreen/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-darkGreen mb-3 flex items-center">
                    <BadgeIndianRupee className="mr-2 h-5 w-5" />
                    Revenue Maximization
                  </h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    Focus on strategies that directly impact revenue, such as product recommendations based on browsing 
                    history, time-sensitive offers to create urgency, loyalty programs to increase customer lifetime 
                    value, and seasonal campaigns aligned with Indian festivals and shopping events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-darkGreen text-white p-6">
              <h3 className="text-2xl font-semibold flex items-center">
                <BarChart3 className="mr-3 h-6 w-6" />
                Benchmarking Your Performance
              </h3>
            </div>
            <div className="p-6">
              <p className="text-charcoal leading-relaxed mb-6">
                Understanding how your email marketing performance compares to industry standards can provide valuable 
                context for your ROI calculations. Here are typical benchmarks for the Indian e-commerce sector:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-mintGreen/20">
                    <tr>
                      <th className="py-3 px-4 text-left text-charcoal font-semibold">Metric</th>
                      <th className="py-3 px-4 text-left text-charcoal font-semibold">Low</th>
                      <th className="py-3 px-4 text-left text-charcoal font-semibold">Average</th>
                      <th className="py-3 px-4 text-left text-charcoal font-semibold">High</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-charcoal font-medium">Open Rate</td>
                      <td className="py-3 px-4 text-charcoal/80">15%</td>
                      <td className="py-3 px-4 text-charcoal/80">20%</td>
                      <td className="py-3 px-4 text-charcoal/80">25%+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-charcoal font-medium">Click-Through Rate</td>
                      <td className="py-3 px-4 text-charcoal/80">2%</td>
                      <td className="py-3 px-4 text-charcoal/80">3.5%</td>
                      <td className="py-3 px-4 text-charcoal/80">5%+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-charcoal font-medium">Conversion Rate</td>
                      <td className="py-3 px-4 text-charcoal/80">1%</td>
                      <td className="py-3 px-4 text-charcoal/80">2%</td>
                      <td className="py-3 px-4 text-charcoal/80">3%+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-charcoal font-medium">ROI</td>
                      <td className="py-3 px-4 text-charcoal/80">1000%</td>
                      <td className="py-3 px-4 text-charcoal/80">4200%</td>
                      <td className="py-3 px-4 text-charcoal/80">7000%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-goldAccent/20 border-l-4 border-goldAccent p-4 rounded mt-6">
                <p className="text-charcoal font-medium">
                  Remember that these benchmarks can vary based on your specific niche, product price points, 
                  and target audience. Use them as guidelines rather than strict targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
