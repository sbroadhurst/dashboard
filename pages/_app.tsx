import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider, useStateContext } from '../contexts/ContextProvider'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Settings from '../components/Settings'

function MyApp({ Component, pageProps }: AppProps) {
  const { activeMenu } = useStateContext()

  return (
    <ContextProvider>
      <div className="relative flex  dark:bg-main-dark-bg">
        <Settings />
        <Sidebar />
        <div className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${activeMenu ? ' lg:ml-72' : 'flex-2'}`}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ContextProvider>
  )
}

export default MyApp
