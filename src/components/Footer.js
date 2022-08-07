import { Box, Typography, Link } from '@mui/material'

function Footer() {
  const Contact = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://github.com/ellenzhuang">
          Visit My Github
        </Link>{' '}
      </Typography>
    )
  }
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Recipedia
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Developed by Yuan Zhuang with love from Melbourne, Australia.
      </Typography>
      <Contact />
    </Box>
  )
}

export default Footer
