const articleData = {
    introduction:
      "The Accessibility Checklist serves as a practical, structured tool to guide web developers and designers toward achieving WCAG Level AA compliance—the most common legal and industry benchmark. This checklist organizes success criteria into logical categories that reflect real-world development responsibilities. Each checkpoint includes not only the WCAG reference but also practical guidance and rationale. While primarily focused on Level AA, it also includes foundational Level A items and notable AAA enhancements to encourage more ambitious accessibility efforts.",
  
    keyPrinciples: {
      title: "Checklist Philosophy",
      content: [
        "The checklist is grouped by functional areas like structure, forms, color contrast, and interaction.",
        "Each item maps to one or more WCAG Success Criteria.",
        "The list is structured to support developers in integrating accessibility into their design and QA cycles.",
        "Level AA is the most widely accepted goal, while Level A ensures baseline accessibility and AAA introduces enhancements."
      ]
    },
  
    deepDive_page_structure: {
      title: "Page Structure & Semantics",
      content: [
        "**Unique Page Titles (2.4.2 A):** Every page should have a unique and descriptive `<title>` element.",
        "**Heading Structure (1.3.1 A, 2.4.6 AA):** Use HTML headings (`<h1>`–`<h6>`) to convey page structure. Avoid skipping levels.",
        "**Skip Links (2.4.1 A):** Provide keyboard-accessible links (e.g., 'Skip to main content') early in the DOM to bypass repetitive headers.",
        "**Landmarks (1.3.1 A):** Use HTML5 elements (`<main>`, `<nav>`, `<header>`, etc.) to define structural regions."
      ]
    },
  
    deepDive_text_alternatives: {
      title: "Text Alternatives",
      content: [
        "**Alt Text (1.1.1 A):** All meaningful images must have descriptive alt attributes. Decorative images use `alt=\"\"`.",
        "**Captions for Video (1.2.2 A, 1.2.4 AA):** Provide accurate, synchronized captions for pre-recorded and live video content.",
        "**Transcripts (1.2.1 A):** Provide text transcripts for pre-recorded audio or video-only media.",
        "**Audio Descriptions (1.2.3 A, 1.2.5 AA):** Supply narration for essential visual content not described in audio tracks."
      ]
    },
  
    deepDive_keyboard_access: {
      title: "Keyboard Accessibility",
      content: [
        "**Keyboard Operation (2.1.1 A):** All functionality must be operable with keyboard only.",
        "**No Keyboard Traps (2.1.2 A):** Ensure users can move in and out of interactive components via keyboard.",
        "**Visible Focus (2.4.7 AA):** Focusable elements must have a visible, high-contrast focus indicator.",
        "**Logical Tab Order (2.4.3 A):** Tabbing should follow a predictable and visual reading order."
      ]
    },
  
    deepDive_visual_design: {
      title: "Visual Design & Contrast",
      content: [
        "**Color Contrast (1.4.3 AA):** Minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.",
        "**UI Component Contrast (1.4.11 AA):** Graphical objects and components must have at least 3:1 contrast against adjacent colors.",
        "**No Color-Only Cues (1.4.1 A):** Do not rely solely on color to convey information (e.g., red text for errors).",
        "**Resizable Text (1.4.4 AA):** Users must be able to resize text up to 200% without breaking layout.",
        "**Reflow (1.4.10 AA):** Content should adapt responsively without requiring horizontal scrolling at 400% zoom."
      ]
    },
  
    deepDive_forms: {
      title: "Forms & Errors",
      content: [
        "**Labeled Inputs (1.3.1 A, 3.3.2 A, 4.1.2 A):** Use `<label>` elements with `for` attributes to associate labels programmatically.",
        "**Clear Instructions (3.3.2 A):** Explain input formats (e.g., date format) and required fields.",
        "**Error Identification (3.3.1 A):** Highlight errors with text explanations next to or near the field.",
        "**Suggestions for Correction (3.3.3 AA):** If known, offer corrective suggestions (e.g., 'Did you mean...?')."
      ]
    },
  
    deepDive_navigation: {
      title: "Navigation & Interaction",
      content: [
        "**Consistent Navigation (3.2.3 AA):** Menus, links, and layout should remain consistent across pages.",
        "**Consistent Identification (3.2.4 AA):** Interactive components with the same function should look and behave the same.",
        "**Link Purpose (2.4.4 A):** Link text should clearly describe the destination or action (avoid 'click here').",
        "**Pause/Stop Controls (2.2.2 A):** Provide a mechanism to pause/stop moving content lasting over 5 seconds.",
        "**No Flashing (2.3.1 A):** Avoid content that flashes more than three times per second (to prevent seizures)."
      ]
    },
  
    deepDive_robustness: {
      title: "Code Robustness",
      content: [
        "**Valid HTML (4.1.1 A):** Use valid, standards-compliant markup; avoid parsing errors.",
        "**Accessible Name/Role/State (4.1.2 A):** Interactive elements must expose name, role, and state via semantics or ARIA.",
        "**Status Messages (4.1.3 AA):** Changes like 'Item added to cart' should be announced to screen readers without stealing focus."
      ]
    },
  
    deepDive_aaa_enhancements: {
      title: "Nice-to-Haves (AAA Enhancements)",
      content: [
        "**Enhanced Contrast (1.4.6 AAA):** 7:1 ratio for normal text improves readability for users with low vision.",
        "**No Timing Requirements (2.2.3 AAA):** Avoid making time essential unless necessary (e.g., auctions).",
        "**Sign Language (1.2.6 AAA):** Add sign language interpretation for pre-recorded content when feasible.",
        "**Abbreviation Expansion (3.1.4 AAA):** Provide full forms or glossaries for abbreviations (e.g., ARIA = Accessible Rich Internet Applications).",
        "**Context-Sensitive Help (3.3.5 AAA):** Include inline guidance or tooltips for form fields.",
        "**Text Presentation Controls (1.4.8 AAA):** Allow users to adjust line spacing, justification, and column width."
      ]
    },
  
    codeExamples: [
        // Page Structure & Semantics
        {
          title: "Unique Page Title",
          code: `<title>About Us - Boston Children’s Hospital</title>`
        },
        {
          title: "Heading Structure",
          code: `
      <h1>Main Title</h1>
      <h2>Section Heading</h2>
      <h3>Subsection</h3>
      <!-- Avoid skipping levels: no jumping from h1 to h4 -->
          `
        },
        {
          title: "Skip Link Example",
          code: `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <main id="main-content">Main page content here...</main>
          `
        },
      
        // Text Alternatives
        {
          title: "Alt Text for Images",
          code: `
      <!-- Informative -->
      <img src="team.jpg" alt="The pediatric team at BCH in front of the hospital building">
      
      <!-- Decorative -->
      <img src="divider.png" alt="">
          `
        },
        {
          title: "Captions for Pre-recorded Video",
          code: `
      <video controls>
        <source src="welcome.mp4" type="video/mp4">
        <track src="captions.vtt" kind="captions" srclang="en" label="English">
      </video>
          `
        },
        {
          title: "Transcript Example",
          code: `
      <h2>Transcript</h2>
      <p>[Music playing]</p>
      <p>Dr. Smith: "We provide care for children with rare conditions..."</p>
          `
        },
        {
          title: "Audio Description (Text Alternative)",
          code: `
      <p>Audio Description: The doctor gestures toward a screen displaying patient data while explaining the procedure.</p>
          `
        },
      
        // Keyboard Accessibility
        {
          title: "Keyboard-Accessible Button",
          code: `
      <button onclick="submitForm()">Submit</button>
      <!-- Avoid using divs or spans with click handlers for actions -->
          `
        },
        {
          title: "Avoiding Keyboard Trap",
          code: `
      <!-- Ensure modal can be closed and focus returns to previous item -->
      <div role="dialog" aria-modal="true">
        <button onclick="closeModal()">Close</button>
      </div>
          `
        },
        {
          title: "Visible Focus Style",
          code: `
      :focus {
        outline: 3px solid #1976d2;
        outline-offset: 2px;
      }
          `
        },
        {
          title: "Logical Focus Order",
          code: `
      <!-- Logical DOM order = logical tab order -->
      <nav>...</nav>
      <main>...</main>
      <aside>...</aside>
          `
        },
      
        // Visual Design & Contrast
        {
          title: "Text Contrast Compliance",
          code: `
      <p style="color: #222; background-color: #fff;">
        This meets 4.5:1 contrast ratio.
      </p>
          `
        },
        {
          title: "UI Component Contrast",
          code: `
      <input style="border: 2px solid #555;" placeholder="Search" />
      <!-- Border must contrast with background (at least 3:1) -->
          `
        },
        {
          title: "Avoid Color-Only Indicators",
          code: `
      <p><span style="color: red;">*</span> Required field</p>
      <!-- Better: -->
      <p><span style="color: red;">*</span><span aria-hidden="true">Required field</span><span class="sr-only">Required field</span></p>
          `
        },
        {
          title: "Resizable Text Using Relative Units",
          code: `
      body {
        font-size: 1rem; /* Resizes cleanly with browser settings */
      }
          `
        },
        {
          title: "Reflow with Media Queries",
          code: `
      @media (max-width: 600px) {
        .container {
          flex-direction: column;
        }
      }
          `
        },
      
        // Forms & Errors
        {
          title: "Labelled Input Field",
          code: `
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
          `
        },
        {
          title: "Instructions for Input",
          code: `
      <label for="birthdate">Date of Birth</label>
      <input type="text" id="birthdate" placeholder="MM/DD/YYYY">
          `
        },
        {
          title: "Error Message Example",
          code: `
      <label for="username">Username</label>
      <input id="username" aria-describedby="username-error">
      <p id="username-error" class="error">Username is required.</p>
          `
        },
        {
          title: "Suggesting Correction",
          code: `
      <p>Did you mean <a href="/search?q=accessibility">accessibility</a>?</p>
          `
        },
      
        // Navigation & Interaction
        {
          title: "Consistent Navigation Markup",
          code: `
      <!-- Use same nav across pages -->
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
          `
        },
        {
          title: "Consistent Component Functionality",
          code: `
      <!-- Same icon and label used for search across site -->
      <button aria-label="Search"><svg>...</svg></button>
          `
        },
        {
          title: "Meaningful Link Text",
          code: `
      <!-- Avoid: -->
      <a href="/more">Click here</a>
      
      <!-- Better: -->
      <a href="/about">Learn more about our mission</a>
          `
        },
        {
          title: "Pause/Stop for Animation",
          code: `
      <marquee behavior="scroll" scrollamount="5">
        Breaking news...
      </marquee>
      <button onclick="stopMarquee()">Pause</button>
          `
        },
        {
          title: "Avoid Flashing Content",
          code: `
      <!-- Don’t flash more than 3 times per second -->
      <video src="no-flash.mp4"></video>
          `
        },
      
        // Robustness
        {
          title: "Valid HTML Example",
          code: `
      <!-- Valid -->
      <button type="submit">Submit</button>
      
      <!-- Invalid -->
      <div onclick="submitForm()">Submit</div>
          `
        },
        {
          title: "Accessible Role/State",
          code: `
      <div role="alert" aria-live="polite">
        Item added to cart.
      </div>
          `
        },
        {
          title: "Announced Status Message",
          code: `
      <div aria-live="polite">Saving changes...</div>
          `
        },
      
        // AAA Enhancements
        {
          title: "Enhanced Contrast (7:1)",
          code: `
      <p style="color: #000; background-color: #fff;">
        Text with 7:1 contrast ratio.
      </p>
          `
        },
        {
          title: "Abbreviation Expansion",
          code: `
      <p>The <abbr title="World Wide Web Consortium">W3C</abbr> sets web standards.</p>
          `
        },
        {
          title: "Context-Sensitive Help",
          code: `
      <label for="phone">Phone Number</label>
      <input id="phone" aria-describedby="phone-help">
      <small id="phone-help">Include area code</small>
          `
        },
        {
          title: "Adjustable Text Presentation",
          code: `
      body {
        line-height: 1.5;
        max-width: 80ch;
        text-align: left;
      }
          `
        }
      ]
    ,
  
    conclusion:
      "This checklist distills WCAG into manageable, high-impact practices across key functional areas of design and development. Accessibility is not about checking boxes—it’s about ensuring real people with diverse needs can use your product independently and with dignity. By systematically integrating these criteria, teams can create inclusive, resilient, and legally compliant experiences that benefit everyone."
  };
  
  export default articleData;
  