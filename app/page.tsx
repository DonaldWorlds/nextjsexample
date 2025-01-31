import Image from "next/image";
import styles from "./page.module.css";



import {UserHome} from './paths/links/[userId]/page'
import NextPage from "./components/NextPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>This will render the user page.tsx</h1>
      {/*Render UserHome*/}
      <NextPage/>
    
     


    </div>
  );
}
