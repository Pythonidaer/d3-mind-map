// articleData.js
const articleData = {
    introduction:
      'Color systems in a CSS Design System define how color is used, categorized, and implemented across components. A thoughtful color system supports branding, accessibility, and maintainability by using palettes, tokens, and semantic roles to standardize color usage.',
  
    keyPrinciples: {
      title: 'Color System Fundamentals',
      content: [
        '**Color Palette:** A set of primary, secondary, and neutral colors used across backgrounds, text, borders, and UI elements.',
        '**Color Tokens:** Reusable variables that abstract raw color values into meaningful names like `--color-primary` or `--bg-surface`.',
        '**Brand Alignment:** Ensures color usage matches the product’s personality and visual identity.',
        '**Accessibility:** Colors must meet contrast standards and avoid being the sole carrier of meaning (e.g., error states).'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Creates consistency across UI components.',
        '✅ Makes themes easy to swap or update.',
        '✅ Improves accessibility and usability.',
        '✅ Enables semantic styling across design tokens and themes.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Requires upfront planning and naming conventions.',
        '🚧 Poorly named tokens can confuse developers.',
        '🚧 Theme overrides can become unmanageable if token structure is not modular.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Color-Only Indicators:** Relying solely on color (e.g., red = error) without accompanying text or icons breaks accessibility.',
        '**Inconsistent Use of Color:** Using different colors for the same purpose (e.g., multiple “success” colors) causes confusion.',
        '**Hardcoded Values:** Directly writing hex codes in component styles reduces theme flexibility and violates design system structure.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Defining a Semantic Color Token System',
        code: `:root {
    --color-primary: #4f46e5;
    --color-primary-hover: #4338ca;
    --color-success: #16a34a;
    --color-error: #dc2626;
  
    --bg-surface: #ffffff;
    --text-body: #1f2937;
  }`
      },
      {
        title: 'Applying Color Tokens in Components',
        code: `.button {
    background-color: var(--color-primary);
    color: #fff;
  }
  .button:hover {
    background-color: var(--color-primary-hover);
  }`
      },
      {
        title: 'Dark Mode with Token Overrides',
        code: `@media (prefers-color-scheme: dark) {
    :root {
      --bg-surface: #111827;
      --text-body: #f9fafb;
      --color-primary: #6366f1;
    }
  }
  
  body {
    background-color: var(--bg-surface);
    color: var(--text-body);
  }`
      },
      {
        title: 'Contrast Accessibility Check (Using Tools)',
        code: `/* Use tools like WebAIM Contrast Checker or extensions like Stark */
  .text-label {
    color: #6b7280;
    background-color: #ffffff; /* Check ratio: ~5.2:1 */
  }`
      },
      {
        title: 'Avoiding Hardcoded Values (Bad Practice)',
        code: `/* ❌ Bad */
  .card-title {
    color: #3498db;
  }
  
  /* ✅ Good */
  .card-title {
    color: var(--color-primary);
  }`
      }
    ],
  
    conclusion:
      'A well-structured color system supports brand integrity, accessibility, and theme scalability. By using semantic tokens and testing contrast, you can build UIs that are inclusive, consistent, and easy to maintain. Avoiding anti-patterns like hardcoded values and color-only meaning ensures long-term flexibility and compliance.'
  };
  
  export default articleData;
  