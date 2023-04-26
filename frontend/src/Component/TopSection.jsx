import React from 'react'
import styles from "./topSection.module.css";

export const TopSection = () => {
  return (
    <div className={styles.title}>
        Gentleman
        <button className={styles.instructions}>Instructions</button>
    </div>
  )
}
