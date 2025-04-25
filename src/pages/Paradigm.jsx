import React, { useState, useEffect, Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Paradigm.module.css'
import { getContentConfig } from '../config/contentCategories'
import Loading from '../components/shared/Loading'

const MindMap = lazy(() => import('../components/shared/MindMap'))
const Article = lazy(() => import('../components/shared/Article'))

const Paradigm = () => {
  const { categoryParam, subcategoryParam } = useParams()
  const [mindMapData, setMindMapData] = useState(null)
  const [articleData, setArticleData] = useState(null)
  const [error, setError] = useState(null)
  const [pageTitle, setPageTitle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Pre-load all possible data files
  const mindMapFiles = import.meta.glob('../data/**/mindMapData.js')
  const articleFiles = import.meta.glob('../data/**/articleData.js')

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      setError(null)
      setMindMapData(null)
      setArticleData(null)

      const config = getContentConfig(categoryParam, subcategoryParam)

      if (!config) {
        console.error(
          `No config found for /${categoryParam}/${subcategoryParam}`
        )
        setError('Content configuration not found.')
        setIsLoading(false)
        return
      }

      try {
        const mindMapPath = `../data/${config.category.dataPath}/${config.subcategory.path}/mindMapData.js`
        const articlePath = `../data/${config.category.dataPath}/${config.subcategory.path}/articleData.js`

        const [mindMapModule, articleModule] = await Promise.all([
          mindMapFiles[mindMapPath](),
          articleFiles[articlePath](),
        ])

        if (!mindMapModule || !mindMapModule.nodes || !mindMapModule.links) {
          throw new Error(`Mind map data structure invalid...`)
        }
        if (!articleModule || articleModule.default === undefined) {
          throw new Error(`Article data structure invalid...`)
        }

        setMindMapData({
          nodes: mindMapModule.nodes,
          links: mindMapModule.links,
        })
        setArticleData(articleModule.default)
        setError(null)
        setPageTitle(config.subcategory.name)
      } catch (err) {
        console.error('Failed to load content...', err)
        setError(`Failed to load content...`)
        setMindMapData(null)
        setArticleData(null)
        setPageTitle('Error')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [categoryParam, subcategoryParam])

  if (error) {
    return <div className={styles.error}>Error: {error}</div>
  }

  return (
    <div className={styles.paradigmContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          {mindMapData?.nodes && articleData && (
            <>
              {/* <h1 className={styles.title}>{pageTitle}</h1> */}
              <MindMap nodes={mindMapData.nodes} links={mindMapData.links} />
              <Article article={articleData} />
            </>
          )}
        </Suspense>
      )}
    </div>
  )
}

export default Paradigm
