import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../public/data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { useTheme } from 'next-themes'

const ThemeSettings = () => {
  const { setColor, currentColor, setThemeSettings, themeSettings } = useStateContext()
  const { theme, setTheme } = useTheme()

  return (
    <>
      {themeSettings ? (
        <div className="nav-item fixed top-0 right-0 w-screen bg-half-transparent">
          <div
            className="dark:[#484b52] w-400 float-right h-screen dark:text-gray-200"
            style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
            <div className="ml-4 flex items-center justify-between p-4">
              <p className="text-xl font-semibold">Settings</p>
              <button
                type="button"
                onClick={() => setThemeSettings(false)}
                style={{ color: 'rgb(153,171,180', borderRadius: '50%' }}
                className="p-3 text-2xl hover:bg-light-gray hover:drop-shadow-xl">
                <MdOutlineCancel />
              </button>
            </div>

            {/* light or dark */}
            <div className="border-t-1 border-color ml-4 mb-4 flex-col pl-4">
              <p className="text-lg font-semibold">Theme Options</p>
              <div className="mt-4">
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  value="Light"
                  className="cursor-pointer"
                  onChange={() => setTheme('light')}
                  checked={theme === 'light'}
                />
                <label htmlFor="light" className="text-md ml-2 cursor-pointer">
                  Light
                </label>
              </div>
              <div className="mt-4">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  value="Dark"
                  className="cursor-pointer"
                  onChange={() => setTheme('dark')}
                  checked={theme === 'dark'}
                />
                <label htmlFor="dark" className="text-md ml-2 cursor-pointer">
                  Dark
                </label>
              </div>
            </div>

            {/* theme colors */}
            <div className="border-t-1 border-color ml-4 flex-col pl-4">
              <p className="text-lg font-semibold">Theme Colors</p>
              <div className="flex gap-3">
                {themeColors.map((item, index) => (
                  <TooltipComponent key={index} content={item.name} position="TopCenter">
                    <div className="relative mt-2 flex cursor-pointer items-center gap-5">
                      <button
                        className="h-10 w-10 cursor-pointer rounded-full"
                        style={{ backgroundColor: item.color }}
                        onClick={() => setColor(item.color)}>
                        <BsCheck
                          className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}
                        />
                      </button>
                    </div>
                  </TooltipComponent>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ThemeSettings
