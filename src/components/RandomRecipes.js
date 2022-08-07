import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

import RecipeCard from './RecipeCard'
import SPOONACULAR_API_KEY from '../api/Spoonacular'

function RandomRecipes() {
  const [random, setRandom] = useState([])

  useEffect(() => {
    getRandom()
  }, [])

  const getRandom = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=6`
    )
    const data = await response.json()
    setRandom(data.recipes)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 6,
        pb: 6,
      }}
    >
      <Container>
        <Typography component="h1" variant="h5" gutterBottom>
          Get some inspiration!
        </Typography>
        <Typography
          component="p"
          variant="subtitle"
          gutterBottom
          sx={{ pb: 4 }}
        >
          If you have no idea of what to cook, you can get some inspiration
          here!
        </Typography>
        <Grid container spacing={4} justify="center">
          {random.map((recipe) => {
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
  )
}

export default RandomRecipes
