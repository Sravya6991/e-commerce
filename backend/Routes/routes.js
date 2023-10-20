const express = require('express');
const productController = require('../Controller/productController')
const userController = require('../Controller/UserController')

const route = express.Router();

route.get('/products', productController.products);
route.get('/products/:id', productController.oneProduct);

route.get('/products/category/:id', productController.category);

route.post('/cartData', productController.cartData);

route.post('/placeOrder', productController.placeOrder);

route.post('/booking', productController.booking);

route.get("/orders", productController.orders);
route.get("/order", productController.order);

route.post('/signup', express.json(), userController.signup);
route.post('/login', express.json(), userController.login);
route.get('/userInfo', userController.userInfo);

module.exports = route;