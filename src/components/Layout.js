import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

function Layout(props) {
  const { children } = props;

  return (
    <Box minWidth={320}>
      <Header />
      <div>
        {children}
      </div>
    </Box>
  );
}

export default Layout;
