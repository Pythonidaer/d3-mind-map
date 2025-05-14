const articleData = {
    introduction: `D3.js may be a low-level toolkit, but it's perfectly capable of building common charts like bars, lines, pies, and scatter plots. These "simple" charts form the foundation of data visualization, and learning to build them in D3 provides a gateway to mastering more complex visual systems. In this guide, we walk through the key steps involved in creating these basic charts using D3’s core features — from setting up the SVG canvas to scaling, drawing shapes, and avoiding common pitfalls.`,
  
    keyPrinciples: {
      title: 'The Philosophy Behind Manual Chart Construction',
      content: [
        `D3 doesn’t give you a bar chart component. It gives you data binding, scales, and SVG primitives—and expects you to define the relationship between data and visuals. This is more work upfront, but it results in unmatched flexibility. When you learn to build simple charts manually, you also learn how to customize them precisely, combine them into dashboards, and add animation or interactivity that most charting libraries don’t allow.`,
      ],
    },
  
    setup: {
      title: 'Setting Up the SVG Canvas',
      content: [
        `The first step in building any chart with D3 is setting up an SVG container and defining its dimensions. Most charts use a margin convention to leave space for axes and labels. You define a total width and height, then subtract margins from each side to get an "inner" drawing area.`,
        `This ensures that the visual content doesn’t clash with the outer edges and that axes can be added cleanly.`,
      ],
    },
  
    svg_margins: {
      title: 'SVG and Margins',
      content: [
        `Use a JavaScript object like \`{top: 20, right: 30, bottom: 30, left: 40}\` to define margins. Subtract these from the overall width/height to get the usable plotting area. This allows space for axes, labels, and padding while keeping your chart centered and readable.`,
      ],
    },
  
    data_loading: {
      title: 'Loading and Processing Data',
      content: [
        `D3 provides functions like \`d3.csv()\` and \`d3.json()\` for loading data asynchronously. After loading, numeric values are often strings by default, so you'll want to convert them using \`+d.value\` or \`parseFloat()\`.`,
        `This preprocessing ensures compatibility with scale functions, which expect numeric inputs.`,
      ],
    },
  
    scales_axes: {
      title: 'Scales and Axes',
      content: [
        `Scales in D3 are functions that map your data domain (e.g., [0, 100]) to a visual range (e.g., [0, width]). You must define both X and Y scales depending on the chart type. Axes are visual representations of these scales, generated using D3’s axis functions.`,
      ],
    },
  
    x_y_scales: {
      title: 'Creating X and Y Scales',
      content: [
        `For categorical axes (e.g., bar charts), use \`d3.scaleBand()\` to divide space evenly between categories. For numerical or time-series data, use \`d3.scaleLinear()\` or \`d3.scaleTime()\`.`,
        `Scales are essential for positioning elements correctly and consistently across different screen sizes or datasets.`,
      ],
    },
  
    axes_generation: {
      title: 'Generating Axes',
      content: [
        `D3 includes \`d3.axisBottom()\`, \`axisLeft()\`, etc. to render axis ticks and labels. These are applied to \`<g>\` (group) elements inside the SVG, and positioned with \`transform: translate(x, y)\` to align them properly with your chart content.`,
      ],
    },
  
    bar_chart: {
      title: 'Building a Bar Chart',
      content: [
        `In a bar chart, each data point corresponds to a \`<rect>\` element. After setting up your scales and axes, bind your data to a selection, then use \`.enter()\` to create a new \`<rect>\` for each datum.`,
        `Set the \`x\` attribute based on the category, \`y\` based on the value, \`height\` as the difference from the top (since SVG y=0 is at the top), and \`width\` based on the \`scaleBand().bandwidth()\` value.`,
      ],
    },
  
    bars: {
      title: 'Appending Rectangles (Bars)',
      content: [
        `Using \`selection.selectAll('rect').data(data).enter().append('rect')\`, you create one bar per data point. Set attributes like \`x\`, \`y\`, \`height\`, \`width\`, and \`fill\` dynamically based on the bound data and your configured scales.`,
      ],
    },
  
    line_chart: {
      title: 'Building a Line Chart',
      content: [
        `Line charts visualize changes over a continuous range, often time. D3 provides \`d3.line()\` to construct a generator function that converts your data array into an SVG path.`,
        `This path is appended once to your SVG, and its \`d\` attribute is calculated from the x/y scaled data values.`,
      ],
    },
  
    generate_path: {
      title: 'Generating Line Paths',
      content: [
        `A line generator uses accessor functions like \`d => x(d.date)\` and \`d => y(d.value)\`. You pass this to your SVG path's \`d\` attribute: \`<path d={line(data)}>\`. This creates a connected line through all data points.`,
      ],
    },
  
    curve_types: {
      title: 'Curves and Smoothing',
      content: [
        `D3 supports curve options via \`.curve()\`. For example, \`curveLinear\` produces straight lines, while \`curveBasis\` and \`curveCatmullRom\` add smoothing. Choose based on whether you want to emphasize change points or trends.`,
      ],
    },
  
    pie_chart: {
      title: 'Building a Pie Chart',
      content: [
        `Pie charts convert proportions into angles. D3 uses \`d3.pie()\` to compute start and end angles for each segment. You then use \`d3.arc()\` to generate SVG path data for each wedge based on these angles.`,
        `You can create donut charts by setting an \`innerRadius\` value greater than zero.`,
      ],
    },
  
    generate_arcs: {
      title: 'Generating Pie Slices',
      content: [
        `First, compute the angles with \`d3.pie()(data)\`, then bind the resulting data to paths and use \`d3.arc()\` to define the outer radius, start/end angle, and (optionally) inner radius. Fill color can be mapped from a color scale.`,
      ],
    },
  
    scatter_plot: {
      title: 'Building a Scatter Plot',
      content: [
        `Scatter plots show relationships between two variables. Each data point is a circle placed according to \`cx\` and \`cy\` values calculated from scaled data.`,
        `These charts benefit from clear axis labels and optional enhancements like color, tooltips, or size encoding to add dimensionality.`,
      ],
    },
  
    plot_points: {
      title: 'Plotting Points as Circles',
      content: [
        `Bind your data to \`<circle>\` elements and use the X and Y scales to set \`cx\` and \`cy\`. Choose a fixed \`r\` (radius) or scale it dynamically based on a third variable. Optional: add mouseover handlers for tooltips.`,
      ],
    },
  
    antiPatterns: {
      title: 'Common Pitfalls When Building Basic Charts',
      content: [
        `Even simple charts can go wrong. A few recurring issues include skipping margins, misaligned axes, forgetting labels, or re-creating selections inefficiently. D3 gives you control—but with that control comes the responsibility to handle these layout concerns with care.`,
      ],
    },
  
    no_margins: {
      title: 'Skipping Margin Convention',
      content: [
        `Newcomers often draw the chart flush to the SVG’s edge, leading to clipped ticks or misaligned text. Always define a margin and apply \`transform: translate(margin.left, margin.top)\` to your drawing group.`,
      ],
    },
  
    poor_labels: {
      title: 'Forgetting Labels and Titles',
      content: [
        `Axis labels, chart titles, and tooltips provide vital context. D3 doesn’t include them by default—so it's up to you to add descriptive \`<text>\` elements for axes and headings to improve usability.`,
      ],
    },
  
    conclusion: `While building a chart with D3 may seem verbose at first, it gives you exact control over every pixel and behavior. By mastering how to build basic charts—bars, lines, pies, and scatters—you’ll gain fluency with data binding, scaling, layout, and shape generation. These skills lay the groundwork for more complex and creative visualizations, and they ensure that every chart you build is both functional and expressive.`,
  };
  
  export default articleData;
  