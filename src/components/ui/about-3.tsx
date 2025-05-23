import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  teamTitle?: string;
  teamDescription?: string;
  teamMembers?: Array<{
    name: string;
    role: string;
    image: string;
    bio?: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  foundingJourneyTitle?: string;
  foundingJourneyDescription?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  upworkCard?: {
    profileImage: string;
    name: string;
    location: string;
    jobSuccess: string;
    expertVetted: boolean;
    totalEarnings: string;
    totalJobs: string;
    totalHours: string;
    profileUrl: string;
  };
  upworkDescription?: string;
  youtubeCard?: {
    channelName: string;
    channelUrl: string;
    totalViews: string;
    communityMembers: string;
    profileImage: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  teamTitle,
  teamDescription,
  teamMembers = [],
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
  foundingJourneyTitle = "Our Founding Journey",
  foundingJourneyDescription,
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  upworkCard,
  upworkDescription,
  youtubeCard,
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
}: About3Props = {}) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Team Section */}
        {teamMembers.length > 0 && (
          <div className="mb-20">
            {teamTitle && (
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-semibold mb-4">{teamTitle}</h2>
                {teamDescription && (
                  <p className="text-muted-foreground max-w-2xl mx-auto">{teamDescription}</p>
                )}
              </div>
            )}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member, idx) => (
                <div key={member.name + idx} className="text-center">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-brand-green font-medium mb-2">{member.role}</p>
                  {member.bio && (
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16 mt-20">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>

        {foundingJourneyTitle && (
          <div className="mb-14 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold">{foundingJourneyTitle}</h2>
            </div>
            {foundingJourneyDescription && (
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Main Story */}
                  <div className="space-y-6">
                    <div className="text-lg leading-relaxed text-muted-foreground">
                      <p className="mb-4">
                        <span className="font-semibold text-foreground">APG Software was founded by Adam Goodyer</span> with a simple but powerful mission: to make transformative technology radically more accessible.
                      </p>
                      <p className="mb-4">
                        After nearly a decade as a top-rated freelancer and delivering over 100 successful projects, I saw the same challenges play out time and again—software projects stalling, budgets ballooning, and founders left with tools that didn't truly meet their needs.
                      </p>
                      <p className="mb-4 font-medium text-foreground italic">
                        I knew there had to be a better way.
                      </p>
                      <p>
                        So I built APG: an agency designed to blend lean development practices, low-code technology, and AI integration to deliver smarter, faster, and more human-centric software solutions.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column - Mission & Arms */}
                  <div className="space-y-6">
                    <div className="text-lg leading-relaxed text-muted-foreground">
                      <p className="mb-6">
                        Fast forward to today, and our mission has only grown stronger. <span className="font-semibold text-foreground">We're helping businesses break free from the high costs and limitations of SaaS subscriptions</span>—and take back control with custom-built systems designed to evolve with them.
                      </p>
                      
                      <div className="bg-muted/50 rounded-lg p-6">
                        <h3 className="font-semibold text-foreground mb-4">We do this through two distinct arms:</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-green mt-3 flex-shrink-0"></div>
                            <p>Our <span className="font-medium text-foreground">agency</span>, which builds powerful AI-ready platforms for clients.</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-green mt-3 flex-shrink-0"></div>
                            <p>Our <span className="font-medium text-foreground">educational platform</span>, which empowers builders to create these systems themselves.</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-center font-semibold text-foreground text-xl mt-6">
                        Together, we're not just building software—we're building a movement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {upworkCard ? (
              <div className="md:w-1/2 lg:w-auto">
                {upworkDescription && (
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {upworkDescription}
                  </p>
                )}
                {/* Custom Upwork Profile Card */}
                <div className="flex flex-col gap-6 rounded-xl bg-white p-6 border border-gray-200 shadow-lg">
                  {/* Profile Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-brand-green p-1">
                        <img
                          src={upworkCard.profileImage}
                          alt={upworkCard.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-green rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-black">{upworkCard.name}</h3>
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600">{upworkCard.location}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-black">{upworkCard.jobSuccess}</span>
                    </div>
                    
                    {upworkCard.expertVetted && (
                      <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-black">Expert-Vetted</span>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{upworkCard.totalJobs}</div>
                      <div className="text-sm text-gray-600">Total jobs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{upworkCard.totalHours}</div>
                      <div className="text-sm text-gray-600">Total hours</div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href={upworkCard.profileUrl} target="_blank">
                      View Upwork Profile
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              // Original breakout section
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
                <img
                  src={breakout.src}
                  alt={breakout.alt}
                  className="mr-auto h-12"
                />
                <div>
                  <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                  <p className="text-muted-foreground">{breakout.description}</p>
                </div>
                <Button variant="outline" className="mr-auto" asChild>
                  <a href={breakout.buttonUrl} target="_blank">
                    {breakout.buttonText}
                  </a>
                </Button>
              </div>
            )}
            {youtubeCard ? (
              // YouTube Channel Card
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 border border-gray-200 shadow-lg md:w-1/2 lg:w-auto">
                {/* YouTube Header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={youtubeCard.profileImage}
                      alt={youtubeCard.channelName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black">{youtubeCard.channelName}</h3>
                    <div className="flex items-center gap-1">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="text-sm text-gray-600">YouTube</span>
                    </div>
                  </div>
                </div>

                {/* YouTube Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-xl font-bold text-black">{youtubeCard.totalViews}</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-xl font-bold text-black">{youtubeCard.communityMembers}</div>
                    <div className="text-sm text-gray-600">AI Community Members</div>
                  </div>
                </div>

                {/* Visit Channel Button */}
                <Button variant="outline" className="w-full" asChild>
                  <a href={youtubeCard.channelUrl} target="_blank">
                    Visit YouTube Channel
                  </a>
                </Button>
              </div>
            ) : (
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              />
            )}
          </div>
        </div>
        {companiesTitle && companies.length > 0 && (
          <div className="py-32">
            <p className="text-center">{companiesTitle} </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {companies.map((company, idx) => (
                <div className="flex items-center gap-3" key={company.src + idx}>
                  <img
                    src={company.src}
                    alt={company.alt}
                    className="h-6 w-auto md:h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; 