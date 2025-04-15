import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import HomeProduct from './HomeProduct';

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const Features = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: 'linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)',
          // minHeight: '100vh',
        }}
      >
        <HomeProduct />
      </Box>
    </ThemeProvider>
  );
};

export default Features;