import { type ReactElement}  from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = (): ReactElement => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--background)',
        px: 6,
        py: 1,
        color: 'white',
        position: "sticky",
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'space-between' }
      }}
    >
      <Typography variant="caption" sx={{ color: 'var(--grey)' }}>
        In case you've been wondering, the color palette was taken from Nier: Automata
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <IconButton
          href="https://github.com/itsmeurbi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="external link"
          size="large"
        >
          <GitHubIcon fontSize="large"/>
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/itsmeurbi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="external link"
          size="large"
        >
          <LinkedInIcon fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Footer