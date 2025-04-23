// articleData.js
const articleData = {
    introduction:
      'CSS libraries accelerate frontend development by offering pre-built styles, utilities, and UI components. From utility-first frameworks like Tailwind to classless libraries like Pico, they offer tradeoffs in flexibility, learning curve, and customization. Knowing when and how to use them — or when not to — is essential for sustainable design systems.',
  
    keyPrinciples: {
      title: 'Library Types & Use Cases',
      content: [
        '**Utility-First Frameworks:** Libraries like Tailwind provide low-level utility classes for precise, fast, and consistent UI building.',
        '**Component-Based Frameworks:** Solutions like Bootstrap or Flowbite offer pre-designed UI blocks with built-in interactivity.',
        '**Minimalist Libraries:** Pico and MVP.css enable clean designs by styling semantic HTML without utility classes.'
      ]
    },
  
    benefits: {
      title: 'Benefits',
      content: [
        '✅ Saves time by providing reusable components or utilities.',
        '✅ Establishes a baseline for consistent design language.',
        '✅ Often comes with accessibility and responsive defaults.',
        '✅ Can be extended or themed to match a custom brand.'
      ]
    },
  
    cons: {
      title: 'Cons',
      content: [
        '🚧 Learning curve for utility naming systems like Tailwind.',
        '🚧 Overrides can become complex and reduce maintainability.',
        '🚧 Using more than one library at once can lead to bloat and conflict.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns',
      content: [
        '**Overriding Defaults Excessively:** If you’re rewriting most of a framework, it may not be the right fit.',
        '**Mixing Multiple Libraries:** Combining Tailwind with Bootstrap (or others) causes bloated CSS and inconsistent behavior.',
        '**Unused Styles:** Failing to purge unused classes or remove unneeded components leads to large, slow CSS bundles.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Using Tailwind Utility Classes',
        code: `<button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Submit
  </button>`
      },
      {
        title: 'Tailwind Customization (tailwind.config.js)',
        code: `export default {
    theme: {
      extend: {
        colors: {
          brand: '#4f46e5'
        },
        fontFamily: {
          heading: ['Inter', 'sans-serif']
        }
      }
    }
  }`
      },
      {
        title: 'Bootstrap Grid Example',
        code: `<div class="row">
    <div class="col-md-6">Left</div>
    <div class="col-md-6">Right</div>
  </div>`
      },
      {
        title: 'Overriding Bootstrap Variables with Sass',
        code: `$primary: #6366f1;
  $body-bg: #f9fafb;
  
  @import 'bootstrap';`
      },
      {
        title: 'Pico Classless Styling',
        code: `<main>
    <h1>Welcome</h1>
    <p>This text is styled using semantic HTML and Pico CSS.</p>
    <button>Click me</button>
  </main>`
      },
      {
        title: 'Purging Unused Tailwind Classes (vite.config.js)',
        code: `import purge from '@fullhuman/postcss-purgecss';
  
  export default {
    css: {
      postcss: {
        plugins: [
          purge({
            content: ['./src/**/*.html', './src/**/*.jsx']
          })
        ]
      }
    }
  }`
      }
    ],
  
    conclusion:
      'CSS libraries can supercharge frontend workflows — but only if used strategically. The best results come from aligning your system’s needs with the right type of library, maintaining clean override practices, and trimming unused styles for performance. A good library accelerates your system; a poorly managed one can slow it down.'
  };
  
  export default articleData;
  