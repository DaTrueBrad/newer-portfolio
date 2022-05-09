import { LineAxisOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Construction = () => {
  const [image, setImage] = useState("")

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setImage(data.message)
    })
  }, [])
  return (
    <section className="regular-page">
      <Typography variant="h2" color="white">This area is under construction...</Typography>
      <Typography variant="h4" color="white">Here, have a cool dog in the meantime.</Typography>
      <img src={image} className="dog" />
    </section>
  )
}

export default Construction