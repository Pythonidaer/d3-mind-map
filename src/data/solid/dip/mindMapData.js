export const nodes = [
    {
      id: "root",
      label: "Dependency Inversion \n Principle",
      definition: "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
      shape: "roundRect",
      color: "#37474F",
    },
    {
      id: "abstraction",
      label: "Abstractions First",
      definition: "Code to interfaces or abstract classes instead of concrete implementations.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "highLow",
      label: "High vs Low-Level",
      definition: "High-level policy shouldn't be bound to low-level details like file systems or databases.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "injection",
      label: "Dependency Injection",
      definition: "Pass dependencies via constructors, factories, or frameworks instead of creating them directly.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "example",
      label: "Example",
      definition: "A service class shouldn’t directly instantiate a MySQL class—it should rely on a `DatabaseInterface`.",
      shape: "rect",
      color: "#B9F6CA",
    },
  ];
  
  export const links = [
    { source: "root", target: "abstraction" },
    { source: "abstraction", target: "highLow" },
    { source: "abstraction", target: "injection" },
    { source: "abstraction", target: "example" },
  ];
  