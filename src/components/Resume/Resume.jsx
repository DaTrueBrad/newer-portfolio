import React, {useEffect} from 'react'
import ResumeLanding from './ResumeLanding'
import ResumeTabs from './ResumeTabs'

function Resume() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <ResumeLanding />
      <ResumeTabs />
    </main>
  )
}

export default Resume