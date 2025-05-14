const articleData = {
    introduction: `D3.js isn’t just an academic or hobbyist tool—it’s actively used by some of the most impactful organizations in the world. From Pulitzer-winning data journalism to cutting-edge genomics visualizations, D3 empowers teams to bring clarity and interactivity to complex datasets. This article surveys D3’s role across fields like journalism, business intelligence, scientific research, software development, and public health. By studying these applications, you’ll understand not just how D3 works, but why it matters.`,
  
    keyPrinciples: {
      title: 'Where and Why D3 Is Used',
      content: [
        `D3 is chosen not because it’s fast or easy—but because it allows full creative and data-driven control. That flexibility makes it the tool of choice when visual storytelling, analytical precision, or interaction depth matter more than convenience.`,
        `These examples highlight the breadth of D3’s utility—from rendering election maps and tracking disease outbreaks, to powering product dashboards and human history visualizations.`,
      ],
    },
  
    journalism: {
      title: 'Data Journalism',
      content: [
        `D3 transformed digital journalism by allowing graphics teams to go beyond static charts. With it, readers don't just see data—they explore it. Charts update as you scroll, change when you hover, and guide readers through visual narratives.`,
        `This interactive layer adds emotional and intellectual impact to reporting, helping people internalize trends and nuances far better than text alone.`,
      ],
    },
  
    nyt: {
      title: 'The New York Times',
      content: [
        `The NYT has long used D3 to power interactive political coverage, such as “Paths to the White House” during the 2012 election, which simulated all winning combinations based on Electoral College outcomes. They also use D3 for COVID-19 trackers, demographic maps, and simulations of economic policy outcomes.`,
      ],
    },
  
    guardian_pudding: {
      title: 'The Guardian and The Pudding',
      content: [
        `The Guardian frequently integrates D3 into longform scrollytelling, letting users digest immigration patterns, budget decisions, or environmental changes interactively. The Pudding, known for its “visual essays,” builds immersive stories using custom D3-driven layouts that update dynamically as the reader navigates.`,
      ],
    },
  
    business: {
      title: 'Business Intelligence',
      content: [
        `D3 is often used behind the scenes in business dashboards and analytics platforms. While many companies use off-the-shelf tools like Tableau or Power BI, custom D3 dashboards are chosen when the design needs to match a brand, the logic is too custom for defaults, or the goal is deeply interactive storytelling (e.g., sales funnels with live updates).`,
      ],
    },
  
    dashboards: {
      title: 'Executive Dashboards',
      content: [
        `Startups and enterprises alike build executive-facing dashboards with D3 that include dynamic charts like retention funnels, rolling revenue graphs, or user behavior trees. These are often embedded into internal admin portals, where design and data coupling must be tightly controlled.`,
      ],
    },
  
    ecommerce: {
      title: 'E-Commerce Analytics',
      content: [
        `Retail and SaaS companies use D3 to track conversion rates, A/B test results, and customer journeys. Real-time metrics can update visualizations without re-rendering entire components, enabling responsive performance and precise storytelling about customer behavior.`,
      ],
    },
  
    science: {
      title: 'Scientific Research',
      content: [
        `Fields like biology, climate science, and epidemiology use D3 to visualize complex models, large datasets, and simulated systems. These visuals often go into papers, academic dashboards, or exploratory tools for researchers.`,
      ],
    },
  
    orbvis: {
      title: 'ORBIS Project (Stanford)',
      content: [
        `Stanford’s ORBIS project uses D3 to visualize transportation networks in the Roman Empire. Users can simulate routes by land or sea across seasons, exploring the cost and distance of historical travel. It combines TopoJSON maps with force layouts and sliders for interactivity.`,
      ],
    },
  
    climate_models: {
      title: 'Climate and Disease Mapping',
      content: [
        `Researchers use D3 to track climate variables over time and space—showing temperature anomalies, greenhouse emissions, or glacial retreat. During the COVID-19 pandemic, D3 was used to render animated spread maps, compare vaccination rates, and model growth curves.`,
      ],
    },
  
    development: {
      title: 'Software Development',
      content: [
        `Although D3 manipulates the DOM directly, many teams integrate it with UI frameworks like React and Vue by isolating D3 logic to lifecycle methods or wrapper libraries. These hybrids allow D3’s rendering power to live harmoniously within modern component ecosystems.`,
      ],
    },
  
    visx: {
      title: 'Airbnb’s visx',
      content: [
        `visx is a collection of React components built on top of D3 utilities. It isolates layout and geometry logic (e.g., axis scales, shapes) from the rendering layer (React), enabling high reusability and easier testing. visx is D3 reimagined for modern frontend teams.`,
      ],
    },
  
    framework_integration: {
      title: 'React and Vue Integration',
      content: [
        `Many companies use D3 selectively: calculating coordinates, scales, or arcs in D3, and then rendering using JSX or template syntax. This “D3 for math, React for DOM” philosophy is common in performance-sensitive or highly interactive environments.`,
      ],
    },
  
    public_health: {
      title: 'Public Health and Digital Humanities',
      content: [
        `D3 enables rich data visualization for domains focused on human behavior, culture, and wellbeing. In public health, it tracks virus spread and vaccine rates. In digital humanities, it helps make abstract historical and genealogical data more engaging and accessible.`,
      ],
    },
  
    disease_tracking: {
      title: 'Disease Tracking Visualizations',
      content: [
        `Organizations and researchers have used D3 to build choropleths, time sliders, and infection curve animations for tracking outbreaks like COVID-19, Zika, and Ebola. These maps allow filtering by region, time, and demographic—a task tailor-fit for D3’s interactivity model.`,
      ],
    },
  
    kindred_britain: {
      title: 'Kindred Britain and Digital History',
      content: [
        `The Kindred Britain project visualizes relationships between notable British figures over centuries. Built with D3, it combines network diagrams, timelines, and geographic views to explore familial and cultural influence across generations.`,
      ],
    },
  
    conclusion: `D3 is not simply a technical library—it’s a storytelling medium. Across journalism, business, science, and art, it helps make invisible patterns visible and complex systems understandable. Its use in production applications by respected organizations underscores its staying power and unmatched expressive potential. If your goal is to reveal, explain, or persuade through data, D3 isn’t just a tool—it’s an ally.`,
  };
  
  export default articleData;
  