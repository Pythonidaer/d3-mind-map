import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Open/Closed \n Principle",
      definition: "Software entities should be open for extension but closed for modification.",
      shape: "roundRect",
      color: COLORS.root,
    },
    {
      id: "extension",
      label: "Extension",
      definition: "You can add new behavior without altering existing code.",
      shape: "ellipse",
      color: COLORS.veryLightGreen,
    },
    {
      id: "modification",
      label: "Avoid Modification",
      definition: "Existing code remains untouched, reducing risk of bugs.",
      shape: "rect",
      color: COLORS.mintGreen,
    },
    {
      id: "strategies",
      label: "Common Strategies",
      definition: "Use interfaces, abstract classes, or dependency injection to allow extension.",
      shape: "rect",
      color: COLORS.mintGreen,
    },
    {
      id: "examples",
      label: "Examples",
      definition: "Instead of modifying a payment processor, add new classes for PayPal or Stripe.",
      shape: "rect",
      color: COLORS.mintGreen,
    },
  ];
  
  export const links = [
    { source: "root", target: "extension" },
    { source: "extension", target: "modification" },
    { source: "extension", target: "strategies" },
    { source: "extension", target: "examples" },
  ];
  