"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./authlinks.module.css"
import { BiSolidEditAlt } from 'react-icons/bi';

import { RxHamburgerMenu,RxCross2 } from 'react-icons/rx';
import { signOut, useSession } from 'next-auth/react';
const Authlinks = () => {
  const {status} = useSession()
  
  const [open,setopen] = useState(false)
  return (
    <>
      {
        status === "unauthenticated" ?
        <Link href="/login" className={styles.login}>Login</Link>
        :
        <>
        <Link href="/write" className={styles.link}><BiSolidEditAlt/></Link>
        {/* <span className={styles.logout} onClick={signOut}><RiLogoutCircleRLine/></span> */}
        <button className={styles.Btn} onClick={signOut}>
  
  <div className={styles.sign} ><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className={styles.text}>Logout</div>
</button>



        </>
      }
      <div className={styles.hamburger} >
{     !open ? 
      <RxHamburgerMenu  onClick={()=>{setopen(true)}}/>:
      <RxCross2  onClick={()=>{setopen(false)}}/>

}
      {
        open &&
         <div className={styles.responsive}>
        <Link className={styles.links} href = "/" onClick={()=>{setopen(false)}}>Home</Link>
        <Link className={styles.links} href = "/contact" onClick={()=>{setopen(false)}}>Contact</Link>
        <Link className={styles.links} href = "/blog" onClick={()=>{setopen(false)}}>Posts</Link>
        {
        status === "unauthenticated" ?
        <Link href="/login" onClick={()=>{setopen(false)}}>Login</Link>
        :
        <>
        <Link href="/write" className={styles.link1} onClick={()=>{setopen(false)}}><BiSolidEditAlt/></Link>
       
        <button className={styles.Btn1} onClick={signOut}>
  
  <div className={styles.sign} ><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className={styles.text}>Logout</div>
</button>
        </>
      }
        </div>
      }
      </div>
    </>
  )
}

export default Authlinks