// Centralized color palettes for light and dark themes
/*
// --- Light Theme ---
Alternative Palette 1: Blue/Teal for Positive
Alternative Palette 1: Orange/Red for Negative
nodePositive1: '#60a5fa', // blue-400
nodePositive2: '#5eead4', // teal-300
nodePositive3: '#bae6fd', // blue-100
nodeNegative1: '#f87171', // red-400
nodeNegative2: '#fbbf24', // amber-400 (orange/yellow for warning)
nodeNegative3: '#fcd34d', // yellow-3

Alternative Palette 2: Purple/Green for Positive
Alternative Palette 2: Pink/Orange for Negative
nodePositive1: '#a78bfa', // purple-300
nodePositive2: '#6ee7b7', // green-300
nodePositive3: '#f3e8ff', // purple-100
nodeNegative1: '#fb7185', // pink-400
nodeNegative2: '#fdba74', // orange-300
nodeNegative3: '#fef3c7', // orange-100

Alternative Palette 3: Gray/Blue for Positive
Alternative Palette 3: Red/Gray for Negative
nodePositive1: '#d1d5db', // gray-300
nodePositive2: '#93c5fd', // blue-300
nodePositive3: '#e0e7ef', // blue-100
nodeNegative1: '#fca5a5', // red-300
nodeNegative2: '#fecaca', // red-200
nodeNegative3: '#f3f4f6', // gray-100
*/
export const lightTheme = {
  root: '#37474F',
  // nodePositive1: '#98EE99',
  // nodePositive2: '#B9F6CA',
  // nodePositive3: '#E8F5E9',
  // nodeNegative1: '#FF8A80',
  // nodeNegative2: '#FFB3B3',
  // nodeNegative3: '#FFE0E0',
  // nodePositive1: '#00d4ff',   // Bright Cyan (navbar gradient end)
  // nodePositive2: '#38bdf8',   // Sky Blue (harmonious with gradient)
  // nodePositive3: '#e0f7fa',   // Light Cyan (background/highlight)
  // nodeNegative1: '#ee0979',   // Vivid Magenta (contrasts with blue)
  // nodeNegative2: '#ff6a88',   // Pinkish Coral
  // nodeNegative3: '#fce4ec', 
  nodePositive1: '#FF9505', // vibrant teal (anchor)
  nodePositive2: '#FFB627', // light, lively teal
  nodePositive3: '#FFC971', // pale teal (highlight/secondary)

nodeNegative1: '#EF57D6', // vibrant magenta (lighter than #800080, but not neon)
nodeNegative2: '#ff4fff', // bright magenta-pink
nodeNegative3: '#ffb3ff', // soft pastel magenta (for highlight/secondary)
  // Add more as needed
};
/*
// --- Dark Theme ---
Alternative Palette 1: Blue/Teal for Positive
Alternative Palette 1: Orange/Red for Negative
nodePositive1: '#38bdf8', // blue-500
nodePositive2: '#2dd4bf', // teal-400
nodePositive3: '#0ea5e9', // blue-600
nodeNegative1: '#ef4444', // red-500
nodeNegative2: '#f59e42', // orange-400
nodeNegative3: '#fde68a', // yellow-200

Alternative Palette 2: Purple/Green for Positive
Alternative Palette 2: Pink/Orange for Negative
nodePositive1: '#c4b5fd', // purple-400
nodePositive2: '#34d399', // green-400
nodePositive3: '#a21caf', // purple-800
nodeNegative1: '#f472b6', // pink-400
nodeNegative2: '#fb923c', // orange-400
nodeNegative3: '#fef08a', // yellow-200

Alternative Palette 3: Gray/Blue for Positive
Alternative Palette 3: Red/Gray for Negative
nodePositive1: '#6b7280', // gray-500
nodePositive2: '#60a5fa', // blue-400
nodePositive3: '#1e293b', // blue-900
nodeNegative1: '#ef4444', // red-500
nodeNegative2: '#f87171', // red-400
nodeNegative3: '#374151', // gray-700

Alternative Palette 4
  // Positive (Purple gradient)
  nodePositive1: '#c4b5fd', // purple-400 (most prominent/primary positive)
  nodePositive2: '#a78bfa', // purple-300 (midpoint)
  nodePositive3: '#a21caf', // purple-800 (deep accent)

  // Negative (Yellow gradient)
  nodeNegative1: '#fde047', // yellow-300 (primary negative/warning)
  nodeNegative2: '#facc15', // yellow-400 (midpoint, bright)
  nodeNegative3: '#fef9c3', // yellow-100 (softest, background/tertiary)
*/
export const darkTheme = {
  root: '#222831',
  // nodePositive1: '#43e97b',
  // nodePositive2: '#1de9b6',
  // nodePositive3: '#e8fff1',
  // nodeNegative1: '#ff5252',
  // nodeNegative2: '#ff867f',
  // nodeNegative3: '#ffb3b3',
    // Positive (Purple gradient)
    // nodePositive1: '#c4b5fd', // purple-400 (most prominent/primary positive)
    // nodePositive2: '#a78bfa', // purple-300 (midpoint)
    // nodePositive3: '#d8b4fe', // purple-800 (deep accent)
  
    // // Negative (Yellow gradient)
    // nodeNegative1: '#fde047', // yellow-300 (primary negative/warning)
    // nodeNegative2: '#facc15', // yellow-400 (midpoint, bright)
    // nodeNegative3: '#fef9c3', // yellow-100 (softest, background/tertiary)
    nodePositive1: '#01fdf6', // bright pink
    nodePositive2: '#a7ff9f', // bright peach
    nodePositive3: '#d0fe84', // bright yellow-orange
    nodeNegative1: '#F9F871', // vivid light yellow
    nodeNegative2: '#FFFACD', // lemon chiffon (very light yellow)
    nodeNegative3: '#FFFFFF', // white (highlight/disabled)
  // Adjust for dark mode contrast
};

// Hardcoded theme setting for now: 'light', 'dark', or 'system'
const themeSetting = 'light'; // Change to 'dark' or 'system' to test

export function getColors() {
  if (themeSetting === 'dark') return darkTheme;
  // For 'system', you would add logic to check window.matchMedia in the provider later
  return lightTheme;
}

// For convenience, export the current palette as COLORS
export const COLORS = getColors();

// Optionally export all for future use
export { themeSetting };
