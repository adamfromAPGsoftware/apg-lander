
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ROICalculator from '@/components/ROICalculator';
import LiveAppPreview from '@/components/LiveAppPreview';
import ValueProposition from '@/components/ValueProposition';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
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
      <ROICalculator />
      <LiveAppPreview />
      <ValueProposition />
      <SocialProof />
      <Features />
      <WhyDifferent />
      <TargetAudience />
      <ProcessSteps />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
