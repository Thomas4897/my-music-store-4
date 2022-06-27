import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

function Layout(props) {
  const { children } = props;

  return (
    <Box>
      <Header />
      <Box>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
