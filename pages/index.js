import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Logic Symmetry</title>
        <link rel="icon" href="/favicon.ico" />
      <script async defer data-website-id="9352a92d-0dd4-4857-a163-59e1f3fa06f0" src="http://localhost:3000/umami.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming soon
        </h1>
        <br></br>

        <p className={styles.description}>
        <img src="/LogicSymmetry.svg" alt="Logic Symmetry Logo" className={styles.logoTop} />Logic Symmetry{' '}
        </p>
        <p className={styles.code}>👋 Hi, We are working on the full version of our new site and will be back shortly.</p>
        <div className={styles.grid}>
          <a href="mailto:heli.herrera.dev@gmail.com" target="_blank" className={styles.card}>
            <h3><img src="/Gmail-Logo.png" alt="LogicSymmetry Logo" className={styles.logo} />Contact us &rarr;</h3>
            <p>heli.herrera.dev@gmail.com</p>
          </a>

          <a href="https://twitter.com/Heli_Herrera" target="_blank" className={styles.card}>
            <h3><img src="/twitter-logo.png" alt="LogicSymmetry Logo" className={styles.logo} /> Twitter &rarr;</h3>
            <p>https://twitter.com/Heli_Herrera</p>
          </a>

          <a
            href="https://github.com/heliherrera" target="_blank"
            className={styles.card}
          >
            <h3><img src="/github-logo.png" alt="LogicSymmetry Logo" className={styles.logo} /> Github &rarr;</h3>
            <p>https://github.com/heliherrera.</p>
          </a>

          <a
            href="https://dribbble.com/heliherrera" target="_blank"
            className={styles.card}
          >
             
            <h3><img src="/dribbble-logo.png" alt="LogicSymmetry Logo" className={styles.logo} /> Dribbble &rarr;</h3>
            <p>
            https://dribbble.com/heliherrera
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://logicsymmetry.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2021 Logic Symmetry.{' '}
          <img src="/LogicSymmetry.svg" alt="LogicSymmetry Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


