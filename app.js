/* ==========================================================================
   ARKMart Application Logic & Interactive Features
   Visual Categories, Running Ticker & 25 Indian Customer Reviews Engine
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. FMCG Product Dataset (Grocery, Kitchen, Electronics, Makeup)
// --------------------------------------------------------------------------
const productsData = [
    // --- GROCERY & STAPLES ---
    {
        id: "p1",
        name: "Aashirvaad Shudh Chakki Atta",
        category: "Grocery",
        weight: "5 kg",
        mrp: 290,
        price: 235,
        rating: 4.9,
        reviews: 2430,
        discount: "19% OFF",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
        badge: "Bestseller",
        thumbnails: [
            "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "p2",
        name: "Fortune Sunlite Refined Sunflower Oil",
        category: "Grocery",
        weight: "1 L Pouch",
        mrp: 185,
        price: 139,
        rating: 4.7,
        reviews: 1850,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
        badge: "Hot Deal",
        thumbnails: [
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "p3",
        name: "Daawat Rozana Super Basmati Rice",
        category: "Grocery",
        weight: "5 kg",
        mrp: 499,
        price: 375,
        rating: 4.9,
        reviews: 3120,
        discount: "24% OFF",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
        badge: "Top Rated",
        thumbnails: [
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "p4",
        name: "Tata Salt Vacuum Evaporated Iodised Salt",
        category: "Grocery",
        weight: "1 kg",
        mrp: 28,
        price: 24,
        rating: 4.9,
        reviews: 5400,
        discount: "14% OFF",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80",
        badge: "Essential",
        thumbnails: [
            "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80"
        ]
    },

    // --- KITCHEN & COOKWARE ---
    {
        id: "pk1",
        name: "Hawkins Contura Aluminium Pressure Cooker",
        category: "Kitchen",
        weight: "3 Litre",
        mrp: 1450,
        price: 1199,
        rating: 4.8,
        reviews: 1250,
        discount: "17% OFF",
        image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80",
        badge: "Hot Deal",
        thumbnails: [
            "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "pk2",
        name: "Prestige Non-Stick Dosa Tawa & Pan Combo",
        category: "Kitchen",
        weight: "Pack of 2 Pcs",
        mrp: 1899,
        price: 1299,
        rating: 4.7,
        reviews: 890,
        discount: "31% OFF",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=400&q=80",
        badge: "Best Value",
        thumbnails: [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=400&q=80"
        ]
    },

    // --- ELECTRONICS & AUDIO ---
    {
        id: "pe1",
        name: "boAt Airdopes True Wireless Bluetooth Earbuds",
        category: "Electronics",
        weight: "1 Unit (Active Noise Cancelling)",
        mrp: 2990,
        price: 1299,
        rating: 4.8,
        reviews: 8400,
        discount: "56% OFF",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",
        badge: "Mega Saver",
        thumbnails: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1609592424009-59847116b47c?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "pe2",
        name: "Mi 10000mAh Fast Charging Power Bank 3i",
        category: "Electronics",
        weight: "18W Fast Charge",
        mrp: 1999,
        price: 1199,
        rating: 4.9,
        reviews: 6200,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1609592424009-59847116b47c?auto=format&fit=crop&w=400&q=80",
        badge: "Top Seller",
        thumbnails: [
            "https://images.unsplash.com/photo-1609592424009-59847116b47c?auto=format&fit=crop&w=400&q=80"
        ]
    },

    // --- MAKEUP & BEAUTY ---
    {
        id: "pm1",
        name: "Lakme Forever Matte Liquid Lipstick",
        category: "Makeup",
        weight: "5.6 ml (Crimson Rose)",
        mrp: 350,
        price: 245,
        rating: 4.8,
        reviews: 3100,
        discount: "30% OFF",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
        badge: "Must Have",
        thumbnails: [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "pm2",
        name: "Pond's Serum Boost Sunscreen SPF 55",
        category: "Makeup",
        weight: "100 g Tube",
        mrp: 449,
        price: 325,
        rating: 4.7,
        reviews: 1980,
        discount: "27% OFF",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
        badge: "Trending",
        thumbnails: [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
        ]
    },

    // --- DAIRY & BAKERY ---
    {
        id: "p10",
        name: "Amul Taaza Homogenised Toned Milk",
        category: "Dairy & Bakery",
        weight: "1 L Tetrapack",
        mrp: 75,
        price: 68,
        rating: 4.9,
        reviews: 4200,
        discount: "9% OFF",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80",
        badge: "Daily Must",
        thumbnails: [
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80"
        ]
    },
    {
        id: "p11",
        name: "Amul Pasteurised Salted Butter",
        category: "Dairy & Bakery",
        weight: "100 g",
        mrp: 58,
        price: 54,
        rating: 4.9,
        reviews: 6100,
        discount: "7% OFF",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
        badge: "Bestseller",
        thumbnails: [
            "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80"
        ]
    },

    // --- SNACKS & DRINKS ---
    {
        id: "p14",
        name: "Lay's India's Magic Masala Chips",
        category: "Snacks & Drinks",
        weight: "115 g Combo Pack",
        mrp: 50,
        price: 42,
        rating: 4.8,
        reviews: 3450,
        discount: "16% OFF",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80",
        badge: "Party Pack",
        thumbnails: [
            "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80"
        ]
    }
];

// --------------------------------------------------------------------------
// 2. 25 Professional Indian Customer Reviews Dataset (4.0 & 5.0 Stars)
// --------------------------------------------------------------------------
const indianCustomerReviews = [
    { name: "Ramesh Kumar", location: "Noida", rating: 5, date: "2 days ago", comment: "Superb quality! Atta is completely fresh and rotis stay soft till evening. Got delivered in just 8 mins.", helpful: 42 },
    { name: "Priya Sharma", location: "Delhi NCR", rating: 5, date: "3 days ago", comment: "Packaging was neat and fresh batch delivered. ARKMart 10-minute delivery speed is unbeatable!", helpful: 38 },
    { name: "Amit Patel", location: "Gurugram", rating: 5, date: "4 days ago", comment: "Original product with genuine MRP discount. Highly recommended for daily grocery shopping.", helpful: 29 },
    { name: "Sunita Verma", location: "Ghaziabad", rating: 4, date: "5 days ago", comment: "Very good product quality. Delivery agent was polite and brought it right to my doorstep.", helpful: 19 },
    { name: "Vikram Singh", location: "Noida Sec 62", rating: 5, date: "1 week ago", comment: "Best price in the market. I compared with local store and ARKMart is 20% cheaper with free delivery.", helpful: 56 },
    { name: "Ananya Gupta", location: "Faridabad", rating: 5, date: "1 week ago", comment: "Super fresh and pure quality. Rotis turn out soft and white. Will order again definitely!", helpful: 31 },
    { name: "Rajesh Iyer", location: "Greater Noida", rating: 4, date: "1 week ago", comment: "Prompt 10-minute delivery. Packing was clean, sturdy and spill-proof.", helpful: 14 },
    { name: "Neha Agarwal", location: "Delhi", rating: 5, date: "2 weeks ago", comment: "Awesome shopping experience! Applied ARK50 promo code and got extra ₹50 discount.", helpful: 47 },
    { name: "Suresh Reddy", location: "Noida Sec 18", rating: 5, date: "2 weeks ago", comment: "100% authentic product. Delivered superfast within 9 minutes of placing order.", helpful: 23 },
    { name: "Pooja Mehta", location: "Gurugram Sec 56", rating: 5, date: "2 weeks ago", comment: "Great product quality. Very convenient for busy working professionals like me.", helpful: 33 },
    { name: "Deepak Joshi", location: "Noida Sec 63", rating: 4, date: "3 weeks ago", comment: "Great value for money. Fresh stock delivered with long expiry date.", helpful: 18 },
    { name: "Simran Kaur", location: "Delhi Cantt", rating: 5, date: "3 weeks ago", comment: "Fully satisfied with ARKMart service. 10 mins superfast delivery promise is real!", helpful: 50 },
    { name: "Alok Mishra", location: "Ghaziabad Sec 4", rating: 5, date: "3 weeks ago", comment: "Top notch quality. My whole family is happy with the fresh taste.", helpful: 26 },
    { name: "Swati Deshmukh", location: "Indirapuram", rating: 5, date: "1 month ago", comment: "Clean hygienic packaging and fresh product batch. Very happy with my purchase.", helpful: 41 },
    { name: "Rohan Malhotra", location: "Noida Sec 50", rating: 4, date: "1 month ago", comment: "Fast delivery and easy payment via PhonePe UPI QR code. Smooth app experience.", helpful: 15 },
    { name: "Kavita Saxena", location: "South Delhi", rating: 5, date: "1 month ago", comment: "Pure and healthy. Roti stays soft for long hours even in tiffin box.", helpful: 37 },
    { name: "Manoj Tiwary", location: "Vaishali", rating: 5, date: "1 month ago", comment: "Superfast express delivery. Truly impressed with ARKMart customer service team!", helpful: 28 },
    { name: "Divya Nambiar", location: "Dwarka", rating: 5, date: "1 month ago", comment: "Genuine MRP discount and original brand packaging. 5 stars from my side!", helpful: 22 },
    { name: "Harpreet Singh", location: "West Delhi", rating: 4, date: "1 month ago", comment: "Good quality staple. Arrived fast and fresh in perfect condition.", helpful: 12 },
    { name: "Shalini Kapoor", location: "Noida Sec 137", rating: 5, date: "2 months ago", comment: "Must buy! Very fresh batch and authentic quality.", helpful: 34 },
    { name: "Tarun Banerjee", location: "Noida Sec 15", rating: 5, date: "2 months ago", comment: "Seamless ordering process & instant GPay checkout. Highly reliable service.", helpful: 19 },
    { name: "Meenakshi Sundaram", location: "Mayur Vihar", rating: 5, date: "2 months ago", comment: "Excellent quality product delivered in just 7 mins. Will be a regular buyer now.", helpful: 45 },
    { name: "Nitin Saxena", location: "Kaushambi", rating: 4, date: "2 months ago", comment: "Value for money product. Great discount and fast delivery.", helpful: 16 },
    { name: "Rashmi Trivedi", location: "Noida Sec 76", rating: 5, date: "2 months ago", comment: "Fresh product, great discount offer. 5 stars all the way!", helpful: 30 },
    { name: "Saurabh Roy", location: "Laxmi Nagar", rating: 5, date: "2 months ago", comment: "Fantastic service by ARKMart. Highly satisfied with product quality and delivery!", helpful: 52 }
];

// Categories Config
const categories = [
    { name: "All", icon: "fa-solid fa-layer-group" },
    { name: "Grocery", icon: "fa-solid fa-wheat-awn" },
    { name: "Kitchen", icon: "fa-solid fa-kitchen-set" },
    { name: "Electronics", icon: "fa-solid fa-mobile-screen-button" },
    { name: "Makeup", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Dairy & Bakery", icon: "fa-solid fa-cheese" },
    { name: "Snacks & Drinks", icon: "fa-solid fa-cookie-bite" }
];

// State
let state = {
    selectedCategory: "All",
    searchQuery: "",
    sortBy: "popular",
    cart: {},
    activeCoupon: null,
    discountAmount: 0,
    currentDetailProduct: null
};

// Initializer
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
    renderCategories();
    renderProducts();
    updateCartUI();
    startFlashTimer();
    startMahaTimer();
    initCarousel();
    initSearch();
    initPaymentTabs();
    initCheckoutEventListeners();
    initHamburgerDrawer();
});

function saveCartToLocalStorage() {
    localStorage.setItem("arkmart_cart", JSON.stringify(state.cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem("arkmart_cart");
    if (saved) {
        try { state.cart = JSON.parse(saved); } catch (e) { state.cart = {}; }
    }
}

// Side Drawer Hamburger Toggle
function initHamburgerDrawer() {
    const btn = document.getElementById("hamburgerBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.getElementById("sideDrawerOverlay").classList.add("active");
            document.getElementById("sideDrawer").classList.add("active");
        });
    }

    const voiceBtn = document.getElementById("voiceSearchBtn");
    if (voiceBtn) {
        voiceBtn.addEventListener("click", () => {
            showToast("🎙️ Listening... Speak product name now");
        });
    }
}

function closeSideDrawer() {
    document.getElementById("sideDrawerOverlay").classList.remove("active");
    document.getElementById("sideDrawer").classList.remove("active");
}

function renderCategories() {
    const container = document.getElementById("categoryTabs");
    if (!container) return;
    container.innerHTML = categories.map(cat => `
        <button class="category-chip ${state.selectedCategory === cat.name ? 'active' : ''}" 
                onclick="filterByCategory('${cat.name}')">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </button>
    `).join("");

    document.getElementById("categoryCount").innerText = `${categories.length - 1} Categories`;
}

function filterByCategory(categoryName) {
    state.selectedCategory = categoryName;
    renderCategories();
    renderProducts();
    document.getElementById("currentCategoryTitle").innerText = 
        categoryName === "All" ? "All Products" : categoryName;
}

function selectVisualCategory(categoryName, elem) {
    document.querySelectorAll(".v-cat-card").forEach(c => c.classList.remove("active"));
    if (elem) elem.classList.add("active");
    filterByCategory(categoryName);
    document.querySelector(".products-section").scrollIntoView({ behavior: 'smooth' });
}

function resetToAllProducts(e) {
    if (e) e.preventDefault();
    filterByCategory("All");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    
    let filtered = productsData.filter(p => {
        const matchesCategory = state.selectedCategory === "All" || p.category === state.selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                              p.category.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (state.sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (state.sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
    else if (state.sortBy === "discount") filtered.sort((a, b) => (b.mrp - b.price) - (a.mrp - a.price));

    document.getElementById("productCountBadge").innerText = `${filtered.length} Items`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 12px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: #94A3B8; margin-bottom: 12px;"></i>
                <h4>No products found matching "${state.searchQuery}"</h4>
                <button onclick="resetSearch()" style="margin-top: 16px; background: #0088cc; color: white; padding: 8px 18px; border-radius: 20px; font-weight: 700; border:none;">Clear Search</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const qty = state.cart[p.id] || 0;
        return `
            <div class="product-card" onclick="openProductDetails('${p.id}')">
                <div class="card-badge-wrapper">
                    ${p.discount ? `<span class="badge-discount">${p.discount}</span>` : ''}
                </div>
                
                <div class="product-img-box">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                
                <div class="product-info">
                    <span class="product-weight">${p.weight}</span>
                    <h4 class="product-title" title="${p.name}">${p.name}</h4>
                    
                    <div class="product-rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${p.rating}</span>
                    </div>

                    <!-- Green 10-Mins Delivery Badge -->
                    <div class="green-delivery-info">
                        <i class="fa-solid fa-bolt"></i> <span>10 MINS</span> &bull; <i class="fa-solid fa-truck-fast"></i> <span>FREE Delivery</span>
                    </div>

                    <div class="product-bottom-row" onclick="event.stopPropagation();">
                        <div class="price-box">
                            <span class="current-price">₹${p.price}</span>
                            ${p.mrp > p.price ? `<span class="mrp-price">₹${p.mrp}</span>` : ''}
                        </div>
                        
                        <div class="add-btn-wrapper">
                            ${qty === 0 ? `
                                <button class="btn-add-cart" onclick="addToCart('${p.id}'); event.stopPropagation();">
                                    ADD <i class="fa-solid fa-plus"></i>
                                </button>
                            ` : `
                                <div class="qty-stepper">
                                    <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty - 1}); event.stopPropagation();"><i class="fa-solid fa-minus"></i></button>
                                    <span>${qty}</span>
                                    <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty + 1}); event.stopPropagation();"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// --------------------------------------------------------------------------
// 3. Open & Populate Product Details & Render 25 Indian Reviews
// --------------------------------------------------------------------------
function openProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    state.currentDetailProduct = product;

    // Populate Fields
    document.getElementById("pDetailsMainImg").src = product.image;
    document.getElementById("pDetailsName").innerText = product.name;
    document.getElementById("pDetailsWeight").innerText = product.weight;
    document.getElementById("pDetailsRating").innerHTML = `<i class="fa-solid fa-star"></i> <span>${product.rating}</span>`;
    document.getElementById("pDetailsPrice").innerText = `₹${product.price}`;
    document.getElementById("pDetailsMrp").innerText = `₹${product.mrp}`;
    document.getElementById("pDetailsDiscount").innerText = product.discount || "SALE";

    // Populate Gallery Track
    const track = document.getElementById("pThumbnailsTrack");
    const thumbs = product.thumbnails || [product.image, product.image];
    track.innerHTML = thumbs.map((imgUrl, idx) => `
        <img src="${imgUrl}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="switchDetailImage('${imgUrl}', this)">
    `).join("");

    // Render 25 Professional Indian Customer Reviews
    renderCustomerReviews();

    // Setup Footer Button Handlers
    const addCartBtn = document.getElementById("pDetailsAddCartBtn");
    addCartBtn.onclick = () => {
        addToCart(product.id);
        closeProductDetails();
        openCartDrawer();
    };

    const buyNowBtn = document.getElementById("pDetailsBuyNowBtn");
    buyNowBtn.onclick = () => {
        addToCart(product.id);
        closeProductDetails();
        document.getElementById("checkoutModalOverlay").classList.add("active");
    };

    // Open Modal
    document.getElementById("productDetailsOverlay").classList.add("active");
}

// Render 25 Indian Customer Reviews
function renderCustomerReviews() {
    const container = document.getElementById("reviewsListContainer");
    if (!container) return;

    const colors = ["#0088cc", "#059669", "#7C3AED", "#D97706", "#DC2626", "#2563EB", "#0D9488"];

    container.innerHTML = indianCustomerReviews.map((rev, idx) => {
        const initial = rev.name.charAt(0);
        const bgCol = colors[idx % colors.length];
        
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= rev.rating) {
                starsHtml += `<i class="fa-solid fa-star"></i>`;
            } else {
                starsHtml += `<i class="fa-regular fa-star"></i>`;
            }
        }

        return `
            <div class="review-card">
                <div class="review-top-row">
                    <div class="reviewer-profile">
                        <div class="reviewer-avatar" style="background-color:${bgCol};">${initial}</div>
                        <div class="reviewer-details">
                            <span class="reviewer-name">${rev.name}</span>
                            <span class="verified-buyer-badge"><i class="fa-solid fa-circle-check"></i> Verified Buyer (${rev.location})</span>
                        </div>
                    </div>

                    <div class="review-rating-stars">
                        <span>${rev.rating}.0</span> ${starsHtml}
                    </div>
                </div>

                <p class="review-comment">"${rev.comment}"</p>

                <div class="review-bottom-meta">
                    <span>Reviewed ${rev.date}</span>
                    <button class="helpful-btn" onclick="toggleHelpful(this, ${rev.helpful})">
                        <i class="fa-regular fa-thumbs-up"></i> Helpful (${rev.helpful})
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

function toggleHelpful(btn, count) {
    if (btn.classList.contains("voted")) return;
    btn.classList.add("voted");
    btn.style.color = "#0088cc";
    btn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Helpful (${count + 1})`;
}

function closeProductDetails() {
    document.getElementById("productDetailsOverlay").classList.remove("active");
}

function switchDetailImage(imgUrl, elem) {
    document.getElementById("pDetailsMainImg").src = imgUrl;
    document.querySelectorAll(".thumb-img").forEach(t => t.classList.remove("active"));
    if (elem) elem.classList.add("active");
}

function scrollThumbnails(direction) {
    const track = document.getElementById("pThumbnailsTrack");
    if (track) track.scrollBy({ left: direction * 120, behavior: 'smooth' });
}

function addToCart(productId) {
    state.cart[productId] = (state.cart[productId] || 0) + 1;
    saveCartToLocalStorage();
    updateCartUI();
    renderProducts();
    const product = productsData.find(p => p.id === productId);
    showToast(`Added <strong>${product.name}</strong> to cart!`);
}

function updateItemQuantity(productId, newQty) {
    if (newQty <= 0) delete state.cart[productId];
    else state.cart[productId] = newQty;
    saveCartToLocalStorage();
    updateCartUI();
    renderProducts();
}

function updateCartUI() {
    let totalItems = 0, mrpTotal = 0, payTotal = 0;
    Object.keys(state.cart).forEach(id => {
        const qty = state.cart[id];
        const p = productsData.find(item => item.id === id);
        if (p) {
            totalItems += qty;
            mrpTotal += p.mrp * qty;
            payTotal += p.price * qty;
        }
    });

    const savings = mrpTotal - payTotal;
    let finalPayable = payTotal - state.discountAmount;
    if (finalPayable < 0) finalPayable = 0;

    const deliveryThreshold = 199;
    let deliveryFee = (payTotal > 0 && payTotal < deliveryThreshold) ? 30 : 0;
    if (payTotal > 0) finalPayable += deliveryFee;

    document.getElementById("cartCountBadge").innerText = totalItems;
    document.getElementById("navCartBadge").innerText = totalItems;
    document.getElementById("detailsCartBadge").innerText = totalItems;
    document.getElementById("mobileCartItemCount").innerText = totalItems;
    document.getElementById("mobileCartPrice").innerText = `₹${finalPayable}`;

    const mobileBar = document.getElementById("mobileCartBar");
    if (mobileBar) mobileBar.style.display = totalItems > 0 ? "flex" : "none";

    renderCartDrawerBody(totalItems);

    document.getElementById("drawerCartCounter").innerText = `(${totalItems} items)`;
    document.getElementById("billMrpTotal").innerText = `₹${mrpTotal}`;
    document.getElementById("billDiscount").innerText = `-₹${savings}`;
    document.getElementById("billGrandTotal").innerText = `₹${finalPayable}`;
    document.getElementById("checkoutPayableAmount").innerText = `₹${finalPayable}`;
    document.getElementById("payBtnAmount").innerText = `₹${finalPayable}`;

    if (deliveryFee === 0 && payTotal > 0) {
        document.getElementById("billDeliveryFee").innerText = "FREE";
        document.getElementById("billDeliveryFee").className = "text-success";
    } else {
        document.getElementById("billDeliveryFee").innerText = `₹${deliveryFee}`;
        document.getElementById("billDeliveryFee").className = "";
    }

    const freeBarProgress = Math.min(100, (payTotal / deliveryThreshold) * 100);
    document.getElementById("freeDeliveryProgress").style.width = `${freeBarProgress}%`;
}

function renderCartDrawerBody(totalItems) {
    const body = document.getElementById("cartDrawerBody");
    if (totalItems === 0) {
        body.innerHTML = `
            <div class="cart-empty-state" style="text-align:center; padding:30px;">
                <i class="fa-solid fa-basket-shopping" style="font-size:3rem; color:#94A3B8;"></i>
                <h4 style="margin-top:10px;">Your Cart is Empty</h4>
                <p style="color:#64748B; font-size:0.85rem;">Add groceries & essentials to get started.</p>
            </div>
        `;
        document.getElementById("cartDrawerFooter").style.display = "none";
        return;
    }

    document.getElementById("cartDrawerFooter").style.display = "block";
    let html = "";
    Object.keys(state.cart).forEach(id => {
        const qty = state.cart[id];
        const p = productsData.find(item => item.id === id);
        if (p) {
            html += `
                <div class="cart-item-card">
                    <img src="${p.image}" alt="${p.name}" class="cart-item-img">
                    <div class="cart-item-details" style="flex:1;">
                        <h4 class="cart-item-title">${p.name}</h4>
                        <div class="cart-item-weight">${p.weight}</div>
                        <div class="cart-item-price">₹${p.price * qty}</div>
                    </div>
                    <div class="qty-stepper">
                        <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty - 1})"><i class="fa-solid fa-minus"></i></button>
                        <span>${qty}</span>
                        <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty + 1})"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
        }
    });
    body.innerHTML = html;
}

function openCartDrawer(e) {
    if (e) e.preventDefault();
    document.getElementById("cartOverlay").classList.add("active");
    document.getElementById("cartDrawer").classList.add("active");
}

function closeCartDrawer() {
    document.getElementById("cartOverlay").classList.remove("active");
    document.getElementById("cartDrawer").classList.remove("active");
}

document.getElementById("headerCartBtn").addEventListener("click", openCartDrawer);
document.getElementById("mobileViewCartBtn").addEventListener("click", openCartDrawer);

// Coupon Code Logic
document.getElementById("applyCouponBtn").addEventListener("click", () => {
    const code = document.getElementById("couponInput").value.trim().toUpperCase();
    const msg = document.getElementById("couponMsg");
    if (code === "ARK50") {
        state.discountAmount = 50;
        msg.innerText = "✓ Promo code ARK50 applied! ₹50 Discount";
        msg.style.color = "#059669";
        document.getElementById("couponDiscountRow").style.display = "flex";
        document.getElementById("billCouponSavings").innerText = "-₹50";
        updateCartUI();
    } else {
        msg.innerText = "✕ Invalid promo code. Try ARK50";
        msg.style.color = "#EF4444";
    }
});

// Checkout Flow
document.getElementById("proceedToCheckoutBtn").addEventListener("click", () => {
    closeCartDrawer();
    document.getElementById("checkoutModalOverlay").classList.add("active");
});

function closeCheckoutModal() {
    document.getElementById("checkoutModalOverlay").classList.remove("active");
}

function initPaymentTabs() {
    const tabBtns = document.querySelectorAll(".pay-tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const targetTab = btn.getAttribute("data-tab");
            document.querySelectorAll(".payment-tab-content").forEach(content => {
                content.classList.remove("active");
            });
            document.getElementById(`tab-${targetTab}`).classList.add("active");
        });
    });
}

function initCheckoutEventListeners() {
    document.getElementById("verifyVpaBtn").addEventListener("click", () => {
        const vpa = document.getElementById("upiVpaInput").value.trim();
        const status = document.getElementById("vpaStatus");
        if (vpa.includes("@")) {
            status.innerText = "✓ UPI ID Verified Successfully";
            status.style.color = "#059669";
        } else {
            status.innerText = "✕ Enter valid UPI ID";
            status.style.color = "#EF4444";
        }
    });

    document.getElementById("payNowBtn").addEventListener("click", () => {
        const name = document.getElementById("custName").value.trim();
        const btn = document.getElementById("payNowBtn");
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = `<span>Pay & Place Order</span> <span class="pay-btn-price" id="payBtnAmount">${document.getElementById("checkoutPayableAmount").innerText}</span>`;
            closeCheckoutModal();
            triggerOrderSuccess(name || "Customer");
        }, 1400);
    });
}

function triggerOrderSuccess(customerName) {
    const orderId = "#ARK-" + Math.floor(10000 + Math.random() * 90000);
    document.getElementById("successOrderId").innerText = orderId;

    let itemCount = 0;
    Object.values(state.cart).forEach(q => itemCount += q);

    document.getElementById("orderReceiptSummary").innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>Customer:</span> <strong>${customerName}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>Items:</span> <strong>${itemCount} Items</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
            <span>Amount Paid:</span> <strong style="color:#059669">${document.getElementById("billGrandTotal").innerText}</strong>
        </div>
    `;

    state.cart = {};
    saveCartToLocalStorage();
    updateCartUI();
    renderProducts();

    document.getElementById("orderSuccessModal").classList.add("active");
}

function closeSuccessModal() {
    document.getElementById("orderSuccessModal").classList.remove("active");
}

function initSearch() {
    const input = document.getElementById("searchInput");
    input.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderProducts();
    });

    document.getElementById("sortSelect").addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });
}

function resetSearch() {
    state.searchQuery = "";
    document.getElementById("searchInput").value = "";
    renderProducts();
}

let currentSlide = 0;
function initCarousel() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        goToSlide(currentSlide);
    }, 4000);
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const track = document.getElementById("carouselTrack");
    if (track) track.style.transform = `translateX(-${slideIndex * 100}%)`;
    const dots = document.querySelectorAll(".carousel-dots .dot");
    dots.forEach((dot, idx) => {
        if (idx === slideIndex) dot.classList.add("active");
        else dot.classList.remove("active");
    });
}

function startFlashTimer() {
    let totalSeconds = 2 * 3600 + 45 * 60 + 12;
    const timerElem = document.getElementById("flashTimer");
    setInterval(() => {
        if (totalSeconds <= 0) return;
        totalSeconds--;
        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        if (timerElem) timerElem.innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

function startMahaTimer() {
    let seconds = 9 * 60 + 36;
    const elem = document.getElementById("mahaTimer");
    setInterval(() => {
        if (seconds <= 0) seconds = 9 * 60 + 36;
        seconds--;
        const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
        const ss = String(seconds % 60).padStart(2, '0');
        if (elem) elem.innerText = `${mm}:${ss}`;
    }, 1000);
}

function showToast(message) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast success";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function showOffers(e) {
    if (e) e.preventDefault();
    showToast("⚡ Flat ₹50 OFF Code: ARK50");
}
