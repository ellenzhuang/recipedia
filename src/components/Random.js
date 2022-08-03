import { useState, useEffect } from 'react'

function Random() {
  const [random, setRandom] = useState([])

  useEffect(() => {
    getRandom()
  }, [])

  const getRandom = async () => {
    const SPOONACULAR_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=9`
    )
    const data = await response.json()
    setRandom(data.recipes)
  }

  return (
    <div>
      <h1>Get Inspirations!</h1>
      {random.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Random
