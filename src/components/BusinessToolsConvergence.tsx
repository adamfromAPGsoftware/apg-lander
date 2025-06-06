'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useReducedMotion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  Calendar, 
  MessageCircle, 
  Kanban, 
  FileText, 
  BarChart3, 
  Layout, 
  Calculator, 
  Bot 
} from 'lucide-react'

interface BusinessTool {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  initialPosition: { x: number; y: number }
}

interface BusinessToolsConvergenceProps {
  className?: string
  onComplete?: () => void
}

const BusinessToolsConvergence: React.FC<BusinessToolsConvergenceProps> = ({
  className = "",
  onComplete
}) => {
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'floating' | 'converging' | 'merged'>('initial')
  const containerRef = useRef<HTMLDivElement>(null)
  const centralIconControls = useAnimation()
  const shouldReduceMotion = useReducedMotion()

  const businessTools: BusinessTool[] = [
    {
      id: 'crm',
      label: 'CRM',
      icon: <Users className="w-6 h-6" />,
      color: '#10B981',
      initialPosition: { x: 0, y: -80 }
    },
    {
      id: 'payroll',
      label: 'Payroll',
      icon: <DollarSign className="w-6 h-6" />,
      color: '#3B82F6',
      initialPosition: { x: 150, y: -25 }
    },
    {
      id: 'social',
      label: 'Social Media',
      icon: <Calendar className="w-6 h-6" />,
      color: '#8B5CF6',
      initialPosition: { x: 120, y: 65 }
    },
    {
      id: 'communication',
      label: 'Communication',
      icon: <MessageCircle className="w-6 h-6" />,
      color: '#F59E0B',
      initialPosition: { x: -120, y: 65 }
    },
    {
      id: 'tasks',
      label: 'Task Boards',
      icon: <Kanban className="w-6 h-6" />,
      color: '#EF4444',
      initialPosition: { x: -150, y: -25 }
    },
    {
      id: 'invoicing',
      label: 'Invoicing',
      icon: <FileText className="w-6 h-6" />,
      color: '#06B6D4',
      initialPosition: { x: -150, y: 25 }
    },
    {
      id: 'reporting',
      label: 'Reporting',
      icon: <BarChart3 className="w-6 h-6" />,
      color: '#84CC16',
      initialPosition: { x: -120, y: -65 }
    },
    {
      id: 'dashboards',
      label: 'Dashboards',
      icon: <Layout className="w-6 h-6" />,
      color: '#F97316',
      initialPosition: { x: 120, y: -65 }
    },
    {
      id: 'estimating',
      label: 'Estimating',
      icon: <Calculator className="w-6 h-6" />,
      color: '#EC4899',
      initialPosition: { x: 150, y: 25 }
    },
    {
      id: 'ai',
      label: 'AI Agents',
      icon: <Bot className="w-6 h-6" />,
      color: '#6366F1',
      initialPosition: { x: 0, y: 80 }
    }
  ]

  useEffect(() => {
    const runAnimation = async () => {
      if (shouldReduceMotion) {
        // Skip to final state for users who prefer reduced motion
        setAnimationPhase('merged')
        centralIconControls.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0 }
        })
        onComplete?.()
        return
      }

      // Small delay before starting
      setTimeout(() => {
        // Phase 1: Float in (0-4s)
        setAnimationPhase('floating')
        
        // Phase 2: Start convergence while floating is finishing (6s into floating)
        setTimeout(() => {
          setAnimationPhase('converging')
        }, 6000)
        
        // Phase 3: Final merge (9s total)
        setTimeout(() => {
          setAnimationPhase('merged')
          centralIconControls.start({
            scale: [1, 1.2, 1],
            opacity: [0, 1, 1],
            transition: { duration: 2, ease: "easeOut" }
          })
          onComplete?.()
          // No restart - animation stays in merged state
        }, 9000)
      }, 500) // Shorter initial delay
    }

    runAnimation()
  }, [centralIconControls, onComplete, shouldReduceMotion])

  const getBubbleVariants = (tool: BusinessTool, index: number) => {
    // Expanded mobile scaling to use full width available
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const positionScale = isMobile ? 1.1 : 1.4
    
    return {
      initial: {
        x: tool.initialPosition.x * 1.5 * positionScale,
        y: tool.initialPosition.y * 1.5 * positionScale,
        scale: 0,
        opacity: 0,
      },
      floating: {
        x: tool.initialPosition.x * positionScale,
        y: tool.initialPosition.y * positionScale,
        scale: 1,
        opacity: 0.9,
        transition: {
          duration: shouldReduceMotion ? 0 : 2.5,
          delay: shouldReduceMotion ? 0 : index * 0.12,
          ease: "easeOut"
        }
      },
      converging: {
        x: [tool.initialPosition.x * positionScale, tool.initialPosition.x * 0.8 * positionScale, tool.initialPosition.x * 0.4 * positionScale, 0],
        y: [tool.initialPosition.y * positionScale, tool.initialPosition.y * 0.8 * positionScale, tool.initialPosition.y * 0.4 * positionScale, 0],
        scale: [1, 0.9, 0.6, 0.3],
        opacity: [0.9, 0.85, 0.75, 0.6],
        transition: {
          duration: shouldReduceMotion ? 0 : 3,
          delay: shouldReduceMotion ? 0 : index * 0.06,
          ease: [0.25, 0.1, 0.25, 1],
          times: [0, 0.25, 0.65, 1]
        }
      },
      merged: {
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: "easeIn"
        }
      }
    }
  }

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.3 },
    animate: {
      scale: shouldReduceMotion ? [1] : [1, 1.5, 1],
      opacity: shouldReduceMotion ? [0.3] : [0.3, 0.1, 0.3],
      transition: {
        duration: shouldReduceMotion ? 0 : 2,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white/30 overflow-hidden ${className}`}
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main animation container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Business tool bubbles */}
          {businessTools.map((tool, index) => (
            <motion.div
              key={`${tool.id}-${animationPhase}`}
              className="absolute flex flex-col items-center justify-center"
              variants={getBubbleVariants(tool, index)}
              initial="initial"
              animate={animationPhase}
            >
              {/* Bubble */}
              <motion.div
                className="relative flex items-center justify-center rounded-full shadow-xl backdrop-blur-sm border border-white/40"
                style={{
                  backgroundColor: `${tool.color}40`,
                  borderColor: `${tool.color}80`,
                  width: '40px',
                  height: '40px'
                }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              >
                {/* Icon */}
                <div style={{ color: tool.color }}>
                  {React.cloneElement(tool.icon as React.ReactElement, {
                    className: "w-3 h-3 md:w-4 md:h-4"
                  })}
                </div>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: tool.color }}
                  variants={pulseVariants}
                  initial="initial"
                  animate={animationPhase === 'floating' ? 'animate' : 'initial'}
                />
              </motion.div>
              
              {/* Label */}
              <motion.span
                className="mt-1 text-xs md:text-xs font-semibold text-gray-800 text-center whitespace-nowrap bg-white/80 px-1 py-0.5 rounded"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: animationPhase === 'floating' ? 1 : 0,
                  transition: { delay: shouldReduceMotion ? 0 : index * 0.12 + 0.8 }
                }}
              >
                {tool.label}
              </motion.span>
            </motion.div>
          ))}

          {/* Connection lines during convergence */}
          {animationPhase === 'converging' && !shouldReduceMotion && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {businessTools.map((tool, index) => (
                <motion.line
                  key={`line-${tool.id}-${animationPhase}`}
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke={tool.color}
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: 1,
                    transition: { 
                      duration: 2, 
                      delay: index * 0.08,
                      ease: "easeInOut" 
                    }
                  }}
                />
              ))}
            </svg>
          )}

          {/* Central unified platform icon */}
          <motion.div
            className="absolute flex flex-col items-center justify-center"
            animate={centralIconControls}
            initial={{ scale: 0, opacity: 0 }}
          >
            <motion.div
              className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-xl"
              style={{ 
                width: typeof window !== 'undefined' && window.innerWidth >= 768 ? '80px' : '65px', 
                height: typeof window !== 'undefined' && window.innerWidth >= 768 ? '80px' : '65px' 
              }}
              animate={shouldReduceMotion ? {} : {
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.4)",
                  "0 0 35px rgba(34, 197, 94, 0.6)",
                  "0 0 20px rgba(34, 197, 94, 0.4)"
                ]
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1]
              }}
            >
              <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />
              
              {/* Pulse rings */}
              {!shouldReduceMotion && [1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-full border-2 border-green-400"
                  animate={{
                    scale: [1, 1.6, 2.2],
                    opacity: [0, 0.5, 0.3, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: ring * 1.2,
                    ease: [0.4, 0, 0.6, 1],
                    times: [0, 0.2, 0.7, 1]
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BusinessToolsConvergence 