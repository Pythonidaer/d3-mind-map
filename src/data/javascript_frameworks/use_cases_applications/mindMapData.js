import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Use Cases & Applications',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Practical applications of JavaScript frameworks and libraries across project types, industries, and interaction models.',
  },

  // Top-level categories
  {
    id: 'static_sites',
    label: 'Static\nSites',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Sites with pre-rendered HTML, good for performance and SEO. Often built with SSG tools like Astro, Eleventy, or Next.js in static mode.',
  },
  {
    id: 'spas',
    label: 'Single-Page\nApplications (SPAs)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Dynamic apps where navigation happens client-side without full reloads. Often built with React, Vue, or Angular.',
  },
  {
    id: 'ssr_apps',
    label: 'Server-Side\nRendered Apps (SSR)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Apps that render HTML on the server per request. Useful for SEO and initial load speed. Examples include Next.js, Nuxt.js.',
  },
  {
    id: 'dashboards',
    label: 'Dashboards\n& Admin Panels',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Data-driven interfaces used internally. Often use React + D3.js, Vue + Chart.js, or component libraries like Material UI.',
  },
  {
    id: 'hybrid_apps',
    label: 'Hybrid\nWeb Apps',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combine SSR, SSG, and client hydration for flexibility. Use cases: eCommerce, news sites, progressive apps.',
  },
  {
    id: 'mobile_web',
    label: 'Mobile\nWeb / PWAs',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Responsive, installable experiences on mobile using PWA principles. Often built with React, Preact, or Ionic + Angular.',
  },

  // Negative patterns
  {
    id: 'wrong_tool',
    label: 'Wrong\nTool for the Job',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Using a heavy SPA framework for a simple static site leads to poor performance and wasted effort.',
  },
  {
    id: 'pwa_anti',
    label: 'Misusing\nPWA Techniques',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Forcing service workers or caching where unnecessary can cause stale data and increased complexity.',
  },
]

export const links = [
  { source: 'root', target: 'static_sites' },
  { source: 'root', target: 'spas' },
  { source: 'root', target: 'ssr_apps' },
  { source: 'root', target: 'dashboards' },
  { source: 'root', target: 'hybrid_apps' },
  { source: 'root', target: 'mobile_web' },
  { source: 'root', target: 'wrong_tool' },
  { source: 'root', target: 'pwa_anti' },
]
