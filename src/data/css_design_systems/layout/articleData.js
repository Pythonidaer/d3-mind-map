// articleData.js
const articleData = {
    introduction:
      'Layout strategies in a CSS Design System determine how UI components are positioned, spaced, and adapted across screen sizes. Proper use of tools like Flexbox, Grid, and media queries ensures responsive, maintainable, and scalable layouts that work across devices and design patterns.',
  
    keyPrinciples: {
      title: 'Layout Strategies',
      content: [
        '**Flexbox:** A one-dimensional layout model for aligning items along rows or columns within a container.',
        '**CSS Grid:** A two-dimensional layout model that structures content into rows and columns.',
        '**Media Queries:** Apply different styles based on device characteristics like screen width or orientation.',
        '**Reusable Layout Patterns:** Establish predictable and repeatable layout models such as grid systems or component zones.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Supports complex, responsive interfaces with minimal code.',
        '✅ Encourages reusable patterns and consistent alignment across components.',
        '✅ Makes layout behavior predictable and easier to debug.',
        '✅ Enhances responsiveness and UX across device types.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Can be over-engineered with too many nested containers or utility layers.',
        '🚧 Complex grid systems may confuse newer developers.',
        '🚧 Lack of clear breakpoints can lead to visual inconsistencies.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Hardcoded Spacing:** Using fixed `px` values for margins or paddings makes the layout brittle and unresponsive.',
        '**Excessive Nesting:** Deep nesting of flex/grid containers adds unnecessary complexity.',
        '**Not Mobile-First:** Ignoring mobile-first styles leads to broken layouts on smaller screens.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Basic Flexbox Layout',
        code: `.toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }`
      },
      {
        title: 'Grid-Based Page Template',
        code: `.layout {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar content";
    grid-template-columns: 250px 1fr;
    gap: 2rem;
  }`
      },
      {
        title: 'Media Queries for Responsiveness',
        code: `@media (max-width: 768px) {
    .layout {
      grid-template-areas:
        "header"
        "content"
        "sidebar";
      grid-template-columns: 1fr;
    }
  }`
      },
      {
        title: 'Reusable Utility-First Layout',
        code: `<div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-white">Card 1</div>
    <div class="p-4 bg-white">Card 2</div>
  </div>`
      },
      {
        title: 'Responsive Grid Auto-Fit',
        code: `.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }`
      },
      {
        title: 'Mobile-First Breakpoint Setup',
        code: `/* Base: mobile-first */
  .container {
    padding: 1rem;
    flex-direction: column;
  }
  
  /* Enhance at larger breakpoints */
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      padding: 2rem;
    }
  }`
      }
    ],
  
    conclusion:
      'A good layout system balances simplicity and power. Whether using Flexbox for single-axis alignment or Grid for page templates, clear structure and media query strategies are key to creating responsive, reusable, and developer-friendly designs. Consistency in layout means faster implementation and better UX.'
  };
  
  export default articleData;
  