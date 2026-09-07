/* ============================================================
   KD ROYAL NAGPUR — Central Product Catalog & Global Utilities
   Shop: KD Royal Nagpur (@kd_royal_nagpur)
   Contact: +91 7385360886
   Location: Nagpur, Maharashtra (Maps: 21.142233, 79.080681)
   ============================================================ */

const STORE_CONFIG = {
  name: "KD Royal Nagpur",
  phone: "7385360886",
  phoneDisplay: "+91 7385360886",
  instagram: "https://www.instagram.com/kd_royal_nagpur/",
  instagramHandle: "@kd_royal_nagpur",
  mapsUrl: "https://maps.google.com/?q=21.142233%2C79.080681",
  tagline: "Women's Footwear Boutique · Nagpur",
  shipping: "All India Shipping 🚚",
  terms: "Fixed Rate · No COD"
};

const PRODUCTS = [
  {
    id: 1,
    name: "YSL Signature Black Heels",
    type: "Monogram Ankle Strap · Black Patent",
    category: "heels",
    tag: "Trending",
    badgeType: "hot",
    featured: true,
    sizes: [36, 37, 38, 39, 40],
    description: "Iconic YSL-inspired luxury metallic heel with adjustable ankle strap and glossy black patent finish. Perfect for parties, weddings, and formal evenings.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    name: "Crystal Bow Platform Wedges",
    type: "Dual Rhinestone Brooch · Beige",
    category: "sandals",
    tag: "New",
    badgeType: "new",
    featured: true,
    sizes: [36, 37, 38, 39],
    description: "Ultra-comfortable lightweight platform wedge featuring twin crystal-studded bow ornaments. Cushioned contoured footbed for all-day elegance.",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    name: "Cloud Bow Cushion Slides",
    type: "Puffy Bow Slip-on · Ivory White",
    category: "slippers",
    tag: "Bestseller",
    badgeType: "hot",
    featured: true,
    sizes: [36, 37, 38, 39, 40],
    description: "Plush ergonomic curved sole with an oversized delicate bow in soft milk cream leatherette. The go-to comfortable slip-on for modern daily wear.",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4,
    name: "Glossy Patent Ankle Boots",
    type: "Side Zip High Ankle · Jet Black",
    category: "boots",
    tag: "Limited Stock",
    badgeType: "limited",
    featured: true,
    sizes: [36, 37, 38, 39, 40],
    description: "Sleek pointed toe patent boots with sculptured heel and inner zipper. High fashion statement silhouette directly from runway trends.",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 5,
    name: "Embellished Pointed Ballet Flats",
    type: "Crystal Buckle Mules · Nude Pink",
    category: "flats",
    tag: "New",
    badgeType: "new",
    featured: true,
    sizes: [36, 37, 38, 39],
    description: "Refined pointed toe silhouette embellished with sparkling micro-rhinestones. Features memory foam padding and non-slip rubber sole.",
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 6,
    name: "Classic Ivory Block Heel Pumps",
    type: "Closed Toe · Nude Pearl & Gold",
    category: "heels",
    tag: "Hot",
    badgeType: "hot",
    featured: true,
    sizes: [36, 37, 38, 39, 40],
    description: "Sturdy mid block heel designed for effortless walking. Soft breathable leather lining and timeless round-pointed toe.",
    images: [
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 7,
    name: "Golden Starlight Stiletto Sandals",
    type: "Strappy Party Sandal · Metallic Gold",
    category: "sandals",
    tag: "Party Wear",
    badgeType: "new",
    featured: true,
    sizes: [36, 37, 38],
    description: "Glamorous multi-strap glitter sandals that shimmer under ambient light. Delicate ankle wrap buckle for a secure, flattering fit.",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 8,
    name: "Signature Horsebit Loafers",
    type: "Dual Tone Loafers · Black & Mocha",
    category: "flats",
    tag: "Classic",
    badgeType: "classic",
    featured: true,
    sizes: [36, 37, 38, 39, 40],
    description: "Chic Belgian-style loafers with gold horsebit hardware. Premium synthetic leather, flexible sole, pairs effortlessly with trousers or dresses.",
    images: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 9,
    name: "Diamante Shimmer Slide Sandals",
    type: "Open Toe Slide · Champagne Rose",
    category: "sandals",
    tag: "Fast Moving",
    badgeType: "hot",
    featured: false,
    sizes: [36, 37, 38, 39],
    description: "Dazzling crystal-mesh strap over a cushioned footbed. Lightweight and easy to slip on for celebrations and festive outings.",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 10,
    name: "Criss-Cross Ankle Strap Wedges",
    type: "Braided Platform · Caramel Tan",
    category: "sandals",
    tag: "Summer Hit",
    badgeType: "new",
    featured: false,
    sizes: [36, 37, 38, 39, 40],
    description: "Supportive wedge heel with criss-cross faux leather straps and buckle closure. Combines height with supreme stability.",
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 11,
    name: "Chelsea Heeled Ankle Boots",
    type: "Elastic Gusset Boot · Chestnut Tan",
    category: "boots",
    tag: "Trending",
    badgeType: "hot",
    featured: false,
    sizes: [36, 37, 38, 39],
    description: "Classic Chelsea styling with pull tab and ribbed stretch panel. Comfortable block heel suitable for casual autumn and winter styling.",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 12,
    name: "Blush Quilted Bow Slippers",
    type: "Slip-on Mule · Rose Pink",
    category: "slippers",
    tag: "New Arrival",
    badgeType: "new",
    featured: false,
    sizes: [36, 37, 38, 39],
    description: "Soft diamond-quilted footbed finished with a neat satin bow. Lightweight, anti-skid indoor and casual outdoor slip-ons.",
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 13,
    name: "Royal Ethnic Kolhapuri Wedges",
    type: "Embroidered T-Strap · Rose Gold",
    category: "sandals",
    tag: "Ethnic Wear",
    badgeType: "hot",
    featured: false,
    sizes: [36, 37, 38, 39, 40],
    description: "Traditional Maharashtrian Kolhapuri artistry updated with a comfortable wedge base and golden braided embellishments.",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 14,
    name: "Clear Lucite Glass Block Heels",
    type: "Transparent Strap · Glass Heel",
    category: "heels",
    tag: "Runway",
    badgeType: "limited",
    featured: false,
    sizes: [36, 37, 38, 39],
    description: "Modern Cinderella-look clear acrylic block heels. Lengthens legs visually and matches almost any evening dress or lehenga.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 15,
    name: "Artisan Motif Comfort Clogs",
    type: "Chunky Platform Slide · Navy & White",
    category: "slippers",
    tag: "Solaworld Vibe",
    badgeType: "new",
    featured: false,
    sizes: [36, 37, 38, 39, 40],
    description: "Chunky ergonomic clogs adorned with paisley tapestry fabric. Built for superior cushioning, inspired by contemporary boutique footwear trends.",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&auto=format&fit=crop&q=80"
    ]
  }
];

/* ============================================================
   GLOBAL UTILITIES: Wishlist, Modal, WhatsApp Links
   ============================================================ */

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("kdroyal_wishlist")) || [];
  } catch (e) {
    return [];
  }
}

function toggleWishlist(id) {
  let list = getWishlist();
  const index = list.indexOf(id);
  if (index > -1) {
    list.splice(index, 1);
  } else {
    list.push(id);
  }
  try {
    localStorage.setItem("kdroyal_wishlist", JSON.stringify(list));
  } catch (e) {}
  document.dispatchEvent(new CustomEvent("wishlistUpdated", { detail: { id, list } }));
  return list.includes(id);
}

function buildWhatsAppUrl(product, size = "") {
  let msg = `Hi KD Royal Nagpur! I saw your footwear collection on your website and would like to check availability for:\n\n*${product.name}* (${product.type})`;
  if (size) {
    msg += `\nPreferred Size: *${size}*`;
  }
  msg += `\n\nIs this currently in stock for shipping to my address? Thank you!`;
  return `https://wa.me/91${STORE_CONFIG.phone}?text=${encodeURIComponent(msg)}`;
}

/* ============================================================
   SHARED QUICK-VIEW MODAL CONTROLLER
   ============================================================ */

let currentProduct = null;
let currentSlide = 0;
let autoplayTimer = null;
let selectedSize = null;

function openProductModal(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  if (!currentProduct) return;
  currentSlide = 0;
  selectedSize = currentProduct.sizes[0] || null;

  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;

  const modalTag = document.getElementById("modal-tag");
  const modalName = document.getElementById("modal-name");
  const modalType = document.getElementById("modal-type");
  const modalDesc = document.getElementById("modal-desc");
  const modalSizes = document.getElementById("modal-sizes");
  const modalWa = document.getElementById("modal-whatsapp");
  const modalCall = document.getElementById("modal-call");
  const track = document.getElementById("carousel-track");
  const dotsWrap = document.getElementById("carousel-dots");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const modalWishlistBtn = document.getElementById("modal-wishlist-btn");

  if (modalTag) {
    modalTag.textContent = currentProduct.tag;
    modalTag.className = `modal-tag ${currentProduct.badgeType || ""}`;
  }
  if (modalName) modalName.textContent = currentProduct.name;
  if (modalType) modalType.textContent = currentProduct.type;
  if (modalDesc) modalDesc.textContent = currentProduct.description || "In stock at KD Royal Nagpur. Ready for dispatch across India.";

  if (modalSizes) {
    modalSizes.innerHTML = currentProduct.sizes
      .map(s => `<button type="button" class="size-chip ${s === selectedSize ? 'active' : ''}" data-size="${s}">${s}</button>`)
      .join("");

    modalSizes.querySelectorAll(".size-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        modalSizes.querySelectorAll(".size-chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.dataset.size;
        updateModalWaLink();
      });
    });
  }

  function updateModalWaLink() {
    if (modalWa) {
      modalWa.href = buildWhatsAppUrl(currentProduct, selectedSize);
    }
  }
  updateModalWaLink();

  if (modalCall) {
    modalCall.href = `tel:${STORE_CONFIG.phone}`;
  }

  if (modalWishlistBtn) {
    const isWished = getWishlist().includes(currentProduct.id);
    modalWishlistBtn.classList.toggle("active", isWished);
    modalWishlistBtn.onclick = (e) => {
      e.stopPropagation();
      const active = toggleWishlist(currentProduct.id);
      modalWishlistBtn.classList.toggle("active", active);
    };
  }

  // Setup Carousel Images
  if (track) {
    track.innerHTML = currentProduct.images
      .map(src => `<div class="carousel-slide"><img src="${src}" alt="${currentProduct.name}" loading="eager"></div>`)
      .join("");
  }

  const multi = currentProduct.images.length > 1;
  if (dotsWrap) {
    dotsWrap.style.display = multi ? "flex" : "none";
    dotsWrap.innerHTML = currentProduct.images
      .map((_, i) => `<button type="button" class="carousel-dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`)
      .join("");
  }

  if (prevBtn) prevBtn.style.display = multi ? "flex" : "none";
  if (nextBtn) nextBtn.style.display = multi ? "flex" : "none";

  goToSlide(0);
  overlay.classList.add("open");
  document.body.classList.add("modal-open");

  if (multi) startAutoplay();
}

function closeProductModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("open");
  document.body.classList.remove("modal-open");
  stopAutoplay();
}

function goToSlide(i) {
  if (!currentProduct) return;
  const track = document.getElementById("carousel-track");
  const dotsWrap = document.getElementById("carousel-dots");
  const total = currentProduct.images.length;
  currentSlide = (i + total) % total;
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  if (dotsWrap) {
    dotsWrap.querySelectorAll(".carousel-dot").forEach((d, idx) => {
      d.classList.toggle("active", idx === currentSlide);
    });
  }
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 3200);
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

// Global modal event listeners setup
function setupGlobalModalEvents() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const dotsWrap = document.getElementById("carousel-dots");
  const carouselEl = document.getElementById("carousel");

  if (closeBtn) closeBtn.addEventListener("click", closeProductModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProductModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("open")) {
      closeProductModal();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
      stopAutoplay();
      startAutoplay();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
      stopAutoplay();
      startAutoplay();
    });
  }

  if (dotsWrap) {
    dotsWrap.addEventListener("click", (e) => {
      const dot = e.target.closest(".carousel-dot");
      if (!dot) return;
      goToSlide(Number(dot.dataset.i));
      stopAutoplay();
      startAutoplay();
    });
  }

  if (carouselEl) {
    let touchStartX = 0;
    carouselEl.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoplay();
    }, { passive: true });

    carouselEl.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (dx > 45) {
        goToSlide(currentSlide - 1);
      } else if (dx < -45) {
        goToSlide(currentSlide + 1);
      }
      if (currentProduct && currentProduct.images.length > 1) {
        startAutoplay();
      }
    }, { passive: true });
  }
}

// Check deep-link query parameter (e.g. ?product=3 or ?id=3)
function checkDeepLinkModal() {
  const params = new URLSearchParams(window.location.search);
  const pid = params.get("id") || params.get("product");
  if (pid) {
    const idNum = parseInt(pid, 10);
    if (!isNaN(idNum)) {
      setTimeout(() => openProductModal(idNum), 300);
    }
  }
}

// Mobile menu toggle
function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        menu.classList.remove("open");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupGlobalModalEvents();
  setupMobileMenu();
  checkDeepLinkModal();
});
