import React, { createContext, useContext, useState } from 'react'

interface State {
  chat: boolean
  cart: boolean
  userProfile: boolean
  notification: boolean
}

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

interface MyContext {
  activeMenu: boolean
  setActiveMenu?: any
  isClicked: State
  setIsClicked?: any
  handleClick?: any
  screenSize: undefined | number
  setScreenSize?: any
  currentColor: string
  currentMode: string
  setColor?: any
  setMode?: any
  themeSettings: boolean
  setThemeSettings?: any
  initialState: any
}

const StateContext = createContext<MyContext>({
  activeMenu: true,
  isClicked: initialState,
  screenSize: undefined,
  currentColor: '#03C9D7',
  currentMode: 'Light',
  themeSettings: false,
  initialState: initialState,
})

export const ContextProvider = ({ children }: any) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (e: any) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
  }

  const setColor = (color: string) => {
    setCurrentColor(color)
    localStorage.setItem('colorModes', color)
  }

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }

  return (
    <StateContext.Provider
      value={{
        initialState,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
      }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
