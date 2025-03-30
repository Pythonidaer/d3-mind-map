import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MindMap from "./components/MindMap"; // Adjust the path as needed
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Container from "./components/shared/Container";
import Home from "./pages/Home";
import {
  nodes as functionalNodes,
  links as functionalLinks,
} from "./data/functional/mindMapData";
import {
  nodes as declarativeNodes,
  links as declarativeLinks,
} from "./data/declarative/mindMapData";
import { nodes as oopNodes, links as oopLinks } from "./data/oop/mindMapData";
import {
  nodes as proceduralNodes,
  links as proceduralLinks,
} from "./data/procedural/mindMapData";
import {
  nodes as imperativeNodes,
  links as imperativeLinks,
} from "./data/imperative/mindMapData";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Routes>
            <Route
              path="/functional"
              element={
                <MindMap nodes={functionalNodes} links={functionalLinks} />
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/declarative"
              element={
                <MindMap nodes={declarativeNodes} links={declarativeLinks} />
              }
            />
            <Route
              path="/oop"
              element={<MindMap nodes={oopNodes} links={oopLinks} />}
            />
            <Route
              path="/procedural"
              element={
                <MindMap nodes={proceduralNodes} links={proceduralLinks} />
              }
            />
            <Route
              path="/imperative"
              element={
                <MindMap nodes={imperativeNodes} links={imperativeLinks} />
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
