import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Blue color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 18,
    fontWeightBold: 700, // Make the font weight bold
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 'bold', // Add bold style to links
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold', // Add bold style to buttons
        },
      },
    },
  },
});

export default theme;

