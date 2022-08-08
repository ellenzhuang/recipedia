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
} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded'
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
        <Container sx={{ p: 6 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              xl={5}
              sx={{
                maxWidth: 360,
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '4px',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7} xl={7} sx={{ pl: '20px' }}>
              <Typography component="h1" variant="h4" gutterBottom>
                {recipe.title}
              </Typography>
              <Typography component="div" variant="body2" gutterBottom>
                Cuisines:{' '}
                {recipe.cuisines.map((cuisine) => {
                  return (
                    <Chip key={cuisine} label={cuisine} variant="outlined" />
                  )
                })}
              </Typography>
              <Typography component="div" variant="body2" gutterBottom>
                Dish Types:{' '}
                {recipe.dishTypes.map((dish) => {
                  return <Chip key={dish} label={dish} variant="outlined" />
                })}
              </Typography>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <ListItem disablePadding>
                  <AccessAlarmIcon
                    color="primary"
                    fontSize="large"
                    sx={{ mr: 1 }}
                  />
                  <ListItemText
                    primary="Cook:"
                    secondary={`${recipe.readyInMinutes} minutes`}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <LocalDiningRoundedIcon
                    color="primary"
                    fontSize="large"
                    sx={{ mr: 1 }}
                  />
                  <ListItemText
                    primary="Serves:"
                    secondary={`${recipe.servings} people`}
                  />
                </ListItem>
              </List>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Avatar>VG</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary="Vegan:"
                    secondary={recipe.vegan ? 'Yes' : 'No'}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Avatar>VE</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary="Vegetarian:"
                    secondary={recipe.vegetarian ? 'Yes' : 'No'}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Avatar>GF</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary="Gluten Free:"
                    secondary={recipe.glutenFree ? 'Yes' : 'No'}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container sx={{ p: 6 }}>
          <Grid container>
            <Grid item xs={12} sm={5} md={5} xl={5}>
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
            <Grid item xs={12} sm={7} md={7} xl={7}>
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
