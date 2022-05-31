import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const [activeMenu, setActiveMenu] = useState(true)

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard example" />
        <link rel="icon" href="/favicon.ico" />

        <div>
          <div className="relative flex  dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent content="Settings" position="TopCenter">
                <button
                  type="button"
                  className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
                  style={{ background: 'blue', borderRadius: '50%' }}>
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="sidebar fixed w-72 bg-white dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${activeMenu ? ' md:ml-72' : 'flex-2'}`}>
              <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </Head>
    </div>
  )
}

export default Home
