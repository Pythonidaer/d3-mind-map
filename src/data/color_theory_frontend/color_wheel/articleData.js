const articleData = {
    introduction: `The color wheel is one of the most foundational tools in color theory. It provides a visual representation of color relationships, showing how different hues connect and interact. Whether you are mixing paints or designing a digital interface, the color wheel helps guide decisions around harmony, contrast, and composition. For frontend developers and designers, it becomes especially useful when crafting color palettes that are both functional and aesthetically pleasing.`,
  
    keyPrinciples: {
      title: 'Understanding the Color Wheel',
      content: [
        'The color wheel is a circular arrangement of hues, organized by their chromatic relationships. It typically includes 12 core colors: three primary, three secondary, and six tertiary.',
        'By arranging colors in this circular format, the wheel allows users to identify complementary colors (opposites), analogous colors (neighbors), and triadic colors (evenly spaced).',
        'It serves as a navigational map to select palettes that balance emotion, legibility, and brand consistency in UI design.'
      ]
    },
  
    benefits: {
      title: 'Benefits of the Color Wheel in Frontend Work',
      content: [
        'Provides a logical structure for choosing harmonious or contrasting colors based on visual goals.',
        'Simplifies palette creation by categorizing colors according to their relationships and relative positions.',
        'Supports consistent theming and branding across different components and devices.',
        'Enables responsive adjustments for light/dark modes or visual hierarchy through intuitive color spacing.'
      ]
    },
  
    deepDive_primary_colors: {
      title: 'Primary Colors',
      content: [
        'Primary colors form the foundation of the color wheel. In traditional design, these are **Red**, **Yellow**, and **Blue**. These hues cannot be created by mixing other colors and serve as the starting points for all other hues on the wheel.',
        'In digital contexts such as screens and web design, the primary colors are **Red**, **Green**, and **Blue** (RGB). These additive primaries combine in light to produce white and are the basis for all colors rendered on modern displays.',
        'Knowing whether you’re working with pigment or light-based color mixing is crucial when applying the wheel’s logic in frontend applications.'
      ]
    },
  
    deepDive_secondary_colors: {
      title: 'Secondary Colors',
      content: [
        'Secondary colors are created by mixing two primary colors in equal parts. The traditional secondary colors are **Orange** (Red + Yellow), **Green** (Blue + Yellow), and **Purple** (Red + Blue).',
        'These colors sit between the primaries on the wheel and represent the next tier of hue creation. In frontend design, they’re commonly used as accent or mood-driven colors that support a primary palette.',
        'Their position between primaries allows for a balanced use of warmth and coolness, depending on the direction you move on the wheel.'
      ]
    },
  
    deepDive_tertiary_colors: {
      title: 'Tertiary Colors',
      content: [
        'Tertiary colors are the result of mixing a primary with a neighboring secondary color. Examples include **Red-Orange**, **Yellow-Green**, and **Blue-Violet**.',
        'These hues form the bridge between more saturated primary/secondary hues and subtler variations. They are often used in modern UI design to create nuanced themes, background gradients, or soft contrasts.',
        'Tertiary colors introduce flexibility and sophistication into a palette, allowing developers to avoid harsh contrasts and establish smooth transitions in color schemes.'
      ]
    },
  
    deepDive_visual_uses: {
      title: 'Practical Uses in Design',
      content: [
        'Frontend designers use the color wheel to explore schemes like complementary (high contrast), analogous (harmonious), triadic (vibrant), and split-complementary (balanced contrast).',
        'Interactive design tools like **Adobe Color**, **Coolors**, or **Material Palette** make use of the color wheel interface to auto-generate and preview these combinations.',
        'Understanding the wheel also helps developers translate print-oriented color schemes into digital equivalents by considering how color shifts under RGB vs CMY models.',
        'For example, a designer might extract a red-orange brand color from print assets and adjust it within the RGB wheel for on-screen accessibility and vibrancy.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Mapping the Traditional 12-Color Wheel in Code (Simplified)',
        code: `const colorWheel = {
    primary: ['red', 'blue', 'yellow'],
    secondary: ['orange', 'green', 'purple'],
    tertiary: [
      'red-orange', 'yellow-orange',
      'yellow-green', 'blue-green',
      'blue-purple', 'red-purple'
    ]
  };`,
      },
      {
        title: 'Generating a Complementary Color Scheme Programmatically',
        code: `function getComplementaryHue(hue) {
    // hue in degrees (0–360), returns opposite hue on the wheel
    return (hue + 180) % 360;
  }
  
  // Example: base hue 30 (orange), complementary would be 210 (blue)
  const baseHue = 30;
  const complement = getComplementaryHue(baseHue); // 210
  `,
      }
    ],
  
    conclusion: `The color wheel remains one of the most valuable conceptual tools in a frontend developer’s visual toolkit. It provides a common language between designers and developers, enabling informed and intentional palette creation. By mastering the primary, secondary, and tertiary relationships within the wheel, you gain the ability to navigate complex color decisions with clarity. Whether building a simple static site or a full design system, understanding the color wheel ensures your color usage is not only beautiful but also meaningful and technically sound.`
  };
  
  export default articleData;
  