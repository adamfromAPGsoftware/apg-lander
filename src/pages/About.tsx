import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { About3 } from '@/components/ui/about-3';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <About3
        title="About APG Software"
        description="We're a passionate team dedicated to creating custom AI-powered software solutions that help businesses replace expensive SaaS subscriptions and streamline their operations in just 2 weeks."
        teamMembers={[
          {
            name: "Adam Goodyer",
            role: "Founder",
            image: "/LG Profile White BG.png",
            bio: "Full-stack developer with 6+ years of experience building custom software solutions and AI-powered applications for startups and SMEs."
          },
          {
            name: "Patrick Goodyer",
            role: "Co-Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            bio: "Strategic business leader focused on client relationships and business development, ensuring APG Software delivers exceptional value."
          },
          {
            name: "Jephtah Okezie",
            role: "Developer/Designer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
            bio: "Versatile developer and designer who bridges the gap between functionality and aesthetics, creating beautiful and functional applications."
          },
          {
            name: "Asher Tucker",
            role: "Developer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            bio: "Skilled developer specializing in modern web technologies and ensuring robust, scalable solutions for our clients."
          },
          {
            name: "Reginaldo \"Aldo\" Ahnaf",
            role: "Designer",
            image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
            bio: "Creative designer focused on user experience and visual design, bringing innovative design solutions to every project."
          },
          {
            name: "Skandar Lalabouali",
            role: "Graphic Designer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            bio: "Graphic design specialist creating compelling visual identities and marketing materials that resonate with target audiences."
          },
          {
            name: "Eslam Sleme",
            role: "Developer",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
            bio: "Experienced developer with expertise in backend systems and database architecture, ensuring solid technical foundations."
          }
        ]}
        mainImage={{
          src: "/Adam giving keynote speech.webp",
          alt: "Adam Goodyer giving keynote speech",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop&crop=center",
          alt: "Modern software development",
        }}
        upworkCard={{
          profileImage: "/LG Profile White BG.png",
          name: "Adam G.",
          location: "Sydney, Australia • 1:49 PM local time",
          jobSuccess: "100% Job Success",
          expertVetted: true,
          totalEarnings: "$80K+",
          totalJobs: "54",
          totalHours: "1,051",
          profileUrl: "https://www.upwork.com/freelancers/adamfromapg",
        }}
        youtubeCard={{
          channelName: "@adamfreelances",
          channelUrl: "https://www.youtube.com/@adamfreelances",
          totalViews: "50,000+",
          communityMembers: "250+",
          profileImage: "/LG Profile White BG.png",
        }}
        companiesTitle=""
        companies={[]}
        achievementsTitle="Our Track Record"
        achievementsDescription="With over a decade of combined experience, we've helped startups and SMEs streamline operations using modern technology and AI-powered solutions."
        achievements={[
          { label: "Projects Delivered", value: "50+" },
          { label: "Years in Operation", value: "6+" },
          { label: "Client Satisfaction", value: "100%" },
          { label: "Average Delivery", value: "14 days" },
        ]}
        foundingJourneyTitle="Our Founding Journey"
        foundingJourneyDescription={`APG Software Solutions was founded by Adam Goodyer with a simple but powerful mission: to make transformative technology radically more accessible.

After nearly a decade as a top-rated freelancer and delivering over 100 successful projects, I saw the same challenges play out time and again—software projects stalling, budgets ballooning, and founders left with tools that didn't truly meet their needs.

I knew there had to be a better way.

So I built APG: an agency designed to blend lean development practices, low-code technology, and AI integration to deliver smarter, faster, and more human-centric software solutions.

Fast forward to today, and our mission has only grown stronger. We're helping businesses break free from the high costs and limitations of SaaS subscriptions—and take back control with custom-built systems designed to evolve with them.

We do this through two distinct arms:

Our agency, which builds powerful AI-ready platforms for clients.

Our educational platform, which empowers builders to create these systems themselves.

Together, we're not just building software—we're building a movement.`}
      />

      <Footer />
    </div>
  );
};

export default About; 