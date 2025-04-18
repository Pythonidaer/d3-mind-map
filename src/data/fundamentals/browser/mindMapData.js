import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Browser \n JavaScript",
      definition: "Interaction between JavaScript and the browser environment: DOM manipulation, events, forms, APIs, and animation.",
      shape: "roundRect",
      color: 'root',
    },
    {
      id: "dom",
      label: "DOM",
      definition: "The Document Object Model represents the structure of HTML as nodes accessible from JavaScript.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "events",
      label: "Events",
      definition: "Actions like clicks or inputs that trigger JavaScript code through event listeners.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "forms",
      label: "Forms",
      definition: "User input mechanisms including form fields, validation, and submission.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "apis",
      label: "APIs",
      definition: "Browser-provided APIs for storage, geolocation, clipboard, and more.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "timing",
      label: "Timing",
      definition: "APIs for scheduling execution or animation such as setTimeout and requestAnimationFrame.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
  
    // DOM Subnodes
    { id: "selectors", label: "Selectors", definition: "Use querySelector and getElementById to select DOM elements.", shape: "rect", color: 'nodePositive2' },
    { id: "modify", label: "Modify Content", definition: "Update text, HTML, and attributes dynamically.", shape: "rect", color: 'nodePositive2' },
    { id: "createRemove", label: "Create/Remove", definition: "Use createElement, append, remove, etc.", shape: "rect", color: 'nodePositive2' },
    { id: "styles", label: "Styles & Classes", definition: "Modify element classes and inline styles.", shape: "rect", color: 'nodePositive2' },
  
    // Events Subnodes
    { id: "addListener", label: "addEventListener", definition: "Attach events like click, input, etc.", shape: "rect", color: 'nodePositive2' },
    { id: "bubbling", label: "Bubbling & Capture", definition: "Events propagate through DOM from target to root.", shape: "rect", color: 'nodePositive2' },
    { id: "delegation", label: "Event Delegation", definition: "Listen on parent element to handle dynamic children.", shape: "rect", color: 'nodePositive2' },
    { id: "prevent", label: "preventDefault", definition: "Prevent default browser behavior like form submission.", shape: "rect", color: 'nodePositive2' },
  
    // Forms Subnodes
    { id: "inputTypes", label: "Inputs", definition: "Input, checkbox, select, and textarea elements.", shape: "rect", color: 'nodePositive2' },
    { id: "validation", label: "Validation", definition: "Check input validity via attributes or JS.", shape: "rect", color: 'nodePositive2' },
    { id: "submit", label: "Submit Events", definition: "Listen for and intercept form submission.", shape: "rect", color: 'nodePositive2' },
    { id: "formData", label: "FormData API", definition: "Serialize form inputs easily for POSTing.", shape: "rect", color: 'nodePositive2' },
  
    // APIs Subnodes
    { id: "storage", label: "localStorage", definition: "Persist simple data in the browser.", shape: "rect", color: 'nodePositive2' },
    { id: "navigator", label: "Navigator", definition: "Access browser metadata like language and online status.", shape: "rect", color: 'nodePositive2' },
    { id: "geo", label: "Geolocation", definition: "Get current location via GPS (with permission).", shape: "rect", color: 'nodePositive2' },
    { id: "clipboard", label: "Clipboard API", definition: "Programmatically copy to or read from clipboard.", shape: "rect", color: 'nodePositive2' },
  
    // Timing Subnodes
    { id: "setTimeout", label: "setTimeout", definition: "Run code after a delay.", shape: "rect", color: 'nodePositive2' },
    { id: "setInterval", label: "setInterval", definition: "Repeat code on a timer.", shape: "rect", color: 'nodePositive2' },
    { id: "requestAnimationFrame", label: "requestAnimationFrame", definition: "Synchronize animation with screen refresh.", shape: "rect", color: 'nodePositive2' },
    { id: "debounceThrottle", label: "Debounce / Throttle", definition: "Control frequency of repetitive events.", shape: "rect", color: 'nodePositive2' },
  ];
  
  export const links = [
    { source: "root", target: "dom" },
    { source: "root", target: "events" },
    { source: "root", target: "forms" },
    { source: "root", target: "apis" },
    { source: "root", target: "timing" },
  
    { source: "dom", target: "selectors" },
    { source: "dom", target: "modify" },
    { source: "dom", target: "createRemove" },
    { source: "dom", target: "styles" },
  
    { source: "events", target: "addListener" },
    { source: "events", target: "bubbling" },
    { source: "events", target: "delegation" },
    { source: "events", target: "prevent" },
  
    { source: "forms", target: "inputTypes" },
    { source: "forms", target: "validation" },
    { source: "forms", target: "submit" },
    { source: "forms", target: "formData" },
  
    { source: "apis", target: "storage" },
    { source: "apis", target: "navigator" },
    { source: "apis", target: "geo" },
    { source: "apis", target: "clipboard" },
  
    { source: "timing", target: "setTimeout" },
    { source: "timing", target: "setInterval" },
    { source: "timing", target: "requestAnimationFrame" },
    { source: "timing", target: "debounceThrottle" },
  ];
  