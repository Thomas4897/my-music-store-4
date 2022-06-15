/* eslint-disable default-param-last */
import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingCartState';
import userReducer from './userState';

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
