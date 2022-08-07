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
        setRecipe(data)
      })
      .catch((error) => console.log(error.message))
  }, [recipeID])

  if (!recipeID || !recipe) {
    return <RecipeDetailEmpty />
  }

  return (
    <div className="RecipeDetail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
    </div>
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
