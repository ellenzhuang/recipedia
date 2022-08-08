import { Link as RouterLink } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from '@mui/material'

function RecipeCard({ id, title, image }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ height: 60, pb: 6 }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ ml: 1 }}>
          <Link component={RouterLink} to={`/recipe/${id}`} underline="none">
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
