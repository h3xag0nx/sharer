import type { GetServerSideProps, NextPage } from 'next';
import { isBot } from 'next';
import Head from 'next/head';
import { NextRequest, NextResponse, userAgent } from 'next/server';
import styles from '../styles/Home.module.css';

const Home: NextPage<{
  image: string;
}> = ({ image }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Share to you</title>
        <meta name="description" content="Something" />
        <meta name="og:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      image:
        'https://gateway.pinata.cloud/ipfs/QmNapmLcjDJzk23ouivnNXKJwzCCCasKNZa2R6haEUM7P3',
    },
  };
};
