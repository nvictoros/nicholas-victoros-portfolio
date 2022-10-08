import Head from 'next/head';
import Portfolio from '@components/Portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicholas Victoros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Portfolio />
    </>
  );
}
