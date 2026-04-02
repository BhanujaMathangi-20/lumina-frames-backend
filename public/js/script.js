/* 
   =================================================
   LUMINA SPECTACLES - MAIN JAVASCRIPT
   =================================================
*/

// --- MOCK DATABASE (Independent Frontend Mode) ---
const mockDb = {
    products: [
        {
            id: 'p1',
            title: 'Lumina Phantom',
            price: 10999,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Bestseller',
            brand: 'Lumina',
            shape: 'Square'
        },
        {
            id: 'p2',
            title: 'Aura Clear View',
            price: 7499,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'New',
            brand: 'Ray-Ban',
            shape: 'Round'
        },
        {
            id: 'p3',
            title: 'Titanium Edge',
            price: 13499,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Oakley',
            shape: 'Aviator'
        },
        {
            id: 'p4',
            title: 'Rose Gold Cat-Eye',
            price: 9499,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Trending',
            brand: 'Gucci',
            shape: 'Cat-Eye'
        },
        {
            id: 'p5',
            title: 'Midnight Scholar',
            price: 5499,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Durable',
            brand: 'Lumina',
            shape: 'Square'
        },
        {
            id: 'p6',
            title: 'Classic Aviator',
            price: 8999,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Ray-Ban',
            shape: 'Round'
        },
        {
            id: 'p7',
            title: 'Crystal Clear',
            price: 6999,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Popular',
            brand: 'Oakley',
            shape: 'Aviator'
        },
        {
            id: 'p8',
            title: 'Little Hero Frames',
            price: 3999,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Sale',
            brand: 'Gucci',
            shape: 'Cat-Eye'
        },
        // --- 5 NEW MEN PRODUCTS ---
        {
            id: 'p9',
            title: 'Urban Explorer',
            price: 1499,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Lumina',
            shape: 'Square'
        },
        {
            id: 'p10',
            title: 'Classic Retro',
            price: 1299,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Value',
            brand: 'Ray-Ban',
            shape: 'Round'
        },
        {
            id: 'p11',
            title: 'Matte Finish Square',
            price: 1999,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Oakley',
            shape: 'Aviator'
        },
        {
            id: 'p12',
            title: 'Slim Lightweight',
            price: 1799,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Gucci',
            shape: 'Cat-Eye'
        },
        {
            id: 'p13',
            title: 'Dynamic Flex',
            price: 1199,
            category: 'Men',
            image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Sale',
            brand: 'Lumina',
            shape: 'Square'
        },
        // --- 5 NEW WOMEN PRODUCTS ---
        {
            id: 'p14',
            title: 'Blush Pink Round',
            price: 1899,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Ray-Ban',
            shape: 'Round'
        },
        {
            id: 'p15',
            title: 'Tortoise Shell Chic',
            price: 1699,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Trending',
            brand: 'Oakley',
            shape: 'Aviator'
        },
        {
            id: 'p16',
            title: 'Golden Thread',
            price: 1599,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Value',
            brand: 'Gucci',
            shape: 'Cat-Eye'
        },
        {
            id: 'p17',
            title: 'Vintage Oversized',
            price: 1399,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Lumina',
            shape: 'Square'
        },
        {
            id: 'p18',
            title: 'Clear Aqua Frames',
            price: 1999,
            category: 'Women',
            image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Ray-Ban',
            shape: 'Round'
        },
        // --- 5 NEW KIDS PRODUCTS ---
        {
            id: 'p19',
            title: 'Super Flex Blue',
            price: 1099,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Durable',
            brand: 'Oakley',
            shape: 'Aviator'
        },
        {
            id: 'p20',
            title: 'Sparkle Pink Tiny',
            price: 1299,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Gucci',
            shape: 'Cat-Eye'
        },
        {
            id: 'p21',
            title: 'Junior Aviator',
            price: 1499,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: null,
            brand: 'Lumina',
            shape: 'Square'
        },
        {
            id: 'p22',
            title: 'Gamer Screen Shields',
            price: 1999,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'New',
            brand: 'Ray-Ban',
            shape: 'Round'
        },
        {
            id: 'p23',
            title: 'Indestructible Green',
            price: 1799,
            category: 'Kids',
            image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            badge: 'Value',
            brand: 'Oakley',
            shape: 'Aviator'
        }
    ]
};

// --- BACKEND API INTEGRATION ---
const api = {
    // Helper to enrich product missing fields for UI compatibility
    enrichProduct: (p) => {
        return {
            ...p,
            description: p.description || "Premium spectacles designed for the modern individual.",
            type: p.type || "Full Rim",
            frame: p.frame || "Titanium / Acetate",
            lens: p.lens || "Blue-Light Blocking",
            color: p.color || "Matte Finish",
            size: p.size || "Standard",
            features: p.features || ["UV Protection", "Anti-Scratch"],
            stockCount: p.stockCount || 10
        };
    },

    getFeaturedProducts: async () => {
        try {
            const res = await fetch('https://lumina-frames-backend-3.onrender.com/api/products');
            if(!res.ok) return mockDb.products.slice(0, 4).map(api.enrichProduct); // Fallback
            const data = await res.json();
            return data.slice(0, 4).map(api.enrichProduct);
        } catch(e) {
            console.error(e);
            return mockDb.products.slice(0, 4).map(api.enrichProduct);
        }
    },
    
    getAllProducts: async () => {
        try {
            const res = await fetch('https://lumina-frames-backend-3.onrender.com/api/products');
            if(!res.ok) return mockDb.products.map(api.enrichProduct);
            const data = await res.json();
            return data.map(api.enrichProduct);
        } catch(e) {
            console.error(e);
            return mockDb.products.map(api.enrichProduct);
        }
    },

    getProductById: async (id) => {
        try {
            const res = await fetch(`https://lumina-frames-backend-3.onrender.com/api/products/${id}`);
            if(!res.ok) throw new Error('Not found');
            const data = await res.json();
            return api.enrichProduct(data);
        } catch(e) {
            console.error(e);
            const p = mockDb.products.find(item => item.id === id);
            return p ? api.enrichProduct(p) : null;
        }
    }
};

// --- CART STATE MANAGEMENT ---
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartIcon();
    }

    addItem(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.saveCart();
        this.showToast(`Added ${product.title} to cart`);
    }

    decreaseQuantity(productId) {
        const item = this.cart.find(i => i.id === productId);
        if (item) {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
            }
        }
    }

    removeItem(productId) {
        this.cart = this.cart.filter(i => i.id !== productId);
        this.saveCart();
    }

    getTotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartIcon();
    }

    updateCartIcon() {
        const cartCountEl = document.getElementById('cart-count');
        if (cartCountEl) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountEl.textContent = totalItems;
        }
    }

    showToast(message) {
        // Create toast container if it doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
        toastContainer.appendChild(toast);

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}

// Instantiate Cart globally
const cartManager = new CartManager();

// --- WISHLIST STATE MANAGEMENT ---
class WishlistManager {
    constructor() {
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [mockDb.products[0], mockDb.products[3]];
        this.updateWishlistIcon();
    }

    isInWishlist(productId) {
        return this.wishlist.some(item => item.id === productId);
    }

    toggleItem(product) {
        const index = this.wishlist.findIndex(item => item.id === product.id);
        const isActive = index === -1;
        if (isActive) {
            this.wishlist.push(product);
            cartManager.showToast(`Added ${product.title} to wishlist ❤️`);
        } else {
            this.wishlist.splice(index, 1);
            cartManager.showToast(`Removed ${product.title} from wishlist 💔`);
        }
        this.saveWishlist();
        this.updateWishlistIcon();
        return isActive;
    }
    
    removeItem(productId) {
        this.wishlist = this.wishlist.filter(i => i.id !== productId);
        this.saveWishlist();
        this.updateWishlistIcon();
    }

    saveWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        this.updateWishlistIcon();
    }

    updateWishlistIcon() {
        const countEls = document.querySelectorAll('#wishlist-count');
        countEls.forEach(el => {
            el.textContent = this.wishlist.length;
        });
    }
}
const wishlistManager = new WishlistManager();

// --- RECENT ITEMS MANAGEMENT ---
class RecentManager {
    constructor() {
        this.recent = JSON.parse(localStorage.getItem('recentViewed')) || [mockDb.products[1], mockDb.products[5]];
    }

    addRecent(product) {
        // Remove if already exists to push to front
        this.recent = this.recent.filter(item => item.id !== product.id);
        this.recent.unshift(product);
        if (this.recent.length > 10) {
            this.recent = this.recent.slice(0, 10);
        }
        localStorage.setItem('recentViewed', JSON.stringify(this.recent));
        if (typeof renderWishlistDropdown === 'function') renderWishlistDropdown();
    }
    
    getRecent() {
        return this.recent;
    }
}
const recentManager = new RecentManager();

// --- SHARED ITEMS MANAGEMENT ---
class SharedManager {
    constructor() {
        this.shared = JSON.parse(localStorage.getItem('sharedItems')) || [mockDb.products[2], mockDb.products[4]];
    }
    
    getShared() {
        return this.shared;
    }
}
const sharedManager = new SharedManager();

// --- AUTHENTICATION STATE MANAGEMENT ---
class AuthManager {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        // Schedule minor delay to let DOM load before updating nav
        setTimeout(() => this.updateAuthNav(), 0);
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    async register(name, email, password) {
        try {
            const res = await fetch('https://lumina-frames-backend-3.onrender.com/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if(!data.success) return { success: false, message: data.message };
            
            this.currentUser = { id: data.user.id, name: data.user.name, email: data.user.email };
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.updateAuthNav();
            return { success: true };
        } catch (error) {
            return { success: false, message: 'Server error during registration' };
        }
    }

    async login(email, password, silent = false) {
        try {
            const res = await fetch('https://lumina-frames-backend-3.onrender.com/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if(!data.success) return { success: false, message: data.message };
            
            this.currentUser = { id: data.user.id, name: data.user.name, email: data.user.email };
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.updateAuthNav();
            if (!silent && typeof cartManager !== 'undefined') {
                cartManager.showToast(`Welcome back, ${this.currentUser.name}!`);
            }
            return { success: true };
        } catch (error) {
            return { success: false, message: 'Server error during login' };
        }
    }

    logout() {
        if (!this.currentUser) return;
        const name = this.currentUser.name;
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateAuthNav();
        
        if (typeof cartManager !== 'undefined') {
            cartManager.showToast(`Logged out securely. See you later, ${name}!`);
        }
        
        // Force redirect to home
        window.location.href = 'index.html';
    }

    updateAuthNav() {
        // Find all "Login" links in navbar and dynamically swap them if needed
        const authLinks = document.querySelectorAll('.icon-link[href="login.html"], .auth-link-target');
        
        authLinks.forEach(link => {
            link.classList.add('auth-link-target'); // preserve trackability
            
            if (this.isLoggedIn()) {
                link.innerHTML = `Logout <i class="fa-solid fa-right-from-bracket" style="font-size: 0.8rem; margin-left: 2px;"></i>`;
                link.href = '#';
                
                // Remove old listeners cleanly
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                newLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.logout();
                });
            } else {
                link.innerHTML = `Login`;
                link.href = 'login.html';
                
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
            }
        });
    }
}
const authManager = new AuthManager();

window.addEventListener('storage', (e) => {
    if (e.key === 'currentUser') {
        authManager.currentUser = JSON.parse(e.newValue);
        authManager.updateAuthNav();
    }
});

// --- UI INTERACTIONS & RENDERING ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // 2. Sticky Navbar behavior
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // 3. Render Featured Products
    const productsContainer = document.getElementById('featured-products-container');
    if (productsContainer) {
        renderFeaturedProducts(productsContainer);
    }

    // 4. Newsletter form prevention
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = e.target.querySelector('input').value;
            if(emailInput) {
                cartManager.showToast('Subscribed to newsletter successfully!');
                e.target.reset();
            }
        });
    }

    // 5. Products Page Logic
    const allProductsContainer = document.getElementById('all-products-container');
    if (allProductsContainer) {
        initProductsPage(allProductsContainer);
    }

    // 6. Cart Page Logic
    const cartItemsWrapper = document.getElementById('cart-items-wrapper');
    if (cartItemsWrapper) {
        loadCart();
    }

    // 7. Checkout Page Logic
    const checkoutFormWrapper = document.getElementById('checkout-form');
    if (checkoutFormWrapper) {
        initCheckoutPage(checkoutFormWrapper);
    }

    // 8. Face Scan Logic
    const scanLayout = document.getElementById('scan-layout');
    if (scanLayout) {
        initFaceScanPage(scanLayout);
    }

    // 9. Wishlist Page Logic
    const wishlistItemsWrapper = document.getElementById('wishlist-items-wrapper');
    if (wishlistItemsWrapper) {
        initWishlistPage(wishlistItemsWrapper);
    }

    // 10. Product Detail Page (PDP) Logic
    const productDetailWrapper = document.getElementById('product-details');
    if (productDetailWrapper) {
        initProductPage(productDetailWrapper);
    }

    // 11. Login Page Logic
    const loginWrapper = document.getElementById('auth-wrapper');
    if (loginWrapper) {
        initLoginPage(loginWrapper);
    }

    // 12. Global Header Search Enhancements
    const voiceSearchBtn = document.getElementById('voice-search-btn');
    const imageSearchBtn = document.getElementById('image-search-btn');
    const imageUploadInput = document.getElementById('image-upload-input');

    if (voiceSearchBtn) {
        voiceSearchBtn.addEventListener('click', () => {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            
            if (!SpeechRecognition) {
                cartManager.showToast('⚠️ Voice search is not supported in your browser.');
                return;
            }

            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                cartManager.showToast('🎙️ Listening...');
                voiceSearchBtn.style.color = 'var(--clr-primary)';
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.value = transcript;
                    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                    cartManager.showToast(`✅ Searched for: "${transcript}"`);
                }
            };

            recognition.onerror = (event) => {
                cartManager.showToast(`⚠️ Voice input error: ${event.error}`);
            };

            recognition.onend = () => {
                voiceSearchBtn.style.color = '';
            };

            recognition.start();
        });
    }

    if (imageSearchBtn && imageUploadInput) {
        imageSearchBtn.addEventListener('click', () => {
            imageUploadInput.click();
        });
        
        imageUploadInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                cartManager.showToast('📷 Image Upload Simulated!');
                // simulate search logic
                setTimeout(() => {
                    const searchInput = document.getElementById('search-input');
                    if (searchInput) {
                        searchInput.value = 'Similar to uploaded image';
                        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }, 1000);
            }
        });
    }

    // 13. Wishlist Dropdown Logic
    initWishlistDropdown();
});

function initWishlistDropdown() {
    const containers = document.querySelectorAll('.wishlist-dropdown-container');
    
    containers.forEach(container => {
        const btn = container.querySelector('#wishlist-toggle-btn');
        const dropdown = container.querySelector('#wishlist-dropdown');
        if (!btn || !dropdown) return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const wasActive = dropdown.classList.contains('active');
            
            // close all others
            document.querySelectorAll('#wishlist-dropdown').forEach(d => d.classList.remove('active'));
            
            if (!wasActive) {
                dropdown.classList.add('active');
                renderWishlistDropdown(dropdown);
            }
        });

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        const tabBtns = dropdown.querySelectorAll('.wishlist-tab-btn');
        const panels = dropdown.querySelectorAll('.wishlist-panel');

        tabBtns.forEach(tabBtn => {
            tabBtn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                tabBtn.classList.add('active');
                const targetId = tabBtn.getAttribute('data-target');
                dropdown.querySelector(`#${targetId}`).classList.add('active');
            });
        });
    });
}

function renderWishlistDropdown(dropdownEl = null) {
    if (!dropdownEl) {
        document.querySelectorAll('#wishlist-dropdown.active').forEach(renderWishlistDropdown);
        return;
    }

    const savedPanel = dropdownEl.querySelector('#wishlist-tab-saved');
    const recentPanel = dropdownEl.querySelector('#wishlist-tab-recent');
    const sharedPanel = dropdownEl.querySelector('#wishlist-tab-shared');
    
    const wishItems = wishlistManager.wishlist;
    if (savedPanel) {
        if (wishItems.length === 0) {
            savedPanel.innerHTML = `
                <div class="empty-panel-msg">
                    <i class="fa-regular fa-heart" style="font-size: 2rem;"></i>
                    <p>Your wishlist is empty.</p>
                </div>`;
        } else {
            let htmlStr = wishItems.map(item => `
                <div class="wishlist-panel-item">
                    <img src="${item.image}" alt="${item.title}" onclick="window.location.href='product.html?id=${item.id}'">
                    <div class="wishlist-panel-item-details">
                        <h4 onclick="window.location.href='product.html?id=${item.id}'">${item.title}</h4>
                        <p>₹${item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button class="wishlist-panel-item-action" onclick="wishlistManager.removeItem('${item.id}'); renderWishlistDropdown();" aria-label="Remove">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="wishlist-panel-item-action" onclick="const p = wishlistManager.wishlist.find(x=>x.id==='${item.id}'); if(p){cartManager.addItem(p); wishlistManager.removeItem('${item.id}'); renderWishlistDropdown(); loadCart && typeof loadCart === 'function' ? loadCart() : null;}" aria-label="Move to Cart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            `).join('');
            
            htmlStr += `
                <div style="text-align:center; padding-top: 1rem; border-top: 1px solid var(--clr-border); margin-top: 1rem;">
                    <button onclick="window.location.href='wishlist.html'" class="btn btn-outline" style="width: 100%; font-size: 0.9rem; padding: 0.5rem;">View Full Wishlist</button>
                </div>
            `;
            savedPanel.innerHTML = htmlStr;
        }
    }

    const recentItems = recentManager.getRecent();
    if (recentPanel) {
        if (recentItems.length === 0) {
            recentPanel.innerHTML = `
                <div class="empty-panel-msg">
                    <i class="fa-solid fa-clock-rotate-left" style="font-size: 2rem;"></i>
                    <p>No recently viewed items.</p>
                </div>`;
        } else {
            recentPanel.innerHTML = recentItems.map(item => `
                <div class="wishlist-panel-item">
                    <img src="${item.image}" alt="${item.title}" onclick="window.location.href='product.html?id=${item.id}'">
                    <div class="wishlist-panel-item-details">
                        <h4 onclick="window.location.href='product.html?id=${item.id}'">${item.title}</h4>
                        <p>₹${item.price.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    const sharedItems = sharedManager.getShared();
    if (sharedPanel) {
        if (sharedItems.length === 0) {
            sharedPanel.innerHTML = `
                <div class="empty-panel-msg">
                    <i class="fa-solid fa-share-nodes" style="font-size: 2rem;"></i>
                    <p>No shared items yet.</p>
                </div>`;
        } else {
            sharedPanel.innerHTML = sharedItems.map(item => `
                <div class="wishlist-panel-item">
                    <img src="${item.image}" alt="${item.title}" onclick="window.location.href='product.html?id=${item.id}'">
                    <div class="wishlist-panel-item-details">
                        <h4 onclick="window.location.href='product.html?id=${item.id}'">${item.title}</h4>
                        <p>₹${item.price.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Function to handle dynamic rendering of products
async function renderFeaturedProducts(container) {
    // Show explicit Loading... state
    container.innerHTML = '<h3 style="grid-column: 1/-1; text-align:center;">Loading...</h3>';
    
    try {
        // Fetch data (simulated backend call)
        const products = await api.getFeaturedProducts();
        
        // Clear loader
        container.innerHTML = '';
        
        // Render each product card
        products.forEach(product => {
            const badgeHtml = product.badge ? `<span class="product-badge ${product.badge === 'New' ? 'new' : ''}">${product.badge}</span>` : '';
            const isWished = wishlistManager.isInWishlist(product.id);
            
            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';
            card.innerHTML = `
                ${badgeHtml}
                <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
                    <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <a href="product.html?id=${product.id}" class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </a>
                <div class="product-details">
                    <div class="product-category">${product.category}</div>
                    <a href="product.html?id=${product.id}"><h3 class="product-title">${product.title}</h3></a>
                    <div class="product-price-row" style="align-items: center; justify-content: space-between;">
                        <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <a href="product.html?id=${product.id}" class="btn btn-outline" style="flex: 1; text-align: center; font-size: 0.9rem; padding: 0.5rem;">View Details</a>
                        <button class="btn btn-primary add-to-cart-btn" aria-label="Add to cart" data-id="${product.id}" style="width: 40px; height: 40px; border-radius: var(--radius-sm); padding: 0;">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // Attach event listeners to new buttons
        attachAddToCartListeners(products);
        attachWishlistListeners(products);

    } catch (error) {
        console.error('Failed to load products:', error);
        container.innerHTML = '<p style="color:red; grid-column: 1/-1; text-align:center;">Failed to load featured products. Please try again later.</p>';
    }
}

function attachAddToCartListeners(productsData) {
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        // remove old to prevent duplicate if re-rendered
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = newBtn.getAttribute('data-id');
            const product = productsData.find(p => p.id === productId);
            if (product) {
                cartManager.addItem(product);
            }
        });
    });
}

function attachWishlistListeners(productsData) {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        // remove old to prevent duplicate if re-rendered
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const productId = newBtn.getAttribute('data-id');
            const product = productsData.find(p => p.id === productId);
            if (product) {
                const isActive = wishlistManager.toggleItem(product);
                if (isActive) {
                    newBtn.classList.add('active');
                    newBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
                } else {
                    newBtn.classList.remove('active');
                    newBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
                }
            }
        });
    });
}

// Function to handle Products Page Logic
async function initProductsPage(container) {
    // Show explicit Loading... state
    container.innerHTML = '<h3 style="grid-column: 1/-1; text-align:center;">Loading...</h3>';

    try {
        let allProducts = await api.getAllProducts();
        let currentProducts = [...allProducts];

        // Setup Dynamic Filter Modals
        const brandFiltersContainer = document.getElementById('dynamic-brand-filters');
        const shapeFiltersContainer = document.getElementById('dynamic-shape-filters');

        function generateDynamicFilters(productList) {
            if (!brandFiltersContainer || !shapeFiltersContainer) return;
            const uniqueBrands = [...new Set(productList.map(p => p.brand).filter(Boolean))];
            const uniqueShapes = [...new Set(productList.map(p => p.shape).filter(Boolean))];

            brandFiltersContainer.innerHTML = uniqueBrands.map(b => 
                `<label class="filter-checkbox-label"><input type="checkbox" name="f-brand" value="${b}"> ${b}</label>`
            ).join('');

            shapeFiltersContainer.innerHTML = uniqueShapes.map(s => 
                `<label class="filter-checkbox-label"><input type="checkbox" name="f-shape" value="${s}"> ${s}</label>`
            ).join('');
        }

        // Function to render products
        const renderGrid = (productsToRender) => {
            container.innerHTML = '';
            if (productsToRender.length === 0) {
                container.innerHTML = '<div class="no-results">No products found.</div>';
                return;
            }

            productsToRender.forEach(product => {
                const badgeHtml = product.badge ? `<span class="product-badge ${product.badge === 'New' ? 'new' : ''}">${product.badge}</span>` : '';
                const isWished = wishlistManager.isInWishlist(product.id);

                const card = document.createElement('div');
                card.className = 'product-card fade-in-up';
                card.innerHTML = `
                    ${badgeHtml}
                    <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
                        <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <a href="product.html?id=${product.id}" class="product-image-container">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                    </a>
                    <div class="product-details">
                        <div class="product-category">${product.category}</div>
                        <a href="product.html?id=${product.id}"><h3 class="product-title">${product.title}</h3></a>
                        <div class="product-price-row" style="align-items: center; justify-content: space-between;">
                            <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                        </div>
                        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                            <a href="product.html?id=${product.id}" class="btn btn-outline" style="flex: 1; text-align: center; font-size: 0.9rem; padding: 0.5rem;">View Details</a>
                            <button class="btn btn-primary add-to-cart-btn" aria-label="Add to cart" data-id="${product.id}" style="width: 40px; height: 40px; border-radius: var(--radius-sm); padding: 0;">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
            attachAddToCartListeners(allProducts);
            attachWishlistListeners(allProducts);
        };

        // Render initially
        renderGrid(currentProducts);

        // Action Bar Unified State
        let currentSort = 'recommended';
        let currentView = 'grid'; // states: 'grid', 'tile', 'list'

        function reapplyFiltersAndRender() {
            const searchInput = document.getElementById('search-input');
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const activeFilterElement = document.querySelector('.filter-btn.active');
            const activeFilter = activeFilterElement ? activeFilterElement.getAttribute('data-filter') : 'all';
            
            // Get Checkboxes
            const activeBrands = Array.from(document.querySelectorAll('input[name="f-brand"]:checked')).map(cb => cb.value);
            const activeShapes = Array.from(document.querySelectorAll('input[name="f-shape"]:checked')).map(cb => cb.value);

            let filteredList = [...allProducts];

            // 1. Filter by Category
            if (activeFilter !== 'all') {
                filteredList = filteredList.filter(p => p.category === activeFilter);
            }

            // 2. Filter by Search Term
            if (searchTerm) {
                filteredList = filteredList.filter(p => 
                    p.title.toLowerCase().includes(searchTerm) || 
                    p.category.toLowerCase().includes(searchTerm)
                );
            }

            // 3. Filter by Brand
            if (activeBrands.length > 0) {
                filteredList = filteredList.filter(p => p.brand && activeBrands.includes(p.brand));
            }

            // 4. Filter by Shape
            if (activeShapes.length > 0) {
                filteredList = filteredList.filter(p => p.shape && activeShapes.includes(p.shape));
            }

            // 5. Sort
            if (currentSort === 'price-low') {
                filteredList.sort((a,b) => a.price - b.price);
            } else if (currentSort === 'price-high') {
                filteredList.sort((a,b) => b.price - a.price);
            } else if (currentSort === 'name-asc') {
                filteredList.sort((a,b) => a.title.localeCompare(b.title));
            }
            
            currentProducts = filteredList;
            renderGrid(filteredList);

            // Update UI Counters
            const filterActiveText = document.getElementById('filter-active-text');
            if (filterActiveText) {
                let filterCount = 0;
                if (activeFilter !== 'all') filterCount++;
                filterCount += activeBrands.length + activeShapes.length;
                filterActiveText.textContent = filterCount + ' Applied';
            }
        }

        // Check URL for category
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        let initialFilterCategory = 'all';

        if (categoryParam) {
            const capitalizedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
            const targetBtn = document.querySelector(`.filter-btn[data-filter="${capitalizedCategory}"]`);
            if (targetBtn) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                targetBtn.classList.add('active');
                initialFilterCategory = capitalizedCategory;
            }
        }
        
        // Initial setup
        generateDynamicFilters(initialFilterCategory === 'all' ? allProducts : allProducts.filter(p => p.category === initialFilterCategory));
        reapplyFiltersAndRender();

        // Setup filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const searchInput = document.getElementById('search-input');
                if (searchInput) searchInput.value = ''; 
                
                const activeFilter = e.target.getAttribute('data-filter');
                const baseList = activeFilter === 'all' ? allProducts : allProducts.filter(p => p.category === activeFilter);
                generateDynamicFilters(baseList);

                reapplyFiltersAndRender();
            });
        });

        // Setup search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                reapplyFiltersAndRender();
            });
        }

        // --- Bottom Action Bar Logic ---
        const actionSortBtn = document.getElementById('action-sort-btn');
        const actionFilterBtn = document.getElementById('action-filter-btn');
        const actionViewBtn = document.getElementById('action-view-btn');
        
        const sortBottomSheet = document.getElementById('sort-bottom-sheet');
        const closeSortBtn = document.getElementById('close-sort-btn');
        const sortRadios = document.querySelectorAll('input[name="sort-option"]');
        const sortActiveText = document.getElementById('sort-active-text');
        
        const viewActiveText = document.getElementById('view-active-text');
        
        const filterBottomSheet = document.getElementById('filter-bottom-sheet');
        const closeFilterBtn = document.getElementById('close-filter-btn');
        const clearFiltersBtn = document.getElementById('clear-filters-btn');
        const applyFiltersBtn = document.getElementById('apply-filters-btn');

        const viewBottomSheet = document.getElementById('view-bottom-sheet');
        const closeViewBtn = document.getElementById('close-view-btn');
        const viewRadios = document.querySelectorAll('input[name="view-option"]');

        if (actionViewBtn && viewBottomSheet) {
            actionViewBtn.addEventListener('click', () => {
                viewBottomSheet.classList.add('active');
            });
            closeViewBtn.addEventListener('click', () => {
                viewBottomSheet.classList.remove('active');
            });
            viewBottomSheet.addEventListener('click', (e) => {
                if (e.target === viewBottomSheet) viewBottomSheet.classList.remove('active');
            });

            viewRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    const selectedView = e.target.value;
                    currentView = selectedView;
                    const label = e.target.nextElementSibling.textContent.trim();
                    const iconClass = e.target.nextElementSibling.querySelector('i').className;
                    
                    if (viewActiveText) viewActiveText.textContent = label;
                    const btnIcon = actionViewBtn.querySelector('i');
                    if (btnIcon) btnIcon.className = iconClass;

                    container.classList.remove('list-view', 'tile-view', 'grid-view');
                    container.classList.add(`${selectedView}-view`);

                    viewBottomSheet.classList.remove('active');
                });
            });
        }

        if (actionFilterBtn && filterBottomSheet) {
            actionFilterBtn.addEventListener('click', () => {
                filterBottomSheet.classList.add('active');
            });
            closeFilterBtn.addEventListener('click', () => {
                filterBottomSheet.classList.remove('active');
            });
            filterBottomSheet.addEventListener('click', (e) => {
                if (e.target === filterBottomSheet) filterBottomSheet.classList.remove('active');
            });
            
            clearFiltersBtn.addEventListener('click', () => {
                document.querySelectorAll('input[name="f-brand"], input[name="f-shape"]').forEach(cb => cb.checked = false);
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                document.querySelector('.filter-btn[data-filter="all"]').classList.add('active'); // reset category logic
                reapplyFiltersAndRender();
                filterBottomSheet.classList.remove('active');
            });

            applyFiltersBtn.addEventListener('click', () => {
                reapplyFiltersAndRender();
                filterBottomSheet.classList.remove('active');
            });
        }

        if (actionSortBtn && sortBottomSheet) {
            actionSortBtn.addEventListener('click', () => {
                sortBottomSheet.classList.add('active');
            });
            closeSortBtn.addEventListener('click', () => {
                sortBottomSheet.classList.remove('active');
            });
            sortBottomSheet.addEventListener('click', (e) => {
                if (e.target === sortBottomSheet) {
                    sortBottomSheet.classList.remove('active');
                }
            });

            sortRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    currentSort = e.target.value;
                    const label = e.target.nextElementSibling.textContent;
                    if (sortActiveText) sortActiveText.textContent = label;
                    sortBottomSheet.classList.remove('active');
                    reapplyFiltersAndRender();
                });
            });
        }

    } catch (error) {
        console.error('Failed to load products:', error);
        container.innerHTML = '<p style="color:red; grid-column: 1/-1; text-align:center;">Failed to load products...</p>';
    }
}

// Function to handle Cart Page Logic
function loadCart() {
    const container = document.getElementById('cart-items-wrapper');
    const summaryContainer = document.getElementById('cart-summary-total');
    if (!container) return;

    // Load data exactly as requested
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Ensure CartManager state matches exactly 
    cartManager.cart = items;
    cartManager.updateCartIcon();

    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fa-solid fa-cart-arrow-down"></i>
                <h2>Your cart is empty</h2>
                <p style="margin-top: 1rem; margin-bottom: 2rem;">Looks like you haven't added any frames yet.</p>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        if (summaryContainer) {
            document.querySelector('.cart-summary').style.display = 'none';
        }
        return;
    }

    if (summaryContainer) {
        document.querySelector('.cart-summary').style.display = 'block';
    }

    items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item fade-in-up';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="product-category">${item.category}</div>
                <h3 class="cart-item-title">${item.title}</h3>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                
                <div class="cart-item-actions">
                    <button class="qty-btn minus-btn" data-id="${item.id}">-</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn plus-btn" data-id="${item.id}">+</button>
                    <button class="remove-btn" title="Remove Item" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
        container.appendChild(itemEl);
    });

    if (summaryContainer) {
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        summaryContainer.innerHTML = `
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>Free</span>
            </div>
            <div class="summary-total">
                <span>Total</span>
                <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
            <button class="btn btn-primary checkout-btn" id="proceed-checkout-btn">Proceed to Checkout</button>
        `;
    }

    attachCartListeners();
    
    // Attach authorization interceptor for Checkout Button
    const proceedBtn = document.getElementById('proceed-checkout-btn');
    if (proceedBtn) {
        proceedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (authManager.isLoggedIn()) {
                window.location.href = 'checkout.html';
            } else {
                cartManager.showToast("Please login first to securely checkout!");
                setTimeout(() => {
                    window.location.href = 'login.html?redirect=checkout.html';
                }, 1000);
            }
        });
    }
}

function attachCartListeners() {
    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const product = cartManager.cart.find(p => p.id === id);
            if (product) {
                cartManager.addItem(product);
                loadCart(); // trigger re-render
            }
        });
    });

    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            cartManager.decreaseQuantity(id);
            loadCart();
        });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.target.closest('.remove-btn');
            const id = btnEl.getAttribute('data-id');
            cartManager.removeItem(id);
            loadCart();
        });
    });
}

// Subscribe to storage changes if modified from another tab
window.addEventListener('storage', (e) => {
    if (e.key === 'cart') {
        loadCart();
    }
});

// Function to handle Checkout Page Logic
function initCheckoutPage(form) {
    // 1. Protection layer: Boot them if they maliciously bypassed auth somehow
    if (!authManager.isLoggedIn()) {
        window.location.href = 'login.html?redirect=checkout.html';
        return;
    }

    const summaryContainer = document.getElementById('checkout-summary-total');
    
    function renderSummary() {
        const total = cartManager.getTotal();
        if (summaryContainer) {
            summaryContainer.innerHTML = `
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>₹${total.toLocaleString('en-IN')}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div class="summary-total">
                    <span>Total to Pay</span>
                    <span>₹${total.toLocaleString('en-IN')}</span>
                </div>
            `;
        }
    }

    renderSummary();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success modal
        const successModal = document.getElementById('order-success-modal');
        if (successModal) {
            successModal.classList.add('active');
        }
        
        // Clear cart
        cartManager.cart = [];
        cartManager.saveCart();
    });

    // Handle modal closure
    const modalCloseBtn = document.getElementById('modal-home-btn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

// Function to handle Face Scan Page Logic
function initFaceScanPage(container) {
    const analyzeBtn = document.getElementById('analyze-btn');
    const howItWorksBtn = document.getElementById('how-it-works-btn');
    const uploadBtn = document.getElementById('upload-btn');
    const imageUpload = document.getElementById('image-upload');
    const cameraBox = document.getElementById('camera-box');
    const cameraIcon = document.getElementById('camera-icon');
    const cameraText = document.getElementById('camera-text');
    const openCameraBtn = document.getElementById('open-camera-btn');
    const captureBtn = document.getElementById('capture-btn');
    const cameraVideo = document.getElementById('camera-video');
    const cameraCanvas = document.getElementById('camera-canvas');

    let videoStream = null;

    function stopCamera() {
        if (videoStream) {
            videoStream.getTracks().forEach(track => track.stop());
            videoStream = null;
        }
        if (cameraVideo) cameraVideo.style.display = 'none';
        if (captureBtn) captureBtn.style.display = 'none';
        
        if (openCameraBtn) {
            openCameraBtn.style.display = 'inline-flex';
            openCameraBtn.innerHTML = '<i class="fa-solid fa-video"></i> Retake';
        }
        if (uploadBtn) {
            uploadBtn.style.display = 'inline-flex';
        }
    }

    if (openCameraBtn && cameraVideo) {
        openCameraBtn.addEventListener('click', async () => {
            try {
                videoStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                cameraVideo.srcObject = videoStream;
                cameraVideo.style.display = 'block';
                if (cameraIcon) cameraIcon.style.display = 'none';
                if (cameraText) cameraText.style.display = 'none';
                cameraBox.style.backgroundImage = 'none'; // clear any existing photo
                
                openCameraBtn.style.display = 'none';
                uploadBtn.style.display = 'none';
                captureBtn.style.display = 'inline-flex';
                
                analyzeBtn.disabled = true;
                analyzeBtn.style.opacity = '0.6';
                analyzeBtn.style.cursor = 'not-allowed';
            } catch (err) {
                console.error('Error accessing camera:', err);
                alert('Could not access camera. Please allow camera permissions or continue using the Upload Option.');
            }
        });
    }

    if (captureBtn && cameraVideo && cameraCanvas) {
        captureBtn.addEventListener('click', () => {
            const context = cameraCanvas.getContext('2d');
            cameraCanvas.width = cameraVideo.videoWidth;
            cameraCanvas.height = cameraVideo.videoHeight;
            context.drawImage(cameraVideo, 0, 0, cameraCanvas.width, cameraCanvas.height);
            
            const imageDataUrl = cameraCanvas.toDataURL('image/png');
            cameraBox.style.backgroundImage = `url(${imageDataUrl})`;
            cameraBox.style.backgroundSize = 'cover';
            cameraBox.style.backgroundPosition = 'center';
            
            stopCamera();
            
            analyzeBtn.disabled = false;
            analyzeBtn.style.opacity = '1';
            analyzeBtn.style.cursor = 'pointer';
        });
    }
    
    if (uploadBtn && imageUpload) {
        uploadBtn.addEventListener('click', () => {
            imageUpload.click();
        });
        
        imageUpload.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    stopCamera(); // Stop live preview if they decide to upload mid-way
                    cameraBox.style.backgroundImage = `url(${ev.target.result})`;
                    cameraBox.style.backgroundSize = 'cover';
                    cameraBox.style.backgroundPosition = 'center';
                    if (cameraIcon) cameraIcon.style.display = 'none';
                    if (cameraText) cameraText.style.display = 'none';
                    
                    analyzeBtn.disabled = false;
                    analyzeBtn.style.opacity = '1';
                    analyzeBtn.style.cursor = 'pointer';
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
    
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', async () => {
            const resultBox = document.getElementById('scan-result-box');
            const recommendedContainer = document.getElementById('recommended-frames-container');
            const shapeResult = document.getElementById('shape-result');
            const shapeSubtitle = document.getElementById('shape-subtitle');
            
            const shapes = ['Oval', 'Round', 'Square'];
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            
            if (shapeResult) {
                shapeResult.innerHTML = `Your face shape: <strong>${randomShape}</strong>`;
            }
            
            if (shapeSubtitle) {
                if (randomShape === 'Oval') {
                    shapeSubtitle.textContent = "Lucky you! Oval faces are incredibly versatile. We recommend geometric or softly rounded frames to maintain your natural balance.";
                } else if (randomShape === 'Round') {
                    shapeSubtitle.textContent = "For round faces, sharp and angular frames work best to add definition and structure to your features.";
                } else {
                    shapeSubtitle.textContent = "Square faces look fantastic with round, oval, or wire frames that soften strong jawlines.";
                }
            }
            
            // Show result block
            resultBox.classList.add('active');
            
            // Scroll to it slightly
            setTimeout(() => {
                resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            
            try {
                let allProducts = await api.getAllProducts();
                let recommended = [];
                // Simple logic for choosing frames
                if (randomShape === 'Oval') {
                    recommended = allProducts.slice(0, 2);
                } else if (randomShape === 'Round') {
                    recommended = allProducts.slice(2, 4);
                } else {
                    recommended = allProducts.slice(4, 6);
                }
                
                recommendedContainer.innerHTML = '';
                recommended.forEach(product => {
                    const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
                    const isWished = wishlistManager.isInWishlist(product.id);
                    
                    const card = document.createElement('div');
                    card.className = 'product-card fade-in-up';
                    card.innerHTML = `
                        ${badgeHtml}
                        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
                            <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                        <a href="product.html?id=${product.id}" class="product-image-container" style="height: 180px;">
                            <img src="${product.image}" alt="${product.title}" class="product-image">
                        </a>
                        <div class="product-details">
                            <h3 class="product-title">${product.title}</h3>
                            <div class="product-price-row">
                                <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                                <button class="add-to-cart-btn" aria-label="Add to cart" data-id="${product.id}">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    recommendedContainer.appendChild(card);
                });
                attachAddToCartListeners(allProducts);
                attachWishlistListeners(allProducts);
            } catch (e) {
                console.error("Failed to load recommendations", e);
            }
        });
    }

    if (howItWorksBtn) {
        howItWorksBtn.addEventListener('click', () => {
            const explBox = document.getElementById('explanation-box');
            if (explBox) {
                if (explBox.classList.contains('active')) {
                    explBox.classList.remove('active');
                    explBox.style.display = 'none';
                } else {
                    explBox.style.display = 'block';
                    setTimeout(() => explBox.classList.add('active'), 10);
                }
            }
        });
    }
}

// Function to handle Wishlist Page Logic
function initWishlistPage(container) {
    if (!container) return;

    const savedPanel = document.getElementById('page-tab-saved');
    const sharedPanel = document.getElementById('page-tab-shared');
    const recentPanel = document.getElementById('page-tab-recent');
    const tabBtns = document.querySelectorAll('.wishlist-page-tabs .wishlist-tab-btn');

    // Tab Switching Logic
    tabBtns.forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.wishlist-page-panel').forEach(p => p.classList.remove('active'));

            tabBtn.classList.add('active');
            const targetId = tabBtn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    function renderPanel(panel, items, emptyIcon, emptyMessage, isWishlistPanel = false) {
        panel.innerHTML = '';
        if (items.length === 0) {
            panel.innerHTML = `
                <div class="empty-cart-msg">
                    <i class="${emptyIcon}" style="font-size: 3rem; color: var(--clr-text-muted); margin-bottom: 1rem;"></i>
                    <h2>${emptyMessage}</h2>
                    <a href="products.html" class="btn btn-outline" style="margin-top: 1rem;">Discover Frames</a>
                </div>
            `;
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'products-grid'; // same structural classes
        grid.style.marginTop = '1rem';
        grid.style.gap = '2rem';
        
        items.forEach(product => {
            const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
            const actionButton = isWishlistPanel ? `
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.8rem;" aria-label="Move to cart" data-moveToCart="${product.id}">
                        <i class="fa-solid fa-cart-plus" style="margin-right: 0.5rem"></i> Move to Cart
                    </button>
            ` : `
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 0.8rem;" onclick="window.location.href='product.html?id=${product.id}'">
                        View Details
                    </button>
            `;
            const headerButton = isWishlistPanel ? `
                <button class="wishlist-btn active" data-id="${product.id}" aria-label="Remove from Wishlist">
                    <i class="fa-solid fa-heart"></i>
                </button>
            ` : '';

            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';
            card.innerHTML = `
                ${badgeHtml}
                ${headerButton}
                <a href="product.html?id=${product.id}" class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </a>
                <div class="product-details">
                    <div class="product-category">${product.category}</div>
                    <a href="product.html?id=${product.id}"><h3 class="product-title">${product.title}</h3></a>
                    <div class="product-price-row">
                        <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                    </div>
                    ${actionButton}
                </div>
            `;
            grid.appendChild(card);
        });
        
        panel.appendChild(grid);
        
        if (isWishlistPanel) {
            // Attach special listeners in wishlist view
            const removeBtns = panel.querySelectorAll('.wishlist-btn');
            removeBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const productId = btn.getAttribute('data-id');
                    wishlistManager.removeItem(productId);
                    cartManager.showToast('Removed from wishlist 💔');
                    loadWishlistUI();
                });
            });

            const moveToCartBtns = panel.querySelectorAll('.btn-primary[data-moveToCart]');
            moveToCartBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const productId = btn.getAttribute('data-moveToCart');
                    const product = wishlistManager.wishlist.find(p => p.id === productId);
                    if (product) {
                        cartManager.addItem(product);
                        wishlistManager.removeItem(productId);
                        loadWishlistUI(); // Re-render local page
                    }
                });
            });
        }
    }

    function loadWishlistUI() {
        if (savedPanel) renderPanel(savedPanel, wishlistManager.wishlist, 'fa-regular fa-heart', 'Your wishlist is empty', true);
        if (sharedPanel) renderPanel(sharedPanel, sharedManager.getShared(), 'fa-solid fa-share-nodes', 'No shared items yet');
        if (recentPanel) renderPanel(recentPanel, recentManager.getRecent(), 'fa-solid fa-clock-rotate-left', 'No recently viewed items');
    }

    // initial render
    loadWishlistUI();

    // Listen for tab syncs
    window.addEventListener('storage', (e) => {
        if (e.key === 'wishlist') {
            loadWishlistUI();
        }
    });
}

// Function to handle Single Product Detail Page (PDP)
async function initProductPage(container) {
    // Show loading state
    container.innerHTML = '<div class="empty-cart-msg"><h2><i class="fa-solid fa-spinner fa-spin"></i> Loading details...</h2></div>';

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (!productId) {
            container.innerHTML = '<div class="empty-cart-msg"><h2>Product not found.</h2><a href="products.html" class="btn btn-primary">Back to Shop</a></div>';
            return;
        }

        const product = await api.getProductById(productId);

        if (!product || product.error) {
            container.innerHTML = '<div class="empty-cart-msg"><h2>Invalid Product ID or Network Error.</h2><a href="products.html" class="btn btn-primary">Back to Shop</a></div>';
            return;
        }

        recentManager.addRecent(product);

        const isWished = wishlistManager.isInWishlist(product.id);
        const stockStatusHtml = product.stockCount > 5 
            ? `<div class="stock-status in-stock"><i class="fa-solid fa-check-circle"></i> In Stock (${product.stockCount} available)</div>` 
            : `<div class="stock-status low-stock"><i class="fa-solid fa-clock"></i> Only ${product.stockCount} left in stock - order soon.</div>`;

        container.innerHTML = `
            <div class="pdp-grid fade-in-up">
                <div class="pdp-image-col">
                    <img src="${product.image}" alt="${product.title}" class="pdp-main-image">
                </div>
                
                <div class="pdp-details-col">
                    <div class="product-category">${product.category}</div>
                    <h1 class="pdp-title">${product.title}</h1>
                    <div class="pdp-price">₹${product.price.toLocaleString('en-IN')}</div>
                    
                    ${stockStatusHtml}
                    
                    <p class="pdp-description">${product.description}</p>
                    
                    <div class="pdp-specs">
                        <div class="spec-row"><span>Type:</span> <span>${product.type}</span></div>
                        <div class="spec-row"><span>Frame:</span> <span>${product.frame}</span></div>
                        <div class="spec-row"><span>Lens:</span> <span>${product.lens}</span></div>
                        <div class="spec-row"><span>Color:</span> <span>${product.color}</span></div>
                        <div class="spec-row"><span>Size:</span> <span>${product.size}</span></div>
                    </div>

                    <div class="pdp-features">
                        <h3>Key Features:</h3>
                        <ul>
                            ${product.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="pdp-actions-row">
                        <div class="qty-selector">
                            <button id="pdp-qty-minus">-</button>
                            <input type="number" id="pdp-qty-input" value="1" min="1" max="${product.stockCount}" readonly>
                            <button id="pdp-qty-plus">+</button>
                        </div>
                        <button class="btn btn-primary pdp-add-to-cart" id="pdp-add-btn">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="wishlist-btn pdp-wishlist-btn ${isWished ? 'active' : ''}" id="pdp-wish-btn" aria-label="Add to Wishlist" style="position: static;">
                            <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Local State
        let currentQty = 1;
        const qtyInput = document.getElementById('pdp-qty-input');
        const minusBtn = document.getElementById('pdp-qty-minus');
        const plusBtn = document.getElementById('pdp-qty-plus');
        const addBtn = document.getElementById('pdp-add-btn');
        const wishBtn = document.getElementById('pdp-wish-btn');

        minusBtn.addEventListener('click', () => {
            if (currentQty > 1) {
                currentQty--;
                qtyInput.value = currentQty;
            }
        });

        plusBtn.addEventListener('click', () => {
            if (currentQty < product.stockCount) {
                currentQty++;
                qtyInput.value = currentQty;
            }
        });

        addBtn.addEventListener('click', () => {
            // Because CartManager inherently adds +1 on addItem(), we just manually adjust it for multiple quantities.
            // But since our cartManager.addItem adds +1 only, we need custom logic.
            // Or simpler: call addItem loop
            for (let i = 0; i < currentQty; i++) {
                // Actually calling addItem X times pushes separate toasts right now if new, but aggregates quantity.
                // We will silence the toast and fire exactly one at the end if we want, or just loop it.
                // Re-writing cart manager locally implies altering the global class. Let's just do it directly softly.
                const existingItem = cartManager.cart.find(item => item.id === product.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cartManager.cart.push({ ...product, quantity: 1 });
                }
            }
            cartManager.saveCart();
            cartManager.showToast(`Added ${currentQty}x ${product.title} to cart`);
        });

        wishBtn.addEventListener('click', () => {
            const isActive = wishlistManager.toggleItem(product);
            if (isActive) {
                wishBtn.classList.add('active');
                wishBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
            } else {
                wishBtn.classList.remove('active');
                wishBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
            }
        });

    } catch (e) {
        console.error("Failed to load product page:", e);
        container.innerHTML = '<div class="empty-cart-msg"><h2>Failed to load product.</h2><a href="products.html" class="btn btn-primary">Back to Shop</a></div>';
    }
}

// Function to handle Login Page Logic
function initLoginPage(container) {
    const loginForm = document.getElementById('login-form-block');
    const signupForm = document.getElementById('signup-form-block');
    
    const showLoginBtn = document.getElementById('show-login');
    const showSignupBtn = document.getElementById('show-signup');

    // Toggles
    if (showSignupBtn) {
        showSignupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    // Handle Form Submits
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('#login-email').value;
            const password = e.target.querySelector('#login-password').value;
            
            const result = authManager.login(email, password);
            if (result.success) {
                // Check for redirect param
                const urlParams = new URLSearchParams(window.location.search);
                const redirect = urlParams.get('redirect') || 'index.html';
                window.location.href = redirect;
            } else {
                alert(result.message);
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.querySelector('#signup-name').value;
            const email = e.target.querySelector('#signup-email').value;
            const password = e.target.querySelector('#signup-password').value;
            const confirm = e.target.querySelector('#signup-confirm').value;
            
            if (password !== confirm) {
                alert("Passwords do not match!");
                return;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }
            
            const result = authManager.register(name, email, password);
            if (result.success) {
                // Instantly redirect them like user experience wants
                const urlParams = new URLSearchParams(window.location.search);
                const redirect = urlParams.get('redirect') || 'index.html';
                window.location.href = redirect;
            } else {
                alert(result.message);
            }
        });
    }
}
