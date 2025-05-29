const articleData = {
    introduction: 'Color relationships, often called color schemes or harmonies, refer to predefined ways that colors relate to one another on the color wheel. These schemes are not arbitrary — they’re based on geometric spacing of hues that create emotional and aesthetic effects when used together. In frontend development, understanding color relationships is essential for building interfaces that are not only beautiful, but functional, readable, and emotionally appropriate.',
  
    keyPrinciples: {
      title: 'Key Concepts Behind Color Schemes',
      content: [
        'Color relationships are grounded in spatial logic. By selecting colors at specific intervals on the color wheel, you ensure harmony or contrast is built-in.',
        'Different schemes serve different purposes: some are subdued and calming, others are loud and attention-grabbing. Knowing when to use each is a key design decision.',
        'Frontend developers can use these schemes to guide consistent button states, messaging colors, and overall branding themes — often using design tools or libraries that reflect these rules.'
      ]
    },
  
    benefits: {
      title: 'Why Use Defined Color Schemes?',
      content: [
        'They provide a starting point for color palette decisions and prevent guesswork.',
        'They create a visual balance between unity and contrast, helping users focus on the right areas.',
        'They support consistency across components and screens, leading to better user experience and reduced visual noise.',
        'They allow intentional emotional targeting — whether you want the interface to feel warm, modern, playful, or trustworthy.'
      ]
    },
  
    deepDive_monochromatic: {
      title: 'Monochromatic Scheme',
      content: [
        'A monochromatic color scheme uses variations in brightness (tints and shades) of a single hue. For example, a range of blues from pale to navy.',
        'This approach is minimalistic and highly cohesive, often used in modern or calming UIs where a clean, consistent aesthetic is desired.',
        'However, without careful adjustment of contrast and saturation, it can lack the visual energy or clarity needed to emphasize interactive elements.'
      ]
    },
  
    deepDive_complementary: {
      title: 'Complementary Scheme',
      content: [
        'Complementary colors sit opposite each other on the color wheel — such as blue and orange, or red and green.',
        'This pairing creates high visual contrast and vibrancy, ideal for drawing attention to specific elements like CTA buttons or error states.',
        'Overuse can lead to visual tension or a "jarring" appearance, so it\'s best used strategically (e.g., using one color as dominant, the other as an accent).'
      ]
    },
  
    deepDive_analogous: {
      title: 'Analogous Scheme',
      content: [
        'Analogous colors are adjacent on the wheel (e.g., blue, blue-green, green), creating a natural, flowing harmony.',
        'These palettes are ideal for emotionally consistent themes — such as a warm sunset feel (orange-red-yellow) or a cool oceanic look (blue-teal-green).',
        'To avoid monotony, it\'s important to vary brightness and contrast between colors in the set.'
      ]
    },
  
    deepDive_triadic: {
      title: 'Triadic Scheme',
      content: [
        'A triadic scheme uses three colors evenly spaced around the wheel — such as red, yellow, and blue.',
        'This structure offers both contrast and color richness, but must be carefully managed to avoid overwhelming users.',
        'A common technique is to let one color dominate and use the other two as accents, preserving both energy and control.'
      ]
    },
  
    deepDive_split_complementary: {
      title: 'Split-Complementary Scheme',
      content: [
        'This scheme combines a base color with the two hues adjacent to its complement — for example, blue with yellow-orange and red-orange.',
        'It provides much of the contrast of a complementary scheme but softens the intensity, making it easier to manage.',
        'It\'s especially useful in interfaces where contrast is needed but emotional harmony is still important.'
      ]
    },
  
    deepDive_tetradic: {
      title: 'Tetradic (Double Complementary) Scheme',
      content: [
        'Tetradic schemes use two complementary pairs — forming a rectangle on the wheel (e.g., red & green with blue & orange).',
        'This creates an extremely diverse palette full of contrast and color variation.',
        'However, it\'s difficult to balance and should be approached with one dominant color, with the others carefully managed to avoid chaos.'
      ]
    },
  
    deepDive_other_schemes: {
      title: 'Other Schemes: Square, Neutral + Accent',
      content: [
        'Square schemes place four colors evenly around the wheel (90° apart), offering maximum variety with some balance.',
        'Neutral + Accent is a popular modern UI strategy: use grayscale, off-whites, or muted tones for most of the layout, and highlight interactive elements (like CTAs) with a single, bright accent hue.',
        'These hybrids and pragmatic approaches are common in UI design systems where clarity and hierarchy matter more than artistic purity.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Example: Generating Analogous Colors from a Base Hue',
        code: `function getAnalogousHues(baseHue) {
    return [
      (baseHue + 330) % 360, // one hue behind
      baseHue,
      (baseHue + 30) % 360   // one hue ahead
    ];
  }
  
  const base = 210; // blue
  const analogous = getAnalogousHues(base); // [180, 210, 240]`
      },
      {
        title: 'Example: Complementary Color from HSL',
        code: `const baseHue = 60; // yellow
  const complementHue = (baseHue + 180) % 360; // 240 = blue
  
  const baseColor = \`hsl(\${baseHue}, 100%, 50%)\`;
  const complementColor = \`hsl(\${complementHue}, 100%, 50%)\`;`
      }
    ],
  
    conclusion: 'Understanding color relationships is not just about choosing pretty palettes — it\'s about applying proven design logic to create interfaces that communicate clearly and feel intentional. Each scheme has its strengths and risks, and the best frontend developers learn when and how to use each one to suit a product\'s goals. Whether aiming for harmony, contrast, energy, or calm, color schemes provide a structured path to consistent and effective design. By mastering these systems, you enhance your ability to shape user experience visually and emotionally.'
  };
  
  export default articleData;
  