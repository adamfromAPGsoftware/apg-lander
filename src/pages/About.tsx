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
        description="We're a passionate team dedicated to creating custom AI-powered software solutions that help businesses replace expensive SaaS subscriptions and streamline their operations in 90 days or less."
        teamMembers={[
          {
            name: "Adam Goodyer",
            role: "Founder",
            image: "/team/adam.png"
          },
          {
            name: "Patrick Goodyer",
            role: "Co-Founder",
            image: "/team/Patrick.avif"
          },
          {
            name: "Rohit Verma",
            role: "CTO",
            image: "/team/rohit.png"
          },
          {
            name: "Jephtah Okezie",
            role: "Developer/Designer",
            image: "/team/Jephtah.avif"
          },
          {
            name: "Asher Tucker",
            role: "Developer",
            image: "/team/Asher Tucker.avif"
          },
          {
            name: "Reginaldo \"Aldo\" Ahnaf",
            role: "Designer",
            image: "/team/Reginaldo \"Aldo\".avif"
          },
          {
            name: "Skandar Lalabouali",
            role: "Graphic Designer",
            image: "/team/Skandar.avif"
          },
          {
            name: "Eslam Sleme",
            role: "Developer",
            image: "/team/Eslam.png"
          }
        ]}
        mainImage={{
          src: "/Adam Speech Presentation.webp",
          alt: "Adam Goodyer speaking at presentation",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop&crop=center",
          alt: "Modern software development",
        }}
        upworkCard={{
          profileImage: "/team/adam.png",
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
          profileImage: "/team/adam.png",
        }}
        companiesTitle=""
        companies={[]}
        achievementsTitle="Our Track Record"
        achievementsDescription="With over a decade of combined experience, we've helped startups and SMEs streamline operations using modern technology and AI-powered solutions."
        achievements={[
          { label: "Projects Delivered", value: "50+" },
          { label: "Years in Operation", value: "6+" },
          { label: "Client Satisfaction", value: "100%" }
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