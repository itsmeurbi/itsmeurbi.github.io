import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
          },
          '&.active': {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
          },
          '&.active': {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
          },
          '&.active': {
            backgroundColor: 'var(--primary)',
            color: 'var(--secondary)',
          },
        },
      },
    },
  },
});

export default theme