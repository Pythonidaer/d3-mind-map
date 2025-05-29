const articleData = {
    introduction: 'The HSB model — Hue, Saturation, and Brightness — is one of the most intuitive ways to describe and manipulate color in user interfaces. It maps closely to how humans perceive and describe color: its basic tone (hue), its intensity (saturation), and its lightness or darkness (brightness). Designers and frontend developers frequently rely on HSB values when using color pickers in tools like Figma, Adobe, or Chrome DevTools. Understanding this model empowers you to create color schemes that are visually coherent, emotionally effective, and accessible.',
  
    keyPrinciples: {
      title: 'What Is HSB and Why It Matters',
      content: [
        'HSB stands for Hue, Saturation, and Brightness — a cylindrical color model designed for visual manipulation.',
        'Unlike RGB (which is hardware-oriented) or HEX (which encodes color values), HSB reflects how users actually perceive color.',
        'Designers use HSB to fine-tune visual balance, convey mood, and preserve accessibility. Developers can programmatically adjust HSB values to change themes, apply effects, or adapt to light/dark modes.'
      ]
    },
  
    benefits: {
      title: 'Benefits of HSB in UI Design',
      content: [
        'HSB separates color into perceptually meaningful controls — you can adjust mood (hue), strength (saturation), and lightness (brightness) independently.',
        'Brightness is easier to reason about when designing for contrast and accessibility than RGB values.',
        'HSB is ideal for generating multiple shades of a brand color without needing a full design system palette.',
        'Useful in real-time manipulation: color pickers, theme switches, hover transitions, and light/dark adjustments.'
      ]
    },
  
    deepDive_hue: {
      title: 'Hue: The Base Color',
      content: [
        'Hue defines the color family (red, yellow, green, etc.). It is represented as a degree on the color wheel, from 0° to 360°.',
        '0° is red, 120° is green, 240° is blue. Every other color can be placed between these based on its angle.',
        'Hue gives a color its fundamental identity. When users say "make the button blue," they are referring to hue.',
        'Hue changes drastically affect emotional tone: blue feels calm, red feels urgent, green feels affirming.'
      ]
    },
  
    deepDive_saturation: {
      title: 'Saturation: Intensity or Vividness',
      content: [
        'Saturation measures how pure or gray a color appears. A fully saturated color is intense and bold. A desaturated one looks pale or washed out.',
        '0% saturation turns any hue into a shade of gray. 100% saturation shows the full strength of the hue.',
        'Saturation is crucial for establishing hierarchy. High-saturation colors draw the eye and imply interactivity.',
        'Muted (low saturation) palettes are often used for elegant, subdued designs, or to emphasize primary actions using stronger colors.'
      ]
    },
  
    deepDive_brightness: {
      title: 'Brightness: Perceived Lightness',
      content: [
        'Brightness refers to how much white or black is mixed with the color — in other words, how "light" or "dark" it appears.',
        '0% brightness results in pure black regardless of hue or saturation. 100% brightness produces the lightest possible version of the color.',
        'Brightness is critical for readability. Text and interface elements must maintain enough contrast against backgrounds.',
        'Proper brightness control supports both light and dark UI themes and ensures accessibility compliance through contrast ratios.'
      ]
    },
  
    deepDive_tool_usage: {
      title: 'HSB in Modern Tools',
      content: [
        'Figma, Photoshop, Chrome DevTools, and many modern UI platforms offer color pickers based on HSB/HSV sliders.',
        'These tools allow designers to precisely tune colors by shifting hue while holding saturation/brightness constant, or vice versa.',
        'For developers, JavaScript libraries like Chroma.js or D3-color can convert between RGB and HSB for real-time effects.',
        'HSB sliders give teams shared language for visual critique — "reduce the brightness," "bump up the saturation," etc.'
      ]
    },
  
    deepDive_hsb_vs_hsl: {
      title: 'HSB vs HSL: Key Differences',
      content: [
        'Both HSB (Hue, Saturation, Brightness) and HSL (Hue, Saturation, Lightness) are cylindrical models, but differ in how they treat the light component.',
        'In HSB, brightness is the perceived amount of white light. In HSL, lightness is a midpoint between white and black.',
        'HSB maps more closely to human perception. A 100% bright red in HSB looks truly red — in HSL, 50% lightness might look faded.',
        'HSL is more common in CSS (`hsl(0, 100%, 50%)`), but HSB is preferred in graphical design tools.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Convert RGB to HSB using JavaScript',
        code: `function rgbToHsb(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      b: Math.round(v * 100)
    };
  }
  
  const hsb = rgbToHsb(255, 0, 0); // { h: 0, s: 100, b: 100 }`
      },
      {
        title: 'Apply HSL in CSS (approximate to HSB)',
        code: `button {
    background-color: hsl(210, 100%, 50%);
  }
  button:hover {
    background-color: hsl(210, 100%, 40%);
  }`
      }
    ],
  
    conclusion: 'Mastering Hue, Saturation, and Brightness gives frontend developers and designers precise control over color aesthetics. This model bridges visual intuition with technical implementation, making it easier to create themes, apply accessibility guidelines, and manage visual consistency. Whether adjusting hover states, implementing dark mode, or building a brand palette, HSB provides a reliable framework for color control rooted in human perception.'
  };
  
  export default articleData;
  