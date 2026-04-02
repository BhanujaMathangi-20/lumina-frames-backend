const Wishlist = require('../models/Wishlist');

// @desc    Get user's wishlist
// @route   GET /api/wishlist
// @access  Private
const getWishlist = async (req, res, next) => {
    try {
        let wishlist = await Wishlist.findOne({ user: req.user._id }).populate('items');

        if (!wishlist) {
            wishlist = await Wishlist.create({ user: req.user._id, items: [] });
        }

        res.json(wishlist);
    } catch (error) {
        next(error);
    }
};

// @desc    Toggle item in wishlist (Add/Remove)
// @route   POST /api/wishlist
// @access  Private
const toggleWishlistItem = async (req, res, next) => {
    try {
        const { productId } = req.body;
        
        let wishlist = await Wishlist.findOne({ user: req.user._id });

        if (!wishlist) {
            wishlist = await Wishlist.create({ user: req.user._id, items: [] });
        }

        const index = wishlist.items.findIndex(id => id.toString() === productId);

        if (index > -1) {
            // Already in wishlist, so remove it
            wishlist.items.splice(index, 1);
        } else {
            // Not in wishlist, so add it
            wishlist.items.push(productId);
        }

        await wishlist.save();

        const updatedWishlist = await Wishlist.findById(wishlist._id).populate('items');
        res.json(updatedWishlist);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getWishlist,
    toggleWishlistItem
};
