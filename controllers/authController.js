const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        const newUser = new User({
            id: 'u_' + Date.now(),
            name,
            email,
            password 
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
        const user = await User.findOne({ email, password }); // Simple password check for now

        if (!user) {
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
