// Centralized color palettes for light and dark themes
export const lightTheme = {
  root: '#37474F',
  veryLightGreen: '#98EE99',
  mintGreen: '#B9F6CA',
  almostWhiteGreen: '#E8F5E9',
  lightRed: '#FF8A80',
  lighterRed: '#FFB3B3',
  veryLightRed: '#FFE0E0',
  // Add more as needed
};

export const darkTheme = {
  root: '#222831',
  veryLightGreen: '#43e97b',
  mintGreen: '#1de9b6',
  almostWhiteGreen: '#e8fff1',
  lightRed: '#ff5252',
  lighterRed: '#ff867f',
  veryLightRed: '#ffb3b3',
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
