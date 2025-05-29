const articleData = {
    introduction: `Color usage in frontend development isn't just about aesthetic appeal — it's about creating scalable, accessible, and maintainable systems that support diverse user needs and evolving design trends. This article outlines best practices for frontend developers when working with color, focusing on accessibility, scalability, design-developer collaboration, and responsiveness across light/dark modes. Each section is built to guide teams in forming consistent, inclusive, and future-proof color strategies.`,
  
    keyPrinciples: {
      title: 'Core Principles of Frontend Color Usage',
      content: [
        'Color choices must balance visual branding with accessibility and usability.',
        'Scalability requires semantic naming and tokenization to support growing interfaces.',
        'Design and development must share unified color systems and documentation.',
        'Color systems must accommodate user preferences like dark mode and high contrast.',
      ],
    },
  
    benefits: {
      title: 'Benefits of Color Best Practices',
      content: [
        'Improves accessibility and compliance with WCAG standards.',
        'Enables fast iteration and theming through reusable tokens.',
        'Reduces errors during handoff between design and development teams.',
        'Creates consistent and professional-looking UIs across breakpoints and themes.',
      ],
    },
  
    cons: {
      title: 'Potential Drawbacks',
      content: [
        'Initial setup for tokens, themes, and documentation can be time-intensive.',
        'Requires consistent collaboration between design and dev teams.',
        'Over-tokenization or misaligned naming conventions can become confusing if not standardized.',
      ],
    },
  
    antiPatterns: {
      title: 'Anti-Patterns to Avoid',
      content: [
        'Hardcoding raw hex values throughout the codebase.',
        'Using color for meaning without additional visual or textual indicators.',
        'Skipping dark/light theme testing in components or design system builds.',
        'Failing to keep tokens in sync across design tools (e.g., Figma) and code (e.g., Tailwind config or CSS custom properties).',
      ],
    },
  
    deepDive_accessibility: {
      title: 'Accessibility Compliance',
      content: [
        'Accessible color practices are foundational to frontend color design. Meeting WCAG 2.1 AA standards requires contrast ratios of at least 4.5:1 for normal text and 3:1 for large text. Developers should also ensure that color is never the only indicator of meaning (e.g., use both red and a warning icon).',
        'Colorblind-friendly palettes are essential for reaching users with deuteranopia or tritanopia. Designers should simulate various vision types using tools like Stark or Figma’s built-in preview modes.',
      ],
    },
  
    deepDive_scalability: {
      title: 'Scalability and Design Tokens',
      content: [
        'Token-based systems separate values from purpose. For example, instead of referencing #008000, you reference `color-success-bg`. This allows the underlying value to change without breaking meaning-based usage.',
        'Tokens should be grouped semantically (`button-primary`, `text-muted`) and layered (e.g., aliasing global tokens like `green-500` as part of a role-specific token like `alert-success-bg`).',
        'Use tools like Style Dictionary to sync design token files between platforms, or leverage systems like Tailwind\'s theme configuration.',
      ],
    },
  
    deepDive_design_dev_collab: {
      title: 'Design–Dev Collaboration',
      content: [
        'Color breakdowns in Figma should reflect the same names used in your CSS or JavaScript themes. This reduces confusion and eases the translation between visual and coded implementations.',
        'Use design review checklists to validate colors used in mockups: check contrast, dark mode compatibility, and token use.',
        'Collaborative docs (via Notion, Zeroheight, etc.) can keep design and dev aligned on available color tokens and their use cases.',
      ],
    },
  
    deepDive_responsive_theme: {
      title: 'Responsive and Theme-Aware Color Systems',
      content: [
        'Responsive themes should support automatic switching between light and dark mode using CSS media queries like `prefers-color-scheme`. However, token values must still maintain sufficient contrast across backgrounds.',
        'Components should adapt to contextual usage. For example, a success badge on a dark card may use a lighter green than the same badge on a white card. This is called contextual theming.',
        'Always test colors across a variety of surfaces, screen sizes, and states (hover, focus, active).',
      ],
    },
  
    codeExamples: [
      {
        title: 'Contrast Testing with JavaScript',
        code: `
  // Simple function to test contrast between two colors
  function getContrastRatio(hex1, hex2) {
    const luminance = (hex) => {
      const [r, g, b] = hex.match(/\w\w/g).map(c => parseInt(c, 16) / 255);
      const [R, G, B] = [r, g, b].map(c => c <= 0.03928 
        ? c / 12.92 
        : Math.pow((c + 0.055) / 1.055, 2.4)
      );
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    const L1 = luminance(hex1);
    const L2 = luminance(hex2);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }
  
  console.log(getContrastRatio('#ffffff', '#3f3f3f')); // e.g. 12.3:1
        `,
      },
      {
        title: 'CSS Token Setup for Theme Variables',
        code: `
  :root {
    --color-success: #28a745;
    --color-danger: #dc3545;
    --color-text: #212529;
    --color-bg: #ffffff;
  }
  
  [data-theme="dark"] {
    --color-success: #50fa7b;
    --color-danger: #ff5555;
    --color-text: #f8f8f2;
    --color-bg: #1e1e1e;
  }
  
  button.success {
    background-color: var(--color-success);
    color: var(--color-bg);
  }
        `,
      },
      {
        title: 'Tailwind Theme Token Extension',
        code: `
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#0070f3',
            dark: '#0051a3',
          },
          success: '#28a745',
          danger: '#dc3545',
        },
      },
    },
  };
        `,
      },
      {
        title: 'Using prefers-color-scheme in CSS',
        code: `
  body {
    background-color: #ffffff;
    color: #000000;
  }
  
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #121212;
      color: #e0e0e0;
    }
  }
        `,
      },
      {
        title: 'Design Token Hierarchy (Naming Guide)',
        code: `
  // Low-level token (global)
  const colorBlue500 = '#3b82f6';
  
  // Semantic token (role-based)
  const buttonPrimaryBg = colorBlue500;
        `,
      },
    ],
  
    conclusion: `Frontend color best practices are the cornerstone of a maintainable, inclusive, and beautiful digital experience. Developers should prioritize semantic tokenization, accessibility, responsive theming, and tight design-dev collaboration to build color systems that scale. The goal is not just consistency in appearance, but clarity in intention — making sure every color serves a purpose, adapts to user needs, and works across all environments. By adhering to these principles, teams ensure sustainable and future-proof UI development.`,
  };
  
  export default articleData;
  