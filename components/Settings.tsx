import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useStateContext } from '../contexts/ContextProvider'

const Settings = () => {
  const { setThemeSettings, currentColor } = useStateContext()

  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
      <TooltipComponent content="Settings" position="TopCenter">
        <button
          type="button"
          className="p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
          style={{ background: currentColor, borderRadius: '50%' }}
          onClick={() => setThemeSettings(true)}>
          <FiSettings />
        </button>
      </TooltipComponent>
    </div>
  )
}

export default Settings
