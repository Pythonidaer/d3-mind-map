const articleData = {
    introduction: `Color systems and naming conventions provide the structure and language for how colors are defined, referenced, and shared across tools and technologies. Whether it's using RGB in CSS, named colors in a design system, or tokens that power theming in enterprise apps, understanding these models is essential to building consistent, scalable, and accessible UIs.`,
  
    keyPrinciples: {
      title: 'Fundamental Principles of Color Systems and Naming',
      content: [
        'Color models represent how we mathematically or perceptually define color (e.g., RGB, HSL).',
        'Color formats describe how we express those models in code (e.g., hex, rgba).',
        'Naming conventions provide abstraction layers for reuse, theming, or communicating intent.',
        'Frontend tooling often requires color conversion across models and formats.',
        'Cross-platform compatibility and accessibility depend on thoughtful system choices.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Clear Systems and Naming Conventions',
      content: [
        'Enables consistency across design and engineering teams.',
        'Improves reusability via tokens, variables, and semantic naming.',
        'Simplifies maintenance and global theming across brands.',
        'Supports accessibility tools that depend on predictable formatting.',
        'Boosts developer efficiency with well-labeled, readable code.'
      ]
    },
  
    cons: {
      title: 'Common Challenges and Drawbacks',
      content: [
        'Overly abstract names (e.g., `neutral-01`) can reduce readability.',
        'Poor system interoperability can result in mismatched colors.',
        'Some color systems (e.g., CMYK) are irrelevant in web contexts but still used by designers.',
        'CSS named colors are limited and inconsistent across user agents.',
        'Managing legacy systems alongside modern tokens can create confusion.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns to Avoid',
      content: [
        'Hardcoding hex values throughout codebases without semantic meaning.',
        'Mixing color formats within the same component or theme.',
        'Using design tool colors without mapping to development equivalents.',
        'Duplicating token names across themes with conflicting values.',
        'Ignoring color contrast and WCAG compliance when defining primary palettes.'
      ]
    },
  
    deepDive_color_models: {
      title: 'Color Models in Use',
      content: [
        '**RGB**: Additive color model used for screen output. Each color is made from mixing Red, Green, and Blue light values from 0–255.',
        '**HSL**: More human-friendly model representing Hue (angle on color wheel), Saturation (intensity), and Lightness (brightness).',
        '**CMYK**: Subtractive color model used in print. Largely irrelevant to frontend development, but useful to know when collaborating with marketing or branding teams.'
      ]
    },
  
    deepDive_naming_systems: {
      title: 'Naming Systems and Their Use Cases',
      content: [
        '**CSS Named Colors**: Browser-supported names like "salmon", "olive", or "skyblue". Limited in number, but easy to remember.',
        '**Design Tokens**: Names like `primary-500`, `surface-dark`, or `text-secondary`. They map directly to brand palettes and allow cross-theme styling.',
        '**Utility Scales**: Used in frameworks like Tailwind (`blue-100`, `blue-900`), these provide scalable brightness and contrast levels by index.'
      ]
    },
  
    deepDive_cross_system_usage: {
      title: 'How Color Systems Interact Across Tools',
      content: [
        'Figma allows users to set styles in HSL, but exports to RGB or HEX.',
        'CSS uses hex, rgb(a), or hsl(a) formats. These can be swapped or overridden via tokens or variables.',
        'Accessibility tools use format-agnostic contrast checking—so consistent model use is more about maintainability than functionality.',
        'Frameworks like Tailwind or Chakra define their own utility-driven naming systems. These can be integrated into tokens or exported from Figma using plugins.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Hex, RGBa, and HSL Usage in CSS',
        code: `:root {
    --brand-primary: #0d47a1;      /* HEX */
    --brand-accent: rgba(33, 150, 243, 0.9);  /* RGBa */
    --highlight: hsl(200, 100%, 50%); /* HSL */
  }`
      },
      {
        title: 'Design Token Mapping for Themes',
        code: `const theme = {
    primary: {
      100: '#E3F2FD',
      500: '#2196F3',
      900: '#0D47A1'
    },
    surface: {
      light: '#FFFFFF',
      dark: '#121212'
    }
  };`
      },
      {
        title: 'Tailwind Color Utilities Example',
        code: `<div className="bg-blue-500 text-white hover:bg-blue-700">
    Submit
  </div>`
      },
      {
        title: 'Converting Between Models (RGB ↔ HSL)',
        code: `function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
      }
      h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }`
      }
    ],
  
    conclusion: `Color systems and naming conventions form the architectural foundation for all color usage in frontend development. By adopting scalable, readable, and interoperable systems—from RGB and HSL models to semantic tokens and utility scales—developers and designers can collaborate seamlessly and maintain visual consistency across platforms and tools. Remember to choose the right model for your context, use meaningful names that align with purpose, and verify your choices through accessibility and design system workflows.`
  };
  
  export default articleData;
  