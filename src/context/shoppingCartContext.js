import React, {
  createContext, useContext, useReducer,
} from 'react';

export const shoppingCartContext = createContext();

export const useShoppingCart = () => useContext(shoppingCartContext);

const ADD_TO_CART_ACTION = 'ADD_TO_CART';
const REMOVE_FROM_CART_ACTION = 'REMOVE_FROM_CART';
const EMPTY_CART_ACTION = 'EMPTY_CART';

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART_ACTION:
      return action.payload.shoppingCart;
    case REMOVE_FROM_CART_ACTION:
      return action.payload.shoppingCart;
    case EMPTY_CART_ACTION:
      return [];
    default:
      return state;
  }
};

// This component is gonna handle everythign that relates to the shopping cart.
// that way all we have to do is wrap our application with it.
// and that will allows to have a cleaner app.js file
function ShoppingCartProvider(props) {
  const { children } = props;

  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  const addToCart = (product) => {
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

      return dispatch({
        type: ADD_TO_CART_ACTION,
        payload: {
          shoppingCart: newShoppingCart,
        },
      });
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

    return dispatch({
      type: ADD_TO_CART_ACTION,
      payload: {
        shoppingCart: newShoppingCart,
      },
    });
  };

  const removeFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter((cartItem) => cartItem.id !== productId);

    dispatch({
      type: REMOVE_FROM_CART_ACTION,
      payload: {
        shoppingCart: newShoppingCart,
      },
    });
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
