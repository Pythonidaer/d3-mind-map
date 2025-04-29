import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Security\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Analyze and debug website security including HTTPS status, certificates, mixed content, and security headers.',
  },

  // Level 1
  {
    id: 'security_states',
    label: 'Security\nStates',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Check if the connection is secure, insecure, or has warnings.',
  },
  {
    id: 'certificate_inspection',
    label: 'Certificate\nInspection',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Examine SSL/TLS certificates and their properties.',
  },
  {
    id: 'mixed_content_detection',
    label: 'Mixed\nContent Detection',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Identify insecure resources loaded over HTTP on an HTTPS page.',
  },
  {
    id: 'csp_analysis',
    label: 'Content Security\nPolicy (CSP)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Inspect CSP violations to prevent cross-site scripting (XSS) attacks.',
  },
  {
    id: 'security_headers',
    label: 'Security\nHeaders',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Review HTTP security headers like HSTS and X-Content-Type-Options.',
  },

  // Level 2 under Security States
  {
    id: 'secure_connection',
    label: 'Secure\nConnection',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Connection is fully secured with a valid certificate and HTTPS.',
  },
  {
    id: 'insecure_connection',
    label: 'Insecure\nConnection',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Page is loaded over HTTP or has major security issues.',
  },
  {
    id: 'warning_connection',
    label: 'Warning\nConnection',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Connection has minor issues such as mixed content or outdated TLS.',
  },

  // Level 2 under Certificate Inspection
  {
    id: 'certificate_validity',
    label: 'Certificate\nValidity',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Check the certificate expiration date and issuing authority.',
  },
  {
    id: 'certificate_chain',
    label: 'Certificate\nChain',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Verify that the full certificate chain is trusted and correctly configured.',
  },

  // Level 2 under Mixed Content Detection
  {
    id: 'active_mixed_content',
    label: 'Active\nMixed Content',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Insecure scripts or stylesheets that compromise page security.',
  },
  {
    id: 'passive_mixed_content',
    label: 'Passive\nMixed Content',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Insecure images, videos, or audio that do not directly alter page content.',
  },

  // Level 2 under CSP Analysis
  {
    id: 'csp_violation_reports',
    label: 'CSP\nViolation Reports',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'View violations triggered by blocked scripts or unauthorized resources.',
  },
  {
    id: 'improving_csp',
    label: 'Improving\nCSP Rules',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Harden policies to restrict allowed sources and reduce attack surfaces.',
  },

  // Level 2 under Security Headers
  {
    id: 'hsts',
    label: 'HTTP Strict\nTransport Security (HSTS)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Enforce HTTPS-only communication and prevent protocol downgrade attacks.',
  },
  {
    id: 'content_type_options',
    label: 'X-Content-Type-Options',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Prevent MIME type sniffing and reduce attack vectors for malicious files.',
  },
]

export const links = [
  { source: 'root', target: 'security_states' },
  { source: 'root', target: 'certificate_inspection' },
  { source: 'root', target: 'mixed_content_detection' },
  { source: 'root', target: 'csp_analysis' },
  { source: 'root', target: 'security_headers' },

  // Security States breakdown
  { source: 'security_states', target: 'secure_connection' },
  { source: 'security_states', target: 'insecure_connection' },
  { source: 'security_states', target: 'warning_connection' },

  // Certificate Inspection breakdown
  { source: 'certificate_inspection', target: 'certificate_validity' },
  { source: 'certificate_inspection', target: 'certificate_chain' },

  // Mixed Content Detection breakdown
  { source: 'mixed_content_detection', target: 'active_mixed_content' },
  { source: 'mixed_content_detection', target: 'passive_mixed_content' },

  // CSP Analysis breakdown
  { source: 'csp_analysis', target: 'csp_violation_reports' },
  { source: 'csp_analysis', target: 'improving_csp' },

  // Security Headers breakdown
  { source: 'security_headers', target: 'hsts' },
  { source: 'security_headers', target: 'content_type_options' },
]
