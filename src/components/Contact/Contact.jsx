import React, {useEffect} from 'react'
import ContactLanding from './ContactLanding'
import ContactMe from './ContactMe'

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <ContactLanding />
      <ContactMe />
    </main>
  )
}

export default Contact