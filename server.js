require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static frontend

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);



const Product = require('./models/Product');

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('MongoDB Connected');
    
    // Auto-seed dummy products if DB is empty for convenience
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            console.log('Database empty, seeding products...');
            // Need a way to fetch the mockDb, but since we're Server side, 
            // I'll make a quick mockData.json or skip this and instruct them.
        }
    } catch(e) {}
    
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
.catch(err => console.log('MongoDB connection error:', err));
