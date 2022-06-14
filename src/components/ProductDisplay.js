import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useShoppingCart } from '../context/shoppingCartContext';

function ProductDisplay(props) {
  // const { addToCart } = useShoppingCart();
  const dispatch = useDispatch();

  const {
    product,
  } = props;

  const {
    title,
    description,
    brand,
    price,
    image,
  } = product;

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={brand}
        action={(
          <Typography fontWeight="bold">
            $
            {price / 100}
          </Typography>
)}
      />
      <CardMedia
        component="img"
        height="260"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <Box display="flex" justifyContent="space-between" width="100%">
          <Button variant="outlined" startIcon={<AddIcon />} onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product } })}>Add to cart</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
