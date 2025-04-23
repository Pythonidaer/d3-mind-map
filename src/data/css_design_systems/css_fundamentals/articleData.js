// articleData.js
const articleData = {
    introduction:
      'Understanding CSS fundamentals is essential for maintaining scalable and conflict-free styles in a design system. Mastery of these concepts enables you to write efficient, predictable, and modular CSS that integrates seamlessly with component-driven development.',
  
    keyPrinciples: {
      title: 'Fundamental Concepts',
      content: [
        '**Selectors:** Used to target elements in order to apply styles based on tag, class, ID, attribute, or state.',
        '**Specificity:** A scoring system used by the browser to determine which CSS rule takes precedence.',
        '**Cascade:** Defines how conflicting styles are resolved based on importance, specificity, and source order.',
        '**Inheritance:** Automatically passes down certain styles (like font and color) from parent to child elements.',
        '**Cascade Layers:** A modern way to organize and control the priority of style origins using `@layer`.',
        '**Flat Architecture:** Encourages shallow nesting and predictable, class-based styles to reduce specificity issues.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Reduces bugs from conflicting styles or unexpected overrides.',
        '✅ Improves maintainability and readability of CSS.',
        '✅ Encourages modular, component-friendly code.',
        '✅ Provides more predictable styling behavior in complex UIs.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Requires developers to understand browser behavior deeply.',
        '🚧 Mistakes in specificity or inheritance can lead to hard-to-debug styling issues.',
        '🚧 Misuse of advanced selectors or deep combinators can reduce performance or clarity.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Overly Specific Selectors:** Avoid chaining too many classes or elements (e.g., `ul li a span`).',
        '**ID Selectors for Styling:** IDs have very high specificity and are hard to override cleanly.',
        '**Global Overrides:** Using `!important` or global class overrides can break encapsulation.',
        '**Over-Nesting with Preprocessors:** Deep selector trees from Sass/LESS can lead to unexpected style clashes.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Selector Types',
        code: `/* Element selector */
  p {
    font-size: 1rem;
  }
  
  /* Class selector */
  .card {
    box-shadow: var(--shadow-default);
  }
  
  /* Attribute selector */
  input[type="checkbox"] {
    accent-color: var(--color-primary);
  }
  
  /* Pseudo-class selector */
  .button:hover {
    background-color: var(--color-hover);
  }
  
  /* Pseudo-element selector */
  .label::before {
    content: '*';
    color: red;
  }`
      },
      {
        title: 'Specificity Hierarchy Example',
        code: `/* Least specific: element */
  p {
    color: black;
  }
  
  /* More specific: class */
  .text {
    color: gray;
  }
  
  /* Most specific: ID */
  #highlight {
    color: red;
  }
  
  /* Output: <p id="highlight" class="text"> → red wins */`
      },
      {
        title: 'Combinators and Group Selectors',
        code: `/* Descendant selector */
  .card .title {
    font-weight: bold;
  }
  
  /* Child selector */
  .card > .title {
    padding: 0.5rem;
  }
  
  /* Adjacent sibling */
  input + label {
    margin-left: 0.5rem;
  }
  
  /* Grouping */
  h1, h2, h3 {
    font-family: var(--font-heading);
  }`
      },
      {
        title: ':is() and :where() Usage',
        code: `/* :is() carries specificity of the most specific argument */
  :is(h1, h2, h3).highlight {
    color: var(--color-primary);
  }
  
  /* :where() has zero specificity */
  :where(button, input) {
    border-radius: 4px;
    padding: 0.5rem;
  }`
      },
      {
        title: 'Cascade Layering with @layer',
        code: `@layer base, components, utilities;
  
  @layer base {
    h1 {
      font-size: 2rem;
    }
  }
  
  @layer components {
    .button {
      padding: 1rem 2rem;
    }
  }
  
  @layer utilities {
    .text-red {
      color: red;
    }
  }
  
  /* Later layers override earlier layers if specificity is equal */`
      },
      {
        title: 'Flat Architecture Example (Avoid Nesting)',
        code: `/* Avoid deeply nested selectors */
  .nav ul li a span {
    color: #333;
  }
  
  /* Prefer class-based styling */
  .nav-link {
    color: #333;
  }`
      }
    ],
  
    conclusion:
      'A firm grasp of CSS fundamentals is crucial to writing clean and scalable design system code. By using predictable selectors, managing specificity, and leveraging modern techniques like `@layer`, you create a CSS architecture that’s resilient and easy to reason about.'
  };
  
  export default articleData;
  