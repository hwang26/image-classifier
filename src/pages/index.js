
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Sidebar from '../components/Sidebar';
import Prompt from '../components/Prompt';
import Info from '../components/Info';

export async function getStaticProps(context) {
	const response = await fetch("https://raw.githubusercontent.com/googlecreativelab/quickdraw-dataset/master/categories.txt");
	const data = await response.text();

	return {
		props: {data} // will be passed to the page component as props
	};
}

export default function Home({data}) {

  // Convert line separated string into array of categories
  let categories = data.split("\n");
  // Remove last empty element
  categories.pop();

  return (
    <div> 
      <Head>
        <title>Image Classifier</title>
        <meta name="description" content="Demo of a deployed Next JS React App using DoodleNet image classifier through ml5js and p5js" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Comic+Neue&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Prompt categories={categories}/>
        <Info />
        <Sidebar />
      </main>
    </div>
  )
}
