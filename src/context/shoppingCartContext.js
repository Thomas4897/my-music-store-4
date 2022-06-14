import React, {
  createContext, useContext, useReducer,
} from 'react';

export const shoppingCartContext = createContext();

export const useShoppingCart = () => useContext(shoppingCartContext);

const ADD_TO_CART_ACTION = 'ADD_TO_CART';
const REMOVE_FROM_CART_ACTION = 'REMOVE_FROM_CART';
const EMPTY_CART_ACTION = 'EMPTY_CART';

const shoppingCartReducer = (shoppingCart, action) => {
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

// This component is gonna handle everythign that relates to the shopping cart.
// that way all we have to do is wrap our application with it.
// and that will allows to have a cleaner app.js file
function ShoppingCartProvider(props) {
  const { children } = props;

  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART_ACTION, payload: { product } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART_ACTION, payload: { productId } });
  };

  const emptyCart = () => {
    dispatch({ type: EMPTY_CART_ACTION });
  };

  return (
    <shoppingCartContext.Provider value={{
      shoppingCart, addToCart, removeFromCart, emptyCart,
    }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
