"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Folder, HeartHandshakeIcon, SparklesIcon, Database,
  Users, Briefcase, CheckSquare, FileText, UserPlus, Receipt, ArrowLeftRight, Truck, Clock, BarChart, FileSignature, MessageCircle, Megaphone, Building
} from "lucide-react";
import { cn } from "@/lib/utils";
import Xarrow from "react-xarrows";

interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  badges: string[];
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  circleText,
  badges,
  buttonTexts,
  title,
  lightColor,
}: DatabaseWithRestApiProps) => {
  // Layout constants for dynamic badges
  const badgeWidth = 34;
  const badgeHeight = 10;
  const badgeSpacing = 8;
  const startX = 14;
  const y = 5;
  const svgWidth = startX * 2 + badges.length * badgeWidth + (badges.length - 1) * badgeSpacing;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center w-full",
        className
      )}
    >
      {/* Grouped content container */}
      <div className="w-full flex flex-col items-center">
        {/* Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-0 mb-8 w-full px-4 place-items-center">
          {badges.map((badge, i) => {
            // Map badge names to Lucide icons
            const badgeIconMap: Record<string, React.ReactNode> = {
              clients: <Users className="w-6 h-6" />,
              projects: <Briefcase className="w-6 h-6" />,
              tasks: <CheckSquare className="w-6 h-6" />,
              invoicing: <FileText className="w-6 h-6" />,
              leads: <UserPlus className="w-6 h-6" />,
              bills: <Receipt className="w-6 h-6" />,
              transactions: <ArrowLeftRight className="w-6 h-6" />,
              suppliers: <Truck className="w-6 h-6" />,
              timesheets: <Clock className="w-6 h-6" />,
              reports: <BarChart className="w-6 h-6" />,
              proposals: <FileSignature className="w-6 h-6" />,
              "scope docs": <FileText className="w-6 h-6" />,
              messages: <MessageCircle className="w-6 h-6" />,
              announcements: <Megaphone className="w-6 h-6" />,
              companies: <Building className="w-6 h-6" />,
            };
            // Use icon if found, else fallback to DatabaseIcon
            const icon = badgeIconMap[badge.toLowerCase()] || (
              <span className="w-6 h-6 flex items-center justify-center">
                <DatabaseIcon x="0" y="0" />
              </span>
            );
            return (
              <div
                key={badge + i}
                id={`badge-xarrow-${i}`}
                className="relative flex flex-col items-center min-h-[36px] justify-center font-semibold shadow-sm bg-[#18181B] border border-gray-800 rounded-lg text-base text-white px-4 py-2 w-full"
                style={{ zIndex: 2 }}
              >
                <span className="flex items-center gap-2">
                  {icon}
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
        {/* Xarrows connecting each badge to the main box */}
        {badges.map((_, i) => (
          <Xarrow
            key={i}
            start="main-box-title-xarrow"
            end={`badge-xarrow-${i}`}
            color="#90F23C"
            strokeWidth={1}
            showHead={false}
            dashness={false}
            zIndex={1}
            startAnchor="top"
            endAnchor="bottom"
          />
        ))}
        {/* Main Box */}
        <div
          id="main-box-xarrow"
          className="mt-10 flex w-full max-w-[600px] flex-col items-center"
          data-lov-id="src/components/ui/database-with-rest-api.tsx:139:8"
        >
          {/* Box Title inside Main Box (static) */}
          <div id="main-box-title-xarrow" className="z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 mb-2 mt-2">
            <SparklesIcon className="size-3" />
            <span className="ml-2 text-[10px]">
              {title ? title : "Data exchange using a customized REST API"}
            </span>
          </div>
          {/* bottom shadow */}
          <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
          {/* box outter circle */}
          <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-[#141516] font-semibold text-xs">
            {circleText ? circleText : "SVG"}
          </div>
          {/* box content */}
          <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
            {/* Badges */}
            <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 ">
              <HeartHandshakeIcon className="size-4" />
              <span>{buttonTexts?.first || "LegionDev"}</span>
            </div>
            <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-[#101112] px-3 text-xs sm:flex border items-center gap-2">
              <Folder className="size-4" />
              <span>{buttonTexts?.second || "v2_updates"}</span>
            </div>
            {/* Circles */}
            <motion.div
              className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t bg-accent/5"
              animate={{
                scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t bg-accent/5"
              animate={{
                scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t bg-accent/5"
              animate={{
                scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t bg-accent/5"
              animate={{
                scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseWithRestApi;

const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};
