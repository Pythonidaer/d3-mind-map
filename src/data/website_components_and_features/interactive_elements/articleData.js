const articleData = {
    introduction: `Interactive elements are the touchpoints that drive user engagement, data input, navigation, and feedback within a website or application. They define how users perform actions, how systems communicate status, and how seamless and accessible a digital experience feels. This guide explores the key interactive UI components, their use cases, risks, and implementation patterns.`,

    keyPrinciples: {
        title: 'Principles of Effective Interactivity',
        content: [
            'Interactive components must offer clear affordances — users should know what is clickable or editable.',
            'Buttons and inputs should be accessible via keyboard and screen reader.',
            'Feedback elements like loaders, error messages, or progress bars guide users and reduce uncertainty.',
            'Modals, tooltips, and animations should be purposeful, focused, and minimally disruptive.',
            'Interactive states (hover, focus, active) should provide visual cues without overwhelming.',
            'Good interactivity balances clarity, speed, accessibility, and visual polish.'
        ]
    },

    benefits: {
        title: 'Benefits of Interactive Elements',
        content: [
            'Enables users to submit data, make choices, and control the interface.',
            'Creates a responsive and intuitive user experience.',
            'Reinforces feedback loops — users know what’s happening and why.',
            'Boosts usability by revealing content progressively (tooltips, modals, drawers).',
            'Builds trust through confirmations, loaders, and clarity of action.',
            'Improves accessibility when inputs, labels, and states are properly implemented.'
        ]
    },

    cons: {
        title: 'Common Pitfalls in Interactivity',
        content: [
            'Modals stacked or triggered without context can frustrate or trap users.',
            'Overreliance on icons without labels reduces usability.',
            'Lack of feedback after actions (e.g., clicking submit) causes confusion.',
            'Animations overused or blocking interaction lead to friction.',
            'Form fields with no validation or too many options overwhelm users.'
        ]
    },

    antiPatterns: {
        title: 'Anti-Patterns and Interactivity Failures',
        content: [
            '🚫 Too many modals open in succession or without proper dismissal options.',
            '🚫 Icon-only interfaces that offer no tooltip or label context.',
            '🚫 Inputs that fail silently — users don’t know what went wrong.',
            '🚫 Loading spinners with no timeout or progress bar fallback.',
            '🚫 Entrance animations that delay access to core features.'
        ]
    },

    codeExamples: [
        {
            title: 'Text Input Field with Label and Placeholder',
            code: `<label for="email">Email</label>
  <input type="email" id="email" placeholder="Enter your email" required />`
        },
        {
            title: 'Checkbox and Radio Group',
            code: `<fieldset>
    <legend>Subscription</legend>
    <label><input type="checkbox" /> Weekly Updates</label>
    <label><input type="checkbox" /> Monthly Digest</label>
  </fieldset>
  
  <fieldset>
    <legend>Plan Type</legend>
    <label><input type="radio" name="plan" /> Basic</label>
    <label><input type="radio" name="plan" /> Premium</label>
  </fieldset>`
        },
        {
            title: 'Dropdown Select Menu',
            code: `<label for="region">Region</label>
  <select id="region">
    <option>Americas</option>
    <option>Europe</option>
    <option>Asia</option>
  </select>`
        },
        {
            title: 'File Upload Input',
            code: `<label for="resume">Upload Resume</label>
  <input type="file" id="resume" accept=".pdf,.docx" />`
        },
        {
            title: 'Primary and Secondary Buttons',
            code: `<button class="btn-primary">Submit</button>
  <button class="btn-secondary">Cancel</button>
  
  <style>
  .btn-primary { background: #007bff; color: white; }
  .btn-secondary { background: transparent; border: 1px solid #ccc; }
  </style>`
        },
        {
            title: 'Icon Button with Accessible Label',
            code: `<button aria-label="Refresh">
    <svg aria-hidden="true"><!-- refresh icon --></svg>
  </button>`
        },
        {
            title: 'Loading Spinner and Message',
            code: `<div class="spinner"></div>
  <p>Loading, please wait...</p>
  
  <style>
  .spinner {
    border: 4px solid #ccc;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  </style>`
        },
        {
            title: 'Progress Bar',
            code: `<label for="progress">Uploading</label>
  <progress id="progress" value="30" max="100">30%</progress>`
        },
        {
            title: 'Modal Dialog (HTML Only)',
            code: `<dialog open>
    <h2>Confirm Delete</h2>
    <p>This action cannot be undone.</p>
    <button>Cancel</button>
    <button>Delete</button>
  </dialog>`
        },
        {
            title: 'Tooltip (Accessible)',
            code: `<button aria-describedby="help-text">?</button>
  <span id="help-text" role="tooltip">This submits the form</span>`
        },
        {
            title: 'Hover Animation for Button',
            code: `<button class="hoverable">Hover Me</button>
  <style>
  .hoverable {
    transition: background-color 0.3s ease;
  }
  .hoverable:hover {
    background-color: #eee;
  }
  </style>`
        },
        {
            title: 'Entrance Animation Example',
            code: `<div class="fade-in">Welcome!</div>
  <style>
  .fade-in {
    opacity: 0;
    animation: fade 1s ease forwards;
  }
  @keyframes fade {
    to { opacity: 1; }
  }
  </style>`
        },
        // TOOLTIP & POPOVER
        {
            title: 'Accessible Tooltip (HTML)',
            code: `<button aria-describedby="tip">Info</button>
      <span id="tip" role="tooltip">This button opens your profile settings.</span>`
        },
        {
            title: 'Tooltip with Tippy.js (JS Library)',
            code: `<button id="helpBtn">?</button>
      <script>
        tippy('#helpBtn', {
          content: 'Click for help',
          placement: 'top',
        });
      </script>`
        },
        {
            title: 'Popover Using Headless UI (React)',
            code: `import { Popover } from '@headlessui/react';
      
      <Popover>
        <Popover.Button>Details</Popover.Button>
        <Popover.Panel className="popover">
          <p>More information here</p>
        </Popover.Panel>
      </Popover>`
        },

        // TOASTS / STATUS FEEDBACK
        {
            title: 'Toast Notification (Vanilla JS)',
            code: `<div id="toast" class="toast">Saved!</div>
      <style>
      .toast {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background: #333;
        color: #fff;
        padding: 0.5rem 1rem;
        opacity: 0;
        transition: opacity 0.5s;
      }
      .toast.show {
        opacity: 1;
      }
      </style>
      <script>
        document.getElementById('toast').classList.add('show');
      </script>`
        },

        // MODALS & DRAWERS
        {
            title: 'Accessible Modal with Close Button',
            code: `<div role="dialog" aria-modal="true" class="modal">
        <h2>Subscribe</h2>
        <input placeholder="Your email" />
        <button>Submit</button>
        <button onclick="close()">Close</button>
      </div>`
        },
        {
            title: 'Sliding Drawer Panel (CSS)',
            code: `<div class="drawer">Settings Panel</div>
      <style>
      .drawer {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100%;
        background: #f1f1f1;
        transition: right 0.3s;
      }
      .drawer.open {
        right: 0;
      }
      </style>`
        },

        // PROGRESS & LOADING STATES
        {
            title: 'Linear Progress Bar',
            code: `<progress value="45" max="100">45%</progress>`
        },
        {
            title: 'Loading Dots (CSS)',
            code: `<div class="dots"><span>.</span><span>.</span><span>.</span></div>
      <style>
      .dots span {
        animation: blink 1.4s infinite;
      }
      @keyframes blink {
        0%, 80%, 100% { opacity: 0; }
        40% { opacity: 1; }
      }
      </style>`
        },

        // MAP INTERACTIONS
        {
            title: 'Mapbox Marker Initialization',
            code: `mapboxgl.accessToken = 'your_token';
      const map = new mapboxgl.Map({ container: 'map' });
      new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);`
        },
        {
            title: 'Map with Filterable Layer (Leaflet)',
            code: `const map = L.map('map').setView([51.505, -0.09], 13);
      const markers = [
        { coords: [51.5, -0.09], type: 'restaurant' },
        { coords: [51.51, -0.1], type: 'store' }
      ];
      function showOnly(type) {
        markers.forEach(m => {
          if (m.type === type) {
            L.marker(m.coords).addTo(map);
          }
        });
      }`
        },

        // MICRO-INTERACTIONS
        {
            title: 'Toggle Switch (ARIA + CSS)',
            code: `<button role="switch" aria-checked="false" onclick="toggleSwitch(this)">
        Toggle Feature
      </button>
      <script>
      function toggleSwitch(btn) {
        const on = btn.getAttribute('aria-checked') === 'true';
        btn.setAttribute('aria-checked', !on);
      }
      </script>`
        },
        {
            title: 'Like Button with Heart Animation',
            code: `<button class="like-btn">❤</button>
      <style>
      .like-btn {
        transition: transform 0.2s;
      }
      .like-btn:active {
        transform: scale(1.3);
      }
      </style>`
        },

        // ENTRANCE ANIMATIONS
        {
            title: 'Fade-in on Scroll (Intersection Observer)',
            code: `<div class="fade">Hello!</div>
      <script>
      const el = document.querySelector('.fade');
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
      obs.observe(el);
      </script>
      <style>
      .fade { opacity: 0; transition: opacity 1s; }
      .fade.visible { opacity: 1; }
      </style>`
        }

    ],

    conclusion: `Interactive elements shape how users move through your interface. When implemented with care, they guide attention, communicate status, and respond gracefully to actions. But when ignored or misused, they become barriers to usability. The goal is not to maximize motion or features — it’s to ensure every interaction helps users complete tasks efficiently, confidently, and enjoyably.`
};

export default articleData;
