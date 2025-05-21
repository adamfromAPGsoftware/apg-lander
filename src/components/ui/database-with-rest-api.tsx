"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Folder, HeartHandshakeIcon, SparklesIcon, Database,
  Users, Briefcase, CheckSquare, FileText, UserPlus, Receipt, ArrowLeftRight, Truck, Clock, BarChart, FileSignature, MessageCircle, Megaphone, Building
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  // Refs for badges and main box
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mainBoxRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  // AI Agents badges
  const aiAgents = [
    { label: "AI Task Agent" },
    { label: "AI Social Media Agent" },
    { label: "AI Proposal Agent" },
    { label: "AI Finance Agent" },
  ];
  const agentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [agentLines, setAgentLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  useEffect(() => {
    // Calculate positions after render
    const newLines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    if (!containerRef.current || !mainBoxRef.current || !titleRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const titleTopCenter = {
      x: titleRect.left + titleRect.width / 2 - containerRect.left,
      y: titleRect.top - containerRect.top,
    };
    badgeRefs.current.forEach((badge, i) => {
      if (badge) {
        const badgeRect = badge.getBoundingClientRect();
        const badgeCenter = {
          x: badgeRect.left + badgeRect.width / 2 - containerRect.left,
          y: badgeRect.top + badgeRect.height / 2 - containerRect.top,
        };
        newLines.push({
          x1: badgeCenter.x,
          y1: badgeCenter.y,
          x2: titleTopCenter.x,
          y2: titleTopCenter.y,
        });
      }
    });
    setLines(newLines);
  }, [badges]);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const titleBottomCenter = {
      x: titleRect.left + titleRect.width / 2 - containerRect.left,
      y: titleRect.bottom - containerRect.top,
    };
    const newAgentLines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    agentRefs.current.forEach((agent, i) => {
      if (agent) {
        const agentRect = agent.getBoundingClientRect();
        const agentCenter = {
          x: agentRect.left + agentRect.width / 2 - containerRect.left,
          y: agentRect.top + agentRect.height / 2 - containerRect.top,
        };
        newAgentLines.push({
          x1: titleBottomCenter.x,
          y1: titleBottomCenter.y,
          x2: agentCenter.x,
          y2: agentCenter.y,
        });
      }
    });
    setAgentLines(newAgentLines);
  }, [aiAgents.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center w-full",
        className
      )}
      style={{ minHeight: 420 }}
    >
      {/* SVG overlay for lines */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-10"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            <motion.line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#90F23C"
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
              style={{ opacity: 0.7 }}
            />
            {/* Data pulse animation */}
            <motion.circle
              r={5}
              fill="#90F23C"
              style={{ filter: "drop-shadow(0 0 8px #90F23C)" }}
              initial={{ opacity: 0, cx: line.x1, cy: line.y1 }}
              animate={{
                opacity: [0, 1, 0.7, 0],
                scale: [0.7, 1.1, 0.7],
                cx: [line.x1, line.x2],
                cy: [line.y1, line.y2],
              }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.08 }}
            />
          </React.Fragment>
        ))}
        {/* AI Agent lines */}
        {agentLines.map((line, i) => (
          <React.Fragment key={"agent-" + i}>
            <motion.line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#90F23C"
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
              style={{ opacity: 0.7 }}
            />
            <motion.circle
              r={5}
              fill="#90F23C"
              style={{ filter: "drop-shadow(0 0 8px #90F23C)" }}
              initial={{ opacity: 0, cx: line.x1, cy: line.y1 }}
              animate={{
                opacity: [0, 1, 0.7, 0],
                scale: [0.7, 1.1, 0.7],
                cx: [line.x1, line.x2],
                cy: [line.y1, line.y2],
              }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.08 }}
            />
          </React.Fragment>
        ))}
      </svg>
      {/* Grouped content container */}
      <div className="w-full flex flex-col items-center relative z-20">
        {/* Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-0 mb-8 w-full px-4 place-items-center">
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
                ref={el => (badgeRefs.current[i] = el)}
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
        {/* AI Knowledge Base Badge (moved above agents) */}
        <div
          id="main-box-title-xarrow"
          className="z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-4 py-2 mb-8 mt-2"
          ref={titleRef}
        >
          <SparklesIcon className="size-3" />
          <span className="ml-2 text-base font-semibold">
            {title ? title : "AI Knowledge Base"}
          </span>
        </div>
        {/* AI Agents Section */}
        <div className="flex flex-col items-center mt-2 w-full">
          <h3 className="text-xl font-bold mb-4 text-brand-green">AI Agents</h3>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {aiAgents.map((agent, i) => (
              <div
                key={agent.label}
                ref={el => (agentRefs.current[i] = el)}
                className="relative flex flex-col items-center min-h-[36px] justify-center font-semibold shadow-sm bg-[#18181B] border border-gray-800 rounded-lg text-base text-white px-6 py-3"
                style={{ zIndex: 2 }}
              >
                <span className="flex items-center gap-2">
                  {agent.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Main Box (now without title badge) */}
        <div
          id="main-box-xarrow"
          ref={mainBoxRef}
          className="mt-16 flex w-full max-w-[600px] flex-col items-center"
        >
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
