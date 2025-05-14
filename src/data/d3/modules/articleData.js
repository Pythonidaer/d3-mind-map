const articleData = {
    introduction: `One of the most important evolutions in the history of D3.js was its shift to a modular architecture starting in version 4. Prior to this, D3 was a single, monolithic library that had to be imported in full. The introduction of modularity gave developers greater flexibility, better performance, and the ability to use only what they needed. This shift reflected broader changes in the JavaScript ecosystem toward smaller packages, tree-shaking, and performance optimization. Understanding how to work with D3’s modular packages is essential for writing clean, scalable, and efficient data visualizations.`,
  
    keyPrinciples: {
      title: 'Design Philosophy',
      content: [
        `Modularity means separating a codebase into independently maintained, logically distinct components. In D3, this allows users to import only the functions and features they need, improving code clarity and reducing bundle size.`,
        `Each module represents a focused capability (e.g., selections, shapes, scales), with its own GitHub repository, documentation, and update lifecycle.`,
      ],
    },
  
    benefits: {
      title: 'Why Modularization Matters',
      content: [
        `The modular structure makes D3 more maintainable, both for its contributors and for you as a developer. You don’t need to carry the weight of map projections if you’re only drawing bar charts.`,
        `It also improves your ability to understand what’s going on under the hood—by focusing on individual modules, you can dive deeper into specific parts of the library.`,
        `Lastly, modern build tools can eliminate unused code via tree-shaking, leading to faster page loads and better performance.`,
      ],
    },
  
    cons: {
      title: 'What to Watch Out For',
      content: [
        `While modularity is beneficial, it also introduces version complexity. If you import multiple D3 packages and they depend on different versions of a shared module (like d3-array), you may run into compatibility problems.`,
        `The decentralized nature of the modules also means some concepts—like transitions—require multiple coordinated imports, which can confuse beginners.`,
      ],
    },
  
    antiPatterns: {
      title: 'Common Anti-Patterns',
      content: [
        `**Importing all of D3**: Using \`import * as d3 from 'd3'\` brings back the performance and size problems that modularization was designed to avoid.`,
        `**Version mismatch**: Mixing versions of modules (e.g., d3-array v2 with d3-scale v3) can cause errors or unexpected behavior. Use consistent, up-to-date versions across your packages.`,
      ],
    },
  
    modular_shift: {
      title: 'D3’s Modular Transition',
      content: [
        `In 2016, D3 version 4 was released as a collection of over 30 individual npm packages. This decision allowed users to install and import only the functionality they required, aligning D3 with modern JavaScript practices such as code splitting, ESM compatibility, and bundler-friendly architecture.`,
      ],
    },
  
    why_modular: {
      title: 'Why Go Modular?',
      content: [
        `The monolithic structure of early D3 versions was useful for exploration but became unsustainable for performance-conscious apps. Modular design enables faster builds, easier debugging, and leaner production code.`,
      ],
    },
  
    import_strategy: {
      title: 'Import Only What You Need',
      content: [
        `Instead of \`import * as d3 from 'd3'\`, you can now do:\n\`import { scaleLinear } from 'd3-scale';\`\n\nThis gives you the feature you want without the weight of the entire ecosystem. For teams building large apps, this difference is significant.`,
      ],
    },
  
    core_modules: {
      title: 'Core Modules',
      content: [
        `While D3 includes over 30 modules, a handful form the foundation of most projects. These modules handle selections, scaling, shaping, animation, and array manipulation.`,
      ],
    },
  
    selection_module: {
      title: 'd3-selection',
      content: [
        `This is the module behind \`d3.select()\` and \`d3.selectAll()\`. It enables DOM querying, element manipulation, and chaining of data-binding methods.`,
      ],
    },
  
    scale_module: {
      title: 'd3-scale',
      content: [
        `Includes linear, ordinal, time, and logarithmic scales to map input data to output dimensions like pixels or colors.`,
      ],
    },
  
    shape_module: {
      title: 'd3-shape',
      content: [
        `Provides path generators for lines, areas, arcs, pies, and symbols. Essential for drawing SVGs based on continuous data.`,
      ],
    },
  
    array_module: {
      title: 'd3-array',
      content: [
        `Offers statistical tools such as \`min\`, \`max\`, \`extent\`, \`mean\`, and histogram generation. These utilities are often the first step in preparing data for display.`,
      ],
    },
  
    transition_module: {
      title: 'd3-transition',
      content: [
        `Handles animations and interpolations. It works in tandem with \`d3-selection\`, enabling smooth changes to attributes and styles over time.`,
      ],
    },
  
    geo_module: {
      title: 'd3-geo',
      content: [
        `This module includes map projections (e.g., Mercator, Albers) and path generators for rendering geospatial data using SVG. It powers choropleth maps, point plots, and topology visualizations.`,
      ],
    },
  
    smaller_bundles: {
      title: 'Smaller Bundle Sizes',
      content: [
        `Using only what you need keeps your JavaScript payload tight. For large-scale web apps, this can improve load times and reduce network usage significantly.`,
      ],
    },
  
    clear_dependencies: {
      title: 'Clearer Dependencies',
      content: [
        `Each module has its own documentation and changelog. This makes it easier to understand how updates affect your app and to isolate bugs when something goes wrong.`,
      ],
    },
  
    tree_shaking: {
      title: 'Tree-Shaking Support',
      content: [
        `When using modern build tools (e.g., Vite, Rollup, Webpack), unused imports are removed from the final bundle automatically. D3’s modular format enables this optimization out of the box.`,
      ],
    },
  
    import_whole_d3: {
      title: 'Avoid Importing All of D3',
      content: [
        `Although it's still possible to import the monolithic \`d3\` package, doing so adds unnecessary weight to your project. Always prefer individual modules to maintain performance and clarity.`,
      ],
    },
  
    version_mismatch: {
      title: 'Beware of Version Mismatches',
      content: [
        `Each D3 module is updated independently. If you mix versions (e.g., d3-array @1.2 with d3-scale @4.0), you may encounter subtle bugs or missing features. Use version consistency tools like npm’s \`resolutions\` or keep dependencies tightly grouped.`,
      ],
    },
  
    conclusion: `D3’s modular architecture gives developers more control over what they use and how they use it. By understanding which modules power which features, you can write smaller, faster, and more maintainable visualizations. It’s not just a performance win—it’s also a design philosophy that encourages you to learn D3 in focused, composable chunks.`,
  };
  
  export default articleData;
  