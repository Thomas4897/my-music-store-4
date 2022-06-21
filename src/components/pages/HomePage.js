import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchProductData } from '../../dataFetching';
import Layout from '../Layout';
import ProductDisplay from '../ProductDisplay';

function HomePage() {
  const [productData, setProductData] = useState([]);

  // This is what runs after the first render:
  useEffect(
    () => {
      fetchProductData()
        .then((response) => setProductData(response.data))
        .catch((error) => console.log('error: ', error));
    },
    [],
  );

  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {productData.map((product) => (
          <Box m={4} key={product.title} width="375px" maxWidth="100%">
            <ProductDisplay product={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
