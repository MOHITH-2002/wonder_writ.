import Link from "next/link";
import styles from "./homepage.module.css";
import Features from "@/components/features/Features";
import Categoreis from "@/components/catgories/Categoreis";
import Recent from "@/components/recentPost/Recent";


export default function Home({searchParams}) {
const page = parseInt(searchParams.page) || 1;
  return (<div className={styles.container}>
   <Features/>
   <div className={styles.Categoreis}>

   <Categoreis />
   </div>
   <Recent page={page}/>
   
   
  </div>);
}
