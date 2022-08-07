import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import NotFound from './pages/NotFound'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipe/:recipeID" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
