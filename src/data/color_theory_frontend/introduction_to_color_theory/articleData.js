const articleData = {
    introduction: `This article serves as a comprehensive gateway into the entire "Color Theory for Frontend Developers" series. Color is a powerful design tool that impacts usability, emotion, branding, accessibility, and more. This overview introduces each core area of the color theory series, preparing developers and designers alike to understand, apply, and master color with technical precision and creative insight.`,
  
    keyPrinciples: {
      title: 'Key Principles of Color Theory in Frontend Development',
      content: [
        'Color theory integrates perception, psychology, science, and design into usable frameworks.',
        'Frontend developers must understand both technical representations (RGB, HSL, HEX) and visual principles (contrast, emotion, harmony).',
        'Color affects accessibility, branding, mood, and usability — and should never be used arbitrarily.',
        'Well-structured design systems define color usage in terms of tokens, roles, and contrast guidelines.',
        'Different color models (like HSB or LAB) exist to solve different problems — from device rendering to perceptual uniformity.'
      ]
    },
  
    deepDive_fundamentals: {
      title: 'Fundamentals: Wheel, Relationships, and Variations',
      content: [
        'The foundational layer includes three major subtopics: the color wheel, color relationships (schemes), and tints, shades, and tones.',
        'The **color wheel** introduces primary (red, blue, yellow), secondary (green, orange, purple), and tertiary colors (e.g., blue-green). It allows developers to conceptualize relationships visually.',
        '**Color relationships** such as complementary (opposites), analogous (adjacent), and triadic (equally spaced) schemes provide frameworks for contrast or harmony.',
        '**Tints, shades, and tones** modify base colors through the addition of white, black, or gray respectively, and help create depth, hierarchy, and mood variation across interfaces.'
      ]
    },
  
    deepDive_psychological: {
      title: 'Color Psychology, Branding, and Cultural Context',
      content: [
        'Color impacts emotion and cognition — a concept leveraged in marketing, UX design, and content prioritization.',
        '**Color psychology** explores how hues trigger emotional responses. Red may evoke urgency or energy, while blue might suggest trust and calm.',
        '**Branding and UX** strategies use color for identity, hierarchy, and trust. Calls-to-action often rely on vibrant contrasts to catch the eye.',
        'Designers must also consider **cultural and contextual meaning**: red symbolizes good luck in China, while symbolizing danger in Western cultures. Color appropriateness varies by geography, demographics, and use case.'
      ]
    },
  
    deepDive_technical: {
      title: 'Technical Foundations: Models, Spaces, and Conversion',
      content: [
        'Frontend developers must master how color is represented digitally. This includes **color models**, **spaces**, and **conversion techniques**.',
        '**HSB** (Hue, Saturation, Brightness) is a perceptual model, more intuitive than RGB. It allows developers to manipulate color visually.',
        '**Color spaces** like sRGB, Adobe RGB, and Display P3 define the limits (gamuts) of visible color on screens and print.',
        '**Color conversion** covers the transformation between HEX, RGB, HSL, and LAB. Each model serves different needs — HSL is readable for CSS theming, LAB is used for perceptual contrast.'
      ]
    },
  
    deepDive_frontend_usage: {
      title: 'Color in Frontend Development: Accessibility, Usage, and Tools',
      content: [
        'This section connects theory to daily frontend practice — including accessibility, UI implementation, and tooling.',
        '**Accessibility** is non-negotiable. Color contrast ratios must meet WCAG guidelines (4.5:1 for normal text, 3:1 for large text). Use color with semantic meaning, not as the only cue.',
        '**UI Usage** includes assigning color roles (primary, secondary, error), theming (light/dark modes), and token systems (e.g., `color-background-base`).',
        'Robust **tools and testing** environments help maintain quality: contrast checkers, color palette generators, and libraries like `chroma.js`, `color`, and dev tools assist in maintaining consistency and accessibility.'
      ]
    },
  
    benefits: {
      title: 'Why Study Color Theory in Frontend Development?',
      content: [
        'Helps developers and designers collaborate through shared vocabulary and purpose.',
        'Improves design system clarity with semantic tokens and scalable color schemes.',
        'Enhances UX by evoking the right emotional tone and prioritizing information hierarchy.',
        'Ensures accessibility compliance and inclusive design through contrast and redundancy.',
        'Reduces guesswork and rework by establishing design rules and reusable color patterns.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Color Wheel Example: CSS Variables for Primary/Secondary/Tertiary',
        code: `:root {
    --primary-red: #ff0000;
    --secondary-green: #00ff00;
    --tertiary-blue-green: #0ff;
  }`
      },
      {
        title: 'Color Scheme: Complementary and Analogous',
        code: `/* Complementary: blue + orange */
  .button {
    background-color: #007BFF;
    border: 2px solid #FFA500;
  }
  
  /* Analogous: blue, teal, green */
  .section-header {
    background: linear-gradient(to right, #007BFF, #00CED1, #32CD32);
  }`
      },
      {
        title: 'Tints, Shades, and Tones Example',
        code: `/* Base Color */
  --base-blue: hsl(210, 100%, 50%);
  
  /* Tint (add white): lighter */
  --tint-blue: hsl(210, 100%, 70%);
  
  /* Shade (add black): darker */
  --shade-blue: hsl(210, 100%, 30%);
  
  /* Tone (add gray): muted */
  --tone-blue: hsl(210, 30%, 50%);`
      },
      {
        title: 'Color Psychology Example: CTA Design',
        code: `.cta-button {
    background-color: #e53935; /* Urgency: red */
    color: #fff;
    font-weight: bold;
  }
  
  .success-banner {
    background-color: #43a047; /* Trust: green */
    color: #fff;
  }`
      },
      {
        title: 'Branding Palette Setup',
        code: `:root {
    --brand-primary: #4B0082;
    --brand-secondary: #9370DB;
    --brand-accent: #FFD700;
  }`
      },
      {
        title: 'Cultural Context Flexibility',
        code: `/* Theme switch for regions */
  [data-region="east"] {
    --holiday-color: #ff0000; /* red = lucky */
  }
  
  [data-region="west"] {
    --holiday-color: #008000; /* green = festive */
  }`
      },
      {
        title: 'HSB to HSL Approximation (CSS)',
        code: `/* HSB and HSL are conceptually similar */
  :root {
    --color-accent: hsl(340, 100%, 60%); /* hue + saturation + lightness */
  }`
      },
      {
        title: 'Color Conversion Example: HEX to RGB/HSLA',
        code: `/* HEX */
  --brand-red: #e53935;
  
  /* RGB Equivalent */
  --brand-red-rgb: rgb(229, 57, 53);
  
  /* HSLA Equivalent */
  --brand-red-hsla: hsla(2, 77%, 55%, 1);`
      },
      {
        title: 'Color Space Hint: P3 Support in Media Queries',
        code: `@media (color-gamut: p3) {
    .photo {
      color: color(display-p3 1 0.5 0.3);
    }
  }`
      },
      {
        title: 'Accessibility: Contrast Pass vs Fail',
        code: `/* FAILS contrast test */
  .low-contrast {
    color: #999;
    background-color: #fff;
  }
  
  /* PASSES WCAG AA */
  .high-contrast {
    color: #212121;
    background-color: #ffffff;
  }`
      },
      {
        title: 'Theming with CSS Tokens for Roles',
        code: `:root {
    --color-primary: hsl(220, 90%, 56%);
    --color-background: hsl(0, 0%, 100%);
    --color-surface: hsl(220, 16%, 96%);
    --color-error: hsl(0, 80%, 60%);
  }`
      },
      {
        title: 'Using Chroma.js for Palette Generation (JS)',
        code: `import chroma from 'chroma-js';
  
  const base = '#007BFF';
  const scale = chroma.scale([base, 'white']).colors(5);
  
  console.log(scale); // Output: light tints of base`
      }
    ],
  
    conclusion: `Color theory underpins nearly every choice a frontend developer makes when designing UI. This introduction primes you for deeper dives into models, psychology, tools, accessibility, and more — each with practical guidance and code examples. Color is not just decorative; it's strategic. With this overview, you're now ready to master each domain with clarity and creative intent.`
  };
  
  export default articleData;
  