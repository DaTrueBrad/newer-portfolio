import React from 'react'
import {Typography} from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function ContactLanding() {
  return (
    <section className='landing'>
      <Typography variant="h1" color="text.main" align="center">You want<br></br> to <Typography variant="span" color="primary.main">
           Contact
        </Typography> me?</Typography>
        <br></br>
      <br></br>
      <br></br>
      <Typography variant="h5" color="text.main" align="center" sx={{ marginBottom: "10px" }}>Please do! Below you will find all of the vairous ways to contact me, including a form which sends me an email!</Typography>
      <ArrowCircleDownIcon sx={{color: "white"}} fontSize="large"/>
    </section>
  )
}

export default ContactLanding