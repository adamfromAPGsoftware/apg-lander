"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="w-full min-h-screen flex items-start justify-center relative p-0 mb-16 md:mb-24"
      ref={containerRef}
    >
      <div
        className="py-0 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000003a, 0 25px 25px #00000032, 0 45px 35px #00000020, 0 70px 40px #0000000f, 0 100px 45px #00000005",
      }}
      className="w-full md:max-w-5xl mt-4 md:-mt-12 mx-0 md:mx-auto min-h-[95rem] md:min-h-[70rem] h-auto border-4 border-border p-4 md:p-10 bg-card rounded-[30px] shadow-2xl"
    >
      <div className="w-full h-auto overflow-visible rounded-[20px]">
        {children}
      </div>
    </motion.div>
  );
}; 