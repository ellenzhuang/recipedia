import Recipes from '../components/Recipes'

function Homepage() {
  return (
    <main>
      <Recipes
        heading="Get Inspired!"
        subHeading="If you have no idea of what to cook, you can get some
          inspiration here!"
        loadingNumber="6"
        tags=""
      />
      <Recipes
        heading="Vegetarian"
        subHeading="123!"
        loadingNumber="6"
        tags="vegetarian"
      />
      <Recipes
        heading="Dinner"
        subHeading="456!"
        loadingNumber="6"
        tags="dinner"
      />
    </main>
  )
}

export default Homepage
