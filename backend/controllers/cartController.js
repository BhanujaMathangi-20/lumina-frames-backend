const Cart = require('../models/Cart');

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res, next) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

        if (!cart) {
            // Create empty cart for the user if it doesn't exist
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        res.json(cart);
    } catch (error) {
        next(error);
    }
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        // Check if item already exists in cart
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            // If item exists, update quantity
            cart.items[itemIndex].quantity += quantity || 1;
        } else {
            // If new item, add to cart
            cart.items.push({ product: productId, quantity: quantity || 1 });
        }

        await cart.save();
        
        // Return populated cart to frontend can display details
        const updatedCart = await Cart.findById(cart._id).populate('items.product');
        res.json(updatedCart);

    } catch (error) {
        next(error);
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:productId
// @access  Private
const removeFromCart = async (req, res, next) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            res.status(404);
            throw new Error('Cart not found');
        }

        cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);
        await cart.save();

        const updatedCart = await Cart.findById(cart._id).populate('items.product');
        res.json(updatedCart);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart
};
