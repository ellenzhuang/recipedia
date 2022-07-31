import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recipes from '../Recipes/Recipes'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Recipes />}>
            <Route path="/:recipeID" element={<RecipeDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
