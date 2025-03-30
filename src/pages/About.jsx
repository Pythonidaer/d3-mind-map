import React from 'react';
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>About JavaScript Paradigms</h2>
      <p>
        This project explores the diverse world of multi-paradigmatic programming, showcasing the different approaches possible within JavaScript development. A <strong>programming paradigm</strong> is a fundamental style of computer programming, serving as a model or pattern for how developers structure and organize their code.
      </p>

      <h3>Functional Programming</h3>
      <p>
        <strong>Functional Programming (FP)</strong> treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. In JavaScript, FP principles like pure functions, immutability, and higher-order functions enhance code clarity and maintainability.
      </p>

      <h3>Declarative Programming</h3>
      <p>
        <strong>Declarative Programming</strong> focuses on *what* the program should accomplish, rather than *how* it should achieve it. In JavaScript, frameworks like React utilize declarative patterns to manage UI states and updates.
      </p>

      <h3>Object-Oriented Programming (OOP)</h3>
      <p>
        <strong>Object-Oriented Programming (OOP)</strong> organizes software design around data, or objects, rather than functions and logic. JavaScript, while prototypal, supports OOP concepts like encapsulation, inheritance, and polymorphism.
      </p>

      <h3>Procedural Programming</h3>
      <p>
        <strong>Procedural Programming</strong> divides the program into procedures (functions), emphasizing a sequential flow of control. While JavaScript supports procedural elements, it is often combined with other paradigms.
      </p>

      <h3>Imperative Programming</h3>
      <p>
        <strong>Imperative Programming</strong> explicitly describes the steps a computer must take to accomplish a task. JavaScript's core syntax allows for imperative patterns, giving developers fine-grained control over execution.
      </p>

      <h3>Mind Maps</h3>
      <p>
        <strong>Mind maps</strong> are visual tools used to organize and represent information. In this project, mind maps visually represent the relationships and concepts within each programming paradigm.
      </p>

      <h3>D3.js and the Graph</h3>
      <p>
        <strong>D3.js (Data-Driven Documents)</strong> is a powerful JavaScript library for manipulating documents based on data. We use D3.js to create interactive and dynamic graphs, visually connecting concepts and demonstrating the relationships between elements in each programming paradigm's mind map. The graph is a force-directed graph, where nodes and links are positioned dynamically to represent relationships and proximity.
      </p>
    </div>
  );
};

export default About;