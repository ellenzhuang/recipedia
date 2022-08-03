import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />}>
          <Route path=":recipeID" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
