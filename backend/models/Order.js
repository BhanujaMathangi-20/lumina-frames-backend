const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true, // e.g., 'UPI', 'Card', 'Cash on Delivery'
    },
    status: {
        type: String,
        required: true,
        default: 'Processing' // e.g., Processing, Shipped, Delivered, Cancelled
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
