import Head from 'next/head';
import Portfolio from '@components/Portfolio';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nicholas Victoros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Portfolio /> 
      </main>
    </div>
  );
}
