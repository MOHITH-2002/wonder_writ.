"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useRouter } from 'next/navigation'
import { Metronome } from '@uiball/loaders'



const Login = () => {

  const session = useSession();
  const router = useRouter();
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
    return router.push("/")
  }
  return (
    <div className={styles.container}>
      <button onClick={() => signIn('google')} className={styles.google}><FcGoogle className={styles.googlefs} /> Sign in with Google</button>
      <button onClick={() => signIn('github')} className={styles.google}><BsGithub className={styles.googlefs} /> Sign in with Github</button>
    <Link href="/register" className={styles.link}>New to WonderWrit.? sign up</Link>
    </div>
  )
}

export default Login