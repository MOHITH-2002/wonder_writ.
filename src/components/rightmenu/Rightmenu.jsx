import React from 'react'
import styles from "./Rightmenu.module.css"
import Image from 'next/image'
import Link from 'next/link'
import moment from "moment"

const Rightmenu = ({posts}) => {
    const data="Where passion meets prose, and curiosity leads the way. Step into our world of words."
  return (
    <div className={styles.container}>
        <h2>Most popular Posts</h2>
        <div className={styles.categories}>
            <div className={styles.editorchoice}>
            <p className={styles.title}>Discover by topics:</p>
            <h2>Categories</h2>
            </div>
            <div className={styles.Categories}>
            <Link href="/blog?cat=food" className={`${styles.category1} ${styles.food}`}>
            <Image src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Food
            </Link>
            <Link href="/blog?cat=coding" className={`${styles.category1} ${styles.coding}`}>
            <Image src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg" alt="" width={40} height={40} className={styles.img} />
            Coding
            </Link>
            <Link href="/blog?cat=styles" className={`${styles.category1} ${styles.style}`}>
            <Image src="https://images.pexels.com/photos/18222956/pexels-photo-18222956/free-photo-of-young-fashionable-woman-posing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Styles
            </Link>
            <Link href="/blog?cat=fashion" className={`${styles.category1} ${styles.fashion}`}>
            <Image src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Fashion
            </Link>
            <Link href="/blog?cat=culture" className={`${styles.category1} ${styles.culture}`}>
            <Image src="https://images.pexels.com/photos/236171/pexels-photo-236171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Culture
            </Link>
            <Link href="/blog?cat=travel" className={`${styles.category1} ${styles.travel}`}>
            <Image src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Travel
            </Link>



        </div>

        </div>
        <div className={styles.editor}>
            <div className={styles.editorchoice}>
            <p className={styles.title}>chosen by editors:</p>
            <h2>Editors Pick</h2>
            </div>
            <div>{

                posts?.map((item,index)=>(

                    <div className={styles.singlepost} key={index}>
                    <div className={styles.image}>
                    <Image  src={item.img} alt="" fill  className={styles.img}/>
                    </div>
                    <div className={styles.postcontent}>
                        <Link href={`/blog/?cat=${item.catSlug}`} className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</Link>
                        <Link href={`/blog/?cat=${item.catSlug}`}><div className={styles.desc} dangerouslySetInnerHTML={{__html: item.desc.slice(0,10)}}/>
</Link>
                        <div className={styles.user}>

                            <span className={styles.date}>{moment(item.createdAt).format('ll')}</span>
                        </div>
                    </div>
                </div>
                    ))
                }
               
                
             

            </div>
        </div>
    </div>
  )
}

export default Rightmenu