import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./category.module.css"
const getData = async ()=>{
    const response =  await fetch("http://localhost:3000/api/categories",{
      cache:"no-store"
    })
    if(!response.ok){
      throw new Error("Couldn't get request")
    }
    return response.json()
  }
const Category = async () => {
    const data = await getData()
  return (
    <div className={styles.Categories}>
          {
            data?.map((item) =>(

              <Link href="/blog?cat=food" className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
            <Image src={item.img} alt="" width={40} height={40} className={styles.img} />
            {item.title}
            </Link>
              ))
            }
            

        </div>
  )
}

export default Category