
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.scss';

// Import Pane without SSR because the "Window" is defined by the client browser
const Pane = dynamic(
  () => import("../components/Pane"),
  { ssr: false }
);

import Sidebar from '../components/Sidebar';
import Prompt from '../components/Prompt';
import Info from '../components/Info';

export default function Home() {

  return (
    <div> 
      <Head>
        <title>Image Classifier</title>
        <meta name="description" content="Demo of a deployed Next JS React App using DoodleNet image classifier through ml5js and p5js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Prompt />
        <Info />
        <div className={styles.paneAndSidebar}>
          <Pane />  
          <Sidebar />
        </div>
      </main>
    </div>
  )
}
