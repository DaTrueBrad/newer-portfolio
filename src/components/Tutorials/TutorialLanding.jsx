import React from 'react'
import {Typography} from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function TutorialLanding() {
  return (
    <section className='landing'>
      <Typography variant="h1" color="text.main" align="center" sx={{fontSize: {
          xs: "4em",
          sm: "5em",
          md: "6em"
        }}}>Welcome<br></br> to my <Typography variant="span" color="primary.main">
           Tutorials
        </Typography></Typography>
        <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5" color="text.main" align="center" sx={{ marginBottom: "10px" }}>This is a small collection of tutorials, how-to's, and introdiction various tech!</Typography>
      <ArrowCircleDownIcon sx={{color: "white"}} fontSize="large"/>
    </section>
  )
}

export default TutorialLanding