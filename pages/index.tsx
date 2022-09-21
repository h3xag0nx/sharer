import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
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
        <meta name="og:title" content="Share to you" />
        <meta name="og:description" content="Some description" />
        <meta name="og:site_name" content="Levellll" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Share to you" />
        <meta name="twitter:description" content="Some description" />
        <meta name="twitter:image" content={image} />
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
