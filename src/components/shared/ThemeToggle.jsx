import React, { useRef } from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import styles from './ThemeToggle.module.css';

const ICONS = {
  system: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ),
  light: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  ),
  dark: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
  )
};

const options = [
  { key: 'system', label: 'OS Default', icon: ICONS.system },
  { key: 'light', label: 'Light', icon: ICONS.light },
  { key: 'dark', label: 'Dark', icon: ICONS.dark },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const selectedOption = options.find(opt => opt.key === theme) || options[0];

  return (
    <div className={styles.themeToggleWrapper} ref={dropdownRef}>
      <button
        className={styles.themeButton}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Theme options"
      >
        {selectedOption.icon}
      </button>
      {open && (
        <ul className={styles.themeDropdown}>
          {options.map(opt => (
            <li key={opt.key}>
              <button
                className={
                  styles.themeOption +
                  (theme === opt.key ? ' ' + styles.selected : '')
                }
                onClick={() => { setTheme(opt.key); setOpen(false); }}
                aria-current={theme === opt.key}
              >
                <span className={styles.themeOptionIcon}>{opt.icon}</span>
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
