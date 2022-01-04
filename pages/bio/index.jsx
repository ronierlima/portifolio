import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Bio.module.css";

export default function Bio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bio - Ronier Lima</title>
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>Ronier lima</h1>

        <p className={styles.description}>
          <code className={styles.code}>Desenvolvedor full stack</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://t.me/ronierlima"
            className={styles.card}
          >
            <h2>Telegram &rarr;</h2>
          </a>
          <a
            href="https://www.instagram.com/nier.lima"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
          </a>
          <a
            href="https://github.com/ronierlima"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
          </a>
          <a
            href="https://www.ronier.me"
            className={styles.card}
          >
            <h2>Portifólio &rarr;</h2>
          </a>
          <a
            href="https://www.linkedin.com/in/ronierlima/"
            className={styles.card}
          >
            <h2>Linkedin &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.ronier.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Densenvolvido por{" "}
          <span className={styles.logo}>
            Ronier Lima
          </span>
        </a>
      </footer>
    </div>
  );
}
