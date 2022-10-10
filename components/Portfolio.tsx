import Links from '@components/Links';
import Projects from '@components/Projects';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.name}>Nick Victoros</h1>
          <Links />
        </div>
      </header>

      <main className={styles.main}>
        <Projects />
      </main>
    </>
  );
}
