import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipe/:recipeID" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
