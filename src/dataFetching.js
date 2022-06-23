const axios = require('axios').default;

const sampleUserData = {
  id: '007',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@email.com',
  favorites: ['124'], // IDs of favorite Products
};

export const fetchProductData = () => axios.get('http://localhost:3017/get-products');

export const logInUserRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: sampleUserData });
  }, 1000);
});

export const logOutUserRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Sign out successfully');
  }, 1000);
});
