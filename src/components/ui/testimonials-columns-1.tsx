"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating?: number;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}

export const TestimonialsColumn = ({
  testimonials,
  duration = 15,
  className,
}: TestimonialsColumnProps) => {
  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-muted-foreground'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className={cn("", className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, name, role, rating }, i) => (
                <div
                  className="p-6 rounded-2xl border shadow-sm bg-card text-card-foreground max-w-xs w-full"
                  key={i}
                >
                  {rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(Math.round(rating))}
                      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
                    </div>
                  )}
                  <p className="text-foreground/80 text-sm mb-4">{text}</p>
                  <div className="flex flex-col">
                    <div className="font-medium text-sm text-foreground">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
}; 