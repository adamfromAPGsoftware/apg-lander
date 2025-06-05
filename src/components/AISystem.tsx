import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Brain, 
  FileText, 
  Receipt, 
  BarChart3, 
  CreditCard, 
  CheckSquare, 
  MessageCircle,
  Kanban,
  DollarSign,
  FileEdit,
  Instagram,
  Twitter,
  Music,
  Zap,
  Database
} from 'lucide-react';

interface PillData {
  id: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  glowColor: string;
}

interface AssistantData {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  position: { x: number; y: number };
  action: string;
}

interface AnimationState {
  activePills: string[];
  brainActive: boolean;
  assistantsActive: string[];
  crmGlow: boolean;
  beamTargets: string[];
}

interface ControlsProps {
  isPlaying: boolean;
  speed: number;
  reducedMotion: boolean;
  onPlayPause: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  onMotionToggle: (reduced: boolean) => void;
}

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  speed,
  reducedMotion,
  onPlayPause,
  onReset,
  onSpeedChange,
  onMotionToggle
}) => (
  <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-gray-200 shadow-sm">
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={onPlayPause}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-gray-300 hover:bg-gray-50"
          aria-label={isPlaying ? "Pause animation" : "Play animation"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-gray-300 hover:bg-gray-50"
          aria-label="Reset animation"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>
      
      <div className="flex items-center gap-2 min-w-[200px]">
        <span className="text-sm text-gray-600">Speed:</span>
        <Slider
          value={[speed]}
          onValueChange={(value) => onSpeedChange(value[0])}
          min={0.5}
          max={3}
          step={0.1}
          className="flex-1"
          aria-label="Animation speed"
        />
        <span className="text-sm text-gray-600 w-8">{speed.toFixed(1)}x</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Switch
          checked={reducedMotion}
          onCheckedChange={onMotionToggle}
          aria-label="Reduce motion"
        />
        <span className="text-sm text-gray-600">Reduce Motion</span>
      </div>
    </div>
  </Card>
);

interface PillProps {
  pill: PillData;
  isActive: boolean;
  reducedMotion: boolean;
  speed: number;
}

const Pill: React.FC<PillProps> = ({ pill, isActive, reducedMotion, speed }) => (
  <div
    className={`
      relative inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
      transition-all duration-300 cursor-pointer select-none
      ${isActive ? 'scale-110 shadow-lg' : 'hover:scale-105'}
      ${reducedMotion ? '' : 'animate-pulse'}
    `}
    style={{
      backgroundColor: pill.color,
      color: 'white',
      boxShadow: isActive ? `0 0 20px ${pill.glowColor}40` : 'none',
      animationDuration: `${2 / speed}s`
    }}
    role="button"
    tabIndex={0}
    aria-label={`${pill.label} data pill`}
  >
    {pill.icon}
    <span>{pill.label}</span>
    {isActive && !reducedMotion && (
      <div
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: pill.glowColor }}
      />
    )}
  </div>
);

interface FlowingPillProps {
  pill: PillData;
  progress: number;
  reducedMotion: boolean;
  pathStart: { x: number; y: number };
  pathEnd: { x: number; y: number };
}

const FlowingPill: React.FC<FlowingPillProps> = ({ pill, progress, reducedMotion, pathStart, pathEnd }) => {
  // Create an arc path instead of straight line
  const getArcPosition = (progress: number) => {
    // Arc height - positive for downward arc (goes underneath agents)
    const arcHeight = 120; // Positive for downward arc
    
    // Linear interpolation for X
    const x = pathStart.x + (pathEnd.x - pathStart.x) * progress;
    
    // Quadratic curve for Y (creates the arc)
    const baseY = pathStart.y + (pathEnd.y - pathStart.y) * progress;
    const arcOffset = arcHeight * 4 * progress * (1 - progress); // Parabolic arc
    const y = baseY + arcOffset;
    
    return { x, y };
  };

  const position = getArcPosition(progress);
  
  return (
    <div
      className="absolute z-10 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: progress > 0.9 ? 1 - (progress - 0.9) * 10 : 1
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium shadow-lg"
        style={{
          backgroundColor: pill.color,
          color: 'white',
          boxShadow: reducedMotion ? '0 4px 12px rgba(0,0,0,0.15)' : `0 0 15px ${pill.glowColor}40, 0 4px 12px rgba(0,0,0,0.15)`
        }}
      >
        {pill.icon}
        <span>{pill.label}</span>
      </div>
    </div>
  );
};

interface AssistantCardProps {
  assistant: AssistantData;
  isActive: boolean;
  reducedMotion: boolean;
  speed: number;
}

const AssistantCard: React.FC<AssistantCardProps> = ({ assistant, isActive, reducedMotion, speed }) => {
  const [actionActive, setActionActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setActionActive(true);
      const timer = setTimeout(() => setActionActive(false), 2000 / speed);
      return () => clearTimeout(timer);
    }
  }, [isActive, speed]);

  const renderAction = () => {
    if (!actionActive) return null;

    switch (assistant.id) {
      case 'task':
        return (
          <div className="flex gap-1 mt-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded bg-blue-500 transition-transform duration-500 ${
                  reducedMotion ? '' : 'animate-bounce'
                }`}
                style={{ animationDelay: `${i * 100}ms`, animationDuration: `${1 / speed}s` }}
              />
            ))}
          </div>
        );
      case 'finance':
        return (
          <div className="mt-2 flex items-center gap-1">
            <DollarSign className={`w-5 h-5 text-green-500 ${reducedMotion ? '' : 'animate-spin'}`} 
              style={{ animationDuration: `${1 / speed}s` }} />
            <span className="text-green-500 font-bold">+$1,234</span>
          </div>
        );
      case 'proposal':
        return (
          <div className="mt-2">
            <FileEdit className={`w-5 h-5 text-purple-500 ${reducedMotion ? '' : 'animate-pulse'}`}
              style={{ animationDuration: `${0.5 / speed}s` }} />
          </div>
        );
      case 'social':
        return (
          <div className="flex gap-1 mt-2">
            <Instagram className={`w-4 h-4 text-pink-500 ${reducedMotion ? '' : 'animate-bounce'}`}
              style={{ animationDuration: `${0.6 / speed}s` }} />
            <Twitter className={`w-4 h-4 text-blue-400 ${reducedMotion ? '' : 'animate-bounce'}`}
              style={{ animationDelay: '0.2s', animationDuration: `${0.6 / speed}s` }} />
            <Music className={`w-4 h-4 text-red-500 ${reducedMotion ? '' : 'animate-bounce'}`}
              style={{ animationDelay: '0.4s', animationDuration: `${0.6 / speed}s` }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      className={`
        p-4 transition-all duration-300 relative overflow-hidden bg-white
        ${isActive ? 'shadow-xl border-blue-300' : 'border-gray-200 shadow-sm'}
      `}
      style={{
        backgroundColor: isActive ? `${assistant.color}08` : 'white',
        boxShadow: isActive && !reducedMotion ? `0 0 20px ${assistant.color}20, 0 8px 32px rgba(0,0,0,0.1)` : undefined
      }}
      role="region"
      aria-label={`${assistant.name} status`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-lg transition-all duration-300 ${
            isActive ? 'scale-110' : ''
          }`}
          style={{ backgroundColor: `${assistant.color}15` }}
        >
          {assistant.icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{assistant.name}</h3>
          {isActive && (
            <p className="text-sm text-gray-600">{assistant.action}</p>
          )}
        </div>
      </div>
      {renderAction()}
      {isActive && !reducedMotion && (
        <div
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            background: `linear-gradient(45deg, transparent, ${assistant.color}, transparent)`,
            animationDuration: `${1 / speed}s`
          }}
        />
      )}
    </Card>
  );
};

interface AIBrainProps {
  isActive: boolean;
  reducedMotion: boolean;
  speed: number;
}

const AIBrain: React.FC<AIBrainProps> = ({ isActive, reducedMotion, speed }) => (
  <div className="relative flex flex-col items-center justify-center">
    <div
      className={`
        relative p-10 rounded-full transition-all duration-500
        ${isActive ? 'scale-110' : 'scale-100'}
      `}
      style={{
        background: isActive 
          ? 'radial-gradient(circle, #8b5cf6, #6366f1, #3b82f6)'
          : 'radial-gradient(circle, #9ca3af, #6b7280, #4b5563)',
        boxShadow: isActive && !reducedMotion 
          ? '0 0 40px #8b5cf650, 0 0 80px #6366f130, 0 8px 32px rgba(0,0,0,0.2)' 
          : '0 8px 32px rgba(0,0,0,0.1)'
      }}
      role="img"
      aria-label="AI Brain processing data"
    >
      <Brain 
        className={`w-16 h-16 text-white ${
          isActive && !reducedMotion ? 'animate-pulse' : ''
        }`}
        style={{ animationDuration: `${1 / speed}s` }}
      />
      
      {isActive && !reducedMotion && (
        <>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 / speed}s`
              }}
            />
          ))}
          
          {/* Orbiting particles positioned relative to the brain circle */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-60px)`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1.5 / speed}s`
              }}
            />
          ))}
        </>
      )}
    </div>
    
    {/* AI Knowledge Label */}
    <div className="mt-4 text-center">
      <h3 className="text-lg font-bold text-gray-900">AI Knowledge</h3>
      <p className="text-sm text-gray-600">Processing Hub</p>
    </div>
  </div>
);

interface EnergyBeamProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isActive: boolean;
  reducedMotion: boolean;
  speed: number;
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({ from, to, isActive, reducedMotion, speed }) => {
  if (!isActive || reducedMotion) return null;

  const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  const angle = Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;

  return (
    <>
      <style>{`
        @keyframes beam-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }
      `}</style>
      <div
        className="absolute pointer-events-none z-20"
        style={{
          left: from.x,
          top: from.y,
          width: length,
          height: '2px',
          background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, transparent)',
          transform: `rotate(${angle}deg)`,
          transformOrigin: '0 50%',
          animation: `beam-pulse ${2 / speed}s ease-in-out infinite`
        }}
      />
    </>
  );
};

const AIWorkflowVisualization: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>({
    activePills: [],
    brainActive: false,
    assistantsActive: [],
    crmGlow: false,
    beamTargets: []
  });
  const [flowingPills, setFlowingPills] = useState<Array<{ pill: PillData; progress: number; id: string }>>([]);
  
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<number>(0);
  
  // Refs for dynamic positioning
  const crmRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  const assistantRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flowPathRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const pills: PillData[] = [
    { id: 'documents', label: 'Documents', color: '#3b82f6', icon: <FileText className="w-4 h-4" />, glowColor: '#3b82f6' },
    { id: 'invoices', label: 'Invoices', color: '#10b981', icon: <Receipt className="w-4 h-4" />, glowColor: '#10b981' },
    { id: 'reports', label: 'Reports', color: '#f59e0b', icon: <BarChart3 className="w-4 h-4" />, glowColor: '#f59e0b' },
    { id: 'transactions', label: 'Transactions', color: '#ef4444', icon: <CreditCard className="w-4 h-4" />, glowColor: '#ef4444' },
    { id: 'tasks', label: 'Tasks', color: '#8b5cf6', icon: <CheckSquare className="w-4 h-4" />, glowColor: '#8b5cf6' },
    { id: 'communications', label: 'Communications', color: '#06b6d4', icon: <MessageCircle className="w-4 h-4" />, glowColor: '#06b6d4' }
  ];

  const assistants: AssistantData[] = [
    { id: 'task', name: 'Task Assistant', icon: <Kanban className="w-5 h-5" />, color: '#3b82f6', position: { x: 200, y: 100 }, action: 'Managing workflows' },
    { id: 'finance', name: 'Finance Assistant', icon: <DollarSign className="w-5 h-5" />, color: '#10b981', position: { x: 200, y: 200 }, action: 'Processing transactions' },
    { id: 'proposal', name: 'Proposal Assistant', icon: <FileEdit className="w-5 h-5" />, color: '#8b5cf6', position: { x: 200, y: 300 }, action: 'Creating documents' },
    { id: 'social', name: 'Social Assistant', icon: <Instagram className="w-5 h-5" />, color: '#ec4899', position: { x: 200, y: 400 }, action: 'Managing social media' }
  ];

  // Function to get element position relative to container
  const getElementPosition = (element: HTMLElement | null, container: HTMLElement | null) => {
    if (!element || !container) return { x: 0, y: 0, width: 0, height: 0 };
    
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    return {
      x: elementRect.left - containerRect.left,
      y: elementRect.top - containerRect.top,
      width: elementRect.width,
      height: elementRect.height
    };
  };

  // Function to calculate connection points between two elements
  const getConnectionPoints = (fromElement: HTMLElement | null, toElement: HTMLElement | null) => {
    if (!fromElement || !toElement || !containerRef.current) {
      return { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } };
    }

    const fromPos = getElementPosition(fromElement, containerRef.current);
    const toPos = getElementPosition(toElement, containerRef.current);

    // Calculate connection points (center-right of from, center-left of to)
    const from = {
      x: fromPos.x + fromPos.width,
      y: fromPos.y + fromPos.height / 2
    };

    const to = {
      x: toPos.x,
      y: toPos.y + toPos.height / 2
    };

    return { from, to };
  };

  // Function to calculate beam connection points from AI Knowledge to agents
  const getBeamConnectionPoints = (brainElement: HTMLElement | null, agentElement: HTMLElement | null) => {
    if (!brainElement || !agentElement || !containerRef.current) {
      return { from: { x: 0, y: 0 }, to: { x: 0, y: 0 } };
    }

    const brainPos = getElementPosition(brainElement, containerRef.current);
    const agentPos = getElementPosition(agentElement, containerRef.current);

    // Connect from left side center of the brain circle (not the entire container)
    // Brain circle: p-10 (40px) + w-16 (64px) + p-10 (40px) = 144px diameter
    // So center is at 72px from top of the brain container
    const brainCircleCenter = 72; // 40px padding + 32px (half of 64px icon)
    const from = {
      x: brainPos.x,
      y: brainPos.y + brainCircleCenter
    };

    const to = {
      x: agentPos.x + agentPos.width,
      y: agentPos.y + agentPos.height / 2
    };

    return { from, to };
  };

  // Function to get flow path coordinates
  const getFlowPath = () => {
    if (!crmRef.current || !brainRef.current || !containerRef.current) {
      return { start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, length: 0 };
    }

    const crmPos = getElementPosition(crmRef.current, containerRef.current);
    const brainPos = getElementPosition(brainRef.current, containerRef.current);

    // Connect from bottom center of CRM to bottom center of AI brain
    const start = {
      x: crmPos.x + crmPos.width / 2,
      y: crmPos.y + crmPos.height
    };

    const end = {
      x: brainPos.x + brainPos.width / 2,
      y: brainPos.y + brainPos.height
    };

    const length = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));

    return { start, end, length };
  };

  const runAnimationCycle = () => {
    const cycleDuration = 8000 / speed;
    const steps = [
      // Send each pill type with staggered timing
      { time: 0, action: () => setAnimationState(prev => ({ ...prev, activePills: [pills[0].id] })) },
      { time: 300, action: () => {
        const pill = pills[0];
        setFlowingPills(prev => [...prev, { pill, progress: 0, id: `${pill.id}-${Date.now()}` }]);
      }},
      { time: 600, action: () => setAnimationState(prev => ({ ...prev, activePills: [pills[1].id] })) },
      { time: 900, action: () => {
        const pill = pills[1];
        setFlowingPills(prev => [...prev, { pill, progress: 0, id: `${pill.id}-${Date.now()}` }]);
      }},
      { time: 1200, action: () => setAnimationState(prev => ({ ...prev, activePills: [pills[2].id] })) },
      { time: 1500, action: () => {
        const pill = pills[2];
        setFlowingPills(prev => [...prev, { pill, progress: 0, id: `${pill.id}-${Date.now()}` }]);
      }},
      { time: 1800, action: () => setAnimationState(prev => ({ ...prev, activePills: [pills[3].id] })) },
      { time: 2100, action: () => {
        const pill = pills[3];
        setFlowingPills(prev => [...prev, { pill, progress: 0, id: `${pill.id}-${Date.now()}` }]);
      }},
      { time: 2400, action: () => setAnimationState(prev => ({ ...prev, activePills: [pills[4].id] })) },
      { time: 2700, action: () => {
        const pill = pills[4];
        setFlowingPills(prev => [...prev, { pill, progress: 0, id: `${pill.id}-${Date.now()}` }]);
      }},
      { time: 3000, action: () => setAnimationState(prev => ({ ...prev, activePills: [pills[5].id] })) },
      { time: 3300, action: () => {
        const pill = pills[5];
        setFlowingPills(prev => [...prev, { pill, progress: 0, id: `${pill.id}-${Date.now()}` }]);
      }},
      { time: 3600, action: () => setAnimationState(prev => ({ ...prev, brainActive: true })) },
      { time: 4000, action: () => setAnimationState(prev => ({ ...prev, beamTargets: ['task', 'finance'] })) },
      { time: 4300, action: () => setAnimationState(prev => ({ ...prev, assistantsActive: ['task', 'finance'] })) },
      { time: 5500, action: () => setAnimationState(prev => ({ ...prev, beamTargets: ['proposal', 'social'] })) },
      { time: 5800, action: () => setAnimationState(prev => ({ ...prev, assistantsActive: ['proposal', 'social'] })) },
      { time: 6800, action: () => setAnimationState(prev => ({ ...prev, crmGlow: true })) },
      { time: 7500, action: () => setAnimationState({
        activePills: [],
        brainActive: false,
        assistantsActive: [],
        crmGlow: false,
        beamTargets: []
      })}
    ];

    steps.forEach(step => {
      setTimeout(step.action, step.time / speed);
    });
  };

  useEffect(() => {
    if (isPlaying) {
      runAnimationCycle();
      intervalRef.current = setInterval(runAnimationCycle, 8000 / speed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, speed]);

  useEffect(() => {
    const animateFlowingPills = () => {
      setFlowingPills(prev => 
        prev.map(item => ({
          ...item,
          progress: Math.min(item.progress + 0.008 * speed, 1)
        })).filter(item => item.progress < 1)
      );
      
      if (isPlaying) {
        animationRef.current = requestAnimationFrame(animateFlowingPills);
      }
    };

    if (isPlaying && !reducedMotion) {
      animationRef.current = requestAnimationFrame(animateFlowingPills);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, speed, reducedMotion]);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleReset = () => {
    setIsPlaying(false);
    setAnimationState({
      activePills: [],
      brainActive: false,
      assistantsActive: [],
      crmGlow: false,
      beamTargets: []
    });
    setFlowingPills([]);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <section id="ai-system" className="py-16 md:py-24 pb-28 md:pb-36 max-width">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Train AI on your Founder's Brain, Not the Intern</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          An AI System is essential to build accurate AI Agents. We did our best to visualise how this works.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto p-6">
        <Controls
          isPlaying={isPlaying}
          speed={speed}
          reducedMotion={reducedMotion}
          onPlayPause={handlePlayPause}
          onReset={handleReset}
          onSpeedChange={setSpeed}
          onMotionToggle={setReducedMotion}
        />

        <div className="relative min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 overflow-hidden shadow-sm" ref={containerRef}>
          {/* CRM Section - Left Column */}
          <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 z-10" ref={crmRef}>
            <Card
              className={`p-6 transition-all duration-500 bg-white ${
                animationState.crmGlow ? 'shadow-xl border-blue-300' : 'border-gray-200 shadow-sm'
              }`}
              style={{
                backgroundColor: animationState.crmGlow ? '#eff6ff' : 'white',
                boxShadow: animationState.crmGlow && !reducedMotion ? '0 0 30px #3b82f630, 0 8px 32px rgba(0,0,0,0.1)' : undefined
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Your CRM</h2>
              </div>
              <div className="flex flex-col space-y-3">
                {pills.map((pill) => (
                  <Pill
                    key={pill.id}
                    pill={pill}
                    isActive={animationState.activePills.includes(pill.id)}
                    reducedMotion={reducedMotion}
                    speed={speed}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Flow Path - dynamically positioned between CRM and Brain */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-5" ref={flowPathRef}>
            <svg className="w-full h-full">
              {(() => {
                const { start, end } = getFlowPath();
                const arcHeight = 120; // Positive for downward arc (same as FlowingPill)
                const midX = (start.x + end.x) / 2;
                const midY = (start.y + end.y) / 2 + arcHeight;
                
                return (
                  <path
                    d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                    stroke={isPlaying ? '#8b5cf6' : '#d1d5db'}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.7"
                    className={!reducedMotion ? 'animate-pulse' : ''}
                    style={{ animationDuration: `${2 / speed}s` }}
                  />
                );
              })()}
            </svg>
            {flowingPills.map((item) => (
              <FlowingPill
                key={item.id}
                pill={item.pill}
                progress={item.progress}
                reducedMotion={reducedMotion}
                pathStart={getFlowPath().start}
                pathEnd={getFlowPath().end}
              />
            ))}
          </div>

          {/* AI Assistants - Center Column */}
          <div className="absolute left-1/2 top-16 transform -translate-x-1/2 space-y-4 z-10">
            {assistants.map((assistant, index) => (
              <div key={assistant.id} ref={el => (assistantRefs.current[index] = el)}>
                <AssistantCard
                  assistant={assistant}
                  isActive={animationState.assistantsActive.includes(assistant.id)}
                  reducedMotion={reducedMotion}
                  speed={speed}
                />
              </div>
            ))}
          </div>

          {/* AI Brain - Right Column */}
          <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 z-10" ref={brainRef}>
            <AIBrain
              isActive={animationState.brainActive}
              reducedMotion={reducedMotion}
              speed={speed}
            />
          </div>

          {/* Energy Beams */}
          {animationState.beamTargets.map((targetId, index) => {
            const assistantIndex = assistants.findIndex(a => a.id === targetId);
            const assistantElement = assistantRefs.current[assistantIndex];
            
            if (!assistantElement || !brainRef.current) return null;
            
            const { from, to } = getBeamConnectionPoints(brainRef.current, assistantElement);
            
            return (
              <EnergyBeam
                key={`${targetId}-${index}`}
                from={from}
                to={to}
                isActive={true}
                reducedMotion={reducedMotion}
                speed={speed}
              />
            );
          })}

          {/* Status Indicators */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <Badge variant={isPlaying ? "default" : "secondary"}>
              {isPlaying ? "Running" : "Paused"}
            </Badge>
            <Badge variant="outline">Speed: {speed}x</Badge>
            {reducedMotion && <Badge variant="outline">Reduced Motion</Badge>}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            This visualization demonstrates how data flows from your CRM through AI assistants,
            gets processed by the AI brain, and returns as intelligent actions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowVisualization;
