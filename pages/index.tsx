import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard example" />
        <link rel="icon" href="/favicon.ico" />

        <div>dashboard home page</div>
      </Head>
    </div>
  )
}

export default Home
