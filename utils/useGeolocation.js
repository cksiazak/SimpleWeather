import { useState, useEffect } from 'react'

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported')
      return
    }
  }, [])

  function geoSuccess(position) {
    const longitude = position.coords.longitude
    const latitude = position.coords.latitude

    setCoordinates({ latitude, longitude })
  }

  function geoError() {
    setError('Unable to retrieve your location')
  }

  function checkLocation() {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
  }

  return [coordinates, error, checkLocation]
}

export default useGeolocation
