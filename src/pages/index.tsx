import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import ScrollSVG from '@/components/ScrollSvg';
import Section1 from '@/components/Section1';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SVG Path Scroll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <h1>SVG Path Scroll</h1>
        <ScrollSVG /> */}
        <Section1 />
      </main>
    </>
  );
}
