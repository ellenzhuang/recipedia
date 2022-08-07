import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'

function RecipeCard(props) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ height: 50, pb: 6 }}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.dishTypes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ ml: 1 }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
