
import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import Rightmenu from '@/components/rightmenu/Rightmenu'
import moment from "moment"
import Comments from '@/components/comments/Comments'
const getData = async (slug)=>{

  const response =  await fetch(`https://wonderwrit.vercel.app/api/posts/${slug}`,{
    cache:"no-store"
  })
  if(!response.ok){
    throw new Error("Couldn't get request")
  }
  return response.json()
}

const Singlepage = async ({params}) => {
  const {slug} = params;
  
  const data = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.content}>
        <h2 className={styles.title}>{data?.title}</h2>
        <div>
          <div className={styles.usernameInfo}>

        {data?.user.image &&<Image src={data.user.image} width={32} height={32} className={styles.userimage}></Image>}
        <div className={styles.userinfo}>

        <span className={styles.username}>{data?.user.name}:</span>
        <span className={styles.date}>{moment(data.createdAt).format('ll')}</span>
          </div>
        </div>
        </div>
        </div>
        <div className={styles.image}>
          <Image  src={data?.img} alt="" fill  className={styles.img}/>
          </div>
      </div>
      <div className={styles.bottomcontainer}>
        <div className={styles.left}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}}/>
            
        
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <div className={styles.right}>
          <Rightmenu/>
        </div>
      </div>

    </div>
  )
}

export default Singlepage
