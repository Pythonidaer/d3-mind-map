import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Memory\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Profile JavaScript memory usage to detect leaks, excessive allocations, and optimize resource management.',
  },

  // Level 1
  {
    id: 'memory_concepts',
    label: 'Memory\nConcepts',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understand heap snapshots, allocation timelines, and object retainment.',
  },
  {
    id: 'heap_snapshots',
    label: 'Heap\nSnapshots',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Capture and inspect memory states at specific points in time.',
  },
  {
    id: 'allocation_instrumentation',
    label: 'Allocation\nInstrumentation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Track live memory allocations during code execution.',
  },
  {
    id: 'allocation_timelines',
    label: 'Allocation\nTimelines',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Monitor memory allocation trends over time.',
  },
  {
    id: 'identifying_leaks',
    label: 'Identifying\nMemory Leaks',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Find unreleased objects that cause growing memory consumption.',
  },
  {
    id: 'analyzing_objects',
    label: 'Analyzing\nLarge Objects',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Spot and optimize large memory-consuming structures.',
  },
  {
    id: 'optimization_strategies',
    label: 'Optimization\nStrategies',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Apply best practices to minimize memory usage and prevent leaks.',
  },

  // Level 2 under Memory Concepts
  {
    id: 'heap_vs_stack',
    label: 'Heap vs\nStack',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Understand the difference between stack memory (function call management) and heap memory (dynamic object storage).',
  },
  {
    id: 'garbage_collection',
    label: 'Garbage\nCollection',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Automatic memory reclamation process in JavaScript, based on reachability.',
  },

  // Level 2 under Heap Snapshots
  {
    id: 'taking_snapshots',
    label: 'Taking\nSnapshots',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Capture memory states at key moments during application execution.',
  },
  {
    id: 'comparing_snapshots',
    label: 'Comparing\nSnapshots',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Detect leaks and unwanted memory growth by diffing snapshots.',
  },

  // Level 2 under Allocation Instrumentation
  {
    id: 'live_allocation_tracking',
    label: 'Live\nAllocation Tracking',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Capture and inspect objects allocated during a specific recording session.',
  },

  // Level 2 under Allocation Timelines
  {
    id: 'allocation_spikes',
    label: 'Allocation\nSpikes',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Identify rapid memory increases indicating possible inefficiencies.',
  },
  {
    id: 'object_lifetime',
    label: 'Object\nLifetime',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Assess how long objects persist in memory and optimize their lifespan.',
  },

  // Level 2 under Identifying Leaks
  {
    id: 'detached_dom',
    label: 'Detached\nDOM Elements',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Find DOM nodes no longer attached to document but still referenced in memory.',
  },
  {
    id: 'closure_leaks',
    label: 'Closure\nLeaks',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Detect functions capturing variables unnecessarily and preventing garbage collection.',
  },

  // Level 2 under Analyzing Large Objects
  {
    id: 'large_arrays',
    label: 'Large\nArrays',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Identify unnecessarily large arrays consuming excessive memory.',
  },
  {
    id: 'string_bloating',
    label: 'String\nBloating',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Catch very large or duplicated strings inflating memory usage.',
  },

  // Level 2 under Optimization Strategies
  {
    id: 'object_pooling',
    label: 'Object\nPooling',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Reuse objects instead of creating new ones repeatedly.',
  },
  {
    id: 'clearing_references',
    label: 'Clearing\nReferences',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Explicitly nullify references to enable garbage collection.',
  },
]

export const links = [
  { source: 'root', target: 'memory_concepts' },
  { source: 'root', target: 'heap_snapshots' },
  { source: 'root', target: 'allocation_instrumentation' },
  { source: 'root', target: 'allocation_timelines' },
  { source: 'root', target: 'identifying_leaks' },
  { source: 'root', target: 'analyzing_objects' },
  { source: 'root', target: 'optimization_strategies' },

  // Memory Concepts breakdown
  { source: 'memory_concepts', target: 'heap_vs_stack' },
  { source: 'memory_concepts', target: 'garbage_collection' },

  // Heap Snapshots breakdown
  { source: 'heap_snapshots', target: 'taking_snapshots' },
  { source: 'heap_snapshots', target: 'comparing_snapshots' },

  // Allocation Instrumentation breakdown
  { source: 'allocation_instrumentation', target: 'live_allocation_tracking' },

  // Allocation Timelines breakdown
  { source: 'allocation_timelines', target: 'allocation_spikes' },
  { source: 'allocation_timelines', target: 'object_lifetime' },

  // Identifying Leaks breakdown
  { source: 'identifying_leaks', target: 'detached_dom' },
  { source: 'identifying_leaks', target: 'closure_leaks' },

  // Analyzing Large Objects breakdown
  { source: 'analyzing_objects', target: 'large_arrays' },
  { source: 'analyzing_objects', target: 'string_bloating' },

  // Optimization Strategies breakdown
  { source: 'optimization_strategies', target: 'object_pooling' },
  { source: 'optimization_strategies', target: 'clearing_references' },
]
