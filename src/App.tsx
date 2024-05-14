import { type ReactElement } from 'react';
import logo from './wip.webp';
import './App.css';
import { Box, Container } from '@mui/material';

const App = (): ReactElement => {
  return (
    <Box sx={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <img src={logo} alt="logo" width="100%" />
      </Container>
    </Box>
  );
}

export default App;
