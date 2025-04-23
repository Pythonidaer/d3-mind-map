// articleData.js
const articleData = {
    introduction:
      'Typography plays a critical role in design systems by defining how text appears and functions across all components and screen sizes. It impacts branding, usability, accessibility, and readability — making it a core pillar of visual communication in any interface.',
  
    keyPrinciples: {
      title: 'Typography Fundamentals',
      content: [
        '**Type Scale:** A consistent set of font sizes and line heights creates clear content hierarchy and rhythm.',
        '**Font Pairings:** Thoughtfully matched typefaces enhance clarity, tone, and brand cohesion.',
        '**Readability:** Typography must prioritize legibility through controlled line height, spacing, and line length.',
        '**Accessibility:** Fonts and styling should be usable by all users, ensuring contrast, resizability, and clarity across devices.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Establishes consistent visual rhythm across all UI components.',
        '✅ Enhances branding through font choices and tone alignment.',
        '✅ Improves user comprehension and scanning through clear hierarchy.',
        '✅ Increases accessibility and inclusivity of digital content.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Poor choices can compromise readability or cause visual inconsistency.',
        '🚧 Overuse of font families and styles bloats the design and impacts performance.',
        '🚧 Inconsistent scaling or lack of accessibility adjustments leads to poor UX across devices.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Fixed Pixel Sizes:** Using px units can prevent user scaling and reduce accessibility.',
        '**Inconsistent Font Usage:** Mixing fonts arbitrarily across pages can break cohesion.',
        '**Long Line Lengths:** Lines over ~80 characters become difficult to read and scan.',
        '**Low Contrast Text:** Pale text on light backgrounds fails WCAG guidelines and is hard to read.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Establishing a Type Scale',
        code: `:root {
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-2xl: 2rem;
  }
  
  h1 {
    font-size: var(--font-size-2xl);
  }
  p {
    font-size: var(--font-size-md);
  }`
      },
      {
        title: 'Pairing Fonts with Fallbacks',
        code: `body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  }
  
  h1 {
    font-family: 'Playfair Display', 'Georgia', serif;
  }`
      },
      {
        title: 'Line Height and Spacing',
        code: `p {
    line-height: 1.6;
    letter-spacing: 0.02em;
    margin-bottom: 1rem;
  }`
      },
      {
        title: 'Responsive Typography with clamp()',
        code: `h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
  }
  
  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
  }`
      },
      {
        title: 'Accessibility: High Contrast and User Scaling',
        code: `body {
    color: #111;
    background-color: #fff;
  }
  
  @media (prefers-contrast: more) {
    body {
      color: #000;
      background-color: #fff;
    }
  }` 
      }
    ],
  
    conclusion:
      'Typography is more than aesthetic — it structures content, expresses brand identity, and influences the way users experience information. By applying principles like scaling, spacing, font pairing, and accessibility, you can build a typographic system that’s robust, inclusive, and elegant.'
  };
  
  export default articleData;
  