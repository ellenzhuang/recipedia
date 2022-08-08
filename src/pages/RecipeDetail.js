import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import SPOONACULAR_API_KEY from '../api/Spoonacular'

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null)
  let { recipeID } = useParams()

  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${SPOONACULAR_API_KEY}&includeNutrition=false`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setRecipe(data)
      })
      .catch((error) => console.log(error.message))
  }, [recipeID])

  if (!recipeID || !recipe) {
    return <RecipeDetailEmpty />
  }

  return (
    <main>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>Likes: {recipe.aggregateLikes}</p>
      <p>Cuisines: {recipe.cuisines}</p>
      <p>Dish Types: {recipe.dishTypes}</p>
      <p>Health Score: {recipe.healthScore}</p>
      <div>Instructions: {recipe.instructions}</div>
      <p>Ready In Minutes: {recipe.readyInMinutes}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Summary: {recipe.summary}</p>
      <p>Vegan: {recipe.vegan ? 'Yes' : 'No'}</p>
      <p>Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}</p>
      {/* <p>Extended Ingredients: {recipe.extendedIngredients}</p> */}
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
