import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider, useStateContext } from '../contexts/ContextProvider'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Settings from '../components/Settings'

import '../node_modules/@syncfusion/ej2-base/styles/material.css'
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css'
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css'
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css'
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css'
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css'
import '../node_modules/@syncfusion/ej2-popups/styles/material.css'
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css'
import '../node_modules/@syncfusion/ej2-react-grids/styles/material.css'

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
