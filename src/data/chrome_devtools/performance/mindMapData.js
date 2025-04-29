import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Performance\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Analyze runtime and load performance to diagnose slowdowns and optimize user experience.',
  },

  // Level 1
  {
    id: 'recording',
    label: 'Recording\nSessions',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Capture page load or user interaction performance over time.',
  },
  {
    id: 'timeline',
    label: 'Timeline\nNavigation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Visualize recorded activities across CPU, JS, rendering, and network.',
  },
  {
    id: 'performance_metrics',
    label: 'Performance\nMetrics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Interpret metrics like FPS, CPU usage, and memory during playback.',
  },
  {
    id: 'bottlenecks',
    label: 'Identifying\nBottlenecks',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Detect long tasks, layout shifts, heavy rendering, or scripting.',
  },
  {
    id: 'throttling_simulation',
    label: 'CPU & Network\nThrottling',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Emulate slower devices and networks during profiling.',
  },
  {
    id: 'analysis_tools',
    label: 'Analysis &\nInsights',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Use flame charts, summary panels, and insights for performance diagnosis.',
  },
  {
    id: 'annotations_sharing',
    label: 'Annotations &\nSharing',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Label important sections and export performance recordings for collaboration.',
  },

  // Level 2 under Recording
  {
    id: 'record_page_load',
    label: 'Record\nPage Load',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Capture performance from page refresh to complete load.',
  },
  {
    id: 'record_runtime',
    label: 'Record\nRuntime Interaction',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Record user interactions after page load (e.g., clicks, scrolls).',
  },

  // Level 2 under Timeline Navigation
  {
    id: 'overview_panel',
    label: 'Overview\nPanel',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'FPS, CPU, and network graphs summarizing major activity trends.',
  },
  {
    id: 'main_thread',
    label: 'Main Thread\nView',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'See JS function calls, layout, paint, and raster tasks.',
  },

  // Level 2 under Metrics
  {
    id: 'fps',
    label: 'Frames Per\nSecond (FPS)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Target 60 FPS for smooth interactions; drops indicate animation jank.',
  },
  {
    id: 'cpu_usage',
    label: 'CPU\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Analyze how much CPU work is being done and spot spikes.',
  },
  {
    id: 'memory_usage',
    label: 'Memory\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Identify potential memory leaks or excessive heap growth.',
  },

  // Level 2 under Bottlenecks
  {
    id: 'long_tasks',
    label: 'Long\nTasks',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'JS tasks over 50ms that block main thread and degrade responsiveness.',
  },
  {
    id: 'layout_shifts',
    label: 'Layout\nShifts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Detect visual instability issues affecting user experience.',
  },
  {
    id: 'rendering_bottlenecks',
    label: 'Rendering\nIssues',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Find slow paints, excessive composites, and unnecessary reflows.',
  },

  // Level 2 under Throttling Simulation
  {
    id: 'cpu_throttling',
    label: 'CPU\nThrottling',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Artificially slow down CPU to simulate low-end mobile devices.',
  },
  {
    id: 'network_throttling',
    label: 'Network\nThrottling',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Emulate slow network conditions to observe performance impacts.',
  },

  // Level 2 under Analysis Tools
  {
    id: 'flame_chart',
    label: 'Flame\nChart',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'View nested function calls and timing hierarchy.',
  },
  {
    id: 'summary_panel',
    label: 'Summary\nPanel',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Breakdown of time spent scripting, rendering, painting, etc.',
  },
  {
    id: 'insights_panel',
    label: 'Insights\nPanel',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Automated analysis highlighting detected performance issues.',
  },

  // Level 2 under Annotations & Sharing
  {
    id: 'add_annotations',
    label: 'Add\nAnnotations',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Mark important moments or phases during profiling.',
  },
  {
    id: 'export_trace',
    label: 'Export\nTrace',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Save recorded sessions to share or reopen elsewhere.',
  },
]

export const links = [
  { source: 'root', target: 'recording' },
  { source: 'root', target: 'timeline' },
  { source: 'root', target: 'performance_metrics' },
  { source: 'root', target: 'bottlenecks' },
  { source: 'root', target: 'throttling_simulation' },
  { source: 'root', target: 'analysis_tools' },
  { source: 'root', target: 'annotations_sharing' },

  // Recording breakdown
  { source: 'recording', target: 'record_page_load' },
  { source: 'recording', target: 'record_runtime' },

  // Timeline Navigation breakdown
  { source: 'timeline', target: 'overview_panel' },
  { source: 'timeline', target: 'main_thread' },

  // Performance Metrics breakdown
  { source: 'performance_metrics', target: 'fps' },
  { source: 'performance_metrics', target: 'cpu_usage' },
  { source: 'performance_metrics', target: 'memory_usage' },

  // Bottlenecks breakdown
  { source: 'bottlenecks', target: 'long_tasks' },
  { source: 'bottlenecks', target: 'layout_shifts' },
  { source: 'bottlenecks', target: 'rendering_bottlenecks' },

  // Throttling breakdown
  { source: 'throttling_simulation', target: 'cpu_throttling' },
  { source: 'throttling_simulation', target: 'network_throttling' },

  // Analysis Tools breakdown
  { source: 'analysis_tools', target: 'flame_chart' },
  { source: 'analysis_tools', target: 'summary_panel' },
  { source: 'analysis_tools', target: 'insights_panel' },

  // Annotations & Sharing breakdown
  { source: 'annotations_sharing', target: 'add_annotations' },
  { source: 'annotations_sharing', target: 'export_trace' },
]
