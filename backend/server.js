require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
// Enable CORS for frontend connection
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Main API Routes setup
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/wishlist', require('./routes/wishlistRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Basic Health Check
app.get('/', (req, res) => {
    res.send('Lumina Spectacles Backend is Running successfully... ✨');
});

// Global Error Handler Middleware
// Must be placed at the very bottom right before app.listen
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
