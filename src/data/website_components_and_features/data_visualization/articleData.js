const articleData = {
    introduction: `Data visualization is the art and science of transforming complex data into visual formats that are easy to interpret. By using charts, maps, dashboards, and interactions, designers can help users discover trends, make comparisons, and extract meaning from information. A good visualization is both accurate and intuitive, combining clarity with aesthetic appeal. This article covers various types of data visualizations, interactive enhancements, styling principles, and pitfalls to avoid.`,
  
    keyPrinciples: {
      title: 'Key Principles of Data Visualization',
      content: [
        'Choose the right chart type based on your data’s structure and intent.',
        'Prioritize clarity by labeling axes, using legends, and avoiding unnecessary decoration.',
        'Make charts accessible through color contrast, descriptions, and keyboard-friendly interactivity.',
        'Enhance value with interactivity like tooltips, filtering, and zooming.',
        'Use whitespace and grouping to emphasize structure and minimize visual overload.'
      ]
    },
  
    benefits: {
      title: 'Benefits of Visualizing Data',
      content: [
        'Accelerates pattern recognition and decision-making.',
        'Reveals insights that are hidden in raw tables or text.',
        'Enables non-technical users to understand complex metrics.',
        'Supports storytelling with progressive disclosure and interactivity.',
        'Improves communication across stakeholders and departments.'
      ]
    },
  
    cons: {
      title: 'Pitfalls in Data Visualization',
      content: [
        'Misleading scales can distort interpretations.',
        'Cluttered layouts overwhelm users and obscure meaning.',
        'Unlabeled axes or legends leave users guessing.',
        'Inconsistent encoding (color, size) leads to confusion.',
        'Overuse of gradients, shadows, or animation reduces legibility.'
      ]
    },
  
    antiPatterns: {
      title: 'Data Visualization Anti-Patterns',
      content: [
        '🚫 Truncated Y-axes exaggerate small changes.',
        '🚫 Overlapping labels make charts unreadable.',
        '🚫 Pie charts with too many slices lose meaning.',
        '🚫 Interactive features (like filters) without visible cues.',
        '🚫 Bright colors used arbitrarily without purpose or scale.'
      ]
    },
  
    codeExamples: [
      // CHART TYPES
      {
        title: 'Bar Chart with Chart.js (JavaScript)',
        code: `new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{ label: 'Votes', data: [12, 19, 3] }]
    }
  });`
      },
      {
        title: 'Line Chart with D3.js',
        code: `const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));
  svg.append("path")
    .datum(data)
    .attr("d", line)
    .attr("stroke", "steelblue");`
      },
      {
        title: 'Pie Chart in HTML with CSS Only',
        code: `<div class="pie" style="--p:75">75%</div>
  <style>
  .pie {
    --p: 0;
    background: conic-gradient(#4caf50 calc(var(--p)*1%), #ccc 0);
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  </style>`
      },
      {
        title: 'Area Chart with ApexCharts',
        code: `new ApexCharts(document.querySelector("#chart"), {
    chart: { type: 'area' },
    series: [{ name: 'Revenue', data: [30, 40, 35, 50, 49] }]
  }).render();`
      },
  
      // INTERACTIVE FEATURES
      {
        title: 'Tooltip on Hover (D3.js)',
        code: `svg.selectAll('circle')
    .on('mouseover', function(event, d) {
      tooltip.style('opacity', 1).text(d.label);
    });`
      },
      {
        title: 'Zoom and Pan (Chart.js)',
        code: `options: {
    plugins: {
      zoom: {
        pan: { enabled: true },
        zoom: { wheel: { enabled: true } }
      }
    }
  }`
      },
      {
        title: 'Filter Controls (React)',
        code: `const [type, setType] = useState('All');
  <select onChange={e => setType(e.target.value)}>
    <option>All</option>
    <option>Revenue</option>
    <option>Users</option>
  </select>`
      },
  
      // TIMELINES & MAPS
      {
        title: 'Horizontal Timeline (HTML/CSS)',
        code: `<ul class="timeline">
    <li><span>Jan</span></li>
    <li><span>Feb</span></li>
  </ul>
  <style>
  .timeline {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  .timeline li {
    border-left: 2px solid #333;
    padding-left: 1rem;
  }
  </style>`
      },
      {
        title: 'Geographic Map with Leaflet.js',
        code: `L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);`
      },
  
      // DASHBOARDS & INFOGRAPHICS
      {
        title: 'KPI Panel with HTML/CSS',
        code: `<div class="kpi">
    <h2>$89,210</h2>
    <p>Monthly Revenue</p>
  </div>
  <style>
  .kpi { background: #fff; padding: 1rem; border-left: 4px solid green; }
  </style>`
      },
      {
        title: 'Data Card Example',
        code: `<div class="card">
    <h4>New Users</h4>
    <p>1,024</p>
  </div>`
      },
      {
        title: 'Composite Dashboard Layout (CSS Grid)',
        code: `.dashboard {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }`
      },
  
      // STYLING TECHNIQUES
      {
        title: 'Color Encoding for Categories',
        code: `const colors = {
    revenue: '#4caf50',
    users: '#2196f3',
    churn: '#f44336'
  };`
      },
      {
        title: 'Axis Labels (D3)',
        code: `svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + 40)
    .text("Time");`
      },
      {
        title: 'Legend for Multiple Series',
        code: `<ul class="legend">
    <li><span style="background:red;"></span> Sales</li>
    <li><span style="background:blue;"></span> Signups</li>
  </ul>`
      },
  
      // BAD PRACTICES
      {
        title: 'Anti-Pattern: Truncated Y-Axis',
        code: `y.domain([50, 100]); // Creates misleading exaggeration`
      },
      {
        title: 'Anti-Pattern: Excessive Labels',
        code: `data.forEach(d => svg.append("text").text(d.value)); // Creates label spam`
      },
      {
        title: 'Anti-Pattern: No Axes or Legends',
        code: `<canvas id="chart"></canvas> <!-- No explanation of data meaning -->`
      }
    ],
  
    conclusion: `Data visualization is a powerful tool that reveals meaning in numbers, but it’s only effective when clarity, ethics, and usability come first. Always design with your user’s cognitive load and context in mind. Use color and interaction to assist—not overwhelm—and avoid embellishment that masks the truth. A well-crafted visualization enables users to see what matters most, quickly and confidently.`
  };
  
  export default articleData;
  