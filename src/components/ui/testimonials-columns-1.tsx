"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
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
              {testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl border shadow-sm bg-card text-card-foreground max-w-xs w-full"
                  key={i}
                >
                  <p className="text-foreground/80 text-sm">{text}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="font-medium text-sm text-foreground">{name}</div>
                      <div className="text-xs text-muted-foreground">{role}</div>
                    </div>
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