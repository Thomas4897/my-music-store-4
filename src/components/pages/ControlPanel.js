import { Card, Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

function ControlPanel() {
  return (
    <Layout>
      <Box>
        <Box>
          <Box p={4}>
            <Card sx={{ width: '160px', height: '160px' }}>
              <Link to="/publish-product">
                <Box height="100%" display="flex" justifyContent="center" alignItems="center" p={2}>
                  <Typography textAlign="center">
                    Publish new products
                  </Typography>
                </Box>
              </Link>
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default ControlPanel;
