import Inspiration from '../components/Inspiration'
import CategoryBar from '../components/CategoryBar'

function Homepage() {
  return (
    <main>
      <CategoryBar />
      <Inspiration
        heading="Get Inspired!"
        subHeading="If you have no idea of what to cook, you can get some
          inspiration here!"
        loadingNumber="24"
        tags=""
      />
    </main>
  )
}

export default Homepage
