import React, { useEffect } from 'react'

// context
import { weatherContext } from '../lib/weatherContext'

const index = () => {
  const { state, dispatch } = weatherContext()

  return (
    <div>
      <h1>Index</h1>
    </div>
  )
}

export default index
