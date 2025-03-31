// src/components/Article.jsx
import React from 'react';
import CodeExample from './CodeExample';
import styles from './Article.module.css';
import { marked } from 'marked';

function Article({ article }) {
  if (!article) return <p>Article content not available.</p>;

  const renderSection = (content, isConclusion = false, isIntroduction = false) => {
    if (typeof content === 'string') {
      if (isConclusion || isIntroduction) {
        return <p>{content}</p>;
      } else {
        return <p dangerouslySetInnerHTML={{ __html: marked(content) }}></p>;
      }
    } else if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => {
            if (typeof item === 'string') {
              return <li key={index} dangerouslySetInnerHTML={{ __html: marked(item) }}></li>;
            } else if (item.title && item.code) {
              return <li key={index}><CodeExample title={item.title} code={item.code} /></li>;
            }
            return null;
          })}
        </ul>
      );
    } else if (typeof content === 'object' && content.title && content.content) {
      return (
        <div>
          <h3>{content.title}</h3>
          {renderSection(content.content)}
        </div>
      );
    }
    return null;
  };

  const renderCodeExamples = (codeExamples) => {
    return codeExamples.map((example, index) => (
      <CodeExample key={index} title={example.title} code={example.code} />
    ));
  };

  return (
    <div className={styles.articleContainer}>
      {Object.entries(article).map(([key, content]) => (
        <div key={key} className={styles.articleSection}>
          {key === 'introduction' && (
            <div>
              <h2>Introduction</h2>
              {renderSection(content, false, true)}
            </div>
          )}
          {key === 'keyPrinciples' && renderSection(content)}
          {key === 'codeExamples' && renderCodeExamples(content)}
          {key === 'benefits' && renderSection(content)}
          {key === 'cons' && renderSection(content)}
          {key === 'antiPatterns' && renderSection(content)}
          {key === 'conclusion' && (
            <div>
              <h2>Conclusion</h2>
              {renderSection(content, true)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Article;