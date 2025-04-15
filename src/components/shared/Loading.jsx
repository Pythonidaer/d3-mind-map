import React from 'react'
import styles from './Loading.module.css' // Create this CSS module file

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Fetching Content...</p>
    </div>
  )
}

export default Loading
