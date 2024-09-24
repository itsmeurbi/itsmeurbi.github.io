import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Button
} from '@mui/material'
import { ReactElement } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = (): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const location = useLocation()

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen)
  }


  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  useEffect(() => {
    return () => {
      setIsDrawerOpen(false)
    }
  }, [])

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'var(--grey)' }}>
        <Container maxWidth="xl">
          <Toolbar variant="dense" sx={{ alignItems: { xs: 'center', md: 'stretch' }, justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ display: { xs: 'flex', md: 'none' }}}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' } }>
              <Link to="/" style={{ textDecoration: 'none', marginRight: '4rem', flexShrink: 0 }}>
                <Typography variant='h6' sx={{ color: 'var(--secondary)' }}>Urbi</Typography>
              </Link>
              <Link to="/personal" style={{ textDecoration: 'none', height: '100%' }}>
                <Button className={isActive('/personal') ? 'active' : '' } sx={{ height: '100%', borderRadius: '0', textTransform: 'none', py: 1 }}>
                  <Typography variant='h6' sx={{ color: 'var(--secondary)' }}>Personal</Typography>
                </Button>
              </Link>
              <Link to="/career" style={{ textDecoration: 'none', height: '100%' }}>
                <Button className={isActive('/career') ? 'active' : '' } sx={{ height: '100%', borderRadius: '0', textTransform: 'none', py: 1 }}>
                  <Typography variant='h6' sx={{ color: 'var(--secondary)' }}>Career</Typography>
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: 'var(--background)', height: '100%' }} role="presentation" onClick={toggleDrawer(false)} >
          <List>
            <ListItem sx={{ px: 0 }}>
              <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton className={isActive('/') ? 'active' : ''}>
                  <Typography variant='h6' sx={{ color: 'var(--black)' }}>Urbi</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link to="/personal" style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton className={isActive('/personal') ? 'active' : ''}>
                  <Typography variant='h6' sx={{ color: 'var(--black)' }}>Personal</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <Link to="/career" style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton className={isActive('/career') ? 'active' : ''}>
                  <Typography variant='h6' sx={{ color: 'var(--black)' }}>Career</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default NavBar
