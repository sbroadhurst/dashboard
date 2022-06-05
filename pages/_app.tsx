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
import '../node_modules/@syncfusion/ej2-react-calendars/styles/material.css'
import '../node_modules/@syncfusion/ej2-react-popups/styles/material.css'
import '../node_modules/@syncfusion/ej2-lists/styles/material.css'
import '../node_modules/@syncfusion/ej2-react-schedule/styles/material.css'
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css'
import '../node_modules/@syncfusion/ej2-react-kanban/styles/material.css'
import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css'
import ThemeSettings from '../components/ThemeSettings'

function MyApp({ Component, pageProps }: AppProps) {
  const { activeMenu, currentMode } = useStateContext()

  return (
    <ContextProvider>
      <div className={`relative  flex dark:bg-main-dark-bg`}>
        <Settings />
        <Sidebar />
        <div className={`min-h-screen w-full bg-main-bg dark:bg-main-bg ${activeMenu ? ' lg:ml-72' : 'flex-2'}`}>
          <Navbar />
          <Component {...pageProps} />
        </div>
        <ThemeSettings />
      </div>
    </ContextProvider>
  )
}

export default MyApp
