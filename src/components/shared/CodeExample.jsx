// src/components/CodeExample.jsx
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeExample.module.css';

function CodeExample({ title, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className={styles.codeExampleContainer}>
      {title && <h3 className={styles.codeTitle}>{title}</h3>}
      <div className={styles.codeBlock}>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {code}
        </SyntaxHighlighter>
        <button className={styles.copyButton} onClick={handleCopyClick}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default CodeExample;