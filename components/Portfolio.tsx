import Links from "./Links";
import Projects from "./Projects";
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.name}>Nicholas Victoros</h1>
          <Links />
        </div>

      </header>

      <main className={styles.main}>
        <Projects />
      </main>
    </>
  );
}

