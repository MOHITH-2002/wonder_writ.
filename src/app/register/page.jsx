"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Metronome } from '@uiball/loaders'

const Register = () => {
    const router = useRouter();
  const session = useSession();

  if(session.status==="loading"){
      return (

      <Metronome 
       size={40}
       speed={1.6} 
       color="#1DB954" 
      />
)
  }
  if(session.status==="authenticated"){
    return router?.push("/")
  }
  
  return (
    <div className={styles.container}>
    
    <button onClick={() => signIn('google')} className={styles.google}><FcGoogle className={styles.googlefs} /> Sign up with Google</button>
    <button onClick={() => signIn('github')} className={styles.google}><BsGithub className={styles.googlefs} /> Sign up with Google</button>
    <Link href="/login" className={styles.link}>Login with an existing account</Link>
    </div>
  )
}

export default Register
