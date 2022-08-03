import React from 'react'

import Navbar from '../components/Navbar'
import Random from '../components/Random'
import Footer from '../components/Footer'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
function Home() {
  return (
    <Container maxWidth="sm">
      <Navbar />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <Copyright />
      </Box>
      <Random />
      <Footer />
    </Container>
  )
}

export default Home
