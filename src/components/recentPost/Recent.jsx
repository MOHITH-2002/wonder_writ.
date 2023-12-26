import React from 'react'
import styles from "./Recent.module.css"
import Image from 'next/image'
import Link from 'next/link'
import moment from "moment"
import Rightmenu from '../rightmenu/Rightmenu'
const getData = async (page,cat)=>{

  let apiUrl = "http://localhost:3000/api/posts/";
  if (cat) {
    apiUrl += `?cat=${cat}`;
  }

  const response = await fetch(apiUrl, {
    cache: "no-store",
  });

  if(!response.ok){
    throw new Error("Couldn't get request")
  }
  return response.json()
}
const Recent = async ({page,cat}) => {
  const { posts,count} = await getData(page,cat);

  return (
    <>
    
     <Link href="/blog" ><h1 className={styles.Heading}>Recent Posts</h1></Link> 
    <div className={styles.container}>
        <div className={styles.left}>
          {
            posts?.map(item =>(

           
          <div className={styles.leftcontent} key={item._id}>
          <div className={styles.image}>
          <Image  src={item.img} alt="" fill  className={styles.img}/>
          </div>
          <div className={styles.content}>
            <div>
              <span className={styles.date}>{moment(item.createdAt).format('ll')}</span>
              <Link href={`/blog/?cat=${item.catSlug}`} className={styles.culture}>{item.catSlug}</Link>
            </div>
              <Link href={`/posts/${item.slug}`} alt=""> <h2 className={styles.title}>{item.title}</h2></Link> 
                {/* <p className={styles.desc}>{item.desc.slice(0,50)}......</p> */}
                <div className={styles.desc} dangerouslySetInnerHTML={{__html: item?.desc.slice(0,50)}}/>

                <Link href={`/posts/${item.slug}`} className={styles.button}>Read More</Link>
            </div>
        </div>
          ))
        }
        </div>
        <div className={styles.right}>
          <Rightmenu posts={posts} />

        </div>
    </div>
    </>
  )
}

export default Recent