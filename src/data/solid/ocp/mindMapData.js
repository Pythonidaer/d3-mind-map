export const nodes = [
    {
      id: "root",
      label: "Open/Closed \n Principle",
      definition: "Software entities should be open for extension but closed for modification.",
      shape: "roundRect",
      color: "#37474F",
    },
    {
      id: "extension",
      label: "Extension",
      definition: "You can add new behavior without altering existing code.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "modification",
      label: "Avoid Modification",
      definition: "Existing code remains untouched, reducing risk of bugs.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "strategies",
      label: "Common Strategies",
      definition: "Use interfaces, abstract classes, or dependency injection to allow extension.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "examples",
      label: "Examples",
      definition: "Instead of modifying a payment processor, add new classes for PayPal or Stripe.",
      shape: "rect",
      color: "#B9F6CA",
    },
  ];
  
  export const links = [
    { source: "root", target: "extension" },
    { source: "extension", target: "modification" },
    { source: "extension", target: "strategies" },
    { source: "extension", target: "examples" },
  ];
  