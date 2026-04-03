require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('Connected to DB. Updating descriptions...');
    const products = await Product.find({});
    
    for (let p of products) {
        let desc = '';
        if (p.category === 'Men') {
            desc = `Elevate your style with the ${p.title}. Crafted specifically for the modern man, these ${p.shape.toLowerCase()} frames offer unparalleled comfort and a sophisticated profile. Perfect for both office environments and weekend escapes.`;
        } else if (p.category === 'Women') {
            desc = `Discover elegance with the ${p.title}. Designed for the chic and confident woman, these beautiful ${p.shape.toLowerCase()} glasses blend contemporary fashion with timeless grace, ensuring you stand out in every crowd.`;
        } else if (p.category === 'Kids') {
            desc = `The ${p.title} is built for the playground! Ultra-durable, highly flexible, and stylish ${p.shape.toLowerCase()} frames ensure your little ones stay perfectly protected and comfortable all day long.`;
        } else {
            desc = `Experience the unmatched quality of the ${p.title}. A perfect balance of premium materials and cutting-edge design.`;
        }
        
        p.description = desc;
        await p.save();
    }
    
    console.log(`Successfully updated descriptions for ${products.length} products!`);
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
