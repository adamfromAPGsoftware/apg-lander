import React from 'react';
import { ReactFlow, Background } from '@xyflow/react';
import { motion } from 'framer-motion';
import '@xyflow/react/dist/style.css';

const PulsingLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ scale: 1, boxShadow: '0 0 24px 4px #90F23C55' }}
    animate={{
      scale: [1, 1.08, 1],
      boxShadow: [
        '0 0 24px 4px #90F23C55',
        '0 0 36px 8px #90F23C99',
        '0 0 24px 4px #90F23C55',
      ],
    }}
    transition={{ duration: 2, repeat: Infinity }}
    style={{ display: 'inline-block', width: '100%' }}
  >
    {children}
  </motion.div>
);

const SubtlePulseLabel = ({ children, direction = 'out' }: { children: React.ReactNode; direction?: 'in' | 'out' }) => (
  <motion.div
    initial={{ scale: 1 }}
    animate={{
      scale: direction === 'out' ? [1, 1.04, 1] : [1, 0.96, 1],
      opacity: [1, 0.92, 1],
    }}
    transition={{ duration: 1.5, repeat: Infinity }}
    style={{ display: 'inline-block', width: '100%' }}
  >
    {children}
  </motion.div>
);

const nodes = [
  {
    id: 'ai-knowledge-base',
    type: 'default',
    data: { label: <PulsingLabel>AI Knowledge Base</PulsingLabel> },
    position: { x: 300, y: 80 },
    style: {
      width: 200,
      height: 70,
      textAlign: 'center' as React.CSSProperties['textAlign'],
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      color: 'hsl(var(--foreground))',
      borderRadius: 20,
      boxShadow: '0 0 24px 4px #90F23C55',
      border: '2px solid #90F23C',
      fontSize: 20,
      background: 'hsl(var(--background))',
    },
  },
  {
    id: 'ai-system',
    type: 'default',
    data: { label: <PulsingLabel>AI System</PulsingLabel> },
    position: { x: 320, y: 260 },
    style: {
      width: 160,
      height: 70,
      textAlign: 'center' as React.CSSProperties['textAlign'],
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      color: 'hsl(var(--foreground))',
      borderRadius: 20,
      boxShadow: '0 0 24px 4px #90F23C33',
      border: '2px solid #90F23C',
      fontSize: 18,
      background: 'hsl(var(--background))',
    },
  },
  {
    id: 'crm',
    type: 'default',
    data: { label: 'CRM' },
    position: { x: 80, y: 430 },
    style: {
      width: 110,
      height: 50,
      textAlign: 'center' as React.CSSProperties['textAlign'],
      color: '#065f46',
      borderRadius: 16,
      border: '2px solid hsl(var(--border))',
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      fontSize: 16,
      background: 'hsl(var(--card))',
      textRendering: 'optimizeLegibility' as React.CSSProperties['textRendering'],
      WebkitFontSmoothing: 'antialiased' as any,
      MozOsxFontSmoothing: 'grayscale' as any,
    },
  },
  {
    id: 'data',
    type: 'default',
    data: { label: 'Data' },
    position: { x: 520, y: 430 },
    style: {
      width: 110,
      height: 50,
      textAlign: 'center' as React.CSSProperties['textAlign'],
      color: '#065f46',
      borderRadius: 16,
      border: '2px solid hsl(var(--border))',
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      fontSize: 16,
      background: 'hsl(var(--card))',
      textRendering: 'optimizeLegibility' as React.CSSProperties['textRendering'],
      WebkitFontSmoothing: 'antialiased' as any,
      MozOsxFontSmoothing: 'grayscale' as any,
    },
  },
  // Mini AI Agents around AI System
  {
    id: 'agent-proposal',
    type: 'default',
    data: { label: <SubtlePulseLabel direction="in">Proposal Generator</SubtlePulseLabel> },
    position: { x: 220, y: 220 },
    style: {
      width: 130,
      height: 40,
      fontSize: 13,
      color: 'hsl(var(--foreground))',
      borderRadius: 14,
      border: '2px solid #90F23C',
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      background: 'hsl(var(--card))',
    },
  },
  {
    id: 'agent-tasks',
    type: 'default',
    data: { label: <SubtlePulseLabel direction="in">Tasks Creator</SubtlePulseLabel> },
    position: { x: 320, y: 180 },
    style: {
      width: 110,
      height: 40,
      fontSize: 13,
      color: 'hsl(var(--foreground))',
      borderRadius: 14,
      border: '2px solid #90F23C',
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      background: 'hsl(var(--card))',
    },
  },
  {
    id: 'agent-social',
    type: 'default',
    data: { label: <SubtlePulseLabel direction="in">Social Media Manager</SubtlePulseLabel> },
    position: { x: 420, y: 220 },
    style: {
      width: 150,
      height: 40,
      fontSize: 13,
      color: 'hsl(var(--foreground))',
      borderRadius: 14,
      border: '2px solid #90F23C',
      fontWeight: 'bold' as React.CSSProperties['fontWeight'],
      background: 'hsl(var(--card))',
    },
  },
];

const edges = [
  // AI Knowledge Base to AI System
  { id: 'e-akb-ais', source: 'ai-knowledge-base', target: 'ai-system', type: 'smoothstep' },
  // AI System to Mini Agents
  { id: 'e-ais-agent-proposal', source: 'ai-system', target: 'agent-proposal', type: 'smoothstep' },
  { id: 'e-ais-agent-tasks', source: 'ai-system', target: 'agent-tasks', type: 'smoothstep' },
  { id: 'e-ais-agent-social', source: 'ai-system', target: 'agent-social', type: 'smoothstep' },
  // AI System to CRM and Data
  { id: 'e-ais-crm', source: 'ai-system', target: 'crm', type: 'smoothstep' },
  { id: 'e-ais-data', source: 'ai-system', target: 'data', type: 'smoothstep' },
  // CRM and Data to AI Knowledge Base
  { id: 'e-crm-akb', source: 'crm', target: 'ai-knowledge-base', type: 'smoothstep' },
  { id: 'e-data-akb', source: 'data', target: 'ai-knowledge-base', type: 'smoothstep' },
];

const AISystemAnimation: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 650, background: 'hsl(var(--muted))', borderRadius: 16 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        selectionOnDrag={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="hsl(var(--border))" gap={24} />
      </ReactFlow>
    </div>
  );
};

export default AISystemAnimation; 