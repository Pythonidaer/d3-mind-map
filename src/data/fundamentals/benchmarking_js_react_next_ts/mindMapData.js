import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Benchmarking\nJS, React, Next.js, TS',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Measuring performance of code and applications through microbenchmarks, profiling, and runtime metrics.',
  },
  {
    id: 'microbenchmarking',
    label: 'Microbenchmarking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Measuring execution time of small blocks of code using tools like performance.now or Benchmark.js.',
  },
  {
    id: 'app_performance_metrics',
    label: 'App Performance\n& Metrics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Capturing page load times, interactivity, memory use, and bundle sizes with profiling tools.',
  },
  {
    id: 'benchmarking_tools',
    label: 'Benchmarking\n& Profiling Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Tools for measuring JS execution, UI responsiveness, memory usage, and bundle size across environments.',
  },
  {
    id: 'high_resolution_timers',
    label: 'High-Resolution Timers',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use performance.now() or process.hrtime() for precise timing not affected by clock drift.',
  },
  {
    id: 'benchmark_libraries',
    label: 'Benchmark Libraries',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use Benchmark.js to automate iterations, measure ops/sec, and compare performance statistically.',
  },
  {
    id: 'test_strategies',
    label: 'Test Strategies',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Run millions of iterations, avoid logs, test in production mode, and account for JIT and GC behavior.',
  },
  {
    id: 'web_vitals',
    label: 'Web Vitals',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Metrics like FCP, LCP, INP, CLS, TTFB, and TTI to evaluate real and perceived performance.',
  },
  {
    id: 'bundle_size',
    label: 'Bundle Size',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Measure size of JS/CSS bundles to improve load time and parsing using bundle analyzers.',
  },
  {
    id: 'hydration_render',
    label: 'Hydration & Render\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Track React hydration time and component render duration to optimize time-to-interactive.',
  },
  {
    id: 'devtools_profiler',
    label: 'Chrome DevTools\n& Profiler',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use Performance, Memory, and Network panels to profile scripts, leaks, and TTFB.',
  },
  {
    id: 'lighthouse_webpagetest',
    label: 'Lighthouse &\nWebPageTest',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Run audits for FCP, LCP, CLS, bundle size, and interactivity under real-world conditions.',
  },
  {
    id: 'react_next_tools',
    label: 'React & Next.js\nProfiling Tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use React Profiler and next/reportWebVitals to track hydration, render time, and route transitions.',
  },
  {
    id: 'for_vs_foreach',
    label: 'for vs forEach vs map',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'for loops are ~2x faster than forEach/map in large iterations. Use when performance is critical.',
  },
  {
    id: 'destructuring_speed',
    label: 'Destructuring\nvs Direct Access',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Destructuring is nearly equal in speed to direct property access. Use for readability with no penalty.',
  },
  {
    id: 'react_profiler_commit',
    label: 'Profiler: Commit\nDurations',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Measures time React takes to mount or update components. Use to detect slow render paths.',
  },
  {
    id: 'next_hydration_metric',
    label: 'Next.js Hydration\nMetrics',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Tracks time from static HTML to full interactivity. Useful for optimizing SSR/SSG pages.',
  },
]

export const links = [
  { source: 'root', target: 'microbenchmarking' },
  { source: 'root', target: 'app_performance_metrics' },
  { source: 'root', target: 'benchmarking_tools' },

  { source: 'microbenchmarking', target: 'high_resolution_timers' },
  { source: 'microbenchmarking', target: 'benchmark_libraries' },
  { source: 'microbenchmarking', target: 'test_strategies' },

  { source: 'app_performance_metrics', target: 'web_vitals' },
  { source: 'app_performance_metrics', target: 'bundle_size' },
  { source: 'app_performance_metrics', target: 'hydration_render' },

  { source: 'benchmarking_tools', target: 'devtools_profiler' },
  { source: 'benchmarking_tools', target: 'lighthouse_webpagetest' },
  { source: 'benchmarking_tools', target: 'react_next_tools' },

  { source: 'benchmark_libraries', target: 'for_vs_foreach' },
  { source: 'benchmark_libraries', target: 'destructuring_speed' },

  { source: 'react_next_tools', target: 'react_profiler_commit' },
  { source: 'react_next_tools', target: 'next_hydration_metric' },
]
