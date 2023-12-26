"use client"
import React,{useState} from 'react'
import styles from "./Comments.module.css"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import moment from "moment"

import useSWR from "swr";
import Image from 'next/image'
const fetcher = async (url) => {
    const res = await fetch(url);
  
    const data = await res.json();
  
    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
  
    return data;
  };
const Comments =  ({postSlug}) => {
  
  const {status} = useSession()
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
    );
    const[desc,setComment] = useState("");
        
   

      const handleSubmit = async () => {
        await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
      };
  return (
    <div className={styles.comments}>
            <h1>Comments:</h1>
            {
                    status =="authenticated" ?
                <div className={styles.editor}>
            <input type="text" placeholder="  post a comments..." className={styles.text} onChange={(e)=>setComment(e.target.value)}></input>
            <button className={styles.button} onClick={handleSubmit}>post</button>
            </div> : <h2 className={styles.login} ><Link href="/login" className={styles.login}  >Login to add a Comment</Link></h2>
            }
            {   data?.map(item=>(

                
                <div className={styles.commentlist} key={item._id}>
              <div className={styles.usernameInfo}>

    {item?.user.image &&<Image src={item.user.image} width={32} height={32} className={styles.userimage}></Image>}
    <div className={styles.userinfo}>

    <span className={styles.username}>{item?.user.name}:</span>
    <span className={styles.date}>{moment(item.createdAt).format('ll')}</span>
  </div>
</div>
              <p>

            {item.desc}
              </p>
            </div>
                    ))
            }
           
            
    </div>
  )
}

export default Comments