const axios = require('axios').default;

// const productList = [
//   {
//     id: '123',
//     title: 'Blue Drum Set',
//     description: 'Blue drums description',
//     brand: 'Yamaha',
//     price: 59999,
//     image: 'https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg',
//   },
//   {
//     id: '234',
//     title: 'Red Drum Set',
//     description: 'Red drums description',
//     brand: 'Yamaha',
//     price: 59999,
//     image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
//   },
// ];

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
