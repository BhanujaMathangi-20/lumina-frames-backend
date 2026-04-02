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
        
        console.log(`Extracted ${mockDb.products.length} products to seed.`);
        
        // Send to remote
        const res = await fetch('https://lumina-frames-backend-3.onrender.com/api/products/seed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mockDb.products)
        });
        
        const data = await res.json();
        console.log("Seed Result:", data);
    } catch(e) {
        console.error("Seeding failed:", e);
    }
}

seed();
