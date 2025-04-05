# Mind Maps

Mind Maps is a project that originally started out as a visualized, high-level overview for JavaScript paradigms. Since then, it has evolved into a two-sided opportunity to extend the functionality into customizable mindmaps. In addition to its extendable aspirations, the code is also an opportunity to experiment with differing JavaScript paradigms and improving the quality of my code.

This project uses React and Vite.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary packages to run the app.

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) (or the port shown in the terminal) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!



## Analyzing Complexity

SonarQube is a free VSCode Extension that can help analyze the complexity of your code. It is recommended to experiment with this and other tools to help you understand the complexity and overall quality of your code.

## Analyzing Bundle Size

Keeping track of bundle size is crucial for web performance. This project uses several tools to help analyze both the final build output and the source code itself.

### Analyzing Source File Sizes (`analyze-src`)

This uses a custom script (`analyze-src-sizes.js`) leveraging the `filesize` package to recursively list the size of each `.js` and `.jsx` file within the `src` directory. This is helpful for identifying large source files *before* they get bundled.

**Command:**

```bash
npm run analyze-src
```

### Checking Production Bundle Size (`bundlesize`)

This tool (`bundlesize`) checks the size of the generated production build assets against predefined limits specified in `bundlesize.config.json`. This ensures that the final JavaScript and CSS bundles don't exceed performance budgets. It's integrated into the test script.

**Command:**

```bash
npm test
```

*(Note: This requires running `npm run build` first to generate the `dist` directory.)*

### Visualizing Production Bundle (`vite-bundle-visualizer`)

This tool generates an interactive treemap visualization of the contents of your production bundle. It helps you understand which modules contribute the most to the final bundle size. This is useful for identifying large dependencies or code-splitting opportunities.

**Command:**

Run this *after* building the project (`npm run build`):

```bash
npx vite-bundle-visualizer
```

This will build the project (if not already built with the same config) and open an `stats.html` file in your browser with the visualization.
