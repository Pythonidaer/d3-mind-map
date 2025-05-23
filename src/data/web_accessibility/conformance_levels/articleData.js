const articleData = {
    introduction:
      "The Web Content Accessibility Guidelines (WCAG) define three levels of conformance—A, AA, and AAA—each building upon the previous. These levels allow organizations to incrementally improve the accessibility of their digital products, balancing inclusivity with feasibility. Understanding what each level means, what it requires, and when to apply it is foundational to a successful accessibility strategy.",
  
    keyPrinciples: {
      title: "Conformance Levels Explained",
      content: [
        "Each level of WCAG conformance (A, AA, AAA) represents a progressively deeper commitment to accessibility.",
        "Level A sets the minimum bar and addresses critical barriers. AA is the most widely adopted and legally referenced. AAA is idealistic and addresses the broadest range of user needs.",
        "Most organizations aim for Level AA across their primary digital content.",
        "Individual AAA criteria can be selectively implemented where impact or audience needs demand it."
      ]
    },
  
    deepDive_level_a: {
      title: "Level A: Basic Accessibility",
      content: [
        "Level A is the foundational layer of accessibility. It includes requirements that ensure people with disabilities can at least perceive and interact with the site.",
        "Failure to meet Level A often results in total inaccessibility for some users, particularly those who rely on screen readers or keyboard navigation."
      ]
    },
  
    deepDive_level_a_examples: {
      title: "Examples of Level A Requirements",
      content: [
        "**Text Alternatives (1.1.1):** Every informative image must include an `alt` attribute that communicates its purpose or content.",
        "**Keyboard Accessibility (2.1.1):** All features must be operable using only a keyboard.",
        "**Page Titles (2.4.2):** Each page must have a unique and descriptive `<title>` element.",
        "**Heading Structure (1.3.1):** Use semantic heading tags (`<h1>` to `<h6>`) to outline content and assist navigation.",
        "**Bypass Blocks (2.4.1):** Include skip links to allow keyboard users to bypass repetitive navigation.",
        "**Focus Order (2.4.3):** The order of focus when tabbing through a page must be logical and match the visual reading order.",
        "**No Keyboard Traps (2.1.2):** Users must be able to navigate into and out of interactive components (e.g., modals) using the keyboard."
      ]
    },
  
    deepDive_level_aa: {
      title: "Level AA: The Practical Standard",
      content: [
        "Level AA addresses the most common and impactful barriers faced by users with disabilities.",
        "It is widely adopted as the industry standard, and many laws and regulations cite Level AA as the required benchmark.",
        "Meeting Level AA significantly improves usability, inclusivity, and legal defensibility."
      ]
    },
  
    deepDive_level_aa_examples: {
      title: "Examples of Level AA Requirements",
      content: [
        "**Color Contrast (1.4.3):** Text must have a contrast ratio of at least 4.5:1 against its background (3:1 for large text).",
        "**Resize Text (1.4.4):** Users must be able to resize text up to 200% without requiring horizontal scrolling or loss of functionality.",
        "**Focus Visibility (2.4.7):** When an element receives keyboard focus, it must have a visible outline or indication.",
        "**Reflow (1.4.10):** Content must reflow without requiring two-dimensional scrolling at up to 400% zoom on a 1280px-wide viewport.",
        "**Non-Text Contrast (1.4.11):** UI components and graphical objects must meet a contrast ratio of at least 3:1 against adjacent colors.",
        "**Labels or Instructions (3.3.2):** Form inputs must have clear labels or instructions that are programmatically associated.",
        "**Error Suggestions (3.3.3):** If an input error is detected and known corrections exist, suggestions should be provided (unless security would be compromised)."
      ]
    },
  
    deepDive_level_aaa: {
      title: "Level AAA: Advanced Accessibility",
      content: [
        "Level AAA provides the highest level of accessibility, offering benefits to users with a wide range of severe or multiple disabilities.",
        "It is not generally required across entire websites, but individual criteria may be adopted where appropriate.",
        "AAA is especially valuable for public service content, elder audiences, or mission-driven organizations seeking maximum inclusivity."
      ]
    },
  
    deepDive_level_aaa_examples: {
      title: "Examples of Level AAA Requirements",
      content: [
        "**Enhanced Contrast (1.4.6):** Text must have a contrast ratio of at least 7:1 (4.5:1 for large text).",
        "**Sign Language (1.2.6):** Sign language interpretation must be provided for all pre-recorded audio content in video.",
        "**No Timing (2.2.3):** Activities should not rely on time limits unless absolutely essential.",
        "**Link Purpose (2.4.9):** Every link must be clear from its text alone, without relying on surrounding context.",
        "**Abbreviation Expansion (3.1.4):** Mechanisms should exist to provide expanded forms or definitions for all abbreviations (e.g., tooltips or glossaries).",
        "**Context-Sensitive Help (3.3.5):** For complex forms or user inputs, inline help or instructions should be available to aid completion.",
        "**Visual Presentation (1.4.8):** Users should be able to control foreground/background color, spacing, and line length for improved readability."
      ]
    },
  
    deepDive_strategy: {
      title: "Strategic Implementation",
      content: [
        "Aim for Level AA as the default target—this covers most legal requirements and usability improvements.",
        "Plan for accessibility from the beginning of a project. Retrofitting later is more expensive and error-prone.",
        "Use AAA criteria where appropriate—especially for key workflows, public services, or audiences with specific accessibility needs.",
        "Consider WCAG levels as a journey, not a binary goal. Improving accessibility is iterative."
      ]
    },
  
    deepDive_audience_needs: {
      title: "Audience Consideration",
      content: [
        "If your target audience includes older adults, users with low vision, or individuals with cognitive disabilities, AAA criteria may offer necessary support.",
        "Institutions like universities, hospitals, or government agencies may choose AAA enhancements based on mission and population needs."
      ]
    },
  
    deepDive_resource_balance: {
      title: "Balancing Effort and Impact",
      content: [
        "AAA conformance often requires higher development effort (e.g., sign language production, real-time accessibility testing).",
        "Start with AA, then prioritize AAA criteria that benefit your users the most or are easiest to implement.",
        "Even partial conformance demonstrates commitment and makes a real difference."
      ]
    },

    codeExamples: [
        {
          title: "Level A Examples (Complete)",
          code: `<!-- 1.1.1 Text Alternatives -->
      <img src="staff.jpg" alt="Group of doctors from cardiology department">
      
      <!-- 2.1.1 Keyboard Access -->
      <button onclick="saveForm()">Save</button>
      
      <!-- 2.4.2 Page Titles -->
      <title>Patient Dashboard – Children's Health</title>
      
      <!-- 2.4.1 Bypass Blocks (Skip Link) -->
      <a href="#main-content" class="skip-link">Skip to main content</a>
      
      <!-- 1.3.1 Info and Relationships (Heading Structure) -->
      <h1>Dashboard</h1>
      <h2>Upcoming Appointments</h2>
      <h2>Medical History</h2>
      
      <!-- 2.4.3 Focus Order -->
      <!-- Order of elements in the DOM matches visual flow -->
      
      <!-- 2.1.2 No Keyboard Trap -->
      <!-- Make sure modal can be exited with Escape -->
      <div role="dialog" aria-modal="true">
        <button onclick="closeModal()">Close</button>
      </div>
          `
        },
        {
          title: "Level AA Examples (Complete)",
          code: `<!-- 1.4.3 Contrast Ratio (4.5:1) -->
      <p style="color: #2c2c2c; background-color: #ffffff;">
        This text has sufficient contrast.
      </p>
      
      <!-- 1.4.4 Resize Text (200%) -->
      html {
        font-size: 100%;
      }
      body {
        font-size: 1rem; /* allows users to zoom text cleanly */
      }
      
      <!-- 2.4.7 Focus Visible -->
      a:focus,
      button:focus {
        outline: 3px dashed #0077cc;
        outline-offset: 2px;
      }
      
      <!-- 1.4.10 Reflow (Responsive Design) -->
      @media (max-width: 600px) {
        .sidebar {
          display: none;
        }
        .main-content {
          width: 100%;
        }
      }
      
      <!-- 3.3.2 Labels or Instructions -->
      <label for="zipcode">ZIP Code</label>
      <input id="zipcode" name="zipcode" aria-describedby="zip-instructions">
      <p id="zip-instructions">Enter a 5-digit ZIP Code (e.g., 02115)</p>
      
      <!-- 3.3.3 Error Suggestions -->
      <p id="error-message">Your email appears to be invalid. Did you mean jon@example.com?</p>
      
      <!-- 1.4.11 Non-Text Contrast -->
      <button style="border: 2px solid #444; background: #eee;">
        Submit
      </button>
          `
        },
        {
          title: "Level AAA Examples (Complete)",
          code: `<!-- 1.4.6 Contrast (7:1) -->
      <p style="color: #000000; background-color: #ffffff;">
        Maximum readability with 7:1 contrast ratio.
      </p>
      
      <!-- 1.2.6 Sign Language Interpretation -->
      <video controls>
        <source src="overview.mp4" type="video/mp4">
        <track src="asl.vtt" kind="sign" srclang="en" label="ASL Interpretation">
      </video>
      
      <!-- 2.2.3 No Timing -->
      <!-- Form without timeouts; users can take as long as they need -->
      
      <!-- 2.4.9 Link Purpose (Link Text Alone) -->
      <a href="/donate">Donate to our hospital</a>
      
      <!-- 3.1.4 Abbreviations -->
      <p>The <abbr title="Pediatric Intensive Care Unit">PICU</abbr> is located on Floor 4.</p>
      
      <!-- 3.3.5 Context-Sensitive Help -->
      <label for="phone">Phone Number</label>
      <input id="phone" name="phone" aria-describedby="phone-help">
      <small id="phone-help">Include area code. Format: 555-123-4567</small>
      
      <!-- 1.4.8 Visual Presentation -->
      body {
        line-height: 1.6;
        max-width: 75ch;
        text-align: left;
        margin: 1rem auto;
        background-color: #ffffff;
        color: #111111;
      }
          `
        }
      ]
    ,
  
    conclusion:
      "WCAG’s conformance levels provide a flexible roadmap toward digital inclusion. Level A ensures no one is fully excluded. Level AA enhances usability and legal safety. Level AAA maximizes equity and trust. Whether you're launching a government site, a private portal, or a nonprofit campaign—your accessibility journey starts with understanding these levels and planning for sustainable, user-centered growth."
  };
  
  export default articleData;
  