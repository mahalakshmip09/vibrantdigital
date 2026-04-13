// =============================================
// LOVELY CARDS – App.jsx
// React version – run with Vite or CRA
// npm install && npm run dev
// =============================================

import { useState, useEffect, useRef } from 'react';

// ─── DATA ─────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: 'Personalized Wedding Invite-322', price: 45.50, badge: 'New',        emoji: '💐', colors: ['#fde8d8','#f9c8a0'] },
  { id: 2, name: 'Personalized Wedding Invite-211', price: 55.00, badge: 'Bestseller', emoji: '🌸', colors: ['#e8f5e8','#c0e0c0'] },
  { id: 3, name: 'Personalized Wedding Invite-320', price: 35.00, badge: null,          emoji: '✨', colors: ['#e8e0f8','#c8b8f0'] },
  { id: 4, name: 'VISTAS-01',                        price: 14.25, badge: 'Sale',        emoji: '🕊️', colors: ['#fdf0d8','#f5d890'] },
  { id: 5, name: 'Acrylic Crystal Invite',           price: 120.0, badge: 'Premium',    emoji: '💎', colors: ['#e0f4f8','#a8d8e8'] },
  { id: 6, name: 'Metallic Horizon Invite',          price: 85.00, badge: 'New',        emoji: '✦',  colors: ['#f5e8d0','#e0c070'] },
  { id: 7, name: 'Scroll Wedding Card',              price: 28.00, badge: null,          emoji: '📜', colors: ['#f8f0e0','#e8d0a0'] },
  { id: 8, name: 'Custom Caricature Invite',         price: 75.00, badge: 'Popular',    emoji: '🎨', colors: ['#ffe8e8','#f0b0b0'] },
];

const TESTIMONIALS = [
  { text: '"The service of the staff is very polite. The store has a variety of cards. It was an immense pleasure to buy our wedding invitation in Lovely Cards."', name: 'Darshini K.' },
  { text: '"Lovely Cards exceeded our expectations in every way. Their designs were stunning and perfectly captured our vision. The quality was impeccable."',        name: 'Gokul Das' },
  { text: '"Good collection of cards at valuable price range, very good customer support with prompt response and punctual delivery. Would definitely recommend."',   name: 'Mohan Kumar' },
];

const INSTA_EMOJIS = ['💍','💐','🕊️','✨','💎','🌸','🎨','📜'];
const INSTA_COLORS = [
  ['#fde8d8','#f0b898'],['#e8d5f0','#c9a8e8'],['#d8f0e8','#a0d8b8'],['#fdf0d8','#f5d890'],
  ['#e0f4f8','#a8d8e8'],['#f5e8d0','#e0c070'],['#ffe8e8','#f0b0b0'],['#e8f5e8','#b0d8b0'],
];

const BADGE_CLASSES = { New: 'badge-new', Bestseller: 'badge-bestseller', Sale: 'badge-sale', Premium: 'badge-bestseller', Popular: 'badge-new' };

// ─── HOOKS ─────────────────────────────────────
function useCart() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lc_cart_react') || '[]'); } catch { return []; }
  });

  const saveCart = (c) => {
    setCart(c);
    localStorage.setItem('lc_cart_react', JSON.stringify(c));
  };

  const addItem = (id) => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    const next = [...cart];
    const idx = next.findIndex(c => c.id === id);
    if (idx > -1) next[idx].qty++;
    else next.push({ id, name: product.name, price: product.price, qty: 1 });
    saveCart(next);
    return product.name;
  };

  const count = cart.reduce((s, c) => s + c.qty, 0);
  return { cart, addItem, count };
}

function useToast() {
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  const toast = (m) => {
    clearTimeout(timer.current);
    setMsg(m);
    setShow(true);
    timer.current = setTimeout(() => setShow(false), 3000);
  };
  return { msg, show, toast };
}

// ─── COMPONENTS ────────────────────────────────

function AnnouncementBar() {
  return (
    <div style={{ background:'#2c2416', color:'#f5e8d0', textAlign:'center', padding:'9px 24px', fontSize:'0.78rem', letterSpacing:'0.05em' }}>
      ✦ All products inclusive of tax &nbsp;|&nbsp; Worldwide Shipping Available ✦
    </div>
  );
}

function Header({ cartCount, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position:'sticky', top:0, zIndex:100, background:'#fffdf9',
      borderBottom:'1px solid #e8d8c0', display:'flex', alignItems:'center',
      justifyContent:'space-between', padding:'0 32px', height:'68px',
      boxShadow: scrolled ? '0 8px 32px rgba(44,36,22,0.10)' : '0 2px 12px rgba(44,36,22,0.06)',
      transition:'box-shadow 0.3s ease',
    }}>
      <a href="#" style={{ display:'flex', alignItems:'center', gap:10, fontFamily:"'Cormorant Garamond', serif", fontSize:'1.5rem', fontWeight:600, color:'#2c2416', textDecoration:'none' }}>
        <span style={{ color:'#b8894a' }}>✿</span> Lovely Cards
      </a>

      <nav style={{ display: menuOpen ? 'flex' : 'flex' }}>
        <ul style={{ display:'flex', gap:4, listStyle:'none', margin:0, padding:0 }}>
          {['Wedding Cards','Other Invitations','Diary & Calendar','Showroom'].map(item => (
            <li key={item}>
              <a href="#" style={{ display:'flex', alignItems:'center', gap:4, padding:'8px 14px', fontSize:'0.875rem', color:'#3d2e1e', borderRadius:6, textDecoration:'none', transition:'all 0.3s' }}
                onMouseEnter={e => { e.target.style.color='#b8894a'; e.target.style.background='#f5e8d0'; }}
                onMouseLeave={e => { e.target.style.color='#3d2e1e'; e.target.style.background='transparent'; }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <button onClick={onSearch} style={{ width:40, height:40, borderRadius:'50%', border:'none', background:'transparent', cursor:'pointer', fontSize:'1.1rem', color:'#3d2e1e', transition:'all 0.3s' }}
          onMouseEnter={e => { e.target.style.background='#f5e8d0'; e.target.style.color='#b8894a'; }}
          onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='#3d2e1e'; }}>
          🔍
        </button>
        <a href="#" style={{ position:'relative', width:40, height:40, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', color:'#3d2e1e' }}>
          🛍️
          {cartCount > 0 && (
            <span style={{ position:'absolute', top:4, right:4, width:16, height:16, background:'#b8894a', color:'#fff', borderRadius:'50%', fontSize:'0.65rem', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:600 }}>
              {cartCount}
            </span>
          )}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ position:'relative', minHeight:'88vh', display:'flex', alignItems:'center', background:'linear-gradient(135deg,#fdf6ec 0%,#f9eedc 50%,#fdf4e8 100%)', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 20% 80%,rgba(184,137,74,0.08) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(184,137,74,0.06) 0%,transparent 50%)' }} />
      <div style={{ position:'relative', zIndex:2, maxWidth:680, padding:'80px 32px 80px clamp(32px,8vw,120px)' }}>
        <p style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'#b8894a', marginBottom:20 }}>
          <span style={{ width:32, height:1, background:'#b8894a', display:'block' }} />
          New Wedding Cards
        </p>
        <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(3rem,7vw,5.5rem)', fontWeight:300, lineHeight:1.1, color:'#2c2416', marginBottom:20 }}>
          Make Your Special<br />
          <em style={{ fontStyle:'italic', color:'#b8894a' }}>Day Personal</em>
        </h1>
        <p style={{ fontSize:'1rem', color:'#7a6350', maxWidth:480, marginBottom:36, lineHeight:1.7 }}>
          Handcrafted invitation cards for every occasion — weddings, birthdays, housewarmings & more.
        </p>
        <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
          <a href="#products" style={{ display:'inline-flex', padding:'13px 32px', borderRadius:50, background:'#b8894a', color:'#fff', fontSize:'0.875rem', fontWeight:500, letterSpacing:'0.04em', textDecoration:'none', boxShadow:'0 4px 16px rgba(184,137,74,0.3)', transition:'all 0.3s' }}>
            Shop Now
          </a>
          <a href="#categories" style={{ display:'inline-flex', padding:'13px 32px', borderRadius:50, border:'1.5px solid #b8894a', color:'#b8894a', fontSize:'0.875rem', fontWeight:500, letterSpacing:'0.04em', textDecoration:'none', transition:'all 0.3s' }}>
            Browse Collections
          </a>
        </div>
      </div>
      <div style={{ position:'absolute', bottom:40, right:80, width:90, height:90, background:'#b8894a', borderRadius:'50%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'#fff', fontFamily:"'Cormorant Garamond', serif", fontSize:'1.4rem', fontWeight:600, lineHeight:1.1, textAlign:'center', boxShadow:'0 8px 32px rgba(184,137,74,0.35)' }}>
        20<br/><span style={{ fontSize:'0.65rem', letterSpacing:'0.1em' }}>Years</span>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background:'#fffdf9', borderRadius:12, overflow:'hidden', border:'1px solid #e8d8c0', transition:'all 0.3s', transform: hovered ? 'translateY(-6px)' : 'none', boxShadow: hovered ? '0 20px 60px rgba(44,36,22,0.14)' : '0 2px 12px rgba(44,36,22,0.06)', cursor:'pointer', position:'relative' }}>
      <div style={{ position:'relative', aspectRatio:'3/4', overflow:'hidden', background:'#f5e8d0' }}>
        <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem', background:`linear-gradient(135deg,${product.colors[0]},${product.colors[1]})`, transition:'transform 0.3s', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}>
          {product.emoji}
        </div>
        {product.badge && (
          <span style={{ position:'absolute', top:12, left:12, padding:'4px 12px', borderRadius:50, fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.05em', textTransform:'uppercase', background: product.badge === 'Sale' ? '#e05252' : product.badge === 'Bestseller' ? '#2c2416' : '#b8894a', color:'#fff' }}>
            {product.badge}
          </span>
        )}
        <button onClick={() => setWishlisted(!wishlisted)} style={{ position:'absolute', top:12, right:12, width:34, height:34, background:'#fff', borderRadius:'50%', border:'none', cursor:'pointer', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 12px rgba(44,36,22,0.06)', opacity: hovered ? 1 : 0, transition:'opacity 0.3s', color: wishlisted ? '#e05252' : '#3d2e1e' }}>
          {wishlisted ? '♥' : '♡'}
        </button>
        <button onClick={() => onAdd(product.id)} style={{ position:'absolute', bottom:0, left:0, right:0, background:'#b8894a', color:'#fff', padding:12, textAlign:'center', fontSize:'0.82rem', fontWeight:500, letterSpacing:'0.05em', border:'none', cursor:'pointer', transform: hovered ? 'translateY(0)' : 'translateY(100%)', transition:'transform 0.3s' }}>
          Add to Cart
        </button>
      </div>
      <div style={{ padding:'16px 18px 18px' }}>
        <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.05rem', fontWeight:400, color:'#2c2416', marginBottom:6, lineHeight:1.3 }}>
          {product.name}
        </h3>
        <p style={{ fontSize:'0.95rem', fontWeight:500, color:'#b8894a' }}>₹ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

function ProductsSection({ onAdd }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All','Wedding','Acrylic','Digital','Fancy Invites','Scroll Cards','Customized','Traditional'];

  return (
    <>
      {/* Pill Filters */}
      <div id="categories" style={{ padding:'28px 0', background:'#fffdf9', borderBottom:'1px solid #e8d8c0', position:'sticky', top:68, zIndex:50 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', gap:10, overflowX:'auto' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{ flexShrink:0, padding:'8px 20px', borderRadius:50, fontSize:'0.82rem', fontWeight:400, cursor:'pointer', border:'1.5px solid', transition:'all 0.3s', background: activeFilter === f ? '#b8894a' : '#fffdf9', color: activeFilter === f ? '#fff' : '#7a6350', borderColor: activeFilter === f ? '#b8894a' : '#e8d8c0' }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <section id="products" style={{ padding:'80px 0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <p style={{ fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'#b8894a', marginBottom:12 }}>Our Best Sellers</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:400, color:'#2c2416' }}>New Trending Cards</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:28 }}>
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <a href="#" style={{ display:'inline-flex', padding:'13px 32px', borderRadius:50, border:'1.5px solid #b8894a', color:'#b8894a', fontSize:'0.875rem', fontWeight:500, textDecoration:'none' }}>View All Products</a>
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[current];
  return (
    <section style={{ padding:'80px 0', background:'#fffdf9' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <p style={{ fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'#b8894a', marginBottom:12 }}>What Customers Say</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:400, color:'#2c2416' }}>Loved by Thousands</h2>
        </div>
        <div key={current} style={{ textAlign:'center', maxWidth:640, margin:'0 auto', animation:'fadeIn 0.4s ease' }}>
          <div style={{ fontSize:'1.2rem', color:'#b8894a', marginBottom:16, letterSpacing:4 }}>★★★★★</div>
          <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.2rem', fontStyle:'italic', color:'#3d2e1e', lineHeight:1.6, marginBottom:16 }}>{t.text}</p>
          <span style={{ fontSize:'0.82rem', color:'#7a6350', letterSpacing:'0.08em', textTransform:'uppercase' }}>— {t.name}</span>
        </div>
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 8, height:8, borderRadius:50, border:'none', cursor:'pointer', background: i === current ? '#b8894a' : '#e8d8c0', transition:'all 0.3s' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter({ toast }) {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { toast(`✓ Subscribed! Welcome aboard.`); setEmail(''); }
  };
  return (
    <section style={{ padding:'80px 0', background:'linear-gradient(135deg,#2c2416 0%,#3d2e1e 100%)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:40, flexWrap:'wrap' }}>
        <div>
          <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:300, color:'#fff', marginBottom:8 }}>Subscribe to Our Newsletter</h2>
          <p style={{ color:'#f5e8d0', fontSize:'0.9rem' }}>Get updates about new wedding invite launches, diaries & calendars.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"
            style={{ flex:1, minWidth:260, padding:'13px 20px', borderRadius:50, border:'1.5px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.08)', color:'#fff', fontFamily:"'DM Sans', sans-serif", fontSize:'0.9rem', outline:'none' }} />
          <button type="submit" style={{ padding:'13px 32px', borderRadius:50, background:'#b8894a', color:'#fff', border:'none', cursor:'pointer', fontSize:'0.875rem', fontWeight:500 }}>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background:'#1e170f', color:'#b8a090', padding:'64px 0 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 2fr', gap:40, paddingBottom:40, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:8, fontFamily:"'Cormorant Garamond', serif", fontSize:'1.3rem', color:'#f5e8d0', marginBottom:16 }}>
              <span style={{ color:'#b8894a' }}>✿</span> Lovely Cards
            </div>
            <p style={{ fontSize:'0.85rem', lineHeight:1.6, marginBottom:20 }}>Crafting beautiful memories since 2004. Premium invitation cards for every occasion.</p>
            <div style={{ display:'flex', gap:12, fontSize:'1.3rem' }}>
              {['📷','💬','📘'].map(icon => <a key={icon} href="#" style={{ transition:'transform 0.3s' }}>{icon}</a>)}
            </div>
          </div>
          {[
            { title: 'Quick Links', items: ['About Us','Contact Us','Search','Refund Policy','Terms of Service'] },
            { title: 'Our Company', items: ['Show Rooms','FAQ','Privacy Policy','Refund & Cancellation'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.05rem', fontWeight:500, color:'#f5e8d0', marginBottom:20 }}>{col.title}</h4>
              <ul style={{ listStyle:'none', padding:0, margin:0 }}>
                {col.items.map(item => <li key={item} style={{ marginBottom:10 }}><a href="#" style={{ fontSize:'0.85rem', color:'#b8a090', textDecoration:'none' }}>{item}</a></li>)}
              </ul>
            </div>
          ))}
          <div>
            <h4 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.05rem', fontWeight:500, color:'#f5e8d0', marginBottom:20 }}>We Offer</h4>
            {[['🌍','Worldwide Shipping','Available worldwide'],['💬','Customer Support','Executives a click away'],['🔄','Easy Returns','Damaged products replaced']].map(([icon, title, desc]) => (
              <div key={title} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:16 }}>
                <span style={{ fontSize:'1.4rem', flexShrink:0, marginTop:2 }}>{icon}</span>
                <div>
                  <strong style={{ display:'block', color:'#f5e8d0', fontSize:'0.875rem', marginBottom:2 }}>{title}</strong>
                  <p style={{ fontSize:'0.78rem', color:'#7a6350' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding:'20px 0', textAlign:'center', fontSize:'0.8rem', color:'#5a4838' }}>
          © 2026, Lovely Cards. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SearchOverlay({ open, onClose, onSearch }) {
  const [val, setVal] = useState('');
  const ref = useRef(null);
  useEffect(() => { if (open && ref.current) ref.current.focus(); }, [open]);
  const handleKey = (e) => {
    if (e.key === 'Enter' && val.trim()) { onSearch(val.trim()); setVal(''); onClose(); }
    if (e.key === 'Escape') onClose();
  };
  if (!open) return null;
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{ position:'fixed', inset:0, background:'rgba(44,36,22,0.7)', zIndex:300, display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:100 }}>
      <div style={{ display:'flex', width:'100%', maxWidth:600, background:'#fffdf9', borderRadius:50, overflow:'hidden', boxShadow:'0 20px 60px rgba(44,36,22,0.14)', margin:'0 24px' }}>
        <input ref={ref} value={val} onChange={e => setVal(e.target.value)} onKeyDown={handleKey} placeholder="Search for cards…"
          style={{ flex:1, padding:'16px 24px', border:'none', outline:'none', fontFamily:"'DM Sans',sans-serif", fontSize:'1rem', background:'transparent', color:'#3d2e1e' }} />
        <button onClick={onClose} style={{ padding:'0 20px', fontSize:'1.1rem', color:'#7a6350', background:'transparent', border:'none', cursor:'pointer' }}>✕</button>
      </div>
    </div>
  );
}

function Toast({ msg, show }) {
  return (
    <div style={{ position:'fixed', bottom:32, left:'50%', transform:`translateX(-50%) translateY(${show ? 0 : 20}px)`, background:'#2c2416', color:'#fff', padding:'12px 24px', borderRadius:50, fontSize:'0.875rem', boxShadow:'0 20px 60px rgba(44,36,22,0.14)', opacity: show ? 1 : 0, transition:'all 0.3s', zIndex:999, whiteSpace:'nowrap', pointerEvents:'none' }}>
      {msg}
    </div>
  );
}

// ─── APP ROOT ──────────────────────────────────
export default function App() {
  const { addItem, count } = useCart();
  const { msg, show, toast } = useToast();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleAdd = (id) => {
    const name = addItem(id);
    if (name) toast(`✓ "${name}" added to cart`);
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #faf6f0; color: #3d2e1e; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #faf6f0; }
        ::-webkit-scrollbar-thumb { background: #b8894a; border-radius: 3px; }
      `}</style>

      <AnnouncementBar />
      <Header cartCount={count} onSearch={() => setSearchOpen(true)} />
      <Hero />
      <ProductsSection onAdd={handleAdd} />

      {/* Why Us */}
      <section style={{ padding:'80px 0', background:'#faf6f0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <p style={{ fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', color:'#b8894a', marginBottom:12 }}>Our Craftsmanship</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:400, color:'#2c2416' }}>Why Lovely Cards?</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:24 }}>
            {[
              { icon:'🖨️', title:'Premium Printing',   desc:'Screen printing ensuring every invitation features sharp, vibrant visuals. Specialty foil & UV printing brings luxurious depth.' },
              { icon:'🪡', title:'Bead Dories & Details', desc:'We adorn our cards with enchanting bead dories offering a delicate flourish that captures the heart of your occasion.' },
              { icon:'✨', title:'Custom Stickers',    desc:'Interchangeable stickers to honor different occasions, cultures, and religious practices — unique to your story.' },
              { icon:'🎨', title:'Caricature Invites', desc:'Custom caricature invitations bringing a touch of whimsy and personalization to your special day.' },
            ].map(item => (
              <div key={item.title} style={{ padding:'32px 28px', background:'#fffdf9', border:'1px solid #e8d8c0', borderRadius:12, transition:'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(44,36,22,0.10)'; e.currentTarget.style.borderColor='#d4a96a'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='#e8d8c0'; }}>
                <div style={{ fontSize:'2.2rem', marginBottom:16 }}>{item.icon}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'1.2rem', fontWeight:500, color:'#2c2416', marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:'0.875rem', color:'#7a6350', lineHeight:1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:'#2c2416', padding:'60px 0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32, textAlign:'center' }}>
          {[['20+','Years of Service'],['500+','Card Designs'],['50K+','Happy Customers'],['🌍','Worldwide Shipping']].map(([n,l]) => (
            <div key={l}>
              <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'2.8rem', fontWeight:300, color:'#d4a96a', marginBottom:4 }}>{n}</h3>
              <p style={{ fontSize:'0.875rem', color:'#f5e8d0', letterSpacing:'0.05em' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <Newsletter toast={toast} />
      <Footer />

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} onSearch={q => toast(`Searching for "${q}"…`)} />
      <Toast msg={msg} show={show} />
    </>
  );
}
