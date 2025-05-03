import React, { useState, useRef, useEffect } from 'react';
import styles from './HelpTooltip.module.css';
import { useTheme } from '../../theme/ThemeProvider';

export default function HelpTooltip() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const modalRef = useRef();

  // Close modal on ESC or outside click
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  return (
    <>
      <button
        className={styles.helpButton}
        aria-label="Show help instructions"
        onClick={() => setOpen(true)}
        tabIndex={0}
        type="button"
      >
        {/* SVG for question block, colors adapt to theme */}
        <svg width="32" height="32" viewBox="0 0 32 32" className={styles.questionIcon}>
          {/* Mario question block using SVG image for the question mark */}
          <rect x="0" y="0" width="32" height="32" fill="#232323" />
          <rect x="2" y="2" width="28" height="28" fill={resolvedTheme === 'dark' ? '#a65c00' : '#F88D2E'} />
          {/* 3D inner shadow */}
          <rect x="2" y="28" width="28" height="2" fill="#965117" />
          <rect x="2" y="2" width="2" height="28" fill="#FAB89B" />
          {/* Four black dots */}
          <rect x="4" y="4" width="2" height="2" fill="#070000" />
          <rect x="26" y="4" width="2" height="2" fill="#070000" />
          <rect x="4" y="26" width="2" height="2" fill="#070000" />
          <rect x="26" y="26" width="2" height="2" fill="#070000" />
          {/* Question mark as SVG image */}
          <image href="data:image/svg+xml,%3Csvg width='277px' height='380px' viewBox='0 0 277 380' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group'%3E%3Cpolygon id='Path' fill='%23000000' points='30 168 30 65 63 65 63 30 195.910156 30 238 65 277 65 277 204 207 204 207 274 137 274 137 204 170 204 170 168 207 168 207 65 101 65 101 168'%3E%3C/polygon%3E%3Cpolygon id='Path-2' fill='%23000000' points='137 312 137 380 207 380 207 312'%3E%3C/polygon%3E%3Cpolygon id='Path' fill='%23FFFFFF' points='0 138 0 35 33 35 33 0 208 0 208 35 247 35 247 174 177 174 177 244 107 244 107 174 140 174 140 138 177 138 177 35 71 35 71 138'%3E%3C/polygon%3E%3Cpolygon id='Path-2' fill='%23FFFFFF' points='107 282 107 350 177 350 177 282'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E" x="6" y="6" width="20" height="20" />
        </svg>
      </button>
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} ref={modalRef} tabIndex={-1}>
            <button className={styles.closeButton} aria-label="Close help" onClick={() => setOpen(false)}>
              <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" focusable="false" style={{ display: 'block' }}>
                <line x1="6" y1="6" x2="22" y2="22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                <line x1="22" y1="6" x2="6" y2="22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </button>
            <h2 className={styles.modalHeading}>How to use the Mind Map</h2>
            <ul>
              <li><strong>Zoom:</strong> Use your trackpad (two-finger pinch or scroll) or pinch (on mobile) to zoom in and out.</li>
              <li><strong>Move Map:</strong> Click and drag (or touch and drag) the background to pan the map.</li>
              <li><strong>Drag Nodes:</strong> Click and drag any node to manually rearrange the mind map. If nodes overlap or get stuck, simply drag them apart—customizing the layout is encouraged!</li>
              <li><strong>Node Info:</strong> Hover over nodes (or tap on mobile) for more information.</li>
            </ul>
            <p style={{marginTop: '1em', fontSize: '0.95em', color: 'var(--main-fg, #333)'}}>You can close this help at any time by clicking outside, pressing <kbd>ESC</kbd>, or clicking the × button.</p>
          </div>
        </div>
      )}
    </>
  );
}
