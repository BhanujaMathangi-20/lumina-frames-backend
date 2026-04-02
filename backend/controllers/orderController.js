const Order = require('../models/Order');
const Cart = require('../models/Cart');

// @desc    Place a new order
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res, next) => {
    try {
        const { paymentMethod } = req.body;

        if (!paymentMethod) {
            res.status(400);
            throw new Error('Payment method is required');
        }

        // Get user's cart to create order
        const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');

        if (!cart || cart.items.length === 0) {
            res.status(400);
            throw new Error('Cart is empty. Cannot place order.');
        }

        // Calculate total price
        let totalPrice = 0;
        const productsToAdd = cart.items.map(item => {
            totalPrice += item.product.price * item.quantity;
            return {
                product: item.product._id,
                quantity: item.quantity
            };
        });

        // Demo logic: If it's a card/UPI, simulate a random success/fail to be realistic temporarily
        // For simplicity in this beginner setup, we will just assume success
        
        // Create the order
        const order = await Order.create({
            user: req.user._id,
            products: productsToAdd,
            totalPrice,
            paymentMethod,
            status: 'Processing' // Default
        });

        // Clear the user's cart after successful order placement
        cart.items = [];
        await cart.save();

        res.status(201).json(order);

    } catch (error) {
        next(error);
    }
};

// @desc    Get user's past orders
// @route   GET /api/orders
// @access  Private
const getUserOrders = async (req, res, next) => {
    try {
        // Fetch all orders belonging to this user, sorted by newest first
        const orders = await Order.find({ user: req.user._id })
            .populate('products.product')
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    placeOrder,
    getUserOrders
};
