const fs = require('fs');
const path = require('path');


async function seed() {
    try {
        const scriptPath = path.join(__dirname, 'public', 'js', 'script.js');
        let content = fs.readFileSync(scriptPath, 'utf8');
        
        // Extract mockDb
        const mockDbStart = content.indexOf('const mockDb = {');
        const mockDbEnd = content.indexOf('};', mockDbStart) + 1;
        const mockDbString = content.substring(mockDbStart, mockDbEnd);
        
        // Safely evaluate it
        let mockDb;
        eval(mockDbString.replace('const mockDb', 'mockDb'));
        
        // Augment with dynamic unique descriptions and specs
        const augmentedProducts = mockDb.products.map(p => {
            let desc = '';
            if (p.category === 'Men') desc = `Elevate your style with the ${p.title}. Crafted specifically for the modern man, these ${p.shape.toLowerCase()} frames offer unparalleled comfort and a sophisticated profile. Perfect for both office environments and weekend escapes.`;
            else if (p.category === 'Women') desc = `Discover elegance with the ${p.title}. Designed for the chic and confident woman, these beautiful ${p.shape.toLowerCase()} glasses blend contemporary fashion with timeless grace, ensuring you stand out in every crowd.`;
            else if (p.category === 'Kids') desc = `The ${p.title} is built for the playground! Ultra-durable, highly flexible, and stylish ${p.shape.toLowerCase()} frames ensure your little ones stay perfectly protected and comfortable all day long.`;
            else desc = `Experience the unmatched quality of the ${p.title}. A perfect balance of premium materials and cutting-edge design.`;
            
            const typesList = ['Full Rim', 'Half Rim', 'Rimless'];
            const frameList = ['Titanium', 'Acetate', 'Stainless Steel', 'TR90 Flexible', 'Mixed Metal'];
            const lensList = ['Blue-Light Blocking', 'Anti-Glare', 'Polarized', 'UV400 Photochromic', 'Clear Vision'];
            const colorList = ['Matte Black', 'Tortoise Shell', 'Rose Gold', 'Gunmetal', 'Crystal Clear', 'Navy Blue'];
            const sizeList = ['Small', 'Medium', 'Large', 'Standard'];
            
            const r = (arr) => arr[Math.floor(Math.random() * arr.length)];
            
            return { 
                ...p, 
                description: desc,
                type: r(typesList),
                frame: r(frameList),
                lens: r(lensList),
                color: r(colorList),
                size: r(sizeList)
            };
        });
        
        console.log(`Extracted ${mockDb.products.length} products to seed.`);
        
        // Send to remote
        const res = await fetch('https://lumina-frames-backend-3.onrender.com/api/products/seed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(augmentedProducts)
        });
        
        const data = await res.json();
        console.log("Seed Result:", data);
    } catch(e) {
        console.error("Seeding failed:", e);
    }
}

seed();
