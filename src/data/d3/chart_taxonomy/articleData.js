const articleData = {
    introduction: `D3.js does not ship with chart types out of the box, but it provides all the building blocks to create any chart imaginable. Understanding the taxonomy of chart types that D3 can power is critical to knowing what’s possible—and which visualization best fits your data and goals. This article organizes common and advanced chart forms into categories, offering detailed descriptions of what each chart is, when to use it, and how D3 makes it possible.`,
  
    keyPrinciples: {
      title: 'How D3 Enables Charts Without Defining Them',
      content: [
        `D3.js is not a charting library—it’s a data-to-DOM engine. It gives you primitives like shapes, paths, transitions, and scales to build charts from scratch. Rather than offering “bar chart” as a method, D3 provides tools like \`d3.scaleBand\`, \`d3.axisBottom\`, and \`d3.rect\`, which let you define exactly how your bars are drawn.`,
        `This means every chart you create in D3 is custom. You decide how the visual encoding reflects the data, and that gives you creative and analytical freedom. The chart types below represent not what D3 provides, but what D3 *enables*.`,
      ],
    },
  
    basic_charts: {
      title: 'Basic Charts',
      content: [
        `These charts form the backbone of most data communication. They’re ideal for simple comparisons, time series, or part-to-whole relationships. D3 can build each one from primitives like rectangles, paths, and circles, paired with scales and axes.`,
      ],
    },
  
    bar_line: {
      title: 'Bar and Line Charts',
      content: [
        `**Bar Charts** display values for discrete categories. They can be vertical or horizontal, grouped or stacked, and are ideal for showing comparisons between items. D3 uses \`scaleBand\` for category placement and \`scaleLinear\` for bar height/width.`,
        `**Line Charts** show trends over time or continuous variables. D3’s \`d3.line()\` generator creates path elements that interpolate between data points. These are particularly effective for time series analysis, where small movements over time carry meaning.`,
      ],
    },
  
    pie_donut: {
      title: 'Pie and Donut Charts',
      content: [
        `Pie and donut charts show the relative proportions of parts of a whole. D3 uses \`d3.pie()\` to compute angle slices from values, and \`d3.arc()\` to generate SVG paths for the wedges.`,
        `While common, these charts are best used when you want to show composition—especially when the exact values are less important than the general distribution.`,
      ],
    },
  
    scatter: {
      title: 'Scatter Plots',
      content: [
        `Scatter plots reveal correlations or clustering in data by placing individual data points along two numerical axes. Each point typically represents one observation with two continuous variables.`,
        `In D3, this is accomplished by using two linear scales (x and y), plotting circles at (cx, cy), and optionally adding interactivity or additional encodings like color, size, or shape to represent more dimensions.`,
      ],
    },
  
    hierarchical: {
      title: 'Hierarchical Charts',
      content: [
        `Hierarchical visualizations help you understand data that has parent-child relationships, such as organizational structures, file systems, or nested groupings.`,
        `D3 provides layouts like \`d3.treemap()\`, \`d3.partition()\`, and \`d3.cluster()\` to compute node sizes and positions from nested data.`,
      ],
    },
  
    treemap: {
      title: 'Treemaps',
      content: [
        `Treemaps represent hierarchy using nested rectangles sized by value. The larger the value, the more screen space it gets. They are ideal for compact visualizations where spatial efficiency is key.`,
        `In D3, you use \`d3.hierarchy()\` to structure your data, then pass it to \`d3.treemap()\` to compute positions and sizes for each rectangle. You then draw \`rect\` elements using these dimensions.`,
      ],
    },
  
    sunburst: {
      title: 'Sunburst and Icicle Charts',
      content: [
        `These are radial (sunburst) or vertical (icicle) representations of hierarchy. Each layer represents a level of depth. D3’s \`d3.partition()\` layout maps depth to radius or vertical space, and \`d3.arc()\` or \`rect\` elements are used for rendering.`,
        `These charts are effective at showing both value and depth in a compact, layered design.`,
      ],
    },
  
    dendrogram: {
      title: 'Dendrograms and Tidy Trees',
      content: [
        `Dendrograms use node-link diagrams to show parent-child relationships. The \`d3.tree()\` or \`d3.cluster()\` layouts in D3 calculate x/y positions for each node and its children.`,
        `You render the links with paths or lines, and circles or text for the nodes. These diagrams are especially helpful in biology, genealogy, or any system that branches hierarchically.`,
      ],
    },
  
    network: {
      title: 'Network Diagrams',
      content: [
        `Network graphs visualize relationships between entities. They’re used in social networks, graph theory, transportation routes, and more. D3’s \`d3.forceSimulation()\` gives nodes a simulated physical behavior, making layouts visually meaningful.`,
      ],
    },
  
    force_directed: {
      title: 'Force-Directed Graphs',
      content: [
        `Force-directed graphs simulate forces like attraction, repulsion, and centering to space out nodes and links naturally. D3 lets you configure these forces using \`forceManyBody\`, \`forceLink\`, \`forceCenter\`, and more.`,
        `As the simulation runs, it updates node positions, which are used to update SVG \`circle\` and \`line\` elements.`,
      ],
    },
  
    chord_arc_sankey: {
      title: 'Chord, Arc, and Sankey Diagrams',
      content: [
        `These specialized network diagrams show flow between entities or segments. **Chord diagrams** use circular layouts with arcs showing connection strength. **Arc diagrams** show links across a linear layout. **Sankey diagrams** visualize flow volume across stages using weighted paths.`,
        `In D3, chord layouts are created with \`d3.chord()\` and rendered using \`d3.arc()\` and \`d3.ribbon()\`. Sankey diagrams can be built using extensions like \`d3-sankey\`.`,
      ],
    },
  
    maps: {
      title: 'Geographic Visualizations',
      content: [
        `D3’s geographic capabilities enable rendering of maps, overlays, projections, and spatial analysis. With \`d3-geo\`, you can project longitude and latitude onto a flat surface using a variety of mathematical projections.`,
      ],
    },
  
    choropleth: {
      title: 'Choropleth Maps',
      content: [
        `These maps shade regions based on data values—e.g., population density or election results. D3 uses \`d3.geoPath()\` to render geographic shapes and \`d3.scaleQuantize()\` or \`scaleThreshold()\` to map data values to colors.`,
      ],
    },
  
    bubble_symbol: {
      title: 'Bubble and Symbol Maps',
      content: [
        `Rather than coloring areas, these maps overlay symbols (like circles) sized or colored by data values. D3 can combine \`geoPath()\`, \`circle\`, and projection utilities to place markers on maps with high precision.`,
      ],
    },
  
    statistical: {
      title: 'Statistical Charts',
      content: [
        `These charts reveal distributions, outliers, and variance in datasets. D3 supports these through utilities in \`d3-array\`, \`d3-shape\`, and layout functions for density or binning.`,
      ],
    },
  
    histogram: {
      title: 'Histograms and Density Plots',
      content: [
        `Histograms group continuous values into bins. D3’s \`d3.histogram()\` computes these bins, and you use \`rect\` elements to draw bars. Density plots smooth this distribution using kernel functions.`,
      ],
    },
  
    box_violin: {
      title: 'Box and Violin Plots',
      content: [
        `Box plots summarize spread (min, Q1, median, Q3, max), and highlight outliers. Violin plots extend this with mirrored density curves. While D3 doesn’t have built-in methods for these, you can compute them with \`d3-array\` and draw shapes using \`d3-shape\`.`,
      ],
    },
  
    advanced: {
      title: 'Advanced & Hybrid Visualizations',
      content: [
        `These charts stretch the boundaries of traditional data viz. D3’s flexibility makes it especially suited for hybrid, creative, or niche use cases that blend multiple dimensions of data.`,
      ],
    },
  
    parallel: {
      title: 'Parallel Coordinates',
      content: [
        `Used for high-dimensional data, each axis represents a variable, and lines connect points across axes. This reveals clustering and patterns across multiple variables.`,
        `D3 renders each axis as a vertical scale and draws polyline paths that pass through the axes at points determined by the data.`,
      ],
    },
  
    stream_mekko_calendar: {
      title: 'Streamgraph, Marimekko, and Calendar Visualizations',
      content: [
        `**Streamgraphs** show stacked area charts with flowing, organic shapes to illustrate evolution over time. **Marimekko charts** show two categorical dimensions by varying both width and height of segments. **Calendar views** visualize time-based activity over daily, weekly, or monthly grids.`,
        `These types demonstrate how D3 allows data to be shaped into almost any form, limited only by creativity and geometry.`,
      ],
    },
  
    conclusion: `D3 empowers developers to create any chart type by assembling primitives: shapes, paths, scales, and transforms. Understanding this taxonomy helps you choose the right visualization for your data—and to think beyond defaults toward more expressive, interactive, and precise representations. Whether it’s a bar chart or a custom radial matrix with animated transitions, D3 gives you the control to build exactly what the story demands.`,
  };
  
  export default articleData;
  