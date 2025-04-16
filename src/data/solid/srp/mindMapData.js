import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Single Responsibility \n Principle",
      definition: "A class should have only one reason to change, meaning it should have only one job or responsibility.",
      shape: "roundRect",
      color: COLORS.root,
    },
    {
      id: "responsibility",
      label: "Responsibility",
      definition: "Focus each class or module on one well-defined task.",
      shape: "ellipse",
      color: COLORS.veryLightGreen,
    },
    {
      id: "reasonsToChange",
      label: "Reasons to Change",
      definition: "A single responsibility implies a single reason for a class to change.",
      shape: "rect",
      color: COLORS.mintGreen,
    },
    {
      id: "exampleSplit",
      label: "Example Split",
      definition: "Separate validation, data access, and UI rendering into distinct modules.",
      shape: "rect",
      color: COLORS.mintGreen,
    },
    {
      id: "benefits",
      label: "Benefits",
      definition: "Improves readability, testability, and reduces ripple effects when requirements change.",
      shape: "rect",
      color: COLORS.mintGreen,
    },
  ];
  
  export const links = [
    { source: "root", target: "responsibility" },
    { source: "responsibility", target: "reasonsToChange" },
    { source: "responsibility", target: "exampleSplit" },
    { source: "responsibility", target: "benefits" },
  ];
  