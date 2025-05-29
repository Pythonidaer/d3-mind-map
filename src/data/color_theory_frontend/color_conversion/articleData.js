const articleData = {
    introduction: `Color conversion is a crucial aspect of frontend development when working across different platforms, mediums, or tools. It involves translating colors between various representations (HEX, RGB, HSL, LAB, etc.) to ensure consistency in appearance, accessibility, and performance. A solid understanding of color conversion supports theme development, UI consistency, contrast tuning, and precision in both print and screen displays.`,
  
    keyPrinciples: {
      title: 'Key Principles of Color Conversion',
      content: [
        'Color formats like HEX, RGB, and HSL represent the same color space (typically sRGB), but with different syntaxes.',
        'Conversions may be simple (e.g. HEX to RGB), or complex (e.g. RGB to LAB), requiring perceptual mapping.',
        'Some conversions are lossy, especially from additive (RGB) to subtractive (CMYK) models.',
        'Different browsers and tools handle color profiles and gamma correction differently — conversions may not be 1:1 visually.',
        'Using consistent color models within a project (or a central theme token system) avoids mismatches.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Color Conversion Knowledge',
      content: [
        'Enables dynamic theming and contrast manipulation across color formats.',
        'Prevents color inconsistencies between design tools and browser output.',
        'Supports accessibility improvements like luminance tweaking and light/dark mode adaptation.',
        'Improves precision in animation, transitions, and gradients.',
        'Prepares frontend developers to interface smoothly with design systems or print workflows.'
      ]
    },
  
    cons: {
      title: 'Drawbacks and Caveats',
      content: [
        'Precision loss can occur when moving between certain spaces like CMYK and RGB.',
        'Custom gamma or perceptual conversion logic may require large libraries or complex math.',
        'Inconsistent rendering in different browsers can result from ignored color profiles.',
        'HEX format lacks alpha support unless using non-standard 8-digit HEX.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns in Color Conversion',
      content: [
        'Relying on HEX for color calculations like interpolation — it’s not mathematically intuitive.',
        'Mixing color models inconsistently (e.g. setting background with HSL but overlay with RGB).',
        'Forgetting gamma correction when converting to LAB or HSL.',
        'Using image assets with Adobe RGB profiles on the web without converting to sRGB — causes desaturation.',
        'Using CMYK colors in frontend code — browsers don’t support CMYK natively.'
      ]
    },
  
    deepDive_conversion_basics: {
      title: 'Why Convert Colors?',
      content: [
        'In real-world applications, design systems use colors specified in multiple formats. A designer might use HSL in Figma for adjusting saturation and hue, but the codebase may prefer HEX or RGB. Converting between formats keeps design and implementation aligned.',
        'Print materials, marketing assets, or PDFs may need CMYK color representations. Web developers should understand how to convert RGB themes into print-safe palettes, even if the output is handled by design teams.'
      ]
    },
  
    deepDive_hex_rgb: {
      title: 'HEX ↔ RGB',
      content: [
        'HEX is shorthand for RGB. Each pair of characters in `#RRGGBB` corresponds to a red, green, and blue value from 0–255 in hexadecimal.',
        'Converting between them involves using `parseInt()` or base-16 arithmetic. Many UI libraries handle this internally.'
      ]
    },
  
    deepDive_rgb_hsl: {
      title: 'RGB ↔ HSL',
      content: [
        'HSL provides more intuitive control over color attributes like brightness and saturation.',
        'Conversion to HSL is ideal for dynamic UIs where hue shifts or light/dark mode calculations are needed.',
        'Libraries like `chroma.js` or `color.js` make this more precise, especially with gamma correction.'
      ]
    },
  
    deepDive_rgb_cmyk: {
      title: 'RGB ↔ CMYK',
      content: [
        'RGB and CMYK represent different color systems — additive vs subtractive.',
        'Conversions are lossy because CMYK pigments cannot replicate the brightness of screen colors.',
        'Still, a basic conversion is useful when approximating a screen theme for marketing printouts.'
      ]
    },
  
    deepDive_rgb_lab: {
      title: 'RGB ↔ LAB',
      content: [
        'LAB separates luminance from chromaticity, making it ideal for perceptual color manipulation.',
        'For accessibility use cases, LAB allows you to ensure consistent perceived brightness across UI elements.',
        'Conversion typically requires a library like D3 or Chroma.js due to the math involved.'
      ]
    },
  
    deepDive_conversion_tools: {
      title: 'JavaScript Libraries and Tools',
      content: [
        '**Chroma.js**: Lightweight library supporting conversion between HEX, RGB, HSL, LAB, LCH. It also supports color scales and interpolation.',
        '**color.js**: Modern, W3C-supported library for precise color conversions, contrast ratios, gamut mapping, and perceptual interpolation.',
        '**D3-color**: Subset of D3.js for color manipulation and interpolation — especially useful in data visualization or dashboards.'
      ]
    },
  
    codeExamples: [
      {
        title: 'HEX to RGB (Manual)',
        code: `function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }
  // hexToRgb("#FF9900") => { r: 255, g: 153, b: 0 }`
      },
      {
        title: 'RGB to HEX (Manual)',
        code: `function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');
  }
  // rgbToHex(255, 153, 0) => "#ff9900"`
      },
      {
        title: 'RGB ↔ HSL using color.js',
        code: `import Color from 'colorjs.io';
  
  const c = new Color('rgb(255 153 0)');
  console.log(c.to('hsl').toString()); // hsl(36, 100%, 50%)`
      },
      {
        title: 'RGB ↔ LAB using Chroma.js',
        code: `import chroma from 'chroma-js';
  
  const lab = chroma('#FF9900').lab();    // [75.3, 23.5, 77.1]
  const rgb = chroma.lab(...lab).hex();   // "#ff9900"`
      },
      {
        title: 'Interpolate with D3 LCH for UI Gradients',
        code: `import { interpolateLch } from 'd3-interpolate';
  
  const colorScale = interpolateLch("hsl(30,100%,50%)", "hsl(60,100%,50%)");
  const step1 = colorScale(0.2); // perceptually smooth midtone`
      },
      {
        title: 'CMYK Approximation from RGB',
        code: `function rgbToCmyk(r, g, b) {
    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;
    const k = Math.min(c, m, y);
    return {
      c: (c - k) / (1 - k) || 0,
      m: (m - k) / (1 - k) || 0,
      y: (y - k) / (1 - k) || 0,
      k
    };
  }` 
      }
    ],
  
    conclusion: `Color conversion is more than just technical syntax juggling — it's about delivering a consistent and accessible user experience across devices, screen types, and design systems. Mastery of conversion logic, perceptual color models, and tools like color.js or Chroma.js equips developers with precise control over theme architecture, transitions, and color integrity.`
  };
  
  export default articleData;
  