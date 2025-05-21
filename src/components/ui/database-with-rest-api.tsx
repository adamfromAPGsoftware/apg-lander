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
  const [agentToMainBoxLines, setAgentToMainBoxLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  const crmCircleRef = useRef<HTMLDivElement | null>(null);
  const badgesRowRef = useRef<HTMLDivElement | null>(null);
  const [dataPath, setDataPath] = useState<string>("");
  const [dataLabelPos, setDataLabelPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Pulse animation for Data path
  const dataPulseRef = useRef<SVGCircleElement | null>(null);
  useEffect(() => {
    if (!dataPath || !dataPulseRef.current) return;
    const path = document.querySelector('path[d="' + dataPath + '"]') as SVGPathElement;
    if (!path || !('getTotalLength' in path)) return;
    let frame: number;
    const len = path.getTotalLength();
    const animate = () => {
      const t = ((performance.now() / 3000) % 1);
      const pt = path.getPointAtLength(t * len);
      dataPulseRef.current!.setAttribute('cx', pt.x.toString());
      dataPulseRef.current!.setAttribute('cy', pt.y.toString());
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [dataPath]);

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
    // Calculate lines from agents to main box
    if (!mainBoxRef.current) return;
    const mainBoxRect = mainBoxRef.current.getBoundingClientRect();
    const mainBoxTopCenter = {
      x: mainBoxRect.left + mainBoxRect.width / 2 - containerRect.left,
      y: mainBoxRect.top - containerRect.top,
    };
    const newAgentToMainBoxLines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    agentRefs.current.forEach((agent, i) => {
      if (agent) {
        const agentRect = agent.getBoundingClientRect();
        const agentCenter = {
          x: agentRect.left + agentRect.width / 2 - containerRect.left,
          y: agentRect.top + agentRect.height / 2 - containerRect.top,
        };
        newAgentToMainBoxLines.push({
          x1: agentCenter.x,
          y1: agentCenter.y,
          x2: mainBoxTopCenter.x,
          y2: mainBoxTopCenter.y,
        });
      }
    });
    setAgentToMainBoxLines(newAgentToMainBoxLines);
  }, [aiAgents.length]);

  useEffect(() => {
    // Data segmented path calculation (straight lines)
    if (!crmCircleRef.current || !badgesRowRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const crmRect = crmCircleRef.current.getBoundingClientRect();
    const badgesRect = badgesRowRef.current.getBoundingClientRect();
    const start = {
      x: crmRect.left + crmRect.width / 2 - containerRect.left,
      y: crmRect.top + crmRect.height - containerRect.top,
    };
    const end = {
      x: badgesRect.left + badgesRect.width / 2 - containerRect.left,
      y: badgesRect.top - containerRect.top,
    };
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    // 1. Down from CRM
    const downY = start.y + 40;
    // 2. Left to edge
    const leftX = 0; // flush with left edge
    // 3. Up above container
    const upY = Math.max(0, badgesRect.top - containerRect.top - 60); // go even higher
    // 4. In to center above badges
    const centerX = end.x;
    // 5. Down to badges
    const path = `M ${start.x},${start.y} L ${start.x},${downY} L ${leftX},${downY} L ${leftX},${upY} L ${centerX},${upY} L ${centerX},${end.y}`;
    setDataPath(path);
    // Label at the top horizontal segment
    setDataLabelPos({ x: (leftX + centerX) / 2, y: upY });
  }, [badges, aiAgents.length]);

  // Refs for node pulses
  const nodePulseRefs = useRef<(SVGCircleElement | null)[]>([]);
  const agentPulseRefs = useRef<(SVGCircleElement | null)[]>([]);
  const agentToMainPulseRefs = useRef<(SVGCircleElement | null)[]>([]);

  // Animate node pulses to always track the line
  useEffect(() => {
    let frames: number[] = [];
    nodePulseRefs.current.forEach((el, i) => {
      if (!el || !lines[i]) return;
      const animate = () => {
        const t = ((performance.now() / 3000 + i * 0.2) % 1);
        const { x1, y1, x2, y2 } = lines[i];
        const cx = x1 + (x2 - x1) * t;
        const cy = y1 + (y2 - y1) * t;
        el.setAttribute('cx', cx.toString());
        el.setAttribute('cy', cy.toString());
        frames[i] = requestAnimationFrame(animate);
      };
      animate();
    });
    return () => frames.forEach(f => cancelAnimationFrame(f));
  }, [lines]);

  useEffect(() => {
    let frames: number[] = [];
    agentPulseRefs.current.forEach((el, i) => {
      if (!el || !agentLines[i]) return;
      const animate = () => {
        const t = ((performance.now() / 3000 + i * 0.2) % 1);
        const { x1, y1, x2, y2 } = agentLines[i];
        const cx = x1 + (x2 - x1) * t;
        const cy = y1 + (y2 - y1) * t;
        el.setAttribute('cx', cx.toString());
        el.setAttribute('cy', cy.toString());
        frames[i] = requestAnimationFrame(animate);
      };
      animate();
    });
    return () => frames.forEach(f => cancelAnimationFrame(f));
  }, [agentLines]);

  useEffect(() => {
    let frames: number[] = [];
    agentToMainPulseRefs.current.forEach((el, i) => {
      if (!el || !agentToMainBoxLines[i]) return;
      const animate = () => {
        const t = ((performance.now() / 3000 + i * 0.2) % 1);
        const { x1, y1, x2, y2 } = agentToMainBoxLines[i];
        const cx = x1 + (x2 - x1) * t;
        const cy = y1 + (y2 - y1) * t;
        el.setAttribute('cx', cx.toString());
        el.setAttribute('cy', cy.toString());
        frames[i] = requestAnimationFrame(animate);
      };
      animate();
    });
    return () => frames.forEach(f => cancelAnimationFrame(f));
  }, [agentToMainBoxLines]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center w-full pt-20",
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
              ref={el => (nodePulseRefs.current[i] = el)}
              r={5}
              fill="#90F23C"
              style={{ filter: "drop-shadow(0 0 8px #90F23C)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 1, 0.7, 0],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
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
              ref={el => (agentPulseRefs.current[i] = el)}
              r={5}
              fill="#90F23C"
              style={{ filter: "drop-shadow(0 0 8px #90F23C)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 1, 0.7, 0],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          </React.Fragment>
        ))}
        {/* AI Agent to Main Box lines */}
        {agentToMainBoxLines.map((line, i) => (
          <React.Fragment key={"agent-to-main-" + i}>
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
              ref={el => (agentToMainPulseRefs.current[i] = el)}
              r={5}
              fill="#90F23C"
              style={{ filter: "drop-shadow(0 0 8px #90F23C)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 1, 0.7, 0],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          </React.Fragment>
        ))}
        {/* Data arc path and pulse */}
        {dataPath && (
          <>
            <motion.path
              d={dataPath}
              stroke="#90F23C"
              strokeWidth={2}
              fill="none"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
              style={{ opacity: 0.5 }}
            />
            {/* Pulse animation along path (improved) */}
            <motion.circle
              ref={dataPulseRef}
              r={7}
              fill="#90F23C"
              style={{ filter: "drop-shadow(0 0 12px #90F23C)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 1, 0.7, 0],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Data label at midpoint */}
            <text
              x={dataLabelPos.x}
              y={dataLabelPos.y - 8}
              textAnchor="middle"
              fill="#90F23C"
              fontSize="1.1rem"
              fontWeight="bold"
              style={{ filter: "drop-shadow(0 0 6px #90F23C)" }}
            >
              Data
            </text>
          </>
        )}
      </svg>
      {/* Grouped content container */}
      <div className="w-full flex flex-col items-center relative z-20">
        {/* Badges Row */}
        <div
          ref={badgesRowRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-0 mb-8 w-full px-4 place-items-center"
        >
          {badges.filter(badge => ![
            "Timesheets",
            "Reports",
            "Proposals",
            "Scope Docs",
            "Messages",
            "Announcements",
            "Companies"
          ].includes(badge)).map((badge, i) => {
            // Map badge names to Lucide icons
            const badgeIconMap: Record<string, React.ReactNode> = {
              clients: <Users className="w-6 h-6" />,
              projects: <Briefcase className="w-6 h-6" />,
              tasks: <CheckSquare className="w-6 h-6" />,
              invoicing: <FileText className="w-6 h-6" />,
              leads: <UserPlus className="w-6 h-6" />,
              bills: <Receipt className="w-6 h-6" />,
              transactions: <ArrowLeftRight className="w-6 h-6" />,
              suppliers: <Truck className="w-6 h-6" />
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
          className="z-20 flex items-center justify-center rounded-lg border-2 border-white bg-white px-8 py-4 mb-12 mt-8 shadow-lg"
          ref={titleRef}
        >
          <SparklesIcon className="w-10 h-10 mr-4 text-black" />
          <span className="text-2xl font-bold tracking-wide text-black">
            {title ? title : "AI Knowledge Base"}
          </span>
        </div>
        {/* AI Agents Section */}
        <div className="flex flex-col items-center mt-8 mb-12 w-full">
          <h3 className="text-xl font-bold mb-4 text-white">AI Agents</h3>
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
          className="mt-20 flex w-full max-w-[600px] flex-col items-center"
        >
          {/* bottom shadow */}
          <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
          {/* box outer circle - larger, pulsing border */}
          <motion.div
            className="absolute -bottom-16 z-30 grid h-[110px] w-[110px] place-items-center rounded-full font-semibold text-lg bg-[#141516]"
            style={{ border: '2px solid #90F23C', boxShadow: '0 0 0 0 #90F23C' }}
            animate={{
              boxShadow: [
                '0 0 0 0 #90F23C',
                '0 0 16px 4px #90F23C88',
                '0 0 0 0 #90F23C'
              ],
              borderColor: [
                '#90F23C',
                '#90F23C',
                '#90F23C'
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            ref={crmCircleRef}
          >
            {circleText ? circleText : "CRM"}
          </motion.div>
          {/* box content */}
          <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
            {/* New Badges Row */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-wrap gap-3 justify-center">
              <div className="h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2">
                <HeartHandshakeIcon className="size-4" />
                <span>Project Management</span>
              </div>
              <div className="h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2">
                <Folder className="size-4" />
                <span>Payroll</span>
              </div>
              <div className="h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2">
                <BarChart className="size-4" />
                <span>Reporting</span>
              </div>
              <div className="h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2">
                <MessageCircle className="size-4" />
                <span>Communications</span>
              </div>
              <div className="h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2">
                <FileText className="size-4" />
                <span>Dashboard</span>
              </div>
              <div className="h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2">
                <Briefcase className="size-4" />
                <span>Content Management</span>
              </div>
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
