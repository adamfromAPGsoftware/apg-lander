import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { About3 } from '@/components/ui/about-3';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <About3
        title="We Help Service Businesses Escape the SaaS Trap"
        description="Service businesses with 10-100 employees are bleeding $3K-10K/month on disconnected tools—and locked out of AI because their data is scattered everywhere. We build unified, AI-ready platforms in 90 days that you own forever."
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
            name: "Erickson Guinto",
            role: "Tech Lead",
            image: "/team/erickson_guinto.jpeg"
          },
          {
            name: "Roko Serdar",
            role: "Head of Growth",
            image: "/team/Roko_Serdar.jpeg"
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
        mainVideo={{
          youtubeId: "IyrSfHizvWc",
          title: "Adam Goodyer presentation",
          description: "Watch our founder interview with an audience of over 40,000 on YouTube",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop&crop=center",
          alt: "Modern software development",
        }}
        upworkCard={{
          profileImage: "/team/adam.png",
          name: "Adam G.",
          location: "Sydney, Australia",
          jobSuccess: "100% Job Success",
          expertVetted: true,
          totalEarnings: "$80K+",
          totalJobs: "60+",
          totalHours: "1,250+",
          profileUrl: "https://www.upwork.com/freelancers/adamgoodyer?mp_source=share",
        }}
        youtubeCard={{
          channelName: "@adamfreelances",
          channelUrl: "https://www.youtube.com/@adamfreelances",
          totalViews: "100,000+",
          communityMembers: "300+",
          profileImage: "/team/adam.png",
        }}
        companiesTitle=""
        companies={[]}
        achievementsTitle="Our Track Record"
        achievementsDescription="We've helped 50+ service businesses escape the SaaS trap—saving an average of 91% on software costs while unlocking AI capabilities they couldn't access before."
        achievements={[
          { label: "Projects Delivered", value: "50+" },
          { label: "Years in Operation", value: "6+" },
          { label: "Client Satisfaction", value: "100%" }
        ]}
        foundingJourneyTitle="Our Founding Journey"
        foundingJourneyDescription={`APG Software was founded with one mission: to help service businesses escape the SaaS trap.

After delivering 100+ projects, I kept seeing the same pattern: businesses with 10-100 employees stuck paying $3K-10K/month for 10-20 tools that don't talk to each other. They're locked out of the AI transformation because their data is scattered across disconnected apps.

Enterprise companies can afford million-dollar custom solutions. Startups can bootstrap with free tools. But the mid-market? They're stuck renting software that forces them into 80% workflows and workarounds.

We fix that. In 90 days, we build you a single, AI-ready platform that replaces your entire stack—and you own it forever. No per-user fees. No vendor lock-in. Just a system built to evolve with your business.

Our clients typically save 91% on software costs and 25+ hours/week in admin overhead. One landscaping company went from Excel chaos to $1M+ revenue growth in 6 months.

That's the APG difference: we don't just build software—we unlock your ability to scale.`}
      />

      <Footer />
    </div>
  );
};

export default About; 