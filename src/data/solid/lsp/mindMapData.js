export const nodes = [
    {
      id: "root",
      label: "Liskov Substitution \n Principle",
      definition: "Subtypes must be substitutable for their base types without altering correctness.",
      shape: "roundRect",
      color: "#37474F",
    },
    {
      id: "substitution",
      label: "Substitution",
      definition: "You should be able to replace a base class with a subclass without breaking the program.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "contract",
      label: "Behavioral Contracts",
      definition: "Subclasses must honor the expected behavior and contracts of the parent class.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "violations",
      label: "Common Violations",
      definition: "Overriding methods to throw errors or break assumptions about return values.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "example",
      label: "Example",
      definition: "`Rectangle` and `Square` where overriding setters can break expected geometry behavior.",
      shape: "rect",
      color: "#B9F6CA",
    },
  ];
  
  export const links = [
    { source: "root", target: "substitution" },
    { source: "substitution", target: "contract" },
    { source: "substitution", target: "violations" },
    { source: "substitution", target: "example" },
  ];
  