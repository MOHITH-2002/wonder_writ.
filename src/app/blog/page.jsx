import React from 'react'
import styles from "./page.module.css"
import Recent from '@/components/recentPost/Recent'

const Blog = ({searchParams}) => {
  const {cat} = searchParams || "";
  return (
    <div >
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.container}>
            <Recent cat={cat}/>
        
        </div>
    </div>
  )
}

export default Blog