import React from 'react'
import styles from './emptyProducts.module.css'
import { TbMoodEmpty } from "react-icons/tb";

const EmptyProducts = () => {
  return (
    <div className={styles.wrapper}>
      <TbMoodEmpty className={styles.icon} />
      <h3>Still not having products</h3>
    </div>
  )
}

export default EmptyProducts
