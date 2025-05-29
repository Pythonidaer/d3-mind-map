const articleData = {
    introduction: `Tints, shades, and tones are foundational tools in a frontend developer's visual design toolbox. These variations of color help define depth, mood, readability, and visual hierarchy across interfaces. Understanding how to create and apply them effectively ensures better design consistency, accessibility, and brand alignment.`,
  
    keyPrinciples: {
      title: 'Key Principles of Tints, Shades, and Tones',
      content: [
        'Tints, shades, and tones are methods of modifying a base hue by adding white, black, or gray.',
        'They are essential for establishing visual depth, clarity, and emotional impact in UI design.',
        'Consistent use of tints and shades supports accessible themes and builds visual hierarchy.',
        'Tones, by reducing saturation, allow for subtler designs that feel more professional and less overwhelming.',
        'Color modification should be tokenized and consistent — not applied arbitrarily.'
      ]
    },
  
    deepDive_tints: {
      title: 'Tints: Lightening a Hue',
      content: [
        'Tints are created by adding white to a base color, resulting in a lighter, more pastel-like version. In frontend design, tints serve to soften visuals and create lighter themes.',
        'They are commonly used in light-mode designs, backgrounds, and inactive UI elements. Tints offer contrast without harshness.',
        'Pastel tints often convey approachability, calm, and optimism, and are frequently used in wellness, education, and consumer product UIs.'
      ]
    },
  
    deepDive_shades: {
      title: 'Shades: Darkening a Hue',
      content: [
        'Shades are formed by adding black to a base color, producing deeper, richer variants that enhance contrast and seriousness.',
        'They play a major role in dark mode interfaces and are ideal for modal overlays, shadow states, and callout emphasis.',
        'Shades support legibility when paired with light text, and are crucial for structuring complex visual layouts.'
      ]
    },
  
    deepDive_tones: {
      title: 'Tones: Adding Gray to Adjust Saturation',
      content: [
        'Tones reduce the intensity of a color by adding gray, producing more neutral, subdued variants.',
        'They are useful for enterprise design systems, muted backgrounds, or subtle secondary elements that should not compete with primary content.',
        'Tones add sophistication and visual balance when vibrant hues feel overwhelming or distracting.'
      ]
    },
  
    deepDive_cons: {
      title: 'Common Drawbacks and Misuses',
      content: [
        'Using only tints can lead to overly pale UIs that lack contrast and clarity.',
        'Poorly chosen dark shades may not meet WCAG contrast ratios, especially in dark themes.',
        'Tones that are too desaturated can create a muddy or lifeless look, especially in data-driven dashboards or call-to-action interfaces.'
      ]
    },
  
    deepDive_antiPatterns: {
      title: 'Anti-Patterns in Color Variation Usage',
      content: [
        'Avoid applying tints, shades, and tones manually or by eye — use HSL/HSB systems or utility functions to ensure consistency.',
        'Do not skip semantic roles. Every variation should map to a meaning (e.g., `button-secondary`, `alert-muted`).',
        'Ensure variations maintain relative spacing in lightness or saturation to preserve a sense of order and rhythm.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Using Tints, Shades, and Tones Properly',
      content: [
        'Helps define visual hierarchy with light and dark contrasts.',
        'Creates aesthetically pleasing themes that support branding and UX goals.',
        'Supports accessibility by enabling better text contrast and visual focus.',
        'Encourages scalable, token-based design systems with systematic color layers.',
        'Allows emotional modulation — lighter for casual or playful, darker for serious or focused.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Create a Tint Using HSL Lightness',
        code: `/* Base color: hsl(200, 90%, 50%) */
  .button-tint {
    background-color: hsl(200, 90%, 85%); /* Tint: same hue/saturation, higher lightness */
    color: #0D1B2A;
  }`
      },
      {
        title: 'Create a Shade Using HSL Lightness',
        code: `/* Base color: hsl(200, 90%, 50%) */
  .button-shade {
    background-color: hsl(200, 90%, 20%); /* Shade: lower lightness */
    color: #ffffff;
  }`
      },
      {
        title: 'Create a Tone by Reducing Saturation',
        code: `/* Base color: hsl(200, 90%, 50%) */
  .button-tone {
    background-color: hsl(200, 40%, 50%); /* Tone: same hue/lightness, lower saturation */
    color: #ffffff;
  }`
      },
      {
        title: 'Tints, Shades, and Tones with Opacity Layering',
        code: `.card {
    background-color: #ffffff;
    position: relative;
  }
  
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.05); /* Apply a tone or shade effect */
    pointer-events: none;
  }`
      },
      {
        title: 'Using Design Tokens for Systematic Variations',
        code: `:root {
    --color-primary-hue: 240;
    --color-primary-sat: 100%;
    --color-primary-light: 85%;
    --color-primary-base: 50%;
    --color-primary-dark: 20%;
  
    --color-primary-tint: hsl(var(--color-primary-hue), var(--color-primary-sat), var(--color-primary-light));
    --color-primary: hsl(var(--color-primary-hue), var(--color-primary-sat), var(--color-primary-base));
    --color-primary-shade: hsl(var(--color-primary-hue), var(--color-primary-sat), var(--color-primary-dark));
  }`
      }
    ],
  
    conclusion: `Mastering tints, shades, and tones enables developers to create color systems that are adaptable, emotionally resonant, and structurally sound. These simple modifications to a base hue provide rich opportunity for expression, usability, and scalable theme development. By approaching color variation with discipline and intent, your UI will not only look beautiful but serve its users better.`
  };
  
  export default articleData;
  