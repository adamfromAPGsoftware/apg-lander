import React, { useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import TrustPilotIcon from '@/components/ui/TrustPilotIcon';

const SocialProof = () => {
  const videoTestimonials = [
    {
      author: "Loren",
      company: "Founder at LyricsWhiz",
      quote: "They have been exceptional with their understanding of AI and that's been vital for this projects success",
      fullQuote: "I want to give a big shoutout to APG Software Solutions for being a standout development process. They been exceptional with their understand of Bubble and AI and that's been vital for this projects success. Communication has been top notch and their approach has made everything feel effortless",
      videoUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Loren%20Schiller%20Lyrics%20Whiz.mp4"
    },
    {
      author: "Dan", 
      company: "Founder at AEON",
      quote: "Honestly one of the best agencies I've ever worked with and I would highly recommend them if you're looking for an A+ software partner",
      fullQuote: "I wanted to say a big thanks to the team at APG Software Solutions who have been a fantastic development partner. They communicate really well and have a really sound understanding of Bubble which has been crucial to our success. Honestly one of the best agencies I've ever worked with and I would highly recommend them if you're looking for an A+ software partner",
      videoUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Dan%20Benyamin%20(AEON).mp4"
    },
    {
      author: "Tom",
      company: "CEO at T5 Football", 
      quote: "Their level of expertise, communication and the detail they go into was above and beyond what I was expected.",
      fullQuote: "Their level of expertise, communication and the detail they go into was above and beyond what I was expected. I've worked with many software agencies before and they haven't really delivered what these guys delivered in such a short amount of time",
      videoUrl: "https://pub-80dc93d36e40439985eb519b51227185.r2.dev/Thomas%20Fay%20(T5%20Football).MP4"
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
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handleVideoClick = () => {
      togglePlay();
    };

    return (
      <div 
        className="bg-card p-6 rounded-xl border border-border animate-fade-in relative"
        style={{ animationDelay: `${200 + (index * 100)}ms` }}
      >
        {/* Video Container with Play Button - Taller aspect ratio */}
        <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-200 aspect-[3/4]">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer" 
            preload="metadata"
            onClick={handleVideoClick}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={testimonial.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play/Pause Button Overlay */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <div className="bg-brand-green bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 hover:scale-110 transition-all">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          )}

          {/* Video Controls - Simple pause overlay when playing */}
          {isPlaying && (
            <div 
              className="absolute inset-0 bg-transparent cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
              onClick={togglePlay}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-black bg-opacity-50 rounded-full p-2">
                  <Pause className="w-4 h-4 text-white" fill="currentColor" />
                </div>
              </div>
            </div>
          )}
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
      
      <div className="flex items-center justify-center mb-12 animate-fade-in animation-delay-200">
        <div className="flex items-center">
          {renderStars(5)}
        </div>
        <p className="ml-2 text-xl font-bold">4.9/5</p>
        <span className="mx-2 text-muted-foreground">|</span>
        <p className="text-muted-foreground">50+ reviews</p>
        
        {/* Platform Logos */}
        <div className="flex items-center ml-4 gap-3">
          <a 
            href="https://www.upwork.com/freelancers/adamfromapg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/2021-upwork-new-logo-design.png" alt="Upwork" className="w-20 h-12 mt-1" />
          </a>
          <a 
            href="https://www.trustpilot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <TrustPilotIcon className="w-20 h-6" />
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
