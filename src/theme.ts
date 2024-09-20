import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--primary)',
          },
          '&.active': {
            backgroundColor: 'var(--primary)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--primary)',
          },
          '&.active': {
            backgroundColor: 'var(--primary)',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--primary)',
          },
          '&.active': {
            backgroundColor: 'var(--primary)',
          },
        },
      },
    },
  },
});

export default theme