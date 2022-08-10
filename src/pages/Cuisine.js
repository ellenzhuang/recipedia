import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CategoryBar from '../components/CategoryBar'
import RecipeCard from '../components/RecipeCard'
import SPOONACULAR_API_KEY from '../api/Spoonacular'

function Cuisine() {
  const [recipes, setRecipes] = useState([])
  let { cuisineName } = useParams()

  // const getCuisine = async (name) => {
  //   const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}&apiKey=${SPOONACULAR_API_KEY}&number=24`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setRecipes(data.results)
  // }

  // useEffect(() => {
  //   getCuisine(recipes)
  // }, [cuisineName])

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}&apiKey=${SPOONACULAR_API_KEY}&number=24`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRecipes(data.results)
      })
      .catch((error) => console.log(error.message))
  }, [cuisineName])

  return (
    <main>
      <CategoryBar />
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: 6,
        }}
      >
        <Container>
          <Typography component="h1" variant="h5" gutterBottom sx={{ pb: 4 }}>
            {cuisineName}
          </Typography>
          <Grid container spacing={4} justify="center">
            {recipes.map((recipe) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                  <RecipeCard
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
    </main>
  )
}

export default Cuisine
