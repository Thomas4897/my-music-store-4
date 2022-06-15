import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable default-param-last */
const ADD_TO_CART_ACTION = 'ADD_TO_CART';
const REMOVE_FROM_CART_ACTION = 'REMOVE_FROM_CART';
const EMPTY_CART_ACTION = 'EMPTY_CART';

// export const useShoppingCart = () => useSelector((state) => state.shoppingCart);

//! ACTION CREATORS
//! A function that returns an action
const dispatch = useDispatch();

export const addToCartActionCreator = (product) => {
  dispatch(
    {
      type: ADD_TO_CART_ACTION,
      payload: { product },
    },
  );
};

export const removeFromCartActionCreator = (cartItem) => {
  dispatch(
    {
      type: REMOVE_FROM_CART_ACTION,
      payload: { productId: cartItem.id },
    },
  );
};

export const emptyCartActionCreator = () => {
  dispatch(
    {
      type: EMPTY_CART_ACTION,
    },
  );
};

export const useShoppingCart = () => ({
  shoppingCart: useSelector((state) => state.shoppingCart),
  addtoCart: addToCartActionCreator(),
  removeFromCart: removeFromCartActionCreator(),
  emptyCart: emptyCartActionCreator(),
});

//* --------------------------------------------------------

const shoppingCartReducer = (shoppingCart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART_ACTION: {
      const { product } = action.payload;

      const productFound = shoppingCart.find((cartItem) => cartItem.id === product.id);

      // // If it does, update the quantity of the existing one
      if (productFound) {
        const newShoppingCart = shoppingCart.map((cartItem) => {
          const newQuantity = cartItem.quantity + 1;
          if (cartItem.id === productFound.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              total: newQuantity * cartItem.price,
            };
          }
          return cartItem;
        });
        return newShoppingCart;
      }
      // // If it does not add it to the end of the list
      const newShoppingCart = [...shoppingCart, {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
        total: product.price,
      }];

      return newShoppingCart;
    }
    case REMOVE_FROM_CART_ACTION: {
      const { productId } = action.payload;
      const newShoppingCart = shoppingCart.filter((cartItem) => cartItem.id !== productId);

      return newShoppingCart;
    }
    case EMPTY_CART_ACTION:
      return [];
    default:
      return shoppingCart;
  }
};

export default shoppingCartReducer;
