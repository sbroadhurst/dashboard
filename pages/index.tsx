import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useStateContext } from '../contexts/ContextProvider'
import Ecommerce from '../pages/ecommerce'

const Home: NextPage = () => {
  const { activeMenu } = useStateContext()

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
