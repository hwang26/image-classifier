
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
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
        <Sidebar />
      </main>
    </div>
  )
}
