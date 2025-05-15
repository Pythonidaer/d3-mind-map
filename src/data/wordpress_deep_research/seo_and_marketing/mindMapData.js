import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'SEO and\nMarketing',
    shape: 'roundRect',
    color: 'root',
    definition: 'Strategies, tools, and best practices for improving search engine rankings, increasing visibility, and enhancing digital outreach using WordPress.',
  },

  // Positive Level 1
  {
    id: 'seo_plugins',
    label: 'SEO Plugins\n(Yoast, Rank Math)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools that help manage meta tags, sitemaps, schema, readability, and on-page SEO scoring.',
  },
  {
    id: 'schema_meta',
    label: 'Meta Tags\n& Schema Markup',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Adds structured metadata to content for better search engine understanding and rich results.',
  },
  {
    id: 'sitemaps',
    label: 'XML Sitemaps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Automatically generated maps that guide search engine crawlers through your site’s content.',
  },
  {
    id: 'open_graph',
    label: 'Open Graph &\nSocial Sharing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Controls how pages look when shared on social media using metadata (OG tags, Twitter Cards).',
  },
  {
    id: 'analytics',
    label: 'Analytics\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tracks visitor behavior, traffic sources, and marketing effectiveness via tools like Google Analytics.',
  },
  {
    id: 'seo_audits',
    label: 'SEO\nAudits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Evaluates technical and on-page SEO health, including site speed, mobile usability, and crawl errors.',
  },
  {
    id: 'email_marketing',
    label: 'Email\nMarketing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Integrates tools like Mailchimp or ConvertKit to capture leads and send targeted campaigns.',
  },
  {
    id: 'marketing_automation',
    label: 'Marketing\nAutomation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Uses tools like HubSpot or FluentCRM to schedule, segment, and personalize user journeys.',
  },

  // Positive Level 2
  {
    id: 'yoast_features',
    label: 'Yoast: Readability,\nMeta, Sitemap',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'seo_plugins',
    definition: 'Yoast provides scoring for SEO and readability, auto-generates sitemaps, and sets social/SEO tags.',
  },
  {
    id: 'rankmath_schema',
    label: 'Rank Math:\nAdvanced Schema',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'seo_plugins',
    definition: 'Rank Math excels at flexible schema support, rich snippet generation, and automated SEO rules.',
  },
  {
    id: 'google_analytics',
    label: 'Google\nAnalytics 4',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'analytics',
    definition: 'Tracks user behavior and conversions, integrates with Google Ads and Search Console for marketing insights.',
  },
  {
    id: 'mailchimp_forms',
    label: 'Mailchimp\nSignup Forms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'email_marketing',
    definition: 'Easily embed signup forms in WordPress and sync contacts with your newsletter segments.',
  },

  // Negative Level 1
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Challenges and limitations of SEO or marketing strategies when misapplied or overused.',
  },
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common bad practices that reduce search visibility, confuse crawlers, or annoy users.',
  },

  // Negative Level 2 - Cons
  {
    id: 'plugin_bloat',
    label: 'Plugin Bloat\n& Conflicts',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Excessive or redundant plugins can slow performance or create metadata conflicts.',
  },
  {
    id: 'misleading_snippets',
    label: 'Misleading\nSchema Snippets',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Overusing schema markup for things like fake reviews or non-existent offers may trigger penalties.',
  },

  // Negative Level 2 - Anti-Patterns
  {
    id: 'keyword_stuffing',
    label: 'Keyword\nStuffing',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Forcing keywords unnaturally into titles or paragraphs degrades readability and can reduce rankings.',
  },
  {
    id: 'duplicate_meta',
    label: 'Duplicate\nMeta Descriptions',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Reusing identical metadata across multiple pages creates ambiguity for crawlers and weakens SEO.',
  },
]

export const links = [
  { source: 'root', target: 'seo_plugins' },
  { source: 'root', target: 'schema_meta' },
  { source: 'root', target: 'sitemaps' },
  { source: 'root', target: 'open_graph' },
  { source: 'root', target: 'analytics' },
  { source: 'root', target: 'seo_audits' },
  { source: 'root', target: 'email_marketing' },
  { source: 'root', target: 'marketing_automation' },

  { source: 'seo_plugins', target: 'yoast_features' },
  { source: 'seo_plugins', target: 'rankmath_schema' },
  { source: 'analytics', target: 'google_analytics' },
  { source: 'email_marketing', target: 'mailchimp_forms' },

  { source: 'root', target: 'cons' },
  { source: 'root', target: 'anti_patterns' },
  { source: 'cons', target: 'plugin_bloat' },
  { source: 'cons', target: 'misleading_snippets' },
  { source: 'anti_patterns', target: 'keyword_stuffing' },
  { source: 'anti_patterns', target: 'duplicate_meta' },
]
