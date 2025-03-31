// src/pages/Paradigm.jsx
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MindMap from '../components/shared/MindMap'
import Article from '../components/shared/Article'
import styles from './Paradigm.module.css'

function Paradigm() {
  const { paradigmName } = useParams()
  const [nodes, setNodes] = useState(null)
  const [links, setLinks] = useState(null)
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageTitle, setPageTitle] = useState('') // State for page title

  useEffect(() => {
    async function fetchData() {
      try {
        const mindMapModule = await import(
          `../data/${paradigmName}/mindMapData.js`
        )
        setNodes(mindMapModule.nodes)
        setLinks(mindMapModule.links)

        const articleModule = await import(
          `../data/${paradigmName}/articleData.js`
        )
        setArticle(articleModule.default)

        // Set page title based on paradigmName
        switch (paradigmName) {
          case 'functional':
            setPageTitle('Functional Paradigm')
            break
          case 'declarative':
            setPageTitle('Declarative Paradigm')
            break
          case 'oop':
            setPageTitle('Object-Oriented Paradigm')
            break
          case 'procedural':
            setPageTitle('Procedural Paradigm')
            break
          case 'imperative':
            setPageTitle('Imperative Paradigm')
            break
          default:
            setPageTitle('Paradigm Not Found')
        }

        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchData()
  }, [paradigmName])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!nodes || !links || !article) return <p>Data not found.</p>

  return (
    <div className={styles.paradigmPageContainer}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      <MindMap nodes={nodes} links={links} />
      <Article article={article} />
    </div>
  )
}

export default Paradigm
