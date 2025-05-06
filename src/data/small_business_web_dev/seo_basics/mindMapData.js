import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'SEO Basics for\nSmall Businesses',
    shape: 'roundRect',
    color: 'root',
    definition: 'Essential SEO strategies small business websites can implement to improve visibility in search engines.',
  },

  // Why SEO Matters
  {
    id: 'why_seo',
    label: 'Why SEO\nMatters',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'SEO increases organic traffic, improves visibility, and builds trust with customers through search engine rankings.',
    parent: 'root',
  },
  {
    id: 'seo_benefits',
    label: 'SEO\nBenefits',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Boosts visibility, brings targeted traffic, improves brand credibility, and increases conversions.',
    parent: 'why_seo',
  },

  // Basic Practices
  {
    id: 'basic_practices',
    label: 'Basic SEO\nPractices',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Simple, non-technical SEO steps small business owners can apply during site creation.',
    parent: 'root',
  },
  {
    id: 'keyword_research',
    label: 'Keyword\nResearch',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Identifying and using the words your audience types into search engines to find your services.',
    parent: 'basic_practices',
  },
  {
    id: 'onpage_optimization',
    label: 'On-Page\nOptimization',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Improving title tags, meta descriptions, headings, URLs, and internal links for better rankings.',
    parent: 'basic_practices',
  },
  {
    id: 'alt_text',
    label: 'Image Alt\nText',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Describe images accurately so search engines can interpret media content.',
    parent: 'basic_practices',
  },
  {
    id: 'content_quality',
    label: 'High-Quality\nContent',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Creating original, helpful content that matches what users are searching for.',
    parent: 'basic_practices',
  },

  // Mobile and Structure
  {
    id: 'mobile_and_structure',
    label: 'Mobile &\nStructure',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Website responsiveness and site structure affect both user experience and SEO.',
    parent: 'root',
  },
  {
    id: 'mobile_friendly',
    label: 'Mobile-\nFriendly Design',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Responsive design ensures your site displays well on all devices, which Google favors.',
    parent: 'mobile_and_structure',
  },
  {
    id: 'site_structure',
    label: 'Clean Site\nStructure',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Logical navigation and internal linking help search engines crawl and understand your site.',
    parent: 'mobile_and_structure',
  },
  {
    id: 'xml_sitemap',
    label: 'XML\nSitemap',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'A file that helps search engines index all important pages of your site.',
    parent: 'mobile_and_structure',
  },

  // Anti-patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common SEO mistakes that can damage rankings or get your site penalized.',
    parent: 'root',
  },
  {
    id: 'keyword_stuffing',
    label: 'Keyword\nStuffing',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Overusing keywords unnaturally in content, which hurts readability and SEO.',
    parent: 'anti_patterns',
  },
  {
    id: 'duplicate_content',
    label: 'Duplicate\nContent',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Repeating content across pages or copying from other sites can lead to lower rankings.',
    parent: 'anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'why_seo' },
  { source: 'why_seo', target: 'seo_benefits' },

  { source: 'root', target: 'basic_practices' },
  { source: 'basic_practices', target: 'keyword_research' },
  { source: 'basic_practices', target: 'onpage_optimization' },
  { source: 'basic_practices', target: 'alt_text' },
  { source: 'basic_practices', target: 'content_quality' },

  { source: 'root', target: 'mobile_and_structure' },
  { source: 'mobile_and_structure', target: 'mobile_friendly' },
  { source: 'mobile_and_structure', target: 'site_structure' },
  { source: 'mobile_and_structure', target: 'xml_sitemap' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'keyword_stuffing' },
  { source: 'anti_patterns', target: 'duplicate_content' },
]
