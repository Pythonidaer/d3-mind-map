import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loading.module.css'

const Loading = ({ message = 'Loading...' }) => {
  return (
    <div 
      className={styles.loader}
      role="alert"
      aria-busy="true"
      aria-live="polite"
    >
      <div className={styles.circleLoader}>
        <div className={`${styles.circle} ${styles.circle1}`} aria-hidden="true"></div>
        <div className={`${styles.circle} ${styles.circle2}`} aria-hidden="true"></div>
        <div className={`${styles.circle} ${styles.circle3}`} aria-hidden="true"></div>
        <div className={`${styles.circle} ${styles.circle4}`} aria-hidden="true"></div>
        <div className={styles.srOnly}>{message}</div>
      </div>
    </div>
  )
}

Loading.propTypes = {
  message: PropTypes.string
}

export default Loading
