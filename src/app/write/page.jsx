"use client"
import React, { useState,useEffect } from 'react';
import styles from "./page.module.css"
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { MrMiyagi } from '@uiball/loaders';
import dynamic from 'next/dynamic';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {app} from "@/utils/firebase"


 
const Page = () => {
   const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
    const [open,setOpen] = useState(false);

    const [value, setValue] = useState('');
    const {status} = useSession()
    const [file,setfile] = useState(null);
    const [title,settitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
    const [url, setUrl] = useState("");


    const router = useRouter();
  


    useEffect(() => {
      const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");

           
            switch (snapshot.state) {
              case "paused":
                console.log("paused");
                break;
                case "running":
                  
                  console.log("running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUrl(downloadURL);
            });
          }
        );
      };
  
      file && upload();
    }, [file]);

    if(status==="loading"){
      return  <MrMiyagi className={styles.loader} size={50} lineWeight={6.3} speed={1} color="#fca84f" />
   
     }
     if(status==="unauthenticated"){
       router.push("/")
     }
     const slugify = (str) =>
     str
       .toLowerCase()
       .trim()
       .replace(/[^\w\s-]/g, "")
       .replace(/[\s_-]+/g, "-")
       .replace(/^-+|-+$/g, "");

    const handleSubmit= async ()=>{
 const res = await fetch("https://wonderwrit.vercel.app/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: url,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
    }

  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder="Title" onChange={(e)=>settitle(e.target.value)}></input>
        <div className={styles.more}>
            
            <AiOutlinePlusCircle className={styles.circle} onClick={()=>setOpen(!open)}/>

            
            {
                open && (<>
                  <input type="file" id="image" style={{display:"none"}} onChange={(e)=>setfile(e.target.files[0])} />
                <div className={styles.openbutton}>
                  <label htmlFor="image">

            <FcAddImage className={styles.image}/>
                  </label>
            
                </div>
                </>
                )
            }
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
        </div>
        <ReactQuill className={styles.texteditor} theme="snow" value={value} onChange={setValue} placeholder='Tell your story...'/>
        <div className={styles.publish}>
            <button className={styles.publishbutton} onClick={handleSubmit}>Publish</button>
        </div>
    </div>
  )
}

export default Page
