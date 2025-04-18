import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Interface Segregation \n Principle",
      definition: "Clients should not be forced to depend on interfaces they do not use.",
      shape: "roundRect",
      color: 'root',
    },
    {
      id: "segregation",
      label: "Segregation",
      definition: "Split large interfaces into smaller, more specific ones.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "fatInterfaces",
      label: "Fat Interfaces",
      definition: "Interfaces that contain many methods not relevant to all implementers.",
      shape: "rect",
      color: 'nodePositive2',
    },
    {
      id: "splitInterfaces",
      label: "Split Interfaces",
      definition: "Create focused contracts like `IPrinter`, `IScanner`, etc. instead of one large `IMachine`.",
      shape: "rect",
      color: 'nodePositive2',
    },
    {
      id: "example",
      label: "Example",
      definition: "A class that only prints shouldn't be forced to implement scanning or faxing.",
      shape: "rect",
      color: 'nodePositive2',
    },
  ];
  
  export const links = [
    { source: "root", target: "segregation" },
    { source: "segregation", target: "fatInterfaces" },
    { source: "segregation", target: "splitInterfaces" },
    { source: "segregation", target: "example" },
  ];
  