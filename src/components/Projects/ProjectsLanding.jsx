import React from 'react'
import {Typography} from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function ProjectsLanding() {
  return (
    <section className='landing'>
    <Typography variant="h1" color="text.main" align="center">These<br></br> are my <Typography variant="span" color="primary.main">
         Projects
      </Typography></Typography>
      <br></br>
    <br></br>
    <br></br>
    <Typography variant="h5" color="text.main" align="center" sx={{ marginBottom: "10px" }}>These are simply some of the projects I've built out.</Typography>
    <ArrowCircleDownIcon sx={{color: "white"}} fontSize="large"/>
  </section>
  )
}

export default ProjectsLanding