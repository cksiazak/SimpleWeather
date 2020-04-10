import React, { useReducer } from 'react'

// Global styles
import '../styles/global.scss'

// context API
import { Weather } from '../lib/weatherContext'

// Reducer data
import { weatherReducer, initialState } from '../utils/WeatherReducer'

const MyApp = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  return (
    <Weather.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </Weather.Provider>
  )
}

export default MyApp
