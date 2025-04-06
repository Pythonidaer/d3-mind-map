import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styles from './Paradigm.module.css';
import { getContentConfig } from '../config/contentCategories'; // Import the helper

// Lazy load components
const MindMap = lazy(() => import('../components/shared/MindMap'));
const Article = lazy(() => import('../components/shared/Article'));

const Paradigm = () => {
  const { categoryParam, subcategoryParam } = useParams(); // Use new params
  const [mindMapData, setMindMapData] = useState(null);
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contentConfig, setContentConfig] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      setMindMapData(null);
      setArticleData(null);
      setContentConfig(null);

      // Get configuration based on URL parameters
      const config = getContentConfig(categoryParam, subcategoryParam);

      if (!config) {
        console.error(`No config found for /${categoryParam}/${subcategoryParam}`);
        setError('Content configuration not found.');
        setLoading(false);
        // Optional: Redirect to a 404 page or the homepage/about page
        // return <Navigate to="/about" replace />;
        return;
      }

      setContentConfig(config); // Store config for potential use in rendering

      try {
        // Construct dynamic import paths using config
        const mindMapPath = `../data/${config.category.dataPath}/${config.subcategory.path}/mindMapData.js`;
        const articlePath = `../data/${config.category.dataPath}/${config.subcategory.path}/articleData.js`;

        // Dynamically import the data modules
        const mindMapModule = await import(/* @vite-ignore */ mindMapPath);
        const articleModule = await import(/* @vite-ignore */ articlePath);

        // Validate if the expected exports exist
        if (!mindMapModule || !mindMapModule.nodes || !mindMapModule.links) {
          throw new Error(`Mind map data structure invalid or missing exports in ${mindMapPath}`);
        }
        // Assuming Article expects a default export for now
        if (!articleModule || articleModule.default === undefined) { 
          throw new Error(`Article data structure invalid or missing default export in ${articlePath}`);
        }

        setMindMapData({ nodes: mindMapModule.nodes, links: mindMapModule.links });
        setArticleData(articleModule.default); // Use default export
        setError(null); // Clear previous errors
        setPageTitle(config.subcategory.name); // Use the subcategory name for the title
      } catch (err) {
        console.error("Failed to load content for", config.subcategory.name, err);
        setError(`Failed to load content for ${config.subcategory.name}. Check console and data files.`);
        // Reset data states on error to prevent rendering with old/invalid data
        setMindMapData(null);
        setArticleData(null);
        setPageTitle('Error'); // Set title to Error
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [categoryParam, subcategoryParam]); // Reload data when params change

  if (loading) {
    // Added a specific loading message
    return <div className={styles.message}>Loading content for {subcategoryParam}...</div>;
  }

  if (error) {
    // Display specific error
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!mindMapData || !articleData) {
    // Fallback message if data isn't loaded for some reason (other than error/loading)
    return <div className={styles.message}>Content not available.</div>;
  }

  return (
    <div className={styles.paradigmContainer}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <Suspense fallback={<div className={styles.message}>Loading Mind Map...</div>}>
        {/* Conditionally render MindMap only if mindMapData has nodes */}
        {mindMapData && mindMapData.nodes ? (
            <MindMap nodes={mindMapData.nodes} links={mindMapData.links} />
        ) : (
            !error && <div className={styles.message}>Mind Map data not available.</div>
        )}
      </Suspense>
      <Suspense fallback={<div className={styles.message}>Loading Article...</div>}>
        {/* Conditionally render Article only if articleData is available */}
        {articleData ? (
            <Article article={articleData} /> // Pass prop as 'article', not 'data'
        ) : (
            !error && <div className={styles.message}>Article content not available.</div>
        )}
      </Suspense>
    </div>
  );
};

export default Paradigm;
