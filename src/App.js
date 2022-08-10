import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Navbar from './components/Nav/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import RecipeDetail from './pages/RecipeDetail'
import Cuisine from './pages/Cuisine'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/recipe/:recipeID" element={<RecipeDetail />} />
          <Route path="/cuisine/:cuisineName" element={<Cuisine />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
