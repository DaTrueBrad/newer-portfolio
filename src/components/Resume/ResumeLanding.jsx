import React from 'react'
import {Typography} from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function ResumeLanding() {
  return (
    <section className='landing'>
      <Typography variant="h1" color="text.main" align="center">This<br></br> is my <Typography variant="span" color="primary.main">
           Resume
        </Typography></Typography>
        <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5" color="text.main" align="center" sx={{ marginBottom: "10px" }}>My most up-to-date resume as well as most extensive. Feel free to filter how you wish!</Typography>
      <ArrowCircleDownIcon sx={{color: "white"}} fontSize="large"/>
    </section>
  )
}

export default ResumeLanding