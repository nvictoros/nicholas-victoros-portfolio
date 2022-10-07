import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nicholas Victoros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>Nicholas Victoros</Header>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
