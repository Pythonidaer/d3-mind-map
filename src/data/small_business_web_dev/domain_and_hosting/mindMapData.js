import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Domain & Hosting\nfor Small Business',
    shape: 'roundRect',
    color: 'root',
    definition: 'Covers key aspects of acquiring a domain name and selecting the right hosting plan for small business websites.',
  },

  // Domain Name
  {
    id: 'domain_name',
    label: 'Domain\nRegistration',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The process of reserving a website address (e.g., yourbusiness.com) through a domain registrar.',
    parent: 'root',
  },
  {
    id: 'domain_costs',
    label: 'Typical\nCosts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Usually $10–$20/year for .com domains; premium domains and privacy protection can increase cost.',
    parent: 'domain_name',
  },
  {
    id: 'domain_features',
    label: 'Features to\nConsider',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Look for WHOIS privacy, auto-renewal, DNS control, and bundled email or SSL options.',
    parent: 'domain_name',
  },

  // Hosting Types
  {
    id: 'hosting_types',
    label: 'Web Hosting\nOptions',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Types of services that store and serve website files, making a site accessible online.',
    parent: 'root',
  },
  {
    id: 'shared_hosting',
    label: 'Shared\nHosting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Low-cost hosting where multiple websites share a server. Ideal for low-traffic sites.',
    parent: 'hosting_types',
  },
  {
    id: 'vps_hosting',
    label: 'VPS\nHosting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Virtual Private Server provides dedicated resources for moderate traffic and control.',
    parent: 'hosting_types',
  },
  {
    id: 'dedicated_hosting',
    label: 'Dedicated\nHosting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'A physical server reserved for one site. High cost, high control, suitable for large sites.',
    parent: 'hosting_types',
  },
  {
    id: 'cloud_hosting',
    label: 'Cloud\nHosting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Scalable hosting using multiple servers. Good for traffic spikes and high uptime.',
    parent: 'hosting_types',
  },
  {
    id: 'managed_wordpress',
    label: 'Managed\nWordPress',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Optimized hosting for WordPress with automatic updates and WordPress-specific support.',
    parent: 'hosting_types',
  },

  // Considerations
  {
    id: 'hosting_considerations',
    label: 'Key\nConsiderations',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Factors like security, bandwidth, storage, and support influence hosting choice.',
    parent: 'root',
  },
  {
    id: 'storage_bandwidth',
    label: 'Storage &\nBandwidth',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Determine how much disk space and traffic your site will require.',
    parent: 'hosting_considerations',
  },
  {
    id: 'security_features',
    label: 'Security\nFeatures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Look for SSL, firewalls, backups, malware scanning, and DDoS protection.',
    parent: 'hosting_considerations',
  },

  // Anti-patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common missteps that lead to unreliable hosting or unexpected domain issues.',
    parent: 'root',
  },
  {
    id: 'cheap_hosting_risks',
    label: 'Choosing Based\non Price Only',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Lowest-cost hosting may result in slow speeds, bad support, and uptime issues.',
    parent: 'anti_patterns',
  },
  {
    id: 'domain_expiration',
    label: 'Letting Domain\nExpire',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Failure to renew can result in website takedown or loss of domain ownership.',
    parent: 'anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'domain_name' },
  { source: 'domain_name', target: 'domain_costs' },
  { source: 'domain_name', target: 'domain_features' },

  { source: 'root', target: 'hosting_types' },
  { source: 'hosting_types', target: 'shared_hosting' },
  { source: 'hosting_types', target: 'vps_hosting' },
  { source: 'hosting_types', target: 'dedicated_hosting' },
  { source: 'hosting_types', target: 'cloud_hosting' },
  { source: 'hosting_types', target: 'managed_wordpress' },

  { source: 'root', target: 'hosting_considerations' },
  { source: 'hosting_considerations', target: 'storage_bandwidth' },
  { source: 'hosting_considerations', target: 'security_features' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'cheap_hosting_risks' },
  { source: 'anti_patterns', target: 'domain_expiration' },
]
