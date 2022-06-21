import { Box, Button } from '@mui/material';
import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import Layout from '../Layout';
import { useShoppingCart } from '../../reduxStore/shoppingCartState';

function CartPage() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const { emptyCart } = useShoppingCart();

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
              onClick={() => emptyCart()}
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
