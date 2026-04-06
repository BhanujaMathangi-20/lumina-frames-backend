require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log('Connected to DB. Updating descriptions...');
    const products = await Product.find({});
    
    const generateDescription = (product) => {
        const shape = (product.shape || 'classic').toLowerCase();
        const brand = product.brand || 'Lumina';
        const category = product.category || 'Unisex';
        
        const catAdjs = {
            'Men': ['masculine', 'distinguished', 'modern', 'sharp'],
            'Women': ['feminine', 'elegant', 'chic', 'sophisticated'],
            'Kids': ['playful', 'durable', 'adventurous', 'colorful'],
            'Unisex': ['versatile', 'modern', 'sleek', 'stylish']
        };
        
        const shapeStyles = {
            'round': 'a vintage look, perfect for casual and creative styles',
            'square': 'a sharp and professional appearance',
            'rectangle': 'a structured and professional profile, perfect for daily wear',
            'aviator': 'a timeless design, ideal for an adventurous and sporty aesthetic',
            'cat-eye': 'a fashionable and expressive look',
            'wayfarer': 'a classic, universally flattering vibe that never goes out of style',
            'geometric': 'an avant-garde, modern vibe that stands out',
        };
        
        const stylePhrase = shapeStyles[shape] || `a striking ${shape} silhouette that enhances any outfit`;
        
        const hash = String(product.id || product._id || '123').split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        const catAdjList = catAdjs[category] || catAdjs['Unisex'];
        const selectedCatAdj = catAdjList[hash % catAdjList.length];
        
        const brandPhrases = [
            `Showcase your ${selectedCatAdj} sense of style with these signature ${brand} frames.`,
            `Experience craftsmanship from ${brand} with this ${selectedCatAdj} piece.`,
            `These ${brand} glasses redefine ${selectedCatAdj} elegance.`,
            `Designed by ${brand}, these frames perfectly capture a ${selectedCatAdj} essence.`
        ];
        
        const introPhrase = brandPhrases[hash % brandPhrases.length];
        return `${introPhrase} Featuring a lightweight ${shape} frame, it offers ${stylePhrase}. Ideal for upgrading your daily eyewear collection.`;
    };

    for (let p of products) {
        p.description = generateDescription(p);
        await p.save();
    }
    
    console.log(`Successfully updated complex unique descriptions for ${products.length} products!`);
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
