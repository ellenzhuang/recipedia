import React from 'react'
import Container from '@mui/material/Container'

import Navbar from '../components/Navbar'
import Random from '../components/Random'
import Footer from '../components/Footer'

function Home() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Random />
      <Footer />
    </Container>
  )
}

export default Home
