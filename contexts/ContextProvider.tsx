import React, { createContext, useState } from 'react'

export const StateContext = createContext({})

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

const ContextProvider = ({ children }: any) => {
  const state = {}

  return <StateContext.Provider value={state}>{children}</StateContext.Provider>
}

export default ContextProvider
