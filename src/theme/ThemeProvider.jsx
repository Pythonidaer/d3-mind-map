import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { lightTheme, darkTheme } from "./colors";

// 1. Create the ThemeContext
const ThemeContext = createContext();

// 2. ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Try to load theme from localStorage or default to 'system'
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    }
    return 'system';
  };
  const [theme, setTheme] = useState(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (theme === 'system') {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  useEffect(() => {
    // Save theme selection
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
    if (theme === 'system') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => setResolvedTheme(e.matches ? 'dark' : 'light');
      setResolvedTheme(mql.matches ? 'dark' : 'light');
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  // Memoize the palette for performance
  const palette = useMemo(() => {
    if (resolvedTheme === "dark") return darkTheme;
    return lightTheme;
  }, [resolvedTheme]);

  // Context value
  const value = useMemo(
    () => ({ theme, setTheme, palette, resolvedTheme }),
    [theme, palette, resolvedTheme]
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', resolvedTheme);
    }
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// 3. Custom hook for consuming the context
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
