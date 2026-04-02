const fs = require('fs');

try {
    let content = fs.readFileSync('js/script.js', 'utf8');

    const brands = ['Lumina', 'Ray-Ban', 'Oakley', 'Gucci'];
    const shapes = ['Square', 'Round', 'Aviator', 'Cat-Eye'];

    let i = 0;
    // We will replace each occurrence of badge: ... to append brand and shape
    content = content.replace(/badge:\s*([^}\n]+)/g, (match, p1) => {
        let b = brands[i % brands.length];
        let s = shapes[i % shapes.length];
        i++;
        if (match.includes('brand:')) return match; 
        return `${match},\n            brand: '${b}',\n            shape: '${s}'`;
    });

    fs.writeFileSync('js/script.js', content);
    console.log('Enriched mockDb with brand and shape ' + i + ' times');
} catch (e) {
    console.error(e);
}
