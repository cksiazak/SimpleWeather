import fetch from 'isomorphic-unfetch'

export const geocodeLocation = async (location) => {
  try {
    const res = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.GEOCODE}`
    )
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
