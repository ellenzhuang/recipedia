import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'
import SetMealIcon from '@mui/icons-material/SetMeal'
import data from '../data.js'

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null)
  let { recipeID } = useParams()

  // useEffect(() => {
  //   const url = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${SPOONACULAR_API_KEY}&includeNutrition=false`
  //   fetch(url)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setRecipe(data)
  //     })
  //     .catch((error) => console.log(error.message))
  // }, [recipeID])

  useEffect(() => {
    setRecipe(data)
  }, [recipeID])

  if (!recipeID || !recipe) {
    return <RecipeDetailEmpty />
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: '#f0f0f0',
          justifyContent: 'center',
        }}
      >
        <Container sx={{ pt: 4, pb: 4 }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Box flex={4} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '4px',
                }}
              />
            </Box>
            <Box flex={6} p={2}>
              <Typography component="h1" variant="h4" gutterBottom>
                {recipe.title}
              </Typography>
              <Box pt={2} pb={1}>
                <Typography
                  component="span"
                  variant="body1"
                  gutterBottom
                  paddingRight={3}
                  sx={{ fontWeight: '500' }}
                >
                  Cuisines:
                </Typography>
                {recipe.cuisines.map((cuisine) => {
                  return (
                    <Chip
                      key={cuisine}
                      label={cuisine}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  )
                })}
              </Box>
              <Box pb={2}>
                <Typography
                  component="span"
                  variant="body1"
                  gutterBottom
                  paddingRight={1}
                  sx={{ fontWeight: '500' }}
                >
                  Dish Types:
                </Typography>
                {recipe.dishTypes.map((dish) => {
                  return (
                    <Chip
                      key={dish}
                      label={dish}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  )
                })}
              </Box>
              <Stack direction="row" spacing={2} justifyContent="flex-start">
                <List flex={4} sx={{ display: 'inline-flex' }}>
                  <ListItem disablePadding>
                    <AccessAlarmIcon
                      color="primary"
                      fontSize="large"
                      sx={{ mr: 1 }}
                    />
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="body1" sx={{ fontWeight: '500' }}>
                          Ready in:
                        </Typography>
                      }
                      secondary={`${recipe.readyInMinutes} mins`}
                    />
                  </ListItem>
                </List>
                <List flex={4} sx={{ display: 'inline-flex' }}>
                  <ListItem disablePadding>
                    <SoupKitchenIcon
                      color="primary"
                      fontSize="large"
                      sx={{ mr: 1 }}
                    />
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="body1" sx={{ fontWeight: '500' }}>
                          Serves:
                        </Typography>
                      }
                      secondary={`${recipe.servings} ppl`}
                    />
                  </ListItem>
                </List>
                <List flex={4} sx={{ display: 'inline-flex' }}>
                  <ListItem disablePadding>
                    <SetMealIcon
                      color="primary"
                      fontSize="large"
                      sx={{ mr: 1 }}
                    />
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography variant="body1" sx={{ fontWeight: '500' }}>
                          Diet:
                        </Typography>
                      }
                      secondary={`
                        ${recipe.vegan ? 'VG' : 'Not VG'}, 
                        ${recipe.vegetarian ? 'VE' : 'Not VE'}, 
                        ${recipe.glutenFree ? 'GF' : 'Not GF'}`}
                    />
                  </ListItem>
                </List>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container sx={{ p: 6 }}>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <Typography component="h2" variant="h6" gutterBottom>
                Ingredients
              </Typography>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                  pb: 6,
                }}
              >
                {recipe.extendedIngredients.map((ingredient) => {
                  return (
                    <ListItem divider key={ingredient.id} disablePadding>
                      <ListItemIcon>
                        <Avatar
                          variant="circular"
                          sx={{
                            height: '40',
                            width: '40',
                            border: '1px solid #F0F0F0',
                          }}
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                          alt={ingredient.image}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={ingredient.nameClean}
                        secondary={ingredient.amount + ' ' + ingredient.unit}
                      />
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Container sx={{ pb: 3 }}>
                <Typography component="h2" variant="h6" gutterBottom>
                  Instruction
                </Typography>
                <Typography
                  component="div"
                  variant="body1"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {recipe.analyzedInstructions.map((analyzedInstruction) => {
                    return (
                      <div key={analyzedInstruction.name}>
                        <Typography
                          component="div"
                          variant="body1"
                          gutterBottom
                        >
                          {analyzedInstruction.steps.map((step) => {
                            return (
                              <div key={step.number}>
                                <Typography
                                  sx={{ pb: 2 }}
                                  component="div"
                                  variant="body1"
                                  gutterBottom
                                >
                                  <b>Step {step.number}:</b> {step.step}
                                </Typography>
                                {/* <div className="equipment-image">
                                  {step.equipment.map((utensil) => {
                                    return (
                                      <img
                                        src={`https://spoonacular.com/cdn/equipment_100x100/${utensil.image}`}
                                        margin="10px"
                                        alt={utensil.name}
                                        key={utensil.id}
                                      />
                                    )
                                  })}
                                </div> */}
                              </div>
                            )
                          })}
                        </Typography>
                      </div>
                    )
                  })}
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  )
}

export function RecipeDetailEmpty() {
  return (
    <div className="RecipeDetail">
      <p>No details found.</p>
    </div>
  )
}

export default RecipeDetail
