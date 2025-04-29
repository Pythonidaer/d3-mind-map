const articleData = {
  introduction: `The Security tab in Chrome DevTools offers an essential toolkit for assessing the security posture of a web application. It enables developers to inspect HTTPS configurations, validate certificates, detect mixed content, analyze Content Security Policy (CSP) issues, and verify HTTP security headers, ensuring user data and interactions are protected.`,

  security_states: {
    title: 'Security States',
    content: [
      'Chrome categorizes page security into secure, insecure, or warning states based on the connection and resource loading.',
      'A quick glance helps identify major vulnerabilities like missing HTTPS or mixed content.',
    ],
  },

  secure_connection: {
    title: 'Secure Connection',
    content: [
      'All resources are served over HTTPS with a valid certificate.',
      'Ensures encrypted communication, protecting user data from interception.',
    ],
  },

  insecure_connection: {
    title: 'Insecure Connection',
    content: [
      'The page or its subresources are loaded over HTTP, exposing users to data leaks and attacks.',
    ],
  },

  warning_connection: {
    title: 'Warning Connection',
    content: [
      'The page has minor security risks like mixed content or using deprecated TLS versions.',
      'Users are partially protected but still vulnerable to some risks.',
    ],
  },

  certificate_inspection: {
    title: 'Certificate Inspection',
    content: [
      'SSL/TLS certificates ensure site authenticity and secure data transfer.',
      'The Security tab allows viewing certificate details, issuer information, and expiration.',
    ],
  },

  certificate_validity: {
    title: 'Certificate Validity',
    content: [
      'Verify if the certificate is current, not expired, and issued by a trusted authority.',
    ],
  },

  certificate_chain: {
    title: 'Certificate Chain',
    content: [
      'Trace the full certificate hierarchy from root certificate to end-entity to ensure trust and completeness.',
    ],
  },

  mixed_content_detection: {
    title: 'Mixed Content Detection',
    content: ['HTTPS pages should not load any insecure HTTP resources.'],
  },

  active_mixed_content: {
    title: 'Active Mixed Content',
    content: [
      'Scripts or stylesheets loaded over HTTP on an HTTPS page can fully compromise page security.',
      'Browsers often block active mixed content.',
    ],
  },

  passive_mixed_content: {
    title: 'Passive Mixed Content',
    content: [
      'Images, audio, or video loaded over HTTP might not compromise page structure, but still undermine full security.',
      'Browsers sometimes allow passive mixed content with warnings.',
    ],
  },

  csp_analysis: {
    title: 'Content Security Policy (CSP) Analysis',
    content: [
      'CSP defines which resources are allowed to load and where they can come from, mitigating XSS and injection risks.',
    ],
  },

  csp_violation_reports: {
    title: 'CSP Violation Reports',
    content: [
      'When violations occur (e.g., unauthorized scripts), DevTools lists blocked resources and their offending policies.',
    ],
  },

  improving_csp: {
    title: 'Improving CSP Rules',
    content: [
      'Define strict source lists, avoid unsafe-inline JavaScript, and regularly audit CSP configurations.',
    ],
  },

  security_headers: {
    title: 'Security Headers',
    content: [
      'HTTP response headers can enforce browser behaviors that strengthen site security.',
    ],
  },

  hsts: {
    title: 'HTTP Strict Transport Security (HSTS)',
    content: [
      'Forces browsers to interact with the site only over HTTPS, preventing downgrade attacks.',
      'Configured via the Strict-Transport-Security header.',
    ],
  },

  content_type_options: {
    title: 'X-Content-Type-Options',
    content: [
      'Prevents browsers from MIME-sniffing a response away from the declared content-type, mitigating attack risks.',
    ],
  },

  benefits: {
    title: 'Benefits',
    content: [
      'Quickly assess HTTPS and certificate health.',
      'Identify mixed content risks and solve them proactively.',
      'Improve defense against XSS, MITM attacks, and insecure resource loading.',
    ],
  },

  cons: {
    title: 'Cons',
    content: [
      'Does not automatically fix issues — developers must remediate manually.',
      'Some reports (e.g., CSP) require advanced knowledge to interpret properly.',
      'Intermittent issues like expired certificates might not always be immediately obvious without regular monitoring.',
    ],
  },

  codeExamples: [
    {
      title: 'View Certificate Details',
      code: `// Open DevTools > Security
  // Click "View Certificate" > Inspect issuer, expiration, and trust chain`,
    },
    {
      title: 'Identify Mixed Content',
      code: `// Security tab > Look for "mixed content" warnings
  // Expand warnings to see specific resources loaded insecurely`,
    },
    {
      title: 'Check HSTS Header',
      code: `// In Network tab
  // Inspect response headers
  // Look for "Strict-Transport-Security" directive`,
    },
    {
      title: 'Find CSP Violations',
      code: `// Open Security panel
  // Review "Content Security Policy" issues section
  // Identify blocked scripts or unauthorized sources`,
    },
  ],

  conclusion: `The Security tab empowers developers to build safer websites by offering clear visibility into HTTPS implementation, certificate trust chains, mixed content vulnerabilities, security header enforcement, and CSP effectiveness. By integrating regular security audits into development workflows, developers can significantly enhance user trust and protect applications from common attack vectors.`,
}

export default articleData
