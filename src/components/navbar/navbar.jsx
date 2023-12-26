"use client"
import React, { useState,useEffect } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Theme from '../Theme/theme'
import Authlinks from '../authlinks/authlinks'
import Features from '../features/Features'
import Categoreis from '../catgories/Categoreis'
import Image from 'next/image'

const Navbar =() => {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    // Add a scroll event listener to the window
    const handleScroll = () => {
      if (window.scrollY > 1 && window.scrollY <= 280) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClassName = isScrolled ? `${styles.container} ${styles.scrolled}` : styles.container;

 
  return (
   
    <div className={navbarClassName}>
        <div className={styles.navcontainer}>
        <div className={styles.logo}>
        <Link className={styles.logo}  href = "/"><Image  src="/logo.png" className={styles.img} width={200} height={150} /></Link>
        </div>
        <div className={styles.content}>
        <Theme/>
        <Link className={styles.link} href = "/">Home</Link>
        <Link className={styles.link} href = "/contact">Contact</Link>
        <Link className={styles.link} href = "/blog">Posts</Link>
        <Authlinks/>
        </div>
        </div>
        <div>

       {
        isScrolled && 
        <div className={styles.Categories}>
            <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
            <Image src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Food
            </Link>
            <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
            <Image src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg" alt="" width={40} height={40} className={styles.img} />
            Coding
            </Link>
            <Link href="/blog?cat=styles" className={`${styles.category} ${styles.style}`}>
            <Image src="https://images.pexels.com/photos/18222956/pexels-photo-18222956/free-photo-of-young-fashionable-woman-posing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Styles
            </Link>
            <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
            <Image src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Fashion
            </Link>
            <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
            <Image src="https://images.pexels.com/photos/236171/pexels-photo-236171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Culture
            </Link>
            <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
            <Image src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className={styles.img} />
            Travel
            </Link>


        </div>
       }
        </div>
       

        </div>
     
  
  )
}

export default Navbar