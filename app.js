/* ==========================================================================
   ARK Supermart Application Logic
   FMCG E-Commerce Engine
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. FMCG Product Dataset (Realistic Brands & Daily Essentials)
// --------------------------------------------------------------------------
const productsData = [
    // --- STAPLES ---
    {
        id: "p1",
        name: "Aashirvaad Shudh Chakki Atta",
        category: "Staples",
        weight: "5 kg",
        mrp: 290,
        price: 235,
        rating: 4.8,
        reviews: 2430,
        discount: "19% OFF",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
        badge: "Bestseller"
    },
    {
        id: "p2",
        name: "Fortune Sunlite Refined Sunflower Oil",
        category: "Staples",
        weight: "1 L Pouch",
        mrp: 185,
        price: 139,
        rating: 4.7,
        reviews: 1850,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
        badge: "Hot Deal"
    },
    {
        id: "p3",
        name: "Daawat Rozana Super Basmati Rice",
        category: "Staples",
        weight: "5 kg",
        mrp: 499,
        price: 375,
        rating: 4.9,
        reviews: 3120,
        discount: "24% OFF",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
        badge: "Top Rated"
    },
    {
        id: "p4",
        name: "Tata Salt Vacuum Evaporated Iodised Salt",
        category: "Staples",
        weight: "1 kg",
        mrp: 28,
        price: 24,
        rating: 4.9,
        reviews: 5400,
        discount: "14% OFF",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&q=80",
        badge: "Essential"
    },
    {
        id: "p5",
        name: "Madhur Pure & Hygienic Sugar",
        category: "Staples",
        weight: "1 kg",
        mrp: 65,
        price: 49,
        rating: 4.6,
        reviews: 980,
        discount: "24% OFF",
        image: "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?auto=format&fit=crop&w=400&q=80",
        badge: null
    },

    // --- FRESH PRODUCE ---
    {
        id: "p6",
        name: "Fresh Hybrid Red Tomatoes",
        category: "Fresh Produce",
        weight: "1 kg",
        mrp: 40,
        price: 26,
        rating: 4.5,
        reviews: 890,
        discount: "35% OFF",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
        badge: "Farm Fresh"
    },
    {
        id: "p7",
        name: "Organic Farm Fresh Potatoes (Aloo)",
        category: "Fresh Produce",
        weight: "1 kg",
        mrp: 35,
        price: 22,
        rating: 4.6,
        reviews: 1420,
        discount: "37% OFF",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
        badge: "Direct Farm"
    },
    {
        id: "p8",
        name: "Robusta Fresh Yellow Bananas",
        category: "Fresh Produce",
        weight: "1 Dozen (12 Pcs)",
        mrp: 70,
        price: 48,
        rating: 4.7,
        reviews: 1650,
        discount: "31% OFF",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80",
        badge: "High Fiber"
    },
    {
        id: "p9",
        name: "Washington Royal Delicious Apples",
        category: "Fresh Produce",
        weight: "4 Pcs (approx. 600g)",
        mrp: 160,
        price: 119,
        rating: 4.8,
        reviews: 730,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
        badge: "Imported"
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
        badge: "Daily Must"
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
        badge: "Bestseller"
    },
    {
        id: "p12",
        name: "Britannia 100% Whole Wheat Bread",
        category: "Dairy & Bakery",
        weight: "400 g",
        mrp: 45,
        price: 40,
        rating: 4.6,
        reviews: 1120,
        discount: "11% OFF",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        badge: "Zero Maida"
    },
    {
        id: "p13",
        name: "Mother Dairy Fresh Masti Dahi",
        category: "Dairy & Bakery",
        weight: "400 g Tub",
        mrp: 50,
        price: 45,
        rating: 4.8,
        reviews: 1980,
        discount: "10% OFF",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
        badge: "Probiotic"
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
        badge: "Party Pack"
    },
    {
        id: "p15",
        name: "Coca-Cola Original Taste Soft Drink",
        category: "Snacks & Drinks",
        weight: "750 ml Bottle",
        mrp: 45,
        price: 38,
        rating: 4.7,
        reviews: 2100,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=400&q=80",
        badge: "Chilled"
    },
    {
        id: "p16",
        name: "Cadbury Dairy Milk Silk Chocolate Bar",
        category: "Snacks & Drinks",
        weight: "150 g Pack",
        mrp: 175,
        price: 145,
        rating: 4.9,
        reviews: 4890,
        discount: "17% OFF",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&q=80",
        badge: "Sweet Treat"
    },
    {
        id: "p17",
        name: "Real Fruit Power 100% Mixed Fruit Juice",
        category: "Snacks & Drinks",
        weight: "1 L Carton",
        mrp: 130,
        price: 99,
        rating: 4.6,
        reviews: 870,
        discount: "24% OFF",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80",
        badge: "No Added Sugar"
    },

    // --- PERSONAL CARE ---
    {
        id: "p18",
        name: "Dove Cream Beauty Bathing Soap Bar",
        category: "Personal Care",
        weight: "Pack of 4 (125g each)",
        mrp: 299,
        price: 239,
        rating: 4.8,
        reviews: 1950,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1607006482602-76ca75501869?auto=format&fit=crop&w=400&q=80",
        badge: "Value Pack"
    },
    {
        id: "p19",
        name: "Head & Shoulders Smooth & Silky Shampoo",
        category: "Personal Care",
        weight: "650 ml Pump Bottle",
        mrp: 650,
        price: 449,
        rating: 4.7,
        reviews: 1240,
        discount: "31% OFF",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
        badge: "Mega Saver"
    },

    // --- HOUSEHOLD CARE ---
    {
        id: "p20",
        name: "Surf Excel Easy Wash Detergent Powder",
        category: "Household Care",
        weight: "3 kg Pack",
        mrp: 480,
        price: 395,
        rating: 4.9,
        reviews: 3890,
        discount: "18% OFF",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
        badge: "Tough Stain Removal"
    },
    {
        id: "p21",
        name: "Vim Dishwash Gel Concentrate Lemon",
        category: "Household Care",
        weight: "750 ml Bottle",
        mrp: 215,
        price: 175,
        rating: 4.8,
        reviews: 2300,
        discount: "18% OFF",
        image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=400&q=80",
        badge: "100 Lemon Power"
    }
];

// Categories Config
const categories = [
    { name: "All", icon: "fa-solid fa-layer-group" },
    { name: "Staples", icon: "fa-solid fa-wheat-awn" },
    { name: "Fresh Produce", icon: "fa-solid fa-apple-whole" },
    { name: "Dairy & Bakery", icon: "fa-solid fa-cheese" },
    { name: "Snacks & Drinks", icon: "fa-solid fa-cookie-bite" },
    { name: "Personal Care", icon: "fa-solid fa-pump-soap" },
    { name: "Household Care", icon: "fa-solid fa-sparkles" }
];

// --------------------------------------------------------------------------
// 2. Application State Management
// --------------------------------------------------------------------------
let state = {
    selectedCategory: "All",
    searchQuery: "",
    sortBy: "popular",
    cart: {}, // Format: { productId: quantity }
    activeCoupon: null,
    discountAmount: 0
};

// --------------------------------------------------------------------------
// 3. Initializer & Event Listeners
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
    renderCategories();
    renderProducts();
    updateCartUI();
    startFlashTimer();
    initCarousel();
    initSearch();
    initPaymentTabs();
    initCheckoutEventListeners();
});

// Save & Load Cart State
function saveCartToLocalStorage() {
    localStorage.setItem("ark_supermart_cart", JSON.stringify(state.cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem("ark_supermart_cart");
    if (saved) {
        try {
            state.cart = JSON.parse(saved);
        } catch (e) {
            state.cart = {};
        }
    }
}

// --------------------------------------------------------------------------
// 4. UI Rendering Functions
// --------------------------------------------------------------------------

// Render Category Pills
function renderCategories() {
    const container = document.getElementById("categoryTabs");
    container.innerHTML = categories.map(cat => `
        <button class="category-chip ${state.selectedCategory === cat.name ? 'active' : ''}" 
                onclick="filterByCategory('${cat.name}')">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </button>
    `).join("");

    document.getElementById("categoryCount").innerText = `${categories.length - 1} Categories`;
}

// Filter By Category
function filterByCategory(categoryName) {
    state.selectedCategory = categoryName;
    renderCategories();
    renderProducts();
    
    // Update Title
    document.getElementById("currentCategoryTitle").innerText = 
        categoryName === "All" ? "All Products" : categoryName;
    
    // Smooth scroll to products
    document.querySelector(".products-section").scrollIntoView({ behavior: 'smooth' });
}

// Reset to All Products
function resetToAllProducts(e) {
    if (e) e.preventDefault();
    filterByCategory("All");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Product Grid
function renderProducts() {
    const grid = document.getElementById("productGrid");
    
    // Filter logic
    let filtered = productsData.filter(p => {
        const matchesCategory = state.selectedCategory === "All" || p.category === state.selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                              p.category.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Sort logic
    if (state.sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === "discount") {
        filtered.sort((a, b) => (b.mrp - b.price) - (a.mrp - a.price));
    }

    document.getElementById("productCountBadge").innerText = `${filtered.length} Items`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 12px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: #94A3B8; margin-bottom: 12px;"></i>
                <h4>No products found matching "${state.searchQuery}"</h4>
                <p style="color: #64748B; font-size: 0.85rem; margin-top: 4px;">Try searching for 'Rice', 'Milk', 'Atta' or clear filters.</p>
                <button onclick="resetSearch()" style="margin-top: 16px; background: #0F172A; color: white; padding: 8px 18px; border-radius: 20px; font-weight: 700;">Clear Search</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const qty = state.cart[p.id] || 0;
        return `
            <div class="product-card">
                <div class="card-badge-wrapper">
                    ${p.discount ? `<span class="badge-discount">${p.discount}</span>` : ''}
                    ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
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
                        <span class="rating-count">(${p.reviews})</span>
                    </div>

                    <div class="product-bottom-row">
                        <div class="price-box">
                            <span class="current-price">₹${p.price}</span>
                            ${p.mrp > p.price ? `<span class="mrp-price">₹${p.mrp}</span>` : ''}
                        </div>
                        
                        <div class="add-btn-wrapper">
                            ${qty === 0 ? `
                                <button class="btn-add-cart" onclick="addToCart('${p.id}')">
                                    ADD <i class="fa-solid fa-plus"></i>
                                </button>
                            ` : `
                                <div class="qty-stepper">
                                    <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty - 1})"><i class="fa-solid fa-minus"></i></button>
                                    <span>${qty}</span>
                                    <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty + 1})"><i class="fa-solid fa-plus"></i></button>
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
// 5. Shopping Cart Core Logic
// --------------------------------------------------------------------------

function addToCart(productId) {
    state.cart[productId] = (state.cart[productId] || 0) + 1;
    saveCartToLocalStorage();
    updateCartUI();
    renderProducts();

    const product = productsData.find(p => p.id === productId);
    showToast(`Added <strong>${product.name}</strong> to cart!`);
}

function updateItemQuantity(productId, newQty) {
    if (newQty <= 0) {
        delete state.cart[productId];
    } else {
        state.cart[productId] = newQty;
    }
    saveCartToLocalStorage();
    updateCartUI();
    renderProducts();
}

function updateCartUI() {
    let totalItems = 0;
    let mrpTotal = 0;
    let payTotal = 0;

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

    // Apply Coupon if valid
    let finalPayable = payTotal - state.discountAmount;
    if (finalPayable < 0) finalPayable = 0;

    // Delivery Fee Logic (Free above ₹199)
    const deliveryThreshold = 199;
    let deliveryFee = 0;
    if (payTotal > 0 && payTotal < deliveryThreshold) {
        deliveryFee = 30;
    }

    if (payTotal > 0) {
        finalPayable += deliveryFee;
    }

    // Update Header Badges
    document.getElementById("cartCountBadge").innerText = totalItems;
    document.getElementById("headerCartTotal").innerText = `₹${finalPayable}`;

    // Update Mobile Bottom Nav & Sticky Cart Bar
    document.getElementById("navCartBadge").innerText = totalItems;
    document.getElementById("mobileCartItemCount").innerText = totalItems;
    document.getElementById("mobileCartPrice").innerText = `₹${finalPayable}`;

    const mobileBar = document.getElementById("mobileCartBar");
    if (totalItems > 0) {
        mobileBar.style.display = "flex";
    } else {
        mobileBar.style.display = "none";
    }

    // Update Drawer Contents
    renderCartDrawerBody(totalItems);

    // Update Drawer Footer Figures
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

    // Free Delivery Progress
    const freeBarProgress = Math.min(100, (payTotal / deliveryThreshold) * 100);
    document.getElementById("freeDeliveryProgress").style.width = `${freeBarProgress}%`;
    const needed = deliveryThreshold - payTotal;
    if (needed > 0 && payTotal > 0) {
        document.getElementById("freeDeliveryText").innerHTML = `Add <strong>₹${needed}</strong> more for <strong>FREE Delivery</strong>`;
    } else if (payTotal >= deliveryThreshold) {
        document.getElementById("freeDeliveryText").innerHTML = `🎉 You unlocked <strong>FREE 10-Min Delivery!</strong>`;
    } else {
        document.getElementById("freeDeliveryText").innerHTML = `Add items to enjoy <strong>FREE 10-Min Delivery</strong>`;
    }
}

function renderCartDrawerBody(totalItems) {
    const body = document.getElementById("cartDrawerBody");
    if (totalItems === 0) {
        body.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <h4>Your Cart is Empty</h4>
                <p>Explore daily fresh groceries & essentials to add items to your cart.</p>
                <button onclick="closeCartDrawer()" style="margin-top: 12px; background: #10B981; color: white; padding: 10px 24px; border-radius: 20px; font-weight: 700;">Start Shopping</button>
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
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${p.name}</h4>
                        <div class="cart-item-weight">${p.weight}</div>
                        <div class="cart-item-price">₹${p.price * qty} <small style="font-weight:normal; color:#94A3B8;">(₹${p.price} x ${qty})</small></div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-stepper">
                            <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty - 1})"><i class="fa-solid fa-minus"></i></button>
                            <span>${qty}</span>
                            <button class="qty-btn" onclick="updateItemQuantity('${p.id}', ${qty + 1})"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    body.innerHTML = html;
}

// Drawer Open/Close
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
        state.activeCoupon = "ARK50";
        state.discountAmount = 50;
        msg.innerText = "✓ Promo code ARK50 applied! ₹50 Discount";
        msg.style.color = "#059669";
        document.getElementById("couponDiscountRow").style.display = "flex";
        document.getElementById("billCouponSavings").innerText = "-₹50";
        updateCartUI();
        showToast("Coupon ARK50 Applied!");
    } else if (code === "WELCOME100") {
        state.activeCoupon = "WELCOME100";
        state.discountAmount = 100;
        msg.innerText = "✓ Coupon WELCOME100 applied! ₹100 Discount";
        msg.style.color = "#059669";
        document.getElementById("couponDiscountRow").style.display = "flex";
        document.getElementById("billCouponSavings").innerText = "-₹100";
        updateCartUI();
        showToast("Coupon WELCOME100 Applied!");
    } else {
        msg.innerText = "✕ Invalid promo code. Try ARK50";
        msg.style.color = "#EF4444";
    }
});

// --------------------------------------------------------------------------
// 6. Checkout & Payment Modal Flow
// --------------------------------------------------------------------------
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
    // VPA Verify Simulator
    document.getElementById("verifyVpaBtn").addEventListener("click", () => {
        const vpa = document.getElementById("upiVpaInput").value.trim();
        const status = document.getElementById("vpaStatus");
        if (vpa.includes("@")) {
            status.innerText = "✓ UPI ID Verified Successfully (Verified User)";
            status.style.color = "#059669";
        } else {
            status.innerText = "✕ Please enter a valid UPI ID (e.g. mobile@upi)";
            status.style.color = "#EF4444";
        }
    });

    // Pay Now Submit
    document.getElementById("payNowBtn").addEventListener("click", () => {
        const name = document.getElementById("custName").value.trim();
        const phone = document.getElementById("custPhone").value.trim();

        if (!name || !phone) {
            alert("Please provide your delivery name and mobile number.");
            return;
        }

        // Show Processing State
        const btn = document.getElementById("payNowBtn");
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Payment...`;

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = `<span>Pay & Place Order</span> <span class="pay-btn-price" id="payBtnAmount">${document.getElementById("checkoutPayableAmount").innerText}</span>`;
            
            closeCheckoutModal();
            triggerOrderSuccess(name);
        }, 1500);
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
            <span>Total Items:</span> <strong>${itemCount} Items</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span>Amount Paid:</span> <strong style="color:#059669">${document.getElementById("billGrandTotal").innerText}</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
            <span>Payment Mode:</span> <strong>UPI / Instant Payment</strong>
        </div>
    `;

    // Clear Cart
    state.cart = {};
    saveCartToLocalStorage();
    updateCartUI();
    renderProducts();

    document.getElementById("orderSuccessModal").classList.add("active");
}

function closeSuccessModal() {
    document.getElementById("orderSuccessModal").classList.remove("active");
}

// --------------------------------------------------------------------------
// 7. Search, Carousel & Utility Functions
// --------------------------------------------------------------------------
function initSearch() {
    const input = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearchBtn");
    const suggestions = document.getElementById("searchSuggestions");

    input.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.length > 0) {
            clearBtn.style.display = "block";
            showSearchSuggestions(state.searchQuery);
        } else {
            clearBtn.style.display = "none";
            suggestions.classList.remove("active");
        }
        renderProducts();
    });

    clearBtn.addEventListener("click", resetSearch);

    // Sort select
    document.getElementById("sortSelect").addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });
}

function resetSearch() {
    state.searchQuery = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("clearSearchBtn").style.display = "none";
    document.getElementById("searchSuggestions").classList.remove("active");
    renderProducts();
}

function showSearchSuggestions(query) {
    const suggestions = document.getElementById("searchSuggestions");
    const matches = productsData.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
    
    if (matches.length > 0) {
        suggestions.innerHTML = matches.map(p => `
            <div class="suggestion-item" onclick="selectSuggestion('${p.name}')">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>${p.name}</span>
                <small style="margin-left:auto; color:#94A3B8;">${p.category}</small>
            </div>
        `).join("");
        suggestions.classList.add("active");
    } else {
        suggestions.classList.remove("active");
    }
}

function selectSuggestion(name) {
    state.searchQuery = name;
    document.getElementById("searchInput").value = name;
    document.getElementById("searchSuggestions").classList.remove("active");
    renderProducts();
}

// Hero Carousel Slider
let currentSlide = 0;
function initCarousel() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        goToSlide(currentSlide);
    }, 4500);
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const track = document.getElementById("carouselTrack");
    if (track) {
        track.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    const dots = document.querySelectorAll(".carousel-dots .dot");
    dots.forEach((dot, idx) => {
        if (idx === slideIndex) dot.classList.add("active");
        else dot.classList.remove("active");
    });
}

// Flash Deals Timer Countdown
function startFlashTimer() {
    let totalSeconds = 2 * 3600 + 45 * 60 + 12;
    const timerElem = document.getElementById("flashTimer");

    setInterval(() => {
        if (totalSeconds <= 0) return;
        totalSeconds--;
        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        if (timerElem) {
            timerElem.innerText = `${hrs}:${mins}:${secs}`;
        }
    }, 1000);
}

// Toast Notifications
function showToast(message) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast success";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2800);
}

function showOffers(e) {
    if (e) e.preventDefault();
    showToast("⚡ Flat 50% OFF applied on Daily Staples! Code: ARK50");
}
