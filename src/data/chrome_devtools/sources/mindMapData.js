import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Sources\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Debugging, editing, and managing the JavaScript, CSS, and HTML resources of a web page.',
  },

  // Level 1
  {
    id: 'file_navigator',
    label: 'File\nNavigator',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Browse all loaded page resources organized by origin.',
  },
  {
    id: 'editor',
    label: 'Editor &\nLive Editing',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Edit HTML, CSS, and JS files directly inside DevTools.',
  },
  {
    id: 'breakpoints',
    label: 'Breakpoints\nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Set and manage various types of JavaScript breakpoints.',
  },
  {
    id: 'debugger_controls',
    label: 'Debugger\nControls',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Step through code execution with play, step, and pause buttons.',
  },
  {
    id: 'scope_callstack_watch',
    label: 'Scope,\nCall Stack,\nWatch',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Inspect variable values, function call history, and watch expressions.',
  },
  {
    id: 'snippets',
    label: 'Snippets',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Save and run reusable blocks of JavaScript code.',
  },
  {
    id: 'workspaces',
    label: 'Workspaces',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Map local project files to DevTools for persistent editing.',
  },
  {
    id: 'blackboxing',
    label: 'Blackboxing\nScripts',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Ignore third-party libraries during debugging to focus on app code.',
  },

  // Level 2 - Breakpoints
  {
    id: 'line_breakpoint',
    label: 'Line\nBreakpoint',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pause execution at a specific line of code.',
  },
  {
    id: 'conditional_breakpoint',
    label: 'Conditional\nBreakpoint',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pause only when a user-defined condition is true.',
  },
  {
    id: 'xhr_fetch_breakpoint',
    label: 'XHR/Fetch\nBreakpoint',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pause when a network request matches a string pattern.',
  },
  {
    id: 'event_listener_breakpoint',
    label: 'Event\nListener\nBreakpoint',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pause when an event like click or mouseover is triggered.',
  },
  {
    id: 'dom_breakpoint',
    label: 'DOM\nBreakpoint',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pause when changes occur to a selected DOM node.',
  },

  // Level 2 - Debugger Controls
  {
    id: 'step_over',
    label: 'Step\nOver',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Move to the next line in the same scope without stepping into functions.',
  },
  {
    id: 'step_into',
    label: 'Step\nInto',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Enter the function called at the current line.',
  },
  {
    id: 'step_out',
    label: 'Step\nOut',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Exit the current function and return to the calling function.',
  },
  {
    id: 'resume_script',
    label: 'Resume\nScript',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Continue code execution until the next breakpoint.',
  },

  // Level 2 - Scope/Call Stack/Watch
  {
    id: 'scope_variables',
    label: 'Scope\nVariables',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Inspect all local, closure, and global variables.',
  },
  {
    id: 'call_stack',
    label: 'Call\nStack',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'View the sequence of function calls leading to the current execution point.',
  },
  {
    id: 'watch_expressions',
    label: 'Watch\nExpressions',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Manually track the values of specific expressions or variables.',
  },
]

export const links = [
  { source: 'root', target: 'file_navigator' },
  { source: 'root', target: 'editor' },
  { source: 'root', target: 'breakpoints' },
  { source: 'root', target: 'debugger_controls' },
  { source: 'root', target: 'scope_callstack_watch' },
  { source: 'root', target: 'snippets' },
  { source: 'root', target: 'workspaces' },
  { source: 'root', target: 'blackboxing' },

  // Breakpoints breakdown
  { source: 'breakpoints', target: 'line_breakpoint' },
  { source: 'breakpoints', target: 'conditional_breakpoint' },
  { source: 'breakpoints', target: 'xhr_fetch_breakpoint' },
  { source: 'breakpoints', target: 'event_listener_breakpoint' },
  { source: 'breakpoints', target: 'dom_breakpoint' },

  // Debugger controls breakdown
  { source: 'debugger_controls', target: 'step_over' },
  { source: 'debugger_controls', target: 'step_into' },
  { source: 'debugger_controls', target: 'step_out' },
  { source: 'debugger_controls', target: 'resume_script' },

  // Scope / Call Stack / Watch breakdown
  { source: 'scope_callstack_watch', target: 'scope_variables' },
  { source: 'scope_callstack_watch', target: 'call_stack' },
  { source: 'scope_callstack_watch', target: 'watch_expressions' },
]
