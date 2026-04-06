const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (password.length < 7) {
            return res.status(400).json({ success: false, message: 'Password must be at least 7 characters long' });
        }

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            id: 'u_' + Date.now(),
            name,
            email,
            password: hashedPassword 
        });

        await newUser.save();
        res.status(201).json({ success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Used to sync cart/wishlist
exports.syncUserData = async (req, res) => {
    try {
        const { userId, cart, wishlist } = req.body;
        const user = await User.findOne({ id: userId });
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        if (cart) user.cart = cart;
        if (wishlist) user.wishlist = wishlist;

        await user.save();
        res.json({ success: true, message: 'User data synced' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        
        if (!newPassword || newPassword.length < 7) {
            return res.status(400).json({ success: false, message: 'Password must be at least 7 characters' });
        }

        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();
        res.json({ success: true, message: 'Password reset successful' });
    } catch (error) {
        console.error("Forgot Password Error:", error);
        res.status(500).json({ success: false, message: 'Internal server error during password reset' });
    }
};
