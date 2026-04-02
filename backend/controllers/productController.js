const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        next(error);
    }
};

// @desc    Get single product API
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Create a product (Demo / Admin use)
// @route   POST /api/products
// @access  Public (Normally restricted to Admin)
const addProduct = async (req, res, next) => {
    try {
        const { name, price, image, description, category } = req.body;

        const product = await Product.create({
            name,
            price,
            image,
            description,
            category
        });

        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProduct
};
