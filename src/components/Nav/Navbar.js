import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import LunchDiningIcon from '@mui/icons-material/LunchDining'

function Navbar() {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LunchDiningIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RECIPEDIA
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
