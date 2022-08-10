import { Box, Typography } from '@mui/material'

function NotFound() {
  return (
    <main>
      <Box
        sx={{ bgcolor: 'background.paper', p: 6, textAlign: 'center' }}
        height="40vh"
        component="footer"
      >
        <Typography variant="h5">Uh oh, that page doesn't exist.</Typography>
      </Box>
    </main>
  )
}

export default NotFound
