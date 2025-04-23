// articleData.js
const articleData = {
    introduction:
      'Responsiveness ensures that interfaces look great and function properly on a variety of devices and screen sizes. By leveraging CSS features like media queries, fluid units, and mobile-first strategies, responsive design systems can adapt content for any context.',
  
    keyPrinciples: {
      title: 'Responsive Design Concepts',
      content: [
        '**Media Queries:** Allow for conditional styling based on screen characteristics such as width, orientation, and resolution.',
        '**Breakpoints:** Specific screen width thresholds that trigger layout or style changes.',
        '**Mobile-First Approach:** Base styles are designed for mobile and enhanced for larger screens using `min-width` queries.',
        '**Fluid Units:** Use `%`, `rem`, `vw`, `vh`, and `clamp()` to enable scalable design across screen sizes.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Optimizes user experience across mobile, tablet, and desktop.',
        '✅ Improves accessibility by ensuring content is legible and well-structured at all sizes.',
        '✅ Promotes layout flexibility and future-proofs the design system.',
        '✅ Reduces need for platform-specific interfaces or native apps.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Requires more testing across devices and resolutions.',
        '🚧 Poorly chosen breakpoints or units can result in inconsistent behavior.',
        '🚧 Older browsers may not support newer techniques like container queries.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Desktop-First Layouts:** Designing only for large screens and squeezing down creates poor mobile UX.',
        '**Fixed Widths:** Hardcoding widths (e.g., `width: 960px`) reduces adaptability and can cause overflow on small devices.',
        '**Missing Viewport Meta Tag:** Without this tag, mobile browsers will scale the layout incorrectly.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Mobile-First Breakpoints',
        code: `/* Base styles (mobile-first) */
  .card {
    padding: 1rem;
    font-size: 1rem;
  }
  
  /* Tablet */
  @media (min-width: 768px) {
    .card {
      padding: 1.5rem;
      font-size: 1.125rem;
    }
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    .card {
      padding: 2rem;
      font-size: 1.25rem;
    }
  }`
      },
      {
        title: 'Using clamp() for Responsive Text',
        code: `.heading {
    font-size: clamp(1.25rem, 4vw, 2.5rem);
  }`
      },
      {
        title: 'Responsive Grid with auto-fit and minmax',
        code: `.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }`
      },
      {
        title: 'Container Queries (experimental)',
        code: `@container (min-width: 400px) {
    .card {
      flex-direction: row;
    }
  }`
      },
      {
        title: 'Viewport Meta Tag',
        code: `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>`
      },
      {
        title: 'Avoiding Fixed Widths (Bad Example)',
        code: `/* ❌ Not responsive */
  .container {
    width: 960px;
  }
  
  /* ✅ Responsive */
  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
  }`
      }
    ],
  
    conclusion:
      'Responsive design is fundamental to a modern web experience. Through fluid units, mobile-first architecture, and careful breakpoint planning, developers can build layouts that adapt seamlessly to user environments. Avoiding common pitfalls like fixed widths or missing viewport tags ensures flexibility and accessibility across devices.'
  };
  
  export default articleData;
  