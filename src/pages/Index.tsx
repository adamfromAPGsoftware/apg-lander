import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ROICalculator from '@/components/ROICalculator';
import LiveAppPreview from '@/components/LiveAppPreview';
import ValueProposition from '@/components/ValueProposition';
import SocialProof from '@/components/SocialProof';
import AISystem from '@/components/AISystem';
import TargetAudience from '@/components/TargetAudience';
import HowItWorks from '@/components/HowItWorks';
import WhyDifferent from '@/components/WhyDifferent';
import AIAgents from '@/components/AIAgents';
import ProcessSteps from '@/components/ProcessSteps';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TargetAudience />
      <HowItWorks />
      <AISystem />
      <AIAgents />
      <ValueProposition />
      <LiveAppPreview />
      <SocialProof />
      <WhyDifferent />
      <ProcessSteps />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
