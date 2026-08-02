/* ==========================================================================
   ARKMart Application Logic & Interactive Features
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. FMCG Product Dataset (Custom Brand ARKMart)
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

// State
let state = {
    selectedCategory: "All",
    searchQuery: "",
    sortBy: "popular",
    cart: {},
    activeCoupon: null,
    discountAmount: 0
};

// Initializer
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
            <div class="product-card">
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
