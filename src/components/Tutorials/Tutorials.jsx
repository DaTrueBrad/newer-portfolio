import { Typography } from '@mui/material'
import React, {useEffect} from 'react'
import Learning from './Learning'
import TutorialLanding from './TutorialLanding'

function Tutorials() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <TutorialLanding />
      <Learning />
    </main>
  )
}

export default Tutorials