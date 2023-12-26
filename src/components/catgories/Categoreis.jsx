import React from 'react'
import styles from "./Categoreis.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Category from '../category/Category'
// const getData = async ()=>{
//   const response =  await fetch("http://localhost:3000/api/categories",{
//     cache:"no-store"
//   })
//   if(!response.ok){
//     throw new Error("Couldn't get request")
//   }
//   return response.json()
// }
const Categoreis = async () => {
  // const data = await getData()
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>

        
        <Category/>
    </div> 
  )
}

export default Categoreis