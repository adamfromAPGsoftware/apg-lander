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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Section with subtle background */}
      <section className="bg-gradient-section">
        <TargetAudience />
      </section>
      
      <HowItWorks />
      
      {/* Section with alternate background */}
      <section className="bg-section-alt">
        <AISystem />
      </section>
      
      <AIAgents />
      
      {/* Section with subtle gradient */}
      <section className="bg-gradient-section">
        <ValueProposition />
      </section>
      
      <LiveAppPreview />
      
      {/* Section with alternate background */}
      <section className="bg-section-alt">
        <SocialProof />
      </section>
      
      <WhyDifferent />
      
      {/* Section with subtle gradient */}
      <section className="bg-gradient-section">
        <ProcessSteps />
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
