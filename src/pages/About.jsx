import React from 'react'
import styles from './About.module.css' // Import the CSS module

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>The Mind Map Method</h1>
      <p>
        This project leverages the established visual thinking methodology of mind mapping, which structures information hierarchically around a central concept. The initial inspiration for this work was the potential to streamline the creation of these diagrams, particularly in addressing the repetitive and time-intensive aspects of their generation at scale. Subsequently, a modular and reusable Mind Map component was developed, complemented by an Article component capable of integrating relevant Code Example snippets.
      </p>
      <p>
        As the collection of mind maps expanded, the application of a categorization strategy, aligning with the principles of chunking, became apparent. This organizational approach allows for the logical grouping of related mind maps, enhancing user navigation and comprehension. Fundamentally, this project implements the Mind Map Method, empowering users to provide structured data for comprehensive articles that elaborate on each visually represented concept.
      </p>

      <h2>Interactive Visualizations with D3.js</h2>
      <p>
        The dynamic visualizations in this project are powered by <strong>D3.js (Data-Driven Documents)</strong>, a versatile JavaScript library for manipulating documents based on data, enabling the creation of rich and interactive graphics directly within the web browser. To visually represent the interconnected concepts within each mind map, D3 was utilized to construct interactive graphs. In these graphs, individual concepts are represented as nodes, and the relationships between them are depicted as links. The text doesn't perfectly fit into each root node, but future iterations may resolve this issue. Ultimately, not that big of a deal for what I needed it for. Just use a <strong>line break:</strong> <code>\n</code> if you need to.
      </p>
      <p>
        The layout of these mind map graphs is specifically driven by a <strong>force-directed algorithm</strong>, a powerful technique within network visualization. This approach treats nodes as if they were charged particles that repel each other, while the links between them act like springs, pulling connected nodes together. The graph's final arrangement emerges from a simulation of these forces, resulting in a dynamic equilibrium where nodes are positioned to optimally represent their relationships and relative proximity. This allows users to intuitively grasp the connections between ideas, as closely related concepts tend to cluster together, while less related ones are positioned further apart. Furthermore, the interactive nature of these force-directed graphs often allows users to manipulate the nodes, observing how the entire network dynamically adjusts, fostering a deeper understanding of the underlying structure and relationships within the mind map.
      </p>

      <h2>My Personal Library</h2>
      <p>
        This website is my personal implementation of the mindmaps. Currently I have created Paradigms, Fundamentals, and SOLID, each with JavaScript in mind. However, you can remove these configurations from your own fork, and create your own mindmap categories. You can even choose to leave out items from the navigation bar. <em>Note: </em> future features may include the addition of a toggleable, secondary navigation bar to accomodate for categories which may have too many items to fit in the primary navigation bar.
      </p>

      <h2>Key Components</h2>
      <p>
        This project features several key components that work together to present the information:
      </p>
      <ul>
        <li>
          <strong>Mind Map:</strong> This component is responsible for rendering the interactive mind map visualization. It takes data defining the nodes and their relationships and uses D3.js with custom functionality to display them as a dynamic graph. Users can hover over nodes on the map to explore different branches and concepts.
        </li>
        <li>
          <strong>Article:</strong> This component serves as elaborations on the concepts within each mind map. This component's formatting is still being worked on. As of now, it can also optionally render Code Example snippets.
        </li>
        <li>
          <strong>Code Example:</strong> This component is used to display relevant code snippets that illustrate concepts discussed in the associated article and mind map. It includes syntax highlighting and allows user to copy the code. If you want to change the imported syntax highlighting style, just update the <code>import</code> in the <code>CodeExample.jsx</code> file. To find options that are available, search the <code>node_modules</code> folder for the <code>react-syntax-highlighter/dist/esm/styles/prism</code> .
        </li>
      </ul>

      <p>Enjoy!</p>
    </div>
  );
};

export default About;