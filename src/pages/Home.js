import { Container, CssBaseline } from '@mui/material'

import Navbar from '../components/Navbar/Navbar'
import RandomRecipes from '../components/RandomRecipes'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <RandomRecipes />
      </main>
      <Footer />
    </>
  )
}

export default Home
