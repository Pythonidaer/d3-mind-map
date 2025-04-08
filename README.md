# Mind Maps

Mind Maps is a project that originally started out as a visualized, high-level overview for JavaScript paradigms. Since then, it has evolved into a two-sided opportunity to extend the functionality into customizable mindmaps. In addition to its extendable aspirations, the code is also an opportunity to experiment with differing JavaScript paradigms and improving the quality of my code.

This project uses React and Vite.

## Note to self
- Line 23 in MindMap, within the node.forEach - I removed this:

        console.log(`Node ${d.id} ('${d.label}'): text=(${textWidth}, ${textHeight}), shape=(${shapeWidth}, ${shapeHeight})`);


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

## Adding New Content

The application is designed to be extensible. Follow these steps to add new content categories (like "SOLID Principles") or new subcategories (like "Variables" under "Fundamentals"):

### 1. Update Configuration (`src/config/contentCategories.js`)

*   **Open:** `src/config/contentCategories.js`
*   **Locate:** The `contentCategories` array.
*   **To Add a New Category:**
    *   Add a new object to the `contentCategories` array.
    *   **Required Fields:**
        *   `id`: A unique lowercase identifier (e.g., `'solid'`). Used internally and for CSS potentially.
        *   `name`: The display name for the category dropdown (e.g., `'SOLID Principles'`).
        *   `baseRoute`: The first part of the URL path (e.g., `'/solid'`). MUST start with `/` and be unique.
        *   `dataPath`: The folder name within `src/data/` where this category's subcategory data resides (e.g., `'solid'`). Must match the folder name you create in Step 2.
        *   `addToNav`: `true` if you want this category to appear in the main dropdown, `false` otherwise. (Content for `false` categories is still accessible via direct URL).
        *   `subcategories`: An array of objects, one for each subcategory.
*   **To Add a New Subcategory (to an existing Category):**
    *   Find the correct category object within `contentCategories`.
    *   Add a new object to its `subcategories` array.
    *   **Required Fields:**
        *   `id`: A unique lowercase identifier within the category (e.g., `'variables'`). Used internally.
        *   `name`: The display name for the subcategory link in the Navbar (e.g., `'Variables'`).
        *   `route`: The second part of the URL path (e.g., `'variables'`). Appended to the category's `baseRoute`. MUST be unique within the category.
        *   `dataPath`: The folder name within the category's `dataPath` folder where this subcategory's data resides (e.g., `'variables'`). Must match the folder name you create in Step 2.
        *   `addToNav`: `true` if you want this subcategory link to appear in the Navbar when its parent category is selected, `false` otherwise. (Content for `false` subcategories is still accessible via direct URL).

### 2. Create Data Folder and Files (`src/data/`)

*   Based on the `dataPath` values you defined in `contentCategories.js`, create the necessary folder structure within `src/data/`.
*   **Example:** For a new category `'solid'` (`dataPath: 'solid'`) with a subcategory `'single-responsibility'` (`dataPath: 'single-responsibility'`), you would create:
    ```
    src/
    └── data/
        ├── fundamentals/
        │   └── syntax/
        │       ├── articleData.js
        │       └── mindMapData.js
        └── solid/  <-- New category folder (matches category dataPath)
            └── single-responsibility/ <-- New subcategory folder (matches subcategory dataPath)
                ├── articleData.js      <-- Create this file
                └── mindMapData.js      <-- Create this file
    ```
*   **Populate Data Files:**
    *   `mindMapData.js`: Must export a default object with `nodes` (array) and `links` (array) properties, following the D3 format used in existing files.
    *   `articleData.js`: Must export a default object containing the structured content expected by the `Article.jsx` component (e.g., `title`, `introduction`, `sections`, `codeExamples`, `conclusion`, etc., matching the structure of existing files).

### 3. Verify

*   Run the development server (`npm run dev`).
*   Check if the new category appears in the dropdown (if `addToNav: true`).
*   Select the new category/subcategory and check if the Navbar links update.
*   Navigate to the new content page (e.g., `/solid/single-responsibility`).
*   Verify that the Mind Map and Article content load correctly without errors.
*   Test navigation to and from the new content, and page refreshes.
*   Test categories/subcategories with `addToNav: false` by navigating directly via the URL. Ensure the correct parent category still displays in the Navbar dropdown.

That's it! No changes should be needed in the React components themselves (`App.jsx`, `Paradigm.jsx`, `Navbar.jsx`) as they are designed to read the configuration dynamically.

## Future Enhancements

### Alternative Subcategory Navigation View

As the number of subcategories grows, especially within a single main category like "Fundamentals", the main Navbar dropdown may become too long. A future enhancement planned is to create a dedicated component/page that provides an alternative view for exploring all subcategories within a selected main category.

**Potential UI Concepts:**

*   **Grid View:** A visually appealing grid of cards or links, each representing a subcategory.
*   **Scrolling Menu:** A horizontal, infinitely scrolling menu (similar to a stock ticker) displaying subcategory links.

**Requirements & Implementation Notes:**

1.  **New Component:** A new React component (e.g., `CategoryExplorer.jsx`) will be created to render this view.
2.  **New Route:** A dedicated route, likely parameterized by the main category ID (e.g., `/explore/:categoryId` like `/explore/fundamentals`), will be added to `App.jsx` to render this component.
3.  **Data Access:** This component must import and use the original `contentCategories` array from `src/config/contentCategories.js`. It cannot rely solely on the `getNavData` function, as it needs to display subcategories where `addToNav` is set to `false`.
4.  **Filtering:** The component will filter the `contentCategories` data based on the `:categoryId` route parameter to find the correct main category and then map over its `subcategories` array to generate the links.
5.  **Link Generation:** Links will be generated using the main category's `baseRoute` and the subcategory's `path` (e.g., `/fundamental/core`, `/fundamental/tooling_and_testing`).
6.  **Grouping (Optional):** If designed to show multiple main categories, the UI should visually group subcategories by their parent.

This enhancement will leverage the existing configuration structure in `src/config/contentCategories.js`, ensuring that all defined content, regardless of its `addToNav` status, remains discoverable.

*(Other future ideas can be added here)*

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
