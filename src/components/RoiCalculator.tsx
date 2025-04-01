
import React, { useState, useEffect } from 'react';
import { 
  Calculator, Download, Mail, ChevronRight, 
  ChevronLeft, BadgeIndianRupee, BarChart3, 
  Percent, Users, ShoppingCart, Hash, Send
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatIndianRupee, formatPercentage, formatNumber } from '@/utils/formatters';
import { useToast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface CalculatorInputs {
  emailListSize: number;
  campaignFrequency: number;
  openRate: number;
  clickThroughRate: number;
  conversionRate: number;
  averageOrderValue: number;
  campaignCost: number;
}

interface CalculatorResults {
  numberOfEmails: number;
  emailOpens: number;
  totalClicks: number;
  conversions: number;
  revenue: number;
  cost: number;
  roi: number;
}

const initialInputs: CalculatorInputs = {
  emailListSize: 10000,
  campaignFrequency: 4, // per month
  openRate: 0.20, // 20%
  clickThroughRate: 0.15, // 15%
  conversionRate: 0.03, // 3%
  averageOrderValue: 2500, // ₹2,500
  campaignCost: 20000, // ₹20,000
};

const RoiCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  // Calculate results whenever inputs change
  useEffect(() => {
    const numberOfEmails = inputs.emailListSize * inputs.campaignFrequency;
    const emailOpens = numberOfEmails * inputs.openRate;
    const totalClicks = emailOpens * inputs.clickThroughRate;
    const conversions = totalClicks * inputs.conversionRate;
    const revenue = conversions * inputs.averageOrderValue;
    const cost = inputs.campaignCost;
    const roi = (revenue - cost) / cost;

    setResults({
      numberOfEmails,
      emailOpens,
      totalClicks,
      conversions,
      revenue,
      cost,
      roi
    });
  }, [inputs]);

  const handleInputChange = (key: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSliderChange = (key: keyof CalculatorInputs, values: number[]) => {
    setInputs((prev) => ({
      ...prev,
      [key]: values[0],
    }));
  };
  
  const generatePDF = () => {
    if (!results) return;

    // Create new document
    const doc = new jsPDF();
    
    // Add logo/header
    doc.setFillColor(36, 94, 79); // #245e4f dark green
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('Email Marketing ROI Analysis', 105, 25, { align: 'center' });
    
    // Add date
    const date = new Date().toLocaleDateString('en-IN');
    doc.setFontSize(10);
    doc.text(`Generated on: ${date}`, 105, 35, { align: 'center' });
    
    // Add inputs section
    doc.setTextColor(36, 94, 79);
    doc.setFontSize(16);
    doc.text('Campaign Inputs', 20, 50);
    
    const inputData = [
      ['Email List Size', formatNumber(inputs.emailListSize)],
      ['Monthly Campaign Frequency', inputs.campaignFrequency.toString()],
      ['Open Rate', formatPercentage(inputs.openRate)],
      ['Click-Through Rate', formatPercentage(inputs.clickThroughRate)],
      ['Conversion Rate', formatPercentage(inputs.conversionRate)],
      ['Average Order Value', formatIndianRupee(inputs.averageOrderValue)],
      ['Campaign Cost', formatIndianRupee(inputs.campaignCost)],
    ];
    
    // @ts-ignore
    doc.autoTable({
      startY: 55,
      head: [['Metric', 'Value']],
      body: inputData,
      theme: 'grid',
      headStyles: { 
        fillColor: [122, 201, 167], // #7ac9a7 mint green
        textColor: [36, 94, 79] // #245e4f dark green
      },
      styles: { halign: 'left' },
      columnStyles: { 
        0: { fontStyle: 'bold' },
        1: { halign: 'right' }
      },
    });
    
    // Add results section
    doc.setTextColor(36, 94, 79);
    doc.setFontSize(16);
    doc.text('Campaign Results', 20, doc.lastAutoTable.finalY + 20);
    
    const resultData = [
      ['Total Emails Sent', formatNumber(results.numberOfEmails)],
      ['Email Opens', formatNumber(results.emailOpens)],
      ['Total Clicks', formatNumber(results.totalClicks)],
      ['Conversions', formatNumber(results.conversions)],
      ['Revenue Generated', formatIndianRupee(results.revenue)],
      ['Campaign Cost', formatIndianRupee(results.cost)],
    ];
    
    // @ts-ignore
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 25,
      head: [['Metric', 'Value']],
      body: resultData,
      theme: 'grid',
      headStyles: { 
        fillColor: [122, 201, 167], // #7ac9a7 mint green
        textColor: [36, 94, 79] // #245e4f dark green
      },
      styles: { halign: 'left' },
      columnStyles: { 
        0: { fontStyle: 'bold' },
        1: { halign: 'right' }
      },
    });
    
    // Add ROI highlight
    doc.setFillColor(233, 196, 106); // #e9c46a gold accent
    doc.rect(20, doc.lastAutoTable.finalY + 20, 170, 40, 'F');
    
    doc.setTextColor(36, 94, 79);
    doc.setFontSize(18);
    doc.text('Return on Investment (ROI)', 105, doc.lastAutoTable.finalY + 35, { align: 'center' });
    
    doc.setFontSize(24);
    doc.text(formatPercentage(results.roi), 105, doc.lastAutoTable.finalY + 50, { align: 'center' });
    
    // Add footer with branding
    const pageCount = doc.internal.getNumberOfPages();
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text('Email ROI Insights | www.emailroiinsights.com', 105, 285, { align: 'center' });
    }
    
    // Save the PDF
    doc.save('Email_Marketing_ROI_Analysis.pdf');
    
    toast({
      title: "PDF Generated Successfully",
      description: "Your ROI analysis has been downloaded.",
    });
  };
  
  const sendEmail = async () => {
    if (!results) return;
    
    // This would normally connect to a backend service
    // For now, we'll just show a toast notification
    
    toast({
      title: "Analysis Sent Successfully",
      description: "Check your inbox for the email with your ROI analysis.",
    });
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div id="calculator" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-mintGreen/20 rounded-full mb-4">
            <Calculator className="h-6 w-6 text-darkGreen" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Email Marketing ROI Calculator</h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Calculate the return on investment for your email marketing campaigns and make data-driven decisions to maximize your e-commerce revenue.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white shadow-lg border-mintGreen/20">
            <CardHeader className="bg-darkGreen text-creamWhite rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <BadgeIndianRupee className="mr-2 h-6 w-6" />
                E-Commerce Email ROI Calculator
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-6">
              <Tabs defaultValue="calculator" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="calculator">Calculator</TabsTrigger>
                  <TabsTrigger value="results">Results & Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="calculator">
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="emailListSize" className="text-lg font-medium">Email List Size</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="emailListSize"
                            type="number"
                            value={inputs.emailListSize}
                            onChange={(e) => handleInputChange('emailListSize', Number(e.target.value))}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">subscribers</span>
                        </div>
                        <Slider
                          value={[inputs.emailListSize]}
                          min={1000}
                          max={100000}
                          step={1000}
                          onValueChange={(values) => handleSliderChange('emailListSize', values)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>1,000</span>
                          <span>100,000</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Send className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="campaignFrequency" className="text-lg font-medium">Campaign Frequency (per month)</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="campaignFrequency"
                            type="number"
                            value={inputs.campaignFrequency}
                            onChange={(e) => handleInputChange('campaignFrequency', Number(e.target.value))}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">emails/mo</span>
                        </div>
                        <Slider
                          value={[inputs.campaignFrequency]}
                          min={1}
                          max={20}
                          step={1}
                          onValueChange={(values) => handleSliderChange('campaignFrequency', values)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>1</span>
                          <span>20</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Mail className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="openRate" className="text-lg font-medium">Open Rate</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="openRate"
                            type="number"
                            value={Math.round(inputs.openRate * 100)}
                            onChange={(e) => handleInputChange('openRate', Number(e.target.value) / 100)}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">%</span>
                        </div>
                        <Slider
                          value={[inputs.openRate * 100]}
                          min={1}
                          max={50}
                          step={1}
                          onValueChange={(values) => handleSliderChange('openRate', values[0] / 100)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>1%</span>
                          <span>50%</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <Percent className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="clickThroughRate" className="text-lg font-medium">Click-Through Rate (of opens)</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="clickThroughRate"
                            type="number"
                            value={Math.round(inputs.clickThroughRate * 100)}
                            onChange={(e) => handleInputChange('clickThroughRate', Number(e.target.value) / 100)}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">%</span>
                        </div>
                        <Slider
                          value={[inputs.clickThroughRate * 100]}
                          min={1}
                          max={40}
                          step={1}
                          onValueChange={(values) => handleSliderChange('clickThroughRate', values[0] / 100)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>1%</span>
                          <span>40%</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <div className="flex items-center mb-2">
                          <ShoppingCart className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="conversionRate" className="text-lg font-medium">Conversion Rate (of clicks)</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="conversionRate"
                            type="number"
                            value={Math.round(inputs.conversionRate * 100)}
                            onChange={(e) => handleInputChange('conversionRate', Number(e.target.value) / 100)}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">%</span>
                        </div>
                        <Slider
                          value={[inputs.conversionRate * 100]}
                          min={0.1}
                          max={20}
                          step={0.1}
                          onValueChange={(values) => handleSliderChange('conversionRate', values[0] / 100)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>0.1%</span>
                          <span>20%</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <BadgeIndianRupee className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="averageOrderValue" className="text-lg font-medium">Average Order Value (₹)</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="averageOrderValue"
                            type="number"
                            value={inputs.averageOrderValue}
                            onChange={(e) => handleInputChange('averageOrderValue', Number(e.target.value))}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">₹</span>
                        </div>
                        <Slider
                          value={[inputs.averageOrderValue]}
                          min={500}
                          max={10000}
                          step={100}
                          onValueChange={(values) => handleSliderChange('averageOrderValue', values)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>₹500</span>
                          <span>₹10,000</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <BadgeIndianRupee className="h-5 w-5 text-darkGreen mr-2" />
                          <Label htmlFor="campaignCost" className="text-lg font-medium">Monthly Campaign Cost (₹)</Label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Input
                            id="campaignCost"
                            type="number"
                            value={inputs.campaignCost}
                            onChange={(e) => handleInputChange('campaignCost', Number(e.target.value))}
                            className="flex-1"
                          />
                          <span className="text-sm text-charcoal/70 w-16">₹</span>
                        </div>
                        <Slider
                          value={[inputs.campaignCost]}
                          min={5000}
                          max={100000}
                          step={1000}
                          onValueChange={(values) => handleSliderChange('campaignCost', values)}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-xs text-charcoal/60 mt-1">
                          <span>₹5,000</span>
                          <span>₹100,000</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 ? (
                      <Button onClick={prevStep} variant="outline" className="flex items-center">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Previous
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {currentStep < 2 ? (
                      <Button onClick={nextStep} className="bg-darkGreen hover:bg-darkGreen/90 flex items-center">
                        Next
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="results">
                  {results && (
                    <div className="animate-fade-in">
                      <div className="bg-mintGreen/10 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-darkGreen">Monthly Campaign Results</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white p-4 rounded-lg shadow border border-mintGreen/20">
                            <div className="text-darkGreen/70 mb-1 text-sm">Email Campaigns</div>
                            <div className="text-2xl font-bold text-darkGreen">{inputs.campaignFrequency}</div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow border border-mintGreen/20">
                            <div className="text-darkGreen/70 mb-1 text-sm">Total Emails Sent</div>
                            <div className="text-2xl font-bold text-darkGreen">{formatNumber(results.numberOfEmails)}</div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow border border-mintGreen/20">
                            <div className="text-darkGreen/70 mb-1 text-sm">Email Opens</div>
                            <div className="text-2xl font-bold text-darkGreen">{formatNumber(results.emailOpens)}</div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow border border-mintGreen/20">
                            <div className="text-darkGreen/70 mb-1 text-sm">Total Clicks</div>
                            <div className="text-2xl font-bold text-darkGreen">{formatNumber(results.totalClicks)}</div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow border border-mintGreen/20">
                            <div className="text-darkGreen/70 mb-1 text-sm">Conversions</div>
                            <div className="text-2xl font-bold text-darkGreen">{formatNumber(results.conversions)}</div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg shadow border border-mintGreen/20">
                            <div className="text-darkGreen/70 mb-1 text-sm">Revenue Generated</div>
                            <div className="text-2xl font-bold text-darkGreen">{formatIndianRupee(results.revenue)}</div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="bg-goldAccent/20 border border-goldAccent/30 rounded-lg p-4">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                              <div>
                                <div className="text-darkGreen/70 mb-1 text-sm">Return on Investment (ROI)</div>
                                <div className="text-3xl font-bold text-darkGreen flex items-center">
                                  {formatPercentage(results.roi)}
                                  {results.roi > 0 ? (
                                    <span className="ml-2 text-emerald-500 text-sm font-normal">Positive ROI</span>
                                  ) : (
                                    <span className="ml-2 text-red-500 text-sm font-normal">Negative ROI</span>
                                  )}
                                </div>
                              </div>
                              
                              <div className="mt-4 sm:mt-0">
                                <div className="text-darkGreen/70 mb-1 text-sm">Net Profit/Loss</div>
                                <div className="text-2xl font-bold text-darkGreen">
                                  {formatIndianRupee(results.revenue - results.cost)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-darkGreen flex items-center">
                          <BarChart3 className="mr-2 h-5 w-5" />
                          Sales Funnel
                        </h3>
                        
                        <div className="bg-white p-6 rounded-lg shadow border border-mintGreen/20">
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-charcoal/70">Email List Size</span>
                                <span className="text-sm font-medium">{formatNumber(inputs.emailListSize)}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-darkGreen h-2 rounded-full" style={{ width: '100%' }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-charcoal/70">Emails Sent</span>
                                <span className="text-sm font-medium">{formatNumber(results.numberOfEmails)}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-darkGreen h-2 rounded-full" style={{ width: '100%' }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-charcoal/70">Email Opens</span>
                                <span className="text-sm font-medium">{formatNumber(results.emailOpens)} ({formatPercentage(inputs.openRate)})</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-darkGreen h-2 rounded-full" style={{ width: `${inputs.openRate * 100}%` }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-charcoal/70">Clicks</span>
                                <span className="text-sm font-medium">{formatNumber(results.totalClicks)} ({formatPercentage(inputs.clickThroughRate)} of opens)</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-mintGreen h-2 rounded-full" style={{ width: `${inputs.openRate * inputs.clickThroughRate * 100}%` }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-charcoal/70">Conversions</span>
                                <span className="text-sm font-medium">{formatNumber(results.conversions)} ({formatPercentage(inputs.conversionRate)} of clicks)</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-goldAccent h-2 rounded-full" style={{ width: `${inputs.openRate * inputs.clickThroughRate * inputs.conversionRate * 100}%` }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button 
                          onClick={generatePDF}
                          className="flex-1 bg-darkGreen hover:bg-darkGreen/90 flex items-center justify-center"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download PDF Report
                        </Button>
                        
                        <Button 
                          onClick={sendEmail}
                          className="flex-1 bg-goldAccent hover:bg-goldAccent/90 text-charcoal flex items-center justify-center"
                        >
                          <Mail className="mr-2 h-5 w-5" />
                          Email Results
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="bg-gray-50 p-4 text-sm text-charcoal/70 rounded-b-lg">
              <p>
                Enter your campaign details to calculate the expected return on your email marketing investment. 
                Adjust the parameters to see how different factors affect your ROI.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;
