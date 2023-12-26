"use client"
import React, { useContext } from 'react'
import styles from "./theme.module.css"
import { ThemeContext } from '@/context/Themecontext'
const Theme = () => {
  const {theme,toggle}  = useContext(ThemeContext)

  return (
    <div className={styles.container} style={theme === "light" ? 
    {backgroundColor:"black"}:{backgroundColor:"#FBFAF5"}}
   >
      {/* <span>🔅</span> */}
      <div className={styles.circle} onClick={toggle}
       style={theme === "light" ? 
       {left : 3, backgroundColor:"#F1EFEF"}:{ right : 2, backgroundColor:"#7D7C7C"}
      }>{
        theme === "light" ?"🔅":"🌙"
      }</div>
      {/* <span>🌙</span> */}
    </div>
  )
}

export default Theme