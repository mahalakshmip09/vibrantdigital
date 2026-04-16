/* =============================================
   LOVELY CARDS – app.js
   Site interactions & dynamic content
   ============================================= */

'use strict';

// ─── DATA ─────────────────────────────────────


const PRODUCTS = [
  { id: 1, name: 'Personalized Wedding Invite-322', price: 45.50, badge: 'New', emoji: '💐', colors: ['#fde8d8','#f9c8a0'] },
  { id: 2, name: 'Personalized Wedding Invite-211', price: 55.00, badge: 'Bestseller', emoji: '🌸', colors: ['#e8f5e8','#c0e0c0'] },
  { id: 3, name: 'Personalized Wedding Invite-320', price: 35.00, badge: null, emoji: '✨', colors: ['#e8e0f8','#c8b8f0'] },
  { id: 4, name: 'VISTAS-01',                        price: 14.25, badge: 'Sale', emoji: '🕊️', colors: ['#fdf0d8','#f5d890'] },
  { id: 5, name: 'Acrylic Crystal Invite',           price: 120.00, badge: 'Premium', emoji: '💎', colors: ['#e0f4f8','#a8d8e8'] },
  { id: 6, name: 'Metallic Horizon Invite',          price: 85.00, badge: 'New', emoji: '✦', colors: ['#f5e8d0','#e0c070'] },
  { id: 7, name: 'Scroll Wedding Card',              price: 28.00, badge: null, emoji: '📜', colors: ['#f8f0e0','#e8d0a0'] },
  { id: 8, name: 'Custom Caricature Invite',         price: 75.00, badge: 'Popular', emoji: '🎨', colors: ['#ffe8e8','#f0b0b0'] },
];

// Add this ONE line right after your PRODUCTS array
const WHATSAPP_NUMBER = "917871920405"; // ← replace with your number  
const INSTA_COLORS = [
  ['#fde8d8','#f0b898'],
  ['#e8d5f0','#c9a8e8'],
  ['#d8f0e8','#a0d8b8'],
  ['#fdf0d8','#f5d890'],
  ['#e0f4f8','#a8d8e8'],
  ['#f5e8d0','#e0c070'],
  ['#ffe8e8','#f0b0b0'],
  ['#e8f5e8','#b0d8b0'],
];
const INSTA_EMOJIS = ['💍','💐','🕊️','✨','💎','🌸','🎨','📜'];

// ─── CART STATE ────────────────────────────────
let cart = JSON.parse(localStorage.getItem('lc_cart') || '[]');

function saveCart() {
  localStorage.setItem('lc_cart', JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = getCartCount();
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✓ "${product.name}" added to cart`);
}

// ─── TOAST ─────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── WHATSAPP ORDER ────────────────────────────
function sendToWhatsApp() {
  if (cart.length === 0) {
    showToast('🛒 Your cart is empty!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  let msg = `🛒 *New Order — Vibrant Digital Printers*\n\n*Items:*\n`;
  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.name}\n   Qty: ${item.qty} × ₹${item.price.toFixed(2)} = ₹${(item.price * item.qty).toFixed(2)}\n`;
  });
  msg += `\n━━━━━━━━━━━━━━━\n*Total: ₹${total.toFixed(2)}*\n\nPlease confirm my order 🙏`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}
// ─── PRODUCTS GRID ─────────────────────────────
function getBadgeClass(badge) {
  if (!badge) return '';
  const map = { 'New': 'badge-new', 'Bestseller': 'badge-bestseller', 'Sale': 'badge-sale', 'Premium': 'badge-bestseller', 'Popular': 'badge-new' };
  return map[badge] || 'badge-new';
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <div class="product-img-placeholder" style="background:linear-gradient(135deg,${p.colors[0]},${p.colors[1]})">
          ${p.emoji}
        </div>
        ${p.badge ? `<span class="product-badge ${getBadgeClass(p.badge)}">${p.badge}</span>` : ''}
        <button class="product-wishlist" aria-label="Wishlist" data-id="${p.id}">♡</button>
        <button class="product-quick-add btn-add" data-id="${p.id}">Add to Cart</button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">₹ ${p.price.toFixed(2)}</p>
      </div>
    </div>
  `).join('');

  // Attach events
  grid.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(Number(btn.dataset.id));
    });
  });

  grid.querySelectorAll('.product-wishlist').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
      btn.style.color = btn.textContent === '♥' ? '#e05252' : '';
    });
  });

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      showToast('Product detail page coming soon!');
    });
  });
}


// ─── INSTAGRAM GRID ────────────────────────────
function renderInstagram() {
  const grid = document.getElementById('instaGrid');
  if (!grid) return;
  grid.innerHTML = INSTA_EMOJIS.map((emoji, i) => `
    <div class="insta-item">
      <div class="insta-item-inner" style="background:linear-gradient(135deg,${INSTA_COLORS[i][0]},${INSTA_COLORS[i][1]})">
        ${emoji}
      </div>
      <div class="insta-overlay">📷</div>
    </div>
  `).join('');
}

// ─── TESTIMONIALS CAROUSEL ─────────────────────
function initCarousel() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let timer;

  function goTo(index) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo((current + 1) % cards.length); }

  function startAuto() { timer = setInterval(next, 5000); }
  function stopAuto() { clearInterval(timer); }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(Number(dot.dataset.index));
      startAuto();
    });
  });

  startAuto();
}

// ─── HEADER SCROLL ─────────────────────────────
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ─── SEARCH ────────────────────────────────────
function initSearch() {
  const overlay  = document.getElementById('searchOverlay');
  const toggleBtn = document.getElementById('searchToggle');
  const closeBtn = document.getElementById('searchClose');
  const input    = document.getElementById('searchInput');
  if (!overlay) return;

  const open = () => {
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 100);
  };
  const close = () => overlay.classList.remove('open');

  toggleBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) { showToast(`Searching for "${q}"…`); close(); input.value = ''; }
    }
  });
}

// ─── MOBILE NAV ────────────────────────────────
function initMobileNav() {
  const toggle  = document.getElementById('menuToggle');
  const nav     = document.getElementById('mainNav');
  const overlay = document.getElementById('mobileNavOverlay');
  if (!toggle) return;

  const open = () => {
    toggle.classList.add('open');
    nav.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    toggle.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);

  // Accordion for mobile nav items
  document.querySelectorAll('.nav-item.has-dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

// ─── PILL FILTER ───────────────────────────────
function initPills() {
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
}

// ─── NEWSLETTER ────────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    showToast(`✓ Subscribed! Welcome aboard.`);
    input.value = '';
  });
}

// ─── SCROLL REVEAL ─────────────────────────────
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.product-card, .feature-cat-card, .why-card, .stat, .insta-item'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'heroFadeIn 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}

// ─── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderInstagram();
  initCarousel();
  initHeaderScroll();
  initSearch();
  initMobileNav();
  initPills();
  initNewsletter();
  initScrollReveal();
  updateCartUI();

  // Restore cart from storage
  cart = JSON.parse(localStorage.getItem('lc_cart') || '[]');
  updateCartUI();
});
