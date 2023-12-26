import React from 'react'
import styles from "./Features.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Features = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Every post is a journey, and every reader is an explorer. Welcome to a world of captivating stories.</h1>
        <div className={styles.items}>
            <div className={styles.image}>
                <Image  src="https://images.pexels.com/photos/2119697/pexels-photo-2119697.jpeg" alt="" fill  className={styles.img}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Where passion meets prose, and curiosity leads the way. Step into our world of words.</h2>
                <p className={styles.desc}>we believe that every word has the potential to inspire, educate, and entertain. Our blog is your online haven for thought-provoking articles, insightful stories, and in-depth explorations of a wide range of topics.</p>
                <Link href="/" className={styles.button}>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Features