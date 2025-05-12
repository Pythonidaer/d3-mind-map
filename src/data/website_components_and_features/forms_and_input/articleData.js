const articleData = {
    introduction: `Forms and input elements are the bridge between users and data in any digital product. From signing up to searching, uploading files to placing orders, forms are essential to capturing user intent. But their design and functionality can either enable smooth interactions or cause user frustration. This article explores different form types, input elements, behavioral patterns, accessibility concerns, and pitfalls to avoid.`,
  
    keyPrinciples: {
      title: 'Key Principles of Effective Forms',
      content: [
        'Forms must provide meaningful structure, guiding users through fields with clarity.',
        'Label associations and validation messages are essential for accessibility.',
        'Forms should react in real-time where possible, offering immediate feedback.',
        'Progress indicators or multi-step layouts can reduce cognitive overload.',
        'Forms must communicate clearly when actions succeed or fail.',
        'Minimize required input and remove unnecessary friction for users.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Well-Designed Forms',
      content: [
        'Improves conversion rates by reducing drop-offs.',
        'Encourages engagement by offering clear, responsive feedback.',
        'Supports accessibility through labels, aria attributes, and keyboard navigation.',
        'Collects more accurate data by guiding input with real-time validation.',
        'Builds trust with clear success/error messaging and visual feedback.'
      ]
    },
  
    cons: {
      title: 'Form Anti-Patterns and Drawbacks',
      content: [
        'Missing labels confuse users and break screen readers.',
        'Overly long forms cause fatigue and lead to abandonment.',
        'Lack of input validation results in unusable or incorrect submissions.',
        'Unclear submission feedback leaves users unsure if their action worked.'
      ]
    },
  
    antiPatterns: {
      title: 'Common Form Anti-Patterns',
      content: [
        '🚫 No error state or success message after submission.',
        '🚫 Placeholder text used instead of labels.',
        '🚫 Requiring too many unnecessary fields.',
        '🚫 Inputs without unique IDs or matching labels.',
        '🚫 Forms that reset on error without preserving input values.'
      ]
    },
  
    codeExamples: [
      // FORM TYPES
      {
        title: 'Contact Form (HTML)',
        code: `<form>
    <label for="name">Name</label>
    <input id="name" type="text" required />
    <label for="email">Email</label>
    <input id="email" type="email" required />
    <label for="message">Message</label>
    <textarea id="message"></textarea>
    <button type="submit">Send</button>
  </form>`
      },
      {
        title: 'Login Form',
        code: `<form>
    <label for="user">Username</label>
    <input id="user" type="text" />
    <label for="pass">Password</label>
    <input id="pass" type="password" />
    <button type="submit">Log In</button>
  </form>`
      },
      {
        title: 'Search Form with Autocomplete',
        code: `<input type="search" list="suggestions" placeholder="Search..." />
  <datalist id="suggestions">
    <option value="HTML" />
    <option value="CSS" />
    <option value="JavaScript" />
  </datalist>`
      },
      {
        title: 'Multi-Step Checkout Form (React Snippet)',
        code: `const [step, setStep] = useState(1);
  return step === 1 ? <ShippingForm /> : <PaymentForm />;`
      },
  
      // INPUT ELEMENTS
      {
        title: 'Radio and Checkbox Inputs',
        code: `<fieldset>
    <legend>Choose your plan</legend>
    <label><input type="radio" name="plan" /> Basic</label>
    <label><input type="radio" name="plan" /> Pro</label>
  </fieldset>
  <label><input type="checkbox" /> I agree to the terms</label>`
      },
      {
        title: 'Dropdown Input',
        code: `<label for="role">Role</label>
  <select id="role">
    <option>Developer</option>
    <option>Designer</option>
  </select>`
      },
      {
        title: 'File Upload Input',
        code: `<label for="file">Upload resume</label>
  <input type="file" id="file" accept=".pdf,.docx" />`
      },
      {
        title: 'Date and Range Inputs',
        code: `<label for="dob">Birthdate</label>
  <input type="date" id="dob" />
  <label for="volume">Volume</label>
  <input type="range" min="0" max="100" id="volume" />`
      },
  
      // FORM BEHAVIOR
      {
        title: 'Inline Validation with JavaScript',
        code: `<input id="email" />
  <span id="error" role="alert" style="color: red;"></span>
  <script>
  document.getElementById('email').addEventListener('blur', e => {
    const isValid = e.target.value.includes('@');
    document.getElementById('error').textContent = isValid ? '' : 'Invalid email';
  });
  </script>`
      },
      {
        title: 'Loading State on Submit',
        code: `<button id="submitBtn">Submit</button>
  <script>
    const btn = document.getElementById('submitBtn');
    btn.onclick = () => {
      btn.textContent = 'Submitting...';
      btn.disabled = true;
    };
  </script>`
      },
      {
        title: 'Multi-Step Progress Indicator',
        code: `<div class="progress">
    <div class="bar" style="width: 50%"></div>
  </div>
  <style>
  .progress { background: #eee; height: 8px; }
  .bar { background: #3f51b5; height: 8px; }
  </style>`
      },
  
      // ACCESSIBILITY
      {
        title: 'Label Association with Inputs',
        code: `<label for="username">Username</label>
  <input id="username" name="username" />`
      },
      {
        title: 'Keyboard-Only Navigation Example',
        code: `<button tabindex="0">Next</button>
  <button tabindex="0">Back</button>`
      },
      {
        title: 'Accessible Error State',
        code: `<div role="alert">Email is required</div>
  <input aria-invalid="true" aria-describedby="email-error" />
  <span id="email-error">Please enter a valid email</span>`
      },
  
      // CONS / ANTI-PATTERNS
      {
        title: 'Anti-Pattern: No Label on Input',
        code: `<input type="text" placeholder="Enter name" /> <!-- Missing <label> -->`
      },
      {
        title: 'Anti-Pattern: Form with No Validation',
        code: `<form>
    <input type="email" /> <!-- No required, no validation -->
  </form>`
      },
      {
        title: 'Anti-Pattern: No Feedback on Submit',
        code: `<button type="submit">Submit</button> <!-- No loader or response UI -->`
      }
    ],
  
    conclusion: `Forms are essential for capturing user intent, but they are also one of the easiest parts of a UI to mishandle. Effective form design is a combination of accessibility, feedback, simplicity, and guidance. Keep inputs clean, validation informative, and progress visible. Always design with empathy for the user’s time and cognitive load — especially on mobile devices where form UX must be frictionless and forgiving.`
  };
  
  export default articleData;
  