const articleData = {
    introduction: `Choosing the right chart isn’t just about what looks best—it’s about what communicates your data's story with the most clarity and impact. D3.js gives you a massive toolbox of visualization types, but that freedom also means it’s easy to pick the wrong tool for the job. This decision guide helps you navigate that toolbox by asking a series of targeted questions. It’s structured as a branching exploration: start with what you're trying to show, then drill down based on your dataset and your goals.`,
  
    keyPrinciples: {
      title: 'From Purpose to Pattern: Navigating Chart Decisions',
      content: [
        `Every good visualization starts with a purpose. Do you want to show trends? Compare groups? Explore relationships? Display proportions? The chart you pick should amplify your point, reduce friction, and draw attention to meaningful patterns.`,
        `This guide isn’t about prescribing a single “correct” chart—but about helping you eliminate poor fits and focus on strong candidates based on the nature of your data and your audience’s needs.`,
      ],
    },
  
    distribution: {
      title: 'Is Your Goal to Show How Data is Distributed?',
      content: [
        `Distribution charts reveal how values spread across a range. Ask yourself:`,
        `- Is your data continuous or discrete?`,
        `- Do you care about outliers, skew, or clustering?`,
        `- Are you comparing one group or several side-by-side?`,
  
        `→ **Histogram**: Best for single-variable frequency distributions. Great for beginners.`,
        `→ **Density Plot**: Smooth and elegant alternative for continuous data.`,
        `→ **Boxplot**: Compact summary of range, median, and outliers.`,
        `→ **Violin Plot**: Combines density + boxplot to show both shape and summary.`,
        `→ **Ridgeline Plot**: Stack multiple distributions for comparison across categories.`,
  
        `Example: Want to compare the test score distributions of 5 classrooms? A ridgeline plot or multiple violin plots would work beautifully.`,
      ],
    },
  
    correlation: {
      title: 'Are You Exploring Relationships Between Variables?',
      content: [
        `Correlation charts show how variables relate. Ask yourself:`,
        `- Do you want to compare two continuous variables?`,
        `- Are you exploring pairwise relationships across many variables?`,
        `- Do you need to encode a third variable using size or color?`,
        `- Are you looking for clusters or patterns of similarity?`,
  
        `→ **Scatter Plot**: Default choice for showing correlation or lack thereof.`,
        `→ **Bubble Chart**: Adds a third variable using radius.`,
        `→ **Connected Scatter Plot**: Reveals time progression between paired points.`,
        `→ **Correlogram**: Shows all pairwise correlations in a grid (heatmap-style).`,
        `→ **Heatmap**: Shows strength/intensity of relationships across two axes.`,
        `→ **2D Density Plot**: Smooth overplotting and identify cluster regions.`,
  
        `Example: Analyzing test score vs. study hours? Use a scatter or bubble plot. Want to compare correlations between 6 variables? Use a correlogram.`,
      ],
    },
  
    ranking: {
      title: 'Are You Comparing Categorical Items or Rankings?',
      content: [
        `Ranking charts compare magnitudes, orders, or scores. Ask yourself:`,
        `- Are you comparing values across categories?`,
        `- Do you want to emphasize ordering or differences?`,
        `- Will your audience benefit from a familiar layout or a novel one?`,
  
        `→ **Bar Chart**: Ideal for ranking or comparing discrete categories.`,
        `→ **Lollipop Chart**: Aesthetic alternative that emphasizes end values.`,
        `→ **Circular Barplot**: More artistic, but harder to read precisely.`,
        `→ **Word Cloud**: Good for general impression of frequency, less for accuracy.`,
        `→ **Radar / Spider Chart**: Compare multiple variables across entities.`,
        `→ **Parallel Coordinates**: Best for high-dimensional comparisons.`,
  
        `Tip: Always consider the audience—bar charts are easiest to read. Circular or spider charts are useful when style or compactness is a concern.`,
      ],
    },
  
    part_to_whole: {
      title: 'Do You Need to Show Parts of a Whole?',
      content: [
        `These charts illustrate how individual parts contribute to a larger system. Ask:`,
        `- Are values mutually exclusive or hierarchical?`,
        `- Are you comparing multiple part-to-whole groups?`,
        `- Do you need to show structure as well as size?`,
  
        `→ **Pie Chart**: Best when showing a few (3–6) segments that sum to 100%.`,
        `→ **Doughnut Chart**: Same idea with a central space for labels or icons.`,
        `→ **Treemap**: Great for dense data with hierarchical nesting.`,
        `→ **Circular Packing**: Similar to treemap, but with circles instead of boxes.`,
        `→ **Dendrogram**: Shows branching relationships rather than quantities.`,
  
        `Pitfall: Pie charts become hard to read with many segments. Treemaps can help you display 10–20+ parts compactly while preserving hierarchy.`,
      ],
    },
  
    evolution: {
      title: 'Are You Displaying Change Over Time?',
      content: [
        `Charts in this category are time-based and often sequential. Ask:`,
        `- Is your data evenly spaced over time?`,
        `- Do you want to show multiple series or categories?`,
        `- Should the emphasis be on comparison, volume, or flow?`,
  
        `→ **Line Plot**: Cleanest way to show a single trend or compare trends.`,
        `→ **Area Chart**: Adds emphasis to cumulative or stacked values.`,
        `→ **Stacked Area Chart**: Breaks down total into categories over time.`,
        `→ **Streamgraph**: Fluid and decorative—best for showcasing rather than comparing.`,
  
        `Example: To track monthly sales across three products, use a stacked area chart. To show a product’s performance over years, use a line plot.`,
      ],
    },
  
    map: {
      title: 'Does Your Data Relate to Geography?',
      content: [
        `Geographic data visualizations add spatial context. Ask:`,
        `- Is your data region-based or point-based?`,
        `- Do you want to emphasize quantity or location?`,
        `- Is distortion acceptable in favor of proportionality?`,
  
        `→ **Choropleth Map**: Color-coded regions for easy comparisons.`,
        `→ **Bubble Map**: Circle sizes indicate magnitude at specific locations.`,
        `→ **Hexbin Map**: Groups dense data points for simplified visuals.`,
        `→ **Cartogram**: Reshapes regions to match values—emphasizes proportion over shape.`,
        `→ **Connection Map**: Best for showing travel routes or migration flows.`,
  
        `Tip: Always pair maps with legends, tooltips, and projections suited to your dataset's geography.`,
      ],
    },
  
    flow: {
      title: 'Are You Mapping Relationships or Flows?',
      content: [
        `These charts show how things move or relate. Ask:`,
        `- Is there directionality in your data?`,
        `- Are flows symmetrical or weighted?`,
        `- Should the visualization emphasize structure or quantity?`,
  
        `→ **Sankey Diagram**: Show flow and drop-offs between stages.`,
        `→ **Chord Diagram**: Show circular flow or bilateral relationships.`,
        `→ **Network Diagram**: Display relationships between many connected nodes.`,
        `→ **Arc Diagram**: Reveal patterns or repetition in 1D relationships.`,
        `→ **Edge Bundling**: Organize complex networks into cleaner groupings.`,
  
        `Example: Use a Sankey diagram for website traffic flows, a network for social connections, or edge bundling to reveal structure in organizational charts.`,
      ],
    },
  
    conclusion: `Chart selection is about fit. It’s not about what’s flashy or what others are using—it’s about what makes your dataset clearer, your point stronger, and your audience more engaged. A great chart reduces cognitive load. It lets insight emerge naturally by using space, shape, color, and scale to do the talking. Whether you’re building a business dashboard, a research report, or an interactive story, these decision rules will guide you toward clarity, precision, and visual elegance.`,
  
    summaryQuestions: {
      title: 'Expanded Checklist: Ask Yourself These Before Choosing a Chart',
      content: [
        'What type of relationship am I trying to show (trend, part-to-whole, ranking, correlation, hierarchy, flow)?',
        'Do I need to show change over time?',
        'Is geographic location a central feature of the data?',
        'Are the values continuous, categorical, or binary?',
        'Do I need to compare multiple categories or segments?',
        'Do I want to highlight frequency, magnitude, or structure?',
        'Will users interact with this chart, or is it static?',
        'Is the precision of numbers more important than visual appeal?',
        'Do I have a small or large number of data points?',
        'Am I trying to guide insight or encourage exploration?',
        'Do I need to encode multiple variables (e.g., size, color, position)?',
        'Are there outliers or noise that could skew interpretation?',
        'What prior experience does my audience have with these charts?',
      ],
    },
  };
  
  export default articleData;
  