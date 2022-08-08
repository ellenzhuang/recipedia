import RandomRecipes from '../components/RandomRecipes'

function Homepage() {
  return (
    <main>
      <RandomRecipes
        heading="Get Inspired!"
        subHeading="If you have no idea of what to cook, you can get some
          inspiration here!"
        loadingNumber="6"
        tags=""
      />
      <RandomRecipes
        heading="Vegetarian"
        subHeading="123!"
        loadingNumber="6"
        tags="vegetarian"
      />
      <RandomRecipes
        heading="Dinner"
        subHeading="456!"
        loadingNumber="6"
        tags="dinner"
      />
    </main>
  )
}

export default Homepage
