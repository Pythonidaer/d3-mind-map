const articleData = {
    introduction: `Different types of websites serve different purposes. While they may share structural patterns like navigation or forms, each website type has unique goals, users, and must-have components. Understanding these distinctions helps designers, developers, and strategists choose the right architecture, content, and features for the intended audience.`,
  
    keyPrinciples: {
      title: 'Defining Website Types by Purpose',
      content: [
        'E-Commerce sites prioritize sales funnels, product browsing, and secure transactions.',
        'Blogs center around content delivery and long-form publishing.',
        'Portfolios focus on showcasing visual or project-based work.',
        'Business websites build credibility and convert leads.',
        'Educational platforms structure knowledge and learning experiences.',
        'Media and news sites organize high-volume editorial content with categories and multimedia.',
        'Social platforms revolve around user-generated content and interaction.',
        'Nonprofit websites aim to inspire action through donations, volunteering, and storytelling.'
      ]
    },
  
    benefits: {
      title: 'Why Distinguishing Website Types Matters',
      content: [
        'Speeds up design decisions and feature prioritization.',
        'Aligns stakeholder expectations with user needs.',
        'Improves performance and conversion by focusing on specific goals.',
        'Simplifies scalability and CMS configuration.',
        'Supports accessibility by aligning layout with predictable patterns.'
      ]
    },
  
    cons: {
      title: 'What Happens When the Type is Ignored',
      content: [
        'Generic pages that lack strategic focus.',
        'Bloating a site with unnecessary features.',
        'Unintuitive user flows (e.g., a contact-only nonprofit site with no donation form).',
        'Wasted time and budget on irrelevant components.',
        'SEO misalignment when page structure doesn’t match content purpose.'
      ]
    },
  
    antiPatterns: {
      title: 'Common Mistakes in Website Planning',
      content: [
        '🚫 Designing a business site like a blog, with no clear call-to-action.',
        '🚫 Adding e-commerce checkout to a portfolio with no product strategy.',
        '🚫 Ignoring data protection requirements on social sites.',
        '🚫 Mixing unrelated content types without a clear taxonomy.',
        '🚫 Using one-size-fits-all templates without customization.'
      ]
    },
  
    codeExamples: [
      // E-COMMERCE
      {
        title: 'Basic Product Card',
        code: `<div class="product">
    <img src="shirt.jpg" alt="Product Image" />
    <h3>Logo Shirt</h3>
    <p>$29.99</p>
    <button>Add to Cart</button>
  </div>`
      },
      {
        title: 'Shopping Cart UI',
        code: `<div class="cart-item">
    <span>Item: Hat</span>
    <span>Qty: 2</span>
    <span>Total: $20</span>
  </div>`
      },
  
      // BLOG
      {
        title: 'Blog Article Template (HTML)',
        code: `<article>
    <h1>Post Title</h1>
    <p>By Author • Jan 1, 2024</p>
    <div class="content">...</div>
  </article>`
      },
      {
        title: 'Category Archive Page',
        code: `<h2>Articles tagged "Design"</h2>
  <ul>
    <li><a href="/post/1">How to use color</a></li>
  </ul>`
      },
  
      // PORTFOLIO
      {
        title: 'Case Study Summary Block',
        code: `<div class="case-study">
    <h3>Brand Identity for Acme Co</h3>
    <p>Led visual redesign from brief to execution.</p>
    <a href="/case/acme">View Case Study</a>
  </div>`
      },
      {
        title: 'Lightbox Image Gallery',
        code: `<img src="thumb.jpg" onclick="openLightbox('full.jpg')" />`
      },
  
      // BUSINESS
      {
        title: 'Services Grid',
        code: `<div class="service">
    <h4>Web Development</h4>
    <p>Custom WordPress and React solutions.</p>
  </div>`
      },
      {
        title: 'Lead Capture Form',
        code: `<form>
    <input type="email" placeholder="Enter email" />
    <button type="submit">Get Quote</button>
  </form>`
      },
  
      // EDUCATIONAL
      {
        title: 'Course Listing Item',
        code: `<div class="course">
    <h3>JavaScript Fundamentals</h3>
    <p>Instructor: Jane Doe</p>
    <button>Start Course</button>
  </div>`
      },
      {
        title: 'Lesson Page Layout',
        code: `<h2>Lesson 3: Loops</h2>
  <video controls src="lesson3.mp4"></video>
  <ul>
    <li>For loop example</li>
    <li>While loop challenge</li>
  </ul>`
      },
  
      // MEDIA & NEWS
      {
        title: 'Breaking News Banner',
        code: `<div class="alert-banner">
    Breaking: Major tech acquisition announced.
  </div>`
      },
      {
        title: 'Embedded Video Block',
        code: `<iframe src="https://youtube.com/embed/videoid" title="News Video"></iframe>`
      },
  
      // SOCIAL PLATFORM
      {
        title: 'Feed Component',
        code: `<div class="post">
    <strong>@johndoe</strong>
    <p>Just finished a hike!</p>
  </div>`
      },
      {
        title: 'Notification Bell (React)',
        code: `const [count, setCount] = useState(3);
  return <div>🔔 {count}</div>;`
      },
  
      // NONPROFIT
      {
        title: 'Donation Form Snippet',
        code: `<form>
    <input type="number" placeholder="$50" />
    <button>Donate Now</button>
  </form>`
      },
      {
        title: 'Mission Statement Section',
        code: `<section>
    <h2>Our Mission</h2>
    <p>To eliminate hunger through local food banks.</p>
  </section>`
      }
    ],
  
    conclusion: `The best websites are purpose-built. By matching structure and features to user intent, designers create sites that feel intuitive, persuasive, and useful. Whether you're building a store, a personal brand, a social network, or a course platform, always ask: who is this for, and what do they need to accomplish? Let the answer drive every page and component you build.`
  };
  
  export default articleData;
  