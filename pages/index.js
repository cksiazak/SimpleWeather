import React, { useState, useEffect } from 'react'
import { IoMdLocate, IoMdSearch } from 'react-icons/io'

// context
import { weatherContext } from '../lib/weatherContext'

// custom hook
import useGeolocation from '../utils/useGeolocation'

const index = () => {
  const { state, dispatch } = weatherContext()
  const [geo, error, checkLocation] = useGeolocation()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (geo) {
      setSearch(`${geo.latitude}, ${geo.longitude}`)
    }
  }, [geo])

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='page-wrapper'>
      <div className='container'>
        <h1>SimpleWeather</h1>
        <form>
          <label htmlFor='search' />
          <input
            name='search'
            type='text'
            value={search}
            onChange={changeHandler}
          />
          <button type='button' onClick={checkLocation}>
            <IoMdLocate />
          </button>
          <button type='button'>
            <IoMdSearch />
          </button>
        </form>
      </div>
    </div>
  )
}
;<button type='button'>GPS</button>

export default index
