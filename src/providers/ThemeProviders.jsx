"use client"
import React, { useContext,useEffect,useState } from 'react'
import { ThemeContext } from '@/context/Themecontext'
const ThemeProviders = ({children}) => {
    const {theme} =  useContext(ThemeContext)
  
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true); //// to prevent toggle with dark and light in other than chrome browser
    }, []);
  
    if (mounted) {
      return <div className={theme}>{children}</div>;
    }
}

export default ThemeProviders
