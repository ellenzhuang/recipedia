import { Link, Link as RouterLink } from 'react-router-dom'
import { Chip, Stack, Toolbar } from '@mui/material'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RamenDiningIcon from '@mui/icons-material/RamenDining'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import RiceBowlIcon from '@mui/icons-material/RiceBowl'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import BentoIcon from '@mui/icons-material/Bento'
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining'
import NightlifeIcon from '@mui/icons-material/Nightlife'

const cuisines = [
  { id: 1, name: 'Italian', icon: <LocalPizzaIcon /> },
  { id: 2, name: 'Chinese', icon: <RamenDiningIcon /> },
  { id: 3, name: 'French', icon: <DinnerDiningIcon /> },
  { id: 4, name: 'American', icon: <FastfoodIcon /> },
  { id: 5, name: 'Spanish', icon: <NightlifeIcon /> },
  { id: 6, name: 'Korean', icon: <RiceBowlIcon /> },
  { id: 7, name: 'Japanese', icon: <BentoIcon /> },
  { id: 8, name: 'Indian', icon: <TakeoutDiningIcon /> },
]

function CategoryBar() {
  return (
    <Toolbar disableGutters>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '30px',
          backgroudnColor: 'pink',
        }}
      >
        {cuisines.map((cuisine) => {
          return (
            <Link
              component={RouterLink}
              to={`/cuisine/${cuisine.name}`}
              underline="none"
              key={cuisine.id}
            >
              <Chip
                clickable
                label={cuisine.name}
                color="primary"
                variant="outlined"
                icon={cuisine.icon}
                sx={{ p: 1 }}
              />
            </Link>
          )
        })}
      </Stack>
    </Toolbar>
  )
}

export default CategoryBar
