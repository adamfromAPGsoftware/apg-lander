import React, { useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import TrustPilotIcon from '@/components/ui/TrustPilotIcon';
import ReactPlayer from 'react-player';

const SocialProof = () => {
  const videoTestimonials = [
    {
      author: "Loren",
      company: "Founder at LyricsWhiz",
      quote: "They have been exceptional with their understanding of AI and that's been vital for this projects success",
      fullQuote: "I want to give a big shoutout to APG Software Solutions for being a standout development process. They been exceptional with their understand of Bubble and AI and that's been vital for this projects success. Communication has been top notch and their approach has made everything feel effortless",
      videoUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Loren%20Schiller%20Lyrics%20Whiz.mp4",
      posterUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/loren_thumbnail.png"
    },
    {
      author: "Dan", 
      company: "Founder at AEON",
      quote: "Honestly one of the best agencies I've ever worked with and I would highly recommend them if you're looking for an A+ software partner",
      fullQuote: "I wanted to say a big thanks to the team at APG Software Solutions who have been a fantastic development partner. They communicate really well and have a really sound understanding of Bubble which has been crucial to our success. Honestly one of the best agencies I've ever worked with and I would highly recommend them if you're looking for an A+ software partner",
      videoUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Dan%20Benyamin%20(AEON).mp4",
      posterUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/dan_thumbnail.png"
    },
    {
      author: "Tom",
      company: "CEO at T5 Football", 
      quote: "Their level of expertise, communication and the detail they go into was above and beyond what I was expected.",
      fullQuote: "Their level of expertise, communication and the detail they go into was above and beyond what I was expected. I've worked with many software agencies before and they haven't really delivered what these guys delivered in such a short amount of time",
      videoUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Thomas%20Fay%20(T5%20Football).MP4",
      posterUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/tom_thumbnail.png"
    }
  ];

  // Function to render stars
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-muted-foreground'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const VideoTestimonial = ({ testimonial, index }: { testimonial: any, index: number }) => {
    const playerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isReady, setIsReady] = React.useState(false);

    const handlePlayPause = () => {
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };

    return (
      <div 
        className="bg-card p-6 rounded-xl border border-border animate-fade-in relative"
        style={{ animationDelay: `${200 + (index * 100)}ms` }}
      >
        {/* Video Container - ReactPlayer handles everything! */}
        <div className="relative mb-4 rounded-lg overflow-hidden aspect-[3/4]">
          <ReactPlayer
            ref={playerRef}
            url={testimonial.videoUrl}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={true}
            light={testimonial.posterUrl}
            preloadDelay={1000}
            playIcon={
              <div className="bg-brand-green bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 hover:scale-110 transition-all">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </div>
            }
            onReady={() => setIsReady(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={(error) => console.error('ReactPlayer error:', error)}
            config={{
              file: {
                attributes: {
                  playsInline: true,
                  preload: 'auto'
                }
              }
            }}
          />
        </div>
        
        {/* Quote with better text contrast */}
        <div className="mb-4">
          <span className="bg-brand-green bg-opacity-20 text-gray-800 px-2 py-1 rounded text-sm font-medium">
            "{testimonial.quote}"
          </span>
        </div>
        
        {/* Author */}
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="social-proof" className="py-16 md:py-24 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Fast-Moving Teams</h2>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center mb-12 animate-fade-in animation-delay-200 gap-4 sm:gap-0">
        <div className="flex items-center">
          <div className="flex items-center">
            {renderStars(5)}
          </div>
          <p className="ml-2 text-xl font-bold">5/5</p>
          <span className="mx-2 text-muted-foreground">|</span>
          <p className="text-muted-foreground">50+ reviews</p>
        </div>
        
        {/* Platform Logos */}
        <div className="flex items-center sm:ml-4 gap-4">
          <a 
            href="https://www.upwork.com/freelancers/adamfromapg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/2021-upwork-new-logo-design.png" 
              alt="Upwork" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </a>
          <a 
            href="https://au.trustpilot.com/review/apgsoftware.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <TrustPilotIcon className="h-5 sm:h-6 w-auto" />
          </a>
        </div>
      </div>
      
      {/* Video Testimonials */}
      <div className="grid md:grid-cols-3 gap-6">
        {videoTestimonials.map((testimonial, index) => (
          <VideoTestimonial 
            key={index} 
            testimonial={testimonial} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
