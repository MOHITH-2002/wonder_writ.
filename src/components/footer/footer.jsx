import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
const Footer = () => {
  const date = new Date().getFullYear() 
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <Link className={styles.logo}  href = "/"><Image  src="/logo.png" className={styles.img} width={200} height={200} /></Link>
     

      <span className={styles.copywrite}>© {date} WonderWrit. All rights reserved.</span>
      
      </div>
      <div className={styles.project}>
        <h2 className={styles.title}>Other Projects</h2>
        
          <ul >

            <Link className={styles.links} href="https://freelancehive.vercel.app/">Freelancehive.</Link>
          </ul>
          <ul >
            
            <Link className={styles.links} href="https://chatomatic-chat1.vercel.app/">Chat-app</Link>
          </ul>
          <ul >
            
            <Link className={styles.links} href="https://justforfoodies.vercel.app/">Restaurant-ui</Link>
          </ul>
          <ul >
            
            <Link className={styles.links} href="https://imaginative-sopapillas-521a08.netlify.app/">Map-pin</Link>
          </ul>
          <ul >
            
            <Link className={styles.links} href="https://youtube-to-mp-3-converter.onrender.com/">Mp3-converter</Link>
          </ul>
         
        
      </div>
      <div className={styles.follow}>
        <h2 className={styles.title2}>Follow us</h2>
        <div className={styles.followlinks}>

        <ul >
            
            <Link className={styles.links1} href="https://www.linkedin.com/in/mohith-b-a-ba8a22230/"><AiFillLinkedin/></Link>
          </ul>
          <ul >
            
            <Link className={styles.links2} href="https://www.instagram.com/mohith_b_a_/"><FaInstagram/></Link>
          </ul>
          <ul >
            
            <Link className={styles.links3} href="https://github.com/MOHITH-2002"><BsGithub/></Link>
          </ul>
        </div>
      </div>
      </div>
   
  )
}

export default Footer