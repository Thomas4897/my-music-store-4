import { Box, Button } from '@mui/material';
import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
// import { useShoppingCart } from '../../context/shoppingCartContext';
import CartItem from '../CartItem';
import Layout from '../Layout';
import { emptyCartActionCreator, useShoppingCart } from '../../reduxStore/shoppingCartState';

function CartPage() {
  // const {
  //   shoppingCart,
  //   emptyCart,
  // } = useShoppingCart();
  const shoppingCart = useShoppingCart();

  // We want to display whats in the shopping cart.
  return (
    <Layout shoppingCart={shoppingCart}>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {shoppingCart.map((cartItem) => (
          <Box p={3} key={cartItem.id} width="100%" maxWidth={500}>
            <CartItem cartItem={cartItem} />
          </Box>
        ))}
        <Box mt={5}>
          <Box mb={3}>
            <Button fullWidth variant="contained">Checkout</Button>
          </Box>
          <Box mb={3}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<ReplayIcon />}
              onClick={() => emptyCartActionCreator()}
            >
              Empty Cart
            </Button>
          </Box>
          <Box mb={3}>
            <Link to="/">
              <Button
                fullWidth
                variant="contained"
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default CartPage;
