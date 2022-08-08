import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import RecipeCard from './RecipeCard'
import SPOONACULAR_API_KEY from '../api/Spoonacular'

function RandomRecipes({ heading, subHeading, loadingNumber, tags }) {
  const [random, setRandom] = useState([])

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=${loadingNumber}&tags=${tags}`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setRandom(data.recipes)
      })
      .catch((error) => console.log(error.message))
  }, [tags, loadingNumber])

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 6,
      }}
    >
      <Container>
        <Typography component="h1" variant="h5" gutterBottom>
          {heading}
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          gutterBottom
          sx={{ pb: 4 }}
        >
          {subHeading}
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
