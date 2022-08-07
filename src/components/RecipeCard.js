import { Link } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'

function RecipeCard({ image, title, id, dishTypes }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ height: 50, pb: 6 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dishTypes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ ml: 1 }}>
          <Link to={`/recipe/${id}`} className="action">
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
