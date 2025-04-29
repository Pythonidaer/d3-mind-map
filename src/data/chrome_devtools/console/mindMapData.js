import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Console\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Interactive logging, scripting, and debugging interface for viewing messages, running code, and inspecting errors.',
  },

  // Level 1 nodes
  {
    id: 'logging',
    label: 'Logging &\nError Monitoring',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'View console.log, console.warn, console.error messages and stack traces.',
  },
  {
    id: 'formatting',
    label: 'Formatting &\nStyling Output',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Use format specifiers and escape sequences to style console output.',
  },
  {
    id: 'run_code',
    label: 'Interactive\nExecution',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Type and execute JavaScript snippets directly in the console.',
  },
  {
    id: 'api_methods',
    label: 'Console API\nMethods',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Advanced methods like table(), group(), time(), trace(), and assert().',
  },
  {
    id: 'filter_search',
    label: 'Filtering &\nSearching',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Filter by level/source and search text or regex within console messages.',
  },
  {
    id: 'integration',
    label: 'Integration\nwith Panels',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Open as drawer, link to source, and use $0 to access selected elements.',
  },

  // Level 2 nodes under Logging
  {
    id: 'levels',
    label: 'Log\nLevels',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Differentiate info, warnings, and errors via console.log(), warn(), error().',
  },
  {
    id: 'stack_traces',
    label: 'Stack\nTraces',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'View call stack for errors and warnings.',
  },

  // Level 2 nodes under Formatting
  {
    id: 'specifiers',
    label: 'Format\nSpecifiers',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use %s, %d, %f, %o, %O, and %c for structured output.',
  },
  {
    id: 'ansi_colors',
    label: 'ANSI\nColors',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Apply ANSI escape sequences to colorize logs.',
  },

  // Level 2 nodes under Run Code
  {
    id: 'repl',
    label: 'REPL\nInterface',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Interactive command line for testing JS expressions.',
  },
  {
    id: 'preserve_context',
    label: 'Preserve\nContext',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Maintain variables and state across executions.',
  },

  // Level 2 nodes under API Methods
  {
    id: 'console_table',
    label: 'console.table()',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Display arrays or objects in a table view.',
  },
  {
    id: 'console_group',
    label: 'console.group()',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Group related log messages under collapsible headings.',
  },
  {
    id: 'console_time',
    label: 'console.time()',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Start and end timers to measure code execution duration.',
  },
  {
    id: 'console_trace',
    label: 'console.trace()',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Print the current stack trace without throwing an error.',
  },
  {
    id: 'console_assert',
    label: 'console.assert()',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Log an error message if an assertion expression is false.',
  },

  // Level 2 nodes under Filter & Search
  {
    id: 'filter_levels',
    label: 'Filter\nLevels',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Toggle visibility by log, warning, or error level.',
  },
  {
    id: 'filter_source',
    label: 'Filter\nSource',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Show messages originating from specified scripts.',
  },
  {
    id: 'search_input',
    label: 'Search\nBar',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Search for text or regex across console output.',
  },

  // Level 2 nodes under Integration
  {
    id: 'source_links',
    label: 'Source\nLinks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Click filename:line to open code in Sources panel.',
  },
  {
    id: 'drawer_mode',
    label: 'Drawer\nMode',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Toggle console to dock at bottom for simultaneous viewing.',
  },
  {
    id: 'last_selected',
    label: '$0\nShortcut',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Access the element selected in Elements panel.',
  },
]

export const links = [
  { source: 'root', target: 'logging' },
  { source: 'root', target: 'formatting' },
  { source: 'root', target: 'run_code' },
  { source: 'root', target: 'api_methods' },
  { source: 'root', target: 'filter_search' },
  { source: 'root', target: 'integration' },

  // Logging breakdown
  { source: 'logging', target: 'levels' },
  { source: 'logging', target: 'stack_traces' },

  // Formatting breakdown
  { source: 'formatting', target: 'specifiers' },
  { source: 'formatting', target: 'ansi_colors' },

  // Run Code breakdown
  { source: 'run_code', target: 'repl' },
  { source: 'run_code', target: 'preserve_context' },

  // API Methods breakdown
  { source: 'api_methods', target: 'console_table' },
  { source: 'api_methods', target: 'console_group' },
  { source: 'api_methods', target: 'console_time' },
  { source: 'api_methods', target: 'console_trace' },
  { source: 'api_methods', target: 'console_assert' },

  // Filter & Search breakdown
  { source: 'filter_search', target: 'filter_levels' },
  { source: 'filter_search', target: 'filter_source' },
  { source: 'filter_search', target: 'search_input' },

  // Integration breakdown
  { source: 'integration', target: 'source_links' },
  { source: 'integration', target: 'drawer_mode' },
  { source: 'integration', target: 'last_selected' },
]
