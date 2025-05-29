const articleData = {
    introduction: `Color accessibility ensures that digital interfaces are perceivable and usable by individuals with visual impairments, including color vision deficiencies and low vision. By adhering to accessibility standards, designers and developers can create inclusive experiences that cater to a broader audience, enhancing usability and compliance.`,
  
    keyPrinciples: {
      title: 'Key Principles of Color Accessibility',
      content: [
        'Ensure sufficient contrast between text and background to meet WCAG guidelines.',
        'Avoid relying solely on color to convey information; use additional cues like text labels or patterns.',
        'Design with consideration for various types of color blindness.',
        'Maintain accessibility across different themes, including dark and light modes.',
        'Utilize tools and testing methods to evaluate and ensure color accessibility.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Accessible Color Design',
      content: [
        'Enhances readability and user experience for individuals with visual impairments.',
        'Ensures compliance with legal standards and reduces the risk of litigation.',
        'Broadens the potential user base by making content accessible to more people.',
        'Improves overall design clarity and effectiveness.',
        'Demonstrates a commitment to inclusivity and social responsibility.'
      ]
    },
  
    cons: {
      title: 'Challenges in Implementing Color Accessibility',
      content: [
        'Balancing brand colors with accessibility requirements can be challenging.',
        'Ensuring consistency across various devices and display settings.',
        'Requires additional time and resources for testing and validation.',
        'May necessitate compromises in design aesthetics to meet accessibility standards.',
        'Staying updated with evolving guidelines and best practices.'
      ]
    },
  
    antiPatterns: {
      title: 'Common Anti-Patterns in Color Accessibility',
      content: [
        'Using low contrast color combinations that hinder readability.',
        'Conveying information solely through color without supplementary indicators.',
        'Neglecting to test designs for color blindness compatibility.',
        'Overlooking user settings like high contrast modes or custom themes.',
        'Failing to provide focus indicators for interactive elements.'
      ]
    },
  
    deepDive_contrast: {
      title: 'Understanding Contrast Ratios',
      content: [
        'Contrast ratio refers to the difference in luminance between foreground and background colors. WCAG guidelines specify minimum contrast ratios to ensure text is readable.',
        'For normal text, a contrast ratio of at least 4.5:1 is required. For large text (18pt or 14pt bold), a minimum of 3:1 is acceptable.',
        'Enhanced contrast (Level AAA) requires ratios of 7:1 for normal text and 4.5:1 for large text.',
        'Tools like WebAIM’s Contrast Checker can help evaluate color combinations for compliance.'
      ]
    },
  
    deepDive_color_blindness: {
      title: 'Designing for Color Blindness',
      content: [
        'Color blindness affects a significant portion of the population, impacting the ability to distinguish certain colors.',
        'Common types include Deuteranopia (green deficiency), Protanopia (red deficiency), and Tritanopia (blue deficiency).',
        'Designs should avoid problematic color combinations like red and green or blue and yellow.',
        'Incorporate patterns, textures, or labels in addition to color to convey information effectively.'
      ]
    },
  
    deepDive_non_color_cues: {
      title: 'Utilizing Non-Color Cues',
      content: [
        'Relying solely on color to convey information can exclude users with visual impairments.',
        'Supplement color indicators with text labels, icons, or patterns to ensure information is accessible.',
        'For example, error messages should include an icon and descriptive text, not just a red color.',
        'Interactive elements should have clear focus indicators and labels to assist keyboard navigation and screen reader users.'
      ]
    },
  
    deepDive_theme_accessibility: {
      title: 'Ensuring Theme Accessibility',
      content: [
        'Users may prefer dark or light themes based on their needs or environmental conditions.',
        'Designs should maintain sufficient contrast and clarity across all themes.',
        'Avoid using color combinations that become indistinct in certain themes.',
        'Test designs in various themes and user settings to ensure consistent accessibility.'
      ]
    },
  
    deepDive_testing_tools: {
      title: 'Testing and Tools for Color Accessibility',
      content: [
        'Regular testing is essential to identify and address accessibility issues.',
        'Automated tools like axe, WAVE, and Lighthouse can detect common problems.',
        'Manual testing, including keyboard navigation and screen reader compatibility, provides additional insights.',
        'Simulators for color blindness can help designers understand how their designs appear to users with color vision deficiencies.'
      ]
    },
  
    codeExamples: [
      {
        title: 'CSS for High Contrast Text',
        code: `/* Ensuring sufficient contrast between text and background */
  body {
    background-color: #ffffff;
    color: #000000;
  }
  
  /* For dark mode */
  body.dark-mode {
    background-color: #000000;
    color: #ffffff;
  }`
      },
      {
        title: 'Accessible Button with ARIA Labels',
        code: `<!-- Button with icon and ARIA label for screen readers -->
  <button aria-label="Submit Form">
    <svg aria-hidden="true" focusable="false">...</svg>
    Submit
  </button>`
      },
      {
        title: 'Using Patterns for Data Visualization',
        code: `/* Applying patterns to differentiate data segments */
  .chart-segment {
    fill: url(#diagonal-stripes);
  }
  
  <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="4" height="4">
    <path d="M-1,1 l2,-2
             M0,4 l4,-4
             M3,5 l2,-2" stroke="#000000" stroke-width="1"/>
  </pattern>`
      },
      {
        title: 'JavaScript to Respect User Theme Preferences',
        code: `// Detect and apply user's preferred color scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }`
      },
      {
        title: 'Using WebAIM Contrast Checker',
        code: `/* Example: Checking contrast between #ffffff (white) and #000000 (black)
     Result: Contrast ratio of 21:1, which meets WCAG AAA standards */
  `
      }
    ],
  
    conclusion: `Implementing color accessibility is crucial for creating inclusive digital experiences. By understanding and applying best practices—such as ensuring adequate contrast, providing non-color cues, and accommodating various user preferences—designers and developers can enhance usability for all users. Regular testing and staying informed about accessibility guidelines are key to maintaining and improving accessibility standards.`
  };
  
  export default articleData;
  