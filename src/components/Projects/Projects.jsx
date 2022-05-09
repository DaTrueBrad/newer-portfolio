import { Typography } from '@mui/material'
import React, {useEffect} from 'react'
import Construction from '../Construction'
import ProjectList from './ProjectList'
import ProjectsLanding from './ProjectsLanding'

function Projects() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <ProjectsLanding />
      <Construction />
      {/* <ProjectList /> */}
    </main>
  )
}

export default Projects