/* eslint-disable default-param-last */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';
import CustomThemeProvider from './components/CustomThemeProvider';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';
import SignInPage from './components/pages/SignInPage';
import ShoppingCartProvider from './context/shoppingCartContext';
import UserDataProvider from './context/userDataContext';

//! Reducers take the state and actions as arguments and returns the updated versions of the state

//! ACTION OBJECT
export const LOG_IN_ACTION = 'LOG_IN';
export const LOG_OUT_ACTION = 'LOG_OUT';
export const CLEAR_FAVORITES_ACTION = 'CLEAR_FAVORITES';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      return action.payload.user;
    case LOG_OUT_ACTION:
      return null;
    case CLEAR_FAVORITES_ACTION:
      return { ...state, favorites: [] };
    default:
      return state;
  }
};

const ADD_TO_CART_ACTION = 'ADD_TO_CART';
const REMOVE_FROM_CART_ACTION = 'REMOVE_FROM_CART';
const EMPTY_CART_ACTION = 'EMPTY_CART';

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

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
});

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <CustomThemeProvider>
          <UserDataProvider>
            <ShoppingCartProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="signin" element={<SignInPage />} />
              </Routes>
            </ShoppingCartProvider>
          </UserDataProvider>
        </CustomThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
