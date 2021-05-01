import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Dev Group</title>
        <meta name="description" content="The site for the Cat Dev Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to the <a href="http://github.com/cat-dev-group">Cat Dev Group</a>!
        </h2>

        <p className={styles.description}>
          This is a placeholder site until we code a full one. <br /> Until then, remember… <em>it's all objects</em>!
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/cat-dev-group/" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Contribute to our open source repositories!</p>
          </a>

          <a href="https://discord.gg/yt8s6C33fw" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Feel free to join us on Discord for fun!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
