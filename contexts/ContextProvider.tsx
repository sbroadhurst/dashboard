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
}

const StateContext = createContext<MyContext>({ activeMenu: true, isClicked: initialState, screenSize: undefined })

export const ContextProvider = ({ children }: any) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }

  const state = {
    activeMenu: true,
  }

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
