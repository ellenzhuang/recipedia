import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import RecipeDetail from './pages/RecipeDetail'
import MealPlan from './pages/MealPlan'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/recipe/:recipeID" element={<RecipeDetail />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
