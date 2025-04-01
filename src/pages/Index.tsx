
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import RoiCalculator from '@/components/RoiCalculator';
import Explanation from '@/components/Explanation';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-creamWhite">
      <Navbar />
      <Hero />
      <Benefits />
      <RoiCalculator />
      <Explanation />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
