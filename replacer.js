const fs = require('fs');
const path = require('path');
const files = ['index.html', 'products.html', 'cart.html', 'checkout.html', 'login.html', 'product.html', 'face-scan.html'];
const searchRegex = /<div\s+class="wishlist-dropdown-container">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

const replacement = `<a href="wishlist.html" class="icon-link wishlist-icon" style="font-weight: 600;">
                    ❤️ <span id="wishlist-count">0</span>
                </a>`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
        // Let's actually look for the exact string to be safe instead of regex if regex fails, but regex is more robust.
        // The container starts with <div class="wishlist-dropdown-container"> and ends after the nested dropdown closes.
        let startIndex = content.indexOf('<div class="wishlist-dropdown-container">');
        if (startIndex !== -1) {
            let nextCartIcon = content.indexOf('<a href="cart.html"', startIndex);
            if (nextCartIcon !== -1) {
                let replaced = content.substring(0, startIndex) + replacement + '\n                ' + content.substring(nextCartIcon);
                fs.writeFileSync(path.join(__dirname, file), replaced);
                console.log('Replaced in ' + file);
            }
        } else {
             console.log('Not found in ' + file);
        }
    } catch (e) {
        console.error('Error on ' + file + ':', e.message);
    }
});
