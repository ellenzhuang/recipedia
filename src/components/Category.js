import { NavLink } from 'react-router-dom'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RamenDiningIcon from '@mui/icons-material/RamenDining'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { Typography } from '@mui/material'

function Category() {
  return (
    // <Typography variant="h5">Category</Typography>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
      <div>
        <NavLink to="/category/italian">
          <LocalPizzaIcon />
          <Typography variant="h6">Italian</Typography>
        </NavLink>
      </div>
      <div>
        <NavLink to="/category/japanese">
          <RamenDiningIcon />
          <Typography variant="h6">Japanese</Typography>
        </NavLink>
      </div>
      <div>
        <NavLink to="/category/french">
          <BakeryDiningIcon />
          <Typography variant="h6">French</Typography>
        </NavLink>
      </div>
      <div>
        <NavLink to="/category/american">
          <FastfoodIcon />
          <Typography variant="h6">American</Typography>
        </NavLink>
      </div>
    </div>
  )
}

export default Category
