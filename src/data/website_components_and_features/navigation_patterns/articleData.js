const articleData = {
    introduction: `Website navigation patterns form the backbone of user experience, enabling intuitive access to information, reinforcing brand identity, and guiding user actions. From headers and footers to sidebars, menus, and internal links, these components collectively define the structure and efficiency of a website's interaction model. This article explores the key navigation systems used in modern websites, their strengths and drawbacks, implementation considerations, and real-world design patterns.`,
  
    keyPrinciples: {
      title: 'Core Navigation Principles',
      content: [
        'Consistency across pages enhances usability and learnability.',
        'Navigation should be visible, easy to understand, and accessible.',
        'Scannability and predictability reduce cognitive load.',
        'Navigation systems must adapt to device size and interaction mode (mouse vs. touch).',
        'Structure should follow a logical hierarchy with clear categories and priorities.',
      ],
    },
  
    benefits: {
      title: 'Benefits of Strategic Navigation Design',
      content: [
        'Improved user orientation and reduced bounce rates.',
        'Faster access to key information and conversion actions.',
        'Stronger SEO through structured internal linking and crawlability.',
        'Better accessibility for assistive technologies.',
        'Clearer content discoverability across all devices.',
      ],
    },
  
    cons: {
      title: 'Common Navigation Drawbacks',
      content: [
        'Hidden menus can reduce discoverability and user engagement.',
        'Overcrowded navigation bars confuse users and increase decision fatigue.',
        'Inconsistent layout or position of nav elements can disorient users.',
        'Dropdowns on hover can be hard to use on touchscreens.',
        'Deep nesting (3+ levels) can complicate the mental model.',
      ],
    },
  
    antiPatterns: {
      title: 'Anti-Patterns in Navigation Design',
      content: [
        'Hidden Navigation: Hiding key menu items behind hamburger icons on desktop reduces discoverability.',
        'Overcrowded Menus: Presenting too many choices at once leads to analysis paralysis.',
        'Inconsistent Layouts: Moving the nav bar between pages breaks familiarity and undermines UX.',
      ],
    },
  
    codeExamples: [
      {
        title: 'Sticky Header (CSS)',
        code: `/* CSS */
  header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }`
      },
      {
        title: 'Dropdown Menu (React)',
        code: `// React
  import { useState } from 'react';
  
  export default function DropdownMenu() {
    const [open, setOpen] = useState(false);
  
    return (
      <nav>
        <button onClick={() => setOpen(!open)} aria-haspopup="true" aria-expanded={open}>
          Menu
        </button>
        {open && (
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        )}
      </nav>
    );
  }`
      },
      {
        title: 'Mega Menu (HTML)',
        code: `<!-- HTML -->
  <nav class="mega-nav">
    <ul>
      <li class="dropdown">
        <a href="#">Products</a>
        <div class="mega-menu">
          <div>
            <h4>Category 1</h4>
            <ul>
              <li><a href="#">Product A</a></li>
              <li><a href="#">Product B</a></li>
            </ul>
          </div>
          <div>
            <h4>Category 2</h4>
            <ul>
              <li><a href="#">Product C</a></li>
              <li><a href="#">Product D</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>`
      },
      {
        title: 'Sidebar Navigation (HTML + CSS)',
        code: `<!-- HTML -->
  <aside class="sidebar">
    <nav>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  </aside>
  
  /* CSS */
  .sidebar {
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background: #f7f7f7;
    padding: 1rem;
  }`
      },
      {
        title: 'Off-Canvas Menu (React)',
        code: `// React
  import { useState } from 'react';
  
  export default function OffCanvas() {
    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setOpen(!open)}>☰</button>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: open ? 0 : '-250px',
          width: '250px',
          height: '100%',
          background: '#fff',
          transition: 'left 0.3s ease',
          padding: '2rem'
        }}>
          <a href="/home">Home</a>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    );
  }`
      },
      {
        title: 'Breadcrumb Navigation (HTML with Schema)',
        code: `<!-- HTML -->
  <nav aria-label="breadcrumb">
    <ol itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" href="/">
          <span itemprop="name">Home</span>
        </a>
        <meta itemprop="position" content="1" />
      </li>
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" href="/blog">
          <span itemprop="name">Blog</span>
        </a>
        <meta itemprop="position" content="2" />
      </li>
    </ol>
  </nav>`
      },
      {
        title: 'Bottom Navigation (HTML + CSS)',
        code: `<!-- HTML -->
  <nav class="bottom-nav">
    <a href="/home">Home</a>
    <a href="/search">Search</a>
    <a href="/profile">Profile</a>
  </nav>
  
  /* CSS */
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: space-around;
    background: #eee;
    padding-top: 10px;
  }`
      },
      {
        title: 'Internal Link with Semantic Anchor',
        code: `<!-- HTML -->
  <p>
    Learn more about our <a href="/about">team and mission</a>.
  </p>`
      }
    ],
  
    conclusion: `Thoughtful navigation design requires balancing clarity, aesthetics, responsiveness, and scalability. By exploring common patterns—headers, menus, sidebars, breadcrumbs, and internal links—developers can craft interfaces that are both discoverable and intuitive. Avoiding anti-patterns like hidden navigation or overcrowded menus ensures higher engagement and task success. When implemented with accessibility and usability in mind, navigation becomes the silent partner that guides users fluidly through their journey.`
  };
  
  export default articleData;