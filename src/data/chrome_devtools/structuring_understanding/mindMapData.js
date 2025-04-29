import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Structured\nChrome DevTools',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Organized exploration of Chrome DevTools, segmented into major functional categories for targeted mastery.',
  },

  // Level 1: Major Sections
  {
    id: 'elements_tab',
    label: 'Elements\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Inspect, edit, and debug DOM structure and CSS styles in real time.',
  },
  {
    id: 'console_tab',
    label: 'Console\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Log outputs, interact with JavaScript context, and monitor errors or warnings.',
  },
  {
    id: 'sources_tab',
    label: 'Sources\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Debug JavaScript, manage breakpoints, and edit front-end code.',
  },
  {
    id: 'network_tab',
    label: 'Network\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Monitor HTTP requests, inspect payloads, and optimize network performance.',
  },
  {
    id: 'performance_tab',
    label: 'Performance\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Record and analyze load and runtime performance metrics.',
  },
  {
    id: 'memory_tab',
    label: 'Memory\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Profile JavaScript memory usage to detect leaks and optimize allocations.',
  },
  {
    id: 'application_tab',
    label: 'Application\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Manage storage, Service Workers, caching, and manifest configurations.',
  },
  {
    id: 'lighthouse_tab',
    label: 'Lighthouse\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Run automated audits for performance, accessibility, SEO, and PWA compliance.',
  },
  {
    id: 'recorder_tab',
    label: 'Recorder\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Capture, replay, and measure user flows for functional and performance testing.',
  },
  {
    id: 'security_tab',
    label: 'Security\nTab',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Analyze HTTPS status, certificates, mixed content, and security headers.',
  },
  {
    id: 'harnessing_devtools',
    label: 'Harnessing\nDevTools',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Apply DevTools to broader workflows like testing, debugging, accessibility, and optimization.',
  },

  // Level 2: Bonus organization beneath 'Harnessing DevTools'
  {
    id: 'testing_debugging',
    label: 'Testing &\nDebugging',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use Recorder, Network, Elements, Sources, and Console tabs for test creation and issue isolation.',
  },
  {
    id: 'performance_accessibility',
    label: 'Performance &\nAccessibility',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Optimize load and runtime speed, improve site usability for all users.',
  },
  {
    id: 'style_device_emulation',
    label: 'Styling &\nDevice Emulation',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Refine layouts responsively and simulate sensor/device behavior.',
  },
]

export const links = [
  { source: 'root', target: 'elements_tab' },
  { source: 'root', target: 'console_tab' },
  { source: 'root', target: 'sources_tab' },
  { source: 'root', target: 'network_tab' },
  { source: 'root', target: 'performance_tab' },
  { source: 'root', target: 'memory_tab' },
  { source: 'root', target: 'application_tab' },
  { source: 'root', target: 'lighthouse_tab' },
  { source: 'root', target: 'recorder_tab' },
  { source: 'root', target: 'security_tab' },
  { source: 'root', target: 'harnessing_devtools' },

  // Bonus detailed branches under Harnessing DevTools
  { source: 'harnessing_devtools', target: 'testing_debugging' },
  { source: 'harnessing_devtools', target: 'performance_accessibility' },
  { source: 'harnessing_devtools', target: 'style_device_emulation' },
]
