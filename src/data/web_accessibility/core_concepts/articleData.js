const articleData = {
    introduction:
      "Web accessibility, often abbreviated as 'a11y,' refers to the inclusive practice of designing and developing websites and digital content so that people with disabilities can perceive, understand, navigate, and interact with them independently. The goal is to remove digital barriers and promote equal participation. But accessibility is more than compliance—it's about universal design, ethical inclusion, and building a web that works for everyone, in every context.",
  
    keyPrinciples: {
      title: "Foundational Ideas in Web Accessibility",
      content: [
        "Accessibility is about creating digital spaces that can be used by the widest possible audience.",
        "It includes permanent, temporary, and situational impairments, such as blindness, broken arms, or using a phone in bright sunlight.",
        "Web accessibility improves usability for all users—not just those with disabilities.",
        "The Web is a fundamental human right according to the UN Convention on the Rights of Persons with Disabilities (CRPD).",
        "The W3C envisions the web as a platform meant to work for all people, regardless of hardware, software, language, location, or ability."
      ]
    },
  
    deepDive_definition: {
      title: "What Is a11y (Accessibility)?",
      content: [
        "'A11y' is a numeronym for 'accessibility'—with 11 letters between the 'a' and 'y'.",
        "It refers to the design of websites, tools, and technologies so that people with disabilities can use them.",
        "This includes people who are blind, deaf, use screen readers, have limited mobility, cognitive or neurological differences, or speech impairments.",
        "True accessibility means all users can perceive, understand, navigate, and interact with content—regardless of their specific challenges or how they access the web."
      ]
    },
  
    deepDive_disabilitySpectrum: {
      title: "The Disability Spectrum",
      content: [
        "Disabilities can be auditory, cognitive, neurological, physical, speech-based, or visual.",
        "These categories are not rigid—many people have overlapping or context-dependent impairments.",
        "Designing for this broad spectrum ensures more equitable access for everyone."
      ]
    },
  
    deepDive_inclusivePractice: {
      title: "Inclusive Practice and Universal Design",
      content: [
        "Inclusive design aims to ensure usability by as many people as possible, without needing adaptation.",
        "It doesn't mean 'designing for the average user'—it means embracing diversity of human experience.",
        "Universal design often enhances usability for all users, not just those with disabilities.",
        "Example: Resizable text helps low-vision users, mobile users, and older adults alike."
      ]
    },
  
    deepDive_curbCutEffect: {
      title: "The Curb-Cut Effect",
      content: [
        "Originally a physical accessibility feature, curb cuts (ramps on sidewalks) now help many groups—stroller pushers, delivery workers, travelers.",
        "The digital analogy: accessibility improvements (like captions, keyboard support) help all users.",
        "This illustrates how a feature built for a specific disability often becomes a general UX improvement."
      ]
    },
  
    deepDive_broadBenefits: {
      title: "Wider Benefits for Everyone",
      content: [
        "Accessibility benefits users in low-bandwidth areas, older users, or people in distracting environments.",
        "Examples: transcripts help users on slow connections; keyboard shortcuts help power users.",
        "This aligns accessibility with better usability, responsiveness, and performance—core design priorities."
      ]
    },
  
    deepDive_barrierRemoval: {
      title: "Removing Barriers: A Human-Centered Goal",
      content: [
        "The purpose of accessibility is not just legal compliance, but the ethical imperative to eliminate unnecessary friction in the digital experience.",
        "Barriers can be structural (lack of semantic HTML), functional (keyboard traps), or perceptual (low contrast or missing alt text).",
        "Accessible design ensures all users can complete essential tasks—like reading, shopping, or applying for jobs—without undue effort."
      ]
    },
  
    deepDive_w3cVision: {
      title: "The W3C Vision",
      content: [
        "The W3C states: 'The Web is designed to work for all people, regardless of hardware, software, language, location, or ability.'",
        "This principle drives the creation of standards like WCAG, ensuring that web content remains usable, adaptable, and inclusive.",
        "Following this vision means baking accessibility into every part of the development process—not treating it as an afterthought."
      ]
    },
  
    codeExamples: [
      {
        title: "Semantic HTML Example: Headings",
        code: `
  <!-- Proper use of semantic headings -->
  <h1>Understanding Accessibility</h1>
  <h2>Why It Matters</h2>
  <p>Content explaining importance...</p>
  
  <!-- Poor example using divs instead -->
  <div class="heading1">Understanding Accessibility</div>
  <div class="heading2">Why It Matters</div>
        `
      },
      {
        title: "Skip Link Example",
        code: `
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <main id="main-content">
    <!-- Main content starts here -->
  </main>
        `
      }
    ],
  
    conclusion:
      "Web accessibility is not a narrow legal obligation—it is a reflection of inclusive design thinking. Understanding its core concepts reveals that accessibility is about designing with empathy, foresight, and respect for the full range of human diversity. When embraced early in the design process, accessibility fosters digital spaces that are usable by everyone, resulting in better outcomes for users, organizations, and society as a whole."
  };
  
  export default articleData;
  