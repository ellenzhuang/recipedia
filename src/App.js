import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import RecipeDetail from './pages/RecipeDetail'
import MealPlan from './pages/MealPlan'
import Category from './components/Category'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/recipe/:recipeID" element={<RecipeDetail />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
