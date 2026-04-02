const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Simple plain string for now or bcrypt later
    cart: { type: Array, default: [] },
    wishlist: { type: Array, default: [] }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
