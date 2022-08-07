import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Box, Container, Grid } from '@mui/material'

import RecipeCard from './RecipeCard'

function RandomRecipes() {
  const [random, setRandom] = useState([])

  useEffect(() => {
    getRandom()
  }, [])

  const getRandom = async () => {
    const SPOONACULAR_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=18`
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
        <Grid
          container
          // rowSpacing={{ xs: 2, md: 3 }}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          // columns={{ xs: 2, sm: 4, md: 8, xl: 12 }}
          spacing={4}
          justify="center"
        >
          {random.map((recipe) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard
                  image={recipe.image}
                  title={recipe.title}
                  // dishTypes={recipe.dishTypes}
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
