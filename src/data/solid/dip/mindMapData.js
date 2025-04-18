import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Dependency Inversion \n Principle",
      definition: "High-level modules should not depend on low-level modules. Both should depend on abstractions.",
      shape: "roundRect",
      color: 'root',
    },
    {
      id: "abstraction",
      label: "Abstractions First",
      definition: "Code to interfaces or abstract classes instead of concrete implementations.",
      shape: "ellipse",
      color: 'veryLightGreen',
    },
    {
      id: "highLow",
      label: "High vs Low-Level",
      definition: "High-level policy shouldn't be bound to low-level details like file systems or databases.",
      shape: "rect",
      color: 'mintGreen',
    },
    {
      id: "injection",
      label: "Dependency Injection",
      definition: "Pass dependencies via constructors, factories, or frameworks instead of creating them directly.",
      shape: "rect",
      color: 'mintGreen',
    },
    {
      id: "example",
      label: "Example",
      definition: "A service class shouldn’t directly instantiate a MySQL class—it should rely on a `DatabaseInterface`.",
      shape: "rect",
      color: 'mintGreen',
    },
  ];
  
  export const links = [
    { source: "root", target: "abstraction" },
    { source: "abstraction", target: "highLow" },
    { source: "abstraction", target: "injection" },
    { source: "abstraction", target: "example" },
  ];
  