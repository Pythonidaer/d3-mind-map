import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'State Management',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques and libraries for managing and sharing application state in React and Next.js.',
  },
  {
    id: 'react_state_tools',
    label: 'React\nState Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Built-in React hooks like useState, useReducer, and Context API for managing local and shared state.',
  },
  {
    id: 'redux',
    label: 'Redux',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A predictable state container managing global application state through actions, reducers, and a single store.',
  },
  {
    id: 'zustand',
    label: 'Zustand',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A small, fast state-management library for React, with a minimalistic API and fine-grained reactivity.',
  },
  {
    id: 'context_api',
    label: 'Context API',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'React’s built-in way to share state globally without prop drilling; ideal for low-frequency state changes.',
  },
  {
    id: 'server_client_components',
    label: 'Server vs. Client\nComponents',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'In Next.js App Router, server components fetch immutable data; client components manage mutable, interactive state.',
  },
  {
    id: 'global_state_pitfalls',
    label: 'Global State\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Overusing global state can cause unnecessary re-renders, scaling problems, and make apps harder to maintain.',
  },
]

export const links = [
  { source: 'root', target: 'react_state_tools' },
  { source: 'root', target: 'redux' },
  { source: 'root', target: 'zustand' },
  { source: 'root', target: 'context_api' },
  { source: 'root', target: 'server_client_components' },
  { source: 'root', target: 'global_state_pitfalls' },
]
