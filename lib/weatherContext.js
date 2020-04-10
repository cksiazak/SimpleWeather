import { createContext, useContext } from 'react'

export const Weather = createContext()

export const weatherContext = () => useContext(Weather)
