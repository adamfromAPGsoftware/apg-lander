import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ROICalculator from '@/components/ROICalculator';
import LiveAppPreview from '@/components/LiveAppPreview';
import ValueProposition from '@/components/ValueProposition';
import SocialProof from '@/components/SocialProof';
import AISystem from '@/components/AISystem';
import WhyDifferent from '@/components/WhyDifferent';
import TargetAudience from '@/components/TargetAudience';
import ProcessSteps from '@/components/ProcessSteps';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TargetAudience />
      <AISystem />
      <ROICalculator />
      <LiveAppPreview />
      <ValueProposition />
      <SocialProof />
      <WhyDifferent />
      <ProcessSteps />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
