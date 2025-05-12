const articleData = {
    introduction: `Content presentation is more than layout—it's how structure, styling, media, and interaction work together to shape the user’s experience. A well-presented website improves clarity, accessibility, and engagement across all devices. This article expands on every node in the mind map, with examples for text, imagery, video, structure, and visual effects.`,
  
    keyPrinciples: {
      title: 'Foundations of Content Presentation',
      content: [
        'Use clean typography and spacing to enhance text readability.',
        'Display images using responsive grids, carousels, and lightbox overlays.',
        'Embed videos with captions, controls, and download options.',
        'Present lists and tables with semantic structure and responsive styling.',
        'Build visual hierarchy using font pairings, sizing, and spacing.',
        'Reinforce interactions with iconography and accessible labels.',
        'Support content discoverability through search and autocomplete.',
        'Enhance immersion with parallax and layered visuals—used sparingly.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Proper Content Structuring',
      content: [
        'Improved comprehension and scannability.',
        'Greater accessibility for users with disabilities.',
        'Enhanced SEO through semantic markup.',
        'Stronger engagement via images and video.',
        'Faster loading and reduced bounce rates.',
        'Clear visual flow and navigation across screen sizes.'
      ]
    },
  
    cons: {
      title: 'Presentation Pitfalls to Avoid',
      content: [
        'Unreadable layouts due to poor spacing or alignment.',
        'Icons without context confuse users.',
        'Autoplay video causes frustration and violates accessibility.',
        'Lack of contrast or missing alt text hinders usability.',
        'Overuse of visual effects overwhelms rather than enhances.'
      ]
    },
  
    antiPatterns: {
      title: 'Anti-Patterns and Misuses',
      content: [
        '🚫 Parallax effects used excessively, reducing performance and disorienting users.',
        '🚫 Justified text blocks creating awkward spacing.',
        '🚫 Missing alt text, harming screen readers and SEO.',
        '🚫 Autoplay videos that start without consent.',
        '🚫 Icon-only UI with no supporting labels or tooltips.'
      ]
    },
  
    codeExamples: [
      {
        title: 'Font Selection with Line Height',
        code: `<style>
  body {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 1.6;
  }
  </style>`
      },
      {
        title: 'Text Alignment and Contrast',
        code: `<style>
  .text-block {
    color: #222;
    background-color: #fff;
    text-align: left;
  }
  </style>`
      },
      {
        title: 'Image Gallery using CSS Grid',
        code: `<div class="gallery">
    <img src="a.jpg" alt="A" />
    <img src="b.jpg" alt="B" />
  </div>
  
  <style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  </style>`
      },
      {
        title: 'Lazy Loading an Image',
        code: `<img src="photo.jpg" loading="lazy" alt="Landscape photo" />`
      },
      {
        title: 'Lightbox Viewer Example',
        code: `<img src="thumb.jpg" id="thumb" />
  <div id="lightbox" style="display:none;">
    <img src="full.jpg" />
  </div>
  
  <script>
  thumb.onclick = () => lightbox.style.display = 'block';
  </script>`
      },
      {
        title: 'Video with Captions and Download',
        code: `<video controls>
    <source src="clip.mp4" type="video/mp4" />
    <track src="captions.vtt" kind="subtitles" />
  </video>
  <a href="clip.mp4" download>Download Video</a>`
      },
      {
        title: 'HTML5 Embedded Video',
        code: `<video controls poster="preview.jpg">
    <source src="video.mp4" type="video/mp4" />
  </video>`
      },
      {
        title: 'Bulleted and Numbered Lists',
        code: `<ul>
    <li>Feature A</li>
    <li>Feature B</li>
  </ul>
  <ol>
    <li>Step 1</li>
    <li>Step 2</li>
  </ol>`
      },
      {
        title: 'Semantic Table Structure',
        code: `<table>
    <caption>Top Products</caption>
    <thead><tr><th>Product</th><th>Sales</th></tr></thead>
    <tbody><tr><td>Widget</td><td>9000</td></tr></tbody>
  </table>`
      },
      {
        title: 'Font Pairing with Hierarchy',
        code: `<style>
  h1 {
    font-family: 'Merriweather', serif;
  }
  p {
    font-family: 'Open Sans', sans-serif;
  }
  </style>`
      },
      {
        title: 'Icon with Label for Accessibility',
        code: `<button aria-label="Download PDF">
    <svg aria-hidden="true"><!-- path --></svg>
  </button>`
      },
      {
        title: 'Search Bar with Autocomplete (React)',
        code: `const suggestions = ['Alpha', 'Beta', 'Gamma'];
  <input onChange={e => {
    const filtered = suggestions.filter(s =>
      s.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    console.log(filtered);
  }} />`
      },
      {
        title: 'Parallax Effect (Positive)',
        code: `<div class="parallax">
    <h1>Immersive Header</h1>
  </div>
  
  <style>
  .parallax {
    background-image: url('bg.jpg');
    background-attachment: fixed;
    background-size: cover;
  }
  </style>`
      },
      {
        title: 'Parallax Overuse (Anti-Pattern)',
        code: `<!-- Avoid attaching parallax to all sections -->`
      },
      {
        title: 'Justified Text Block (Anti-Pattern)',
        code: `<p style="text-align: justify;">
    This block may have uneven word spacing.
  </p>`
      },
      {
        title: 'Missing Alt Text (Anti-Pattern)',
        code: `<img src="graph.png"> <!-- No alt provided -->`
      },
      {
        title: 'Video Autoplay (Anti-Pattern)',
        code: `<video autoplay muted>
    <source src="loop.mp4" />
  </video>`
      },
      {
        title: 'Icon-Only Button (Anti-Pattern)',
        code: `<button>
    <svg><!-- download icon --></svg>
  </button> <!-- Needs aria-label or text -->`
      }
    ],
  
    conclusion: `Presenting content well means balancing structure with style. From headers to video, and from lists to icons, each element should reinforce usability. Good content presentation guides the reader, enhances accessibility, improves speed, and builds trust. Use effects like parallax carefully, support every icon with a label, and let structure—not gimmicks—lead the user experience.`
  };
  
  export default articleData;
  