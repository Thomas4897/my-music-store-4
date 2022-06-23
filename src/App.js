/* eslint-disable default-param-last */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import CustomThemeProvider from './components/CustomThemeProvider';
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';
import SignInPage from './components/pages/SignInPage';
import ShoppingCartProvider from './context/shoppingCartContext';
import UserDataProvider from './context/userDataContext';
import store from './reduxStore';
import PublishProductPage from './components/pages/PublishProductPage';
import ControlPanel from './components/pages/ControlPanel';

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
                <Route path="publish-product" element={<PublishProductPage />} />
                <Route path="admin" element={<ControlPanel />} />
              </Routes>
            </ShoppingCartProvider>
          </UserDataProvider>
        </CustomThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
