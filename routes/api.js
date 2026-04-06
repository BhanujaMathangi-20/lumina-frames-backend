const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const authController = require('../controllers/authController');

// Product Routes
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products/seed', productController.seedProducts);

// Auth Routes
router.post('/auth/forgot-password', authController.forgotPassword);
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/sync', authController.syncUserData);

module.exports = router;
