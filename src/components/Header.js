import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar, Badge, Box, Button, IconButton, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../reduxStore/shoppingCartState';
import { useUser } from '../reduxStore/userState';

function Header() {
  const { user } = useUser();
  const { shoppingCart } = useShoppingCart();

  const itemQuantity = shoppingCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">My Music Store</Link>
        </Typography>
        <Box mr={2}>
          <Link to="/signin">
            {!user ? (

              <Button variant="contained" color="primary">Sign In</Button>

            )
              : (
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  Hi,
                  {' '}
                  {user.firstName}
                </Typography>
              )}
          </Link>
        </Box>
        <IconButton
          size="large"
          aria-label="Go to shopping cart"
          color="inherit"
        >
          <Badge badgeContent={itemQuantity} color="primary">
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
