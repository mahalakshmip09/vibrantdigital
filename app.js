/* =============================================
   LOVELY CARDS – app.js
   Site interactions & dynamic content
   ============================================= */

'use strict';

// ─── DATA ─────────────────────────────────────


/*const PRODUCTS = [
  { id: 1, name: 'Personalized Wedding Invite-322', price: 45.50, badge: 'New', emoji: '💐', colors: ['#fde8d8','#f9c8a0'] },
  { id: 2, name: 'Personalized Wedding Invite-211', price: 55.00, badge: 'Bestseller', emoji: '🌸', colors: ['#e8f5e8','#c0e0c0'] },
  { id: 3, name: 'Personalized Wedding Invite-320', price: 35.00, badge: null, emoji: '✨', colors: ['#e8e0f8','#c8b8f0'] },
  { id: 4, name: 'VISTAS-01',                        price: 14.25, badge: 'Sale', emoji: '🕊️', colors: ['#fdf0d8','#f5d890'] },
  { id: 5, name: 'Acrylic Crystal Invite',           price: 120.00, badge: 'Premium', emoji: '💎', colors: ['#e0f4f8','#a8d8e8'] },
  { id: 6, name: 'Metallic Horizon Invite',          price: 85.00, badge: 'New', emoji: '✦', colors: ['#f5e8d0','#e0c070'] },
  { id: 7, name: 'Scroll Wedding Card',              price: 28.00, badge: null, emoji: '📜', colors: ['#f8f0e0','#e8d0a0'] },
  { id: 8, name: 'Custom Caricature Invite',         price: 75.00, badge: 'Popular', emoji: '🎨', colors: ['#ffe8e8','#f0b0b0'] },
];
*/
// Add this ONE line right after your PRODUCTS array
const WHATSAPP_NUMBER = "917871920405"; // ← replace with your number  
const PRODUCTS = [
  {
    id: 1,
    name: 'Personalized Wedding Invite-322',
    price: 45.50,
    badge: 'New',
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g1a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff8f0"/>
            <stop offset="100%" stop-color="#fde8cc"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g1a)" rx="6"/>
        <!-- border -->
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="#c8843a" stroke-width="1.5" rx="4"/>
        <rect x="13" y="13" width="214" height="274" fill="none" stroke="#e8b87a" stroke-width="0.5" rx="3"/>
        <!-- top floral motif -->
        <g transform="translate(120,42)">
          <circle cx="0" cy="0" r="18" fill="#f5d5a0" opacity="0.5"/>
          <text x="0" y="6" text-anchor="middle" font-size="22" fill="#c8843a">✿</text>
        </g>
        <!-- corner flourishes -->
        <text x="18" y="34" font-size="14" fill="#c8843a" opacity="0.7">❧</text>
        <text x="222" y="34" font-size="14" fill="#c8843a" opacity="0.7" transform="scale(-1,1) translate(-240,0)">❧</text>
        <text x="18" y="286" font-size="14" fill="#c8843a" opacity="0.7" transform="scale(1,-1) translate(0,-300)">❧</text>
        <text x="222" y="286" font-size="14" fill="#c8843a" opacity="0.7" transform="scale(-1,-1) translate(-240,-300)">❧</text>
        <!-- divider line -->
        <line x1="40" y1="68" x2="200" y2="68" stroke="#c8843a" stroke-width="0.8" opacity="0.6"/>
        <!-- names -->
        <text x="120" y="100" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#7a3a0a" letter-spacing="2">WEDDING</text>
        <text x="120" y="118" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#a06020" letter-spacing="3">INVITATION</text>
        <text x="120" y="148" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#5a2a05" font-style="italic">Priya</text>
        <text x="120" y="162" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#c8843a">&amp;</text>
        <text x="120" y="182" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#5a2a05" font-style="italic">Arjun</text>
        <!-- divider -->
        <line x1="60" y1="195" x2="180" y2="195" stroke="#c8843a" stroke-width="0.8" opacity="0.5"/>
        <!-- date area -->
        <text x="120" y="214" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#7a5a30" letter-spacing="1">Saturday, 12 April 2025</text>
        <text x="120" y="230" text-anchor="middle" font-family="Arial,sans-serif" font-size="8" fill="#a08060">Grand Palace Hall, Chennai</text>
        <!-- bottom leaf band -->
        <text x="50" y="258" font-size="18" fill="#c8a050" opacity="0.4">✦ ❦ ✦</text>
        <text x="120" y="258" text-anchor="middle" font-size="10" fill="#a06020" opacity="0.8">✦ ❦ ✦</text>
        <text x="150" y="258" font-size="18" fill="#c8a050" opacity="0.4">✦ ❦ ✦</text>
        <text x="120" y="278" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#a06020" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  },
  {
    id: 2,
    name: 'Personalized Wedding Invite-211',
    price: 55.00,
    badge: 'Bestseller',
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g2a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a3a2a"/>
            <stop offset="100%" stop-color="#0d2218"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g2a)" rx="6"/>
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="#c8a84a" stroke-width="1.5" rx="4"/>
        <!-- gold pattern border top/bottom -->
        <rect x="14" y="14" width="212" height="272" fill="none" stroke="#c8a84a" stroke-width="0.4" rx="3"/>
        <!-- Top ornament -->
        <text x="120" y="46" text-anchor="middle" font-size="22" fill="#c8a84a">☪</text>
        <text x="60" y="28" font-size="10" fill="#c8a84a" opacity="0.6">✦ ✦ ✦</text>
        <text x="140" y="28" font-size="10" fill="#c8a84a" opacity="0.6">✦ ✦ ✦</text>
        <!-- heading -->
        <text x="120" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#c8a84a" letter-spacing="3">WALIMA INVITATION</text>
        <line x1="40" y1="82" x2="200" y2="82" stroke="#c8a84a" stroke-width="0.6" opacity="0.7"/>
        <!-- bismillah-style ornament -->
        <text x="120" y="110" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#e8d090" opacity="0.9">﷽</text>
        <!-- names -->
        <text x="120" y="142" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="#e8d090" font-style="italic">Aisha</text>
        <text x="120" y="158" text-anchor="middle" font-size="12" fill="#c8a84a">&amp;</text>
        <text x="120" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="#e8d090" font-style="italic">Zafar</text>
        <line x1="55" y1="192" x2="185" y2="192" stroke="#c8a84a" stroke-width="0.6" opacity="0.6"/>
        <text x="120" y="210" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#c8a84a" letter-spacing="1">Friday, 20 June 2025</text>
        <text x="120" y="226" text-anchor="middle" font-size="8" fill="#a08040">Al-Noor Banquet, Coimbatore</text>
        <!-- star pattern bottom -->
        <text x="120" y="256" text-anchor="middle" font-size="14" fill="#c8a84a" opacity="0.5">✦  ✦  ✦  ✦  ✦</text>
        <text x="120" y="278" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#c8a84a" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  },
  {
    id: 3,
    name: 'Personalized Wedding Invite-320',
    price: 35.00,
    badge: null,
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g3a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fce4ec"/>
            <stop offset="100%" stop-color="#f8bbd0"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g3a)" rx="6"/>
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="#e91e8c" stroke-width="1.2" rx="4"/>
        <rect x="13" y="13" width="214" height="274" fill="none" stroke="#f48fb1" stroke-width="0.4" rx="3"/>
        <!-- Cross + floral top -->
        <text x="120" y="40" text-anchor="middle" font-size="20" fill="#c2185b">✝</text>
        <circle cx="120" cy="30" r="16" fill="none" stroke="#e91e8c" stroke-width="0.8" opacity="0.5"/>
        <!-- petal corners -->
        <text x="20" y="30" font-size="16" fill="#f48fb1" opacity="0.7">✿</text>
        <text x="210" y="30" font-size="16" fill="#f48fb1" opacity="0.7">✿</text>
        <text x="20" y="288" font-size="16" fill="#f48fb1" opacity="0.7">✿</text>
        <text x="210" y="288" font-size="16" fill="#f48fb1" opacity="0.7">✿</text>
        <text x="120" y="68" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#880e4f" letter-spacing="3">CHRISTIAN WEDDING</text>
        <line x1="40" y1="76" x2="200" y2="76" stroke="#e91e8c" stroke-width="0.7" opacity="0.6"/>
        <text x="120" y="100" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#ad1457" font-style="italic">Together with their families</text>
        <text x="120" y="138" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#880e4f" font-style="italic">Maria</text>
        <text x="120" y="155" text-anchor="middle" font-size="11" fill="#e91e8c">&amp;</text>
        <text x="120" y="175" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#880e4f" font-style="italic">David</text>
        <line x1="55" y1="188" x2="185" y2="188" stroke="#e91e8c" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="208" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#880e4f" letter-spacing="1">Sunday, 8 March 2025</text>
        <text x="120" y="224" text-anchor="middle" font-size="8" fill="#ad1457">St. Mary's Church, Erode</text>
        <text x="120" y="256" text-anchor="middle" font-size="16" fill="#f48fb1" opacity="0.5">✿ ✝ ✿</text>
        <text x="120" y="278" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#ad1457" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  },
  {
    id: 4,
    name: 'VISTAS-01',
    price: 14.25,
    badge: 'Sale',
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g4a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fffde7"/>
            <stop offset="100%" stop-color="#fff9c4"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g4a)" rx="6"/>
        <!-- Decorative geometric border -->
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="#f57f17" stroke-width="2" rx="4"/>
        <rect x="15" y="15" width="210" height="270" fill="none" stroke="#ffca28" stroke-width="0.6" rx="3"/>
        <!-- diagonal corner accents -->
        <line x1="8" y1="50" x2="50" y2="8" stroke="#f57f17" stroke-width="1.5" opacity="0.4"/>
        <line x1="190" y1="8" x2="232" y2="50" stroke="#f57f17" stroke-width="1.5" opacity="0.4"/>
        <line x1="8" y1="250" x2="50" y2="292" stroke="#f57f17" stroke-width="1.5" opacity="0.4"/>
        <line x1="190" y1="292" x2="232" y2="250" stroke="#f57f17" stroke-width="1.5" opacity="0.4"/>
        <!-- Vilaku / lamp motif top -->
        <text x="120" y="50" text-anchor="middle" font-size="26" fill="#e65100">🪔</text>
        <text x="120" y="76" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="#e65100" letter-spacing="3">WEDDING INVITE</text>
        <line x1="40" y1="84" x2="200" y2="84" stroke="#f57f17" stroke-width="0.7" opacity="0.6"/>
        <!-- Tamil style name presentation -->
        <text x="120" y="114" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="#bf360c" font-style="italic">Mr. &amp; Mrs. Murugan</text>
        <text x="120" y="130" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#e65100">proudly invite you to the wedding of</text>
        <text x="120" y="158" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#bf360c" font-style="italic">Kavya</text>
        <text x="120" y="174" text-anchor="middle" font-size="11" fill="#f57f17">&amp;</text>
        <text x="120" y="194" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#bf360c" font-style="italic">Karthik</text>
        <line x1="55" y1="206" x2="185" y2="206" stroke="#f57f17" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="224" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#bf360c" letter-spacing="1">Thursday, 24 April 2025</text>
        <text x="120" y="240" text-anchor="middle" font-size="8" fill="#e65100">Kalyana Mandapam, Salem</text>
        <!-- kolam-style bottom pattern -->
        <text x="120" y="268" text-anchor="middle" font-size="14" fill="#ffca28" opacity="0.7">◆  ◇  ◆  ◇  ◆</text>
        <text x="120" y="282" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#e65100" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  },
  {
    id: 5,
    name: 'Acrylic Crystal Invite',
    price: 120.00,
    badge: 'Premium',
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g5a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#e3f2fd"/>
            <stop offset="100%" stop-color="#bbdefb"/>
          </linearGradient>
          <linearGradient id="g5b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#90caf9" stop-opacity="0.3"/>
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#90caf9" stop-opacity="0.3"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g5a)" rx="6"/>
        <!-- Acrylic shine overlay -->
        <rect x="20" y="0" width="60" height="300" fill="url(#g5b)" rx="0"/>
        <!-- Sleek border -->
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="#1565c0" stroke-width="1.5" rx="4"/>
        <rect x="14" y="14" width="212" height="272" fill="none" stroke="#90caf9" stroke-width="0.5" rx="3"/>
        <!-- Crystal diamond motif -->
        <polygon points="120,18 140,38 120,58 100,38" fill="none" stroke="#1565c0" stroke-width="1.5"/>
        <polygon points="120,24 134,38 120,52 106,38" fill="#e3f2fd" stroke="#42a5f5" stroke-width="0.7" opacity="0.8"/>
        <circle cx="120" cy="38" r="4" fill="#1565c0" opacity="0.6"/>
        <text x="120" y="80" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#0d47a1" letter-spacing="3">PREMIUM ACRYLIC</text>
        <line x1="40" y1="88" x2="200" y2="88" stroke="#1565c0" stroke-width="0.8" opacity="0.5"/>
        <text x="120" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="#1565c0" font-style="italic">You are cordially invited</text>
        <text x="120" y="148" text-anchor="middle" font-family="Georgia,serif" font-size="20" fill="#0d47a1" font-style="italic">Nithya</text>
        <text x="120" y="164" text-anchor="middle" font-size="13" fill="#1976d2">&amp;</text>
        <text x="120" y="186" text-anchor="middle" font-family="Georgia,serif" font-size="20" fill="#0d47a1" font-style="italic">Vikram</text>
        <line x1="55" y1="198" x2="185" y2="198" stroke="#1565c0" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="217" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#0d47a1" letter-spacing="1">Saturday, 15 Feb 2025</text>
        <text x="120" y="233" text-anchor="middle" font-size="8" fill="#1976d2">The Leela Palace, Bengaluru</text>
        <!-- crystal bottom pattern -->
        <polygon points="100,258 120,248 140,258 120,268" fill="none" stroke="#1976d2" stroke-width="0.8" opacity="0.5"/>
        <polygon points="80,258 100,248 120,258 100,268" fill="none" stroke="#1976d2" stroke-width="0.5" opacity="0.3"/>
        <polygon points="120,258 140,248 160,258 140,268" fill="none" stroke="#1976d2" stroke-width="0.5" opacity="0.3"/>
        <text x="120" y="284" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#0d47a1" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  },
  {
    id: 6,
    name: 'Metallic Horizon Invite',
    price: 85.00,
    badge: 'New',
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g6a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#212121"/>
            <stop offset="100%" stop-color="#37474f"/>
          </linearGradient>
          <linearGradient id="g6b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#bdbdbd"/>
            <stop offset="50%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#bdbdbd"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g6a)" rx="6"/>
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="url(#g6b)" stroke-width="1.5" rx="4"/>
        <!-- horizontal metallic stripes -->
        <rect x="0" y="60" width="240" height="1.5" fill="url(#g6b)" opacity="0.3"/>
        <rect x="0" y="240" width="240" height="1.5" fill="url(#g6b)" opacity="0.3"/>
        <!-- Star/asterisk top -->
        <text x="120" y="44" text-anchor="middle" font-size="22" fill="#e0e0e0">✦</text>
        <text x="84" y="38" font-size="10" fill="#9e9e9e" opacity="0.6">— — —</text>
        <text x="136" y="38" font-size="10" fill="#9e9e9e" opacity="0.6">— — —</text>
        <text x="120" y="72" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#e0e0e0" letter-spacing="4">METALLIC EDITION</text>
        <line x1="40" y1="80" x2="200" y2="80" stroke="#bdbdbd" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="106" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="#bdbdbd" font-style="italic">The honour of your presence</text>
        <text x="120" y="118" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#9e9e9e" font-style="italic">is requested at the marriage of</text>
        <text x="120" y="150" text-anchor="middle" font-family="Georgia,serif" font-size="20" fill="#ffffff" font-style="italic">Meera</text>
        <text x="120" y="166" text-anchor="middle" font-size="13" fill="#bdbdbd">&amp;</text>
        <text x="120" y="188" text-anchor="middle" font-family="Georgia,serif" font-size="20" fill="#ffffff" font-style="italic">Rajan</text>
        <line x1="55" y1="200" x2="185" y2="200" stroke="#bdbdbd" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="220" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#e0e0e0" letter-spacing="1">Friday, 11 July 2025</text>
        <text x="120" y="236" text-anchor="middle" font-size="8" fill="#9e9e9e">ITC Grand Chola, Chennai</text>
        <text x="120" y="262" text-anchor="middle" font-size="14" fill="#bdbdbd" opacity="0.5">✦  ✦  ✦  ✦  ✦</text>
        <text x="120" y="282" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#bdbdbd" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  },
  {
    id: 7,
    name: 'Scroll Wedding Card',
    price: 28.00,
    badge: null,
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g7a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f5f0e8"/>
            <stop offset="100%" stop-color="#ede5d0"/>
          </linearGradient>
        </defs>
        <!-- Scroll shape: rolled top and bottom -->
        <rect x="0" y="20" width="240" height="260" fill="url(#g7a)"/>
        <!-- scroll top roll -->
        <ellipse cx="120" cy="20" rx="120" ry="12" fill="#d4c4a0"/>
        <ellipse cx="120" cy="20" rx="110" ry="8" fill="#e8d8b8"/>
        <!-- scroll bottom roll -->
        <ellipse cx="120" cy="280" rx="120" ry="12" fill="#d4c4a0"/>
        <ellipse cx="120" cy="280" rx="110" ry="8" fill="#e8d8b8"/>
        <!-- side shadows -->
        <rect x="0" y="20" width="10" height="260" fill="#c4b090" opacity="0.5"/>
        <rect x="230" y="20" width="10" height="260" fill="#c4b090" opacity="0.5"/>
        <!-- content border -->
        <rect x="18" y="34" width="204" height="232" fill="none" stroke="#8b6914" stroke-width="1" opacity="0.5" rx="2"/>
        <!-- Decorative top -->
        <text x="120" y="62" text-anchor="middle" font-size="18" fill="#8b6914" opacity="0.8">❦</text>
        <text x="120" y="82" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#5d4307" letter-spacing="3">SCROLL INVITATION</text>
        <line x1="40" y1="90" x2="200" y2="90" stroke="#8b6914" stroke-width="0.6" opacity="0.5"/>
        <text x="120" y="114" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="#5d4307" font-style="italic">With joyful hearts we invite</text>
        <text x="120" y="126" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#8b6914" font-style="italic">you to celebrate</text>
        <text x="120" y="156" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="#3d2c07" font-style="italic">Lakshmi</text>
        <text x="120" y="172" text-anchor="middle" font-size="11" fill="#8b6914">&amp;</text>
        <text x="120" y="192" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="#3d2c07" font-style="italic">Suresh</text>
        <line x1="55" y1="204" x2="185" y2="204" stroke="#8b6914" stroke-width="0.6" opacity="0.5"/>
        <text x="120" y="222" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#5d4307" letter-spacing="1">Monday, 3 Nov 2025</text>
        <text x="120" y="238" text-anchor="middle" font-size="8" fill="#8b6914">Sree Sabari Mahal, Erode</text>
        <text x="120" y="256" text-anchor="middle" font-size="14" fill="#8b6914" opacity="0.5">❧  ✦  ❧</text>
      </svg>`
  },
  {
    id: 8,
    name: 'Custom Caricature Invite',
    price: 75.00,
    badge: 'Popular',
    cardSvg: `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" width="240" height="300">
        <defs>
          <linearGradient id="g8a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff8e1"/>
            <stop offset="100%" stop-color="#ffecb3"/>
          </linearGradient>
        </defs>
        <rect width="240" height="300" fill="url(#g8a)" rx="6"/>
        <!-- Fun wavy border -->
        <rect x="8" y="8" width="224" height="284" fill="none" stroke="#ff6f00" stroke-width="2" rx="12"/>
        <rect x="14" y="14" width="212" height="272" fill="none" stroke="#ffa000" stroke-width="0.6" rx="10"/>
        <!-- Caricature couple illustration (abstract) -->
        <!-- Bride -->
        <circle cx="88" cy="70" r="22" fill="#ffe082"/>
        <ellipse cx="88" cy="95" rx="18" ry="12" fill="#ff8f00"/>
        <!-- Bride hair/veil -->
        <path d="M68 60 Q78 40 88 55 Q98 40 108 60" fill="#5d4037" stroke="none"/>
        <ellipse cx="88" cy="52" rx="14" ry="6" fill="white" opacity="0.8"/>
        <!-- Bride face features -->
        <circle cx="83" cy="68" r="2" fill="#5d4037"/>
        <circle cx="93" cy="68" r="2" fill="#5d4037"/>
        <path d="M84 76 Q88 80 92 76" fill="none" stroke="#e91e63" stroke-width="1.5" stroke-linecap="round"/>
        <!-- flowers in hair -->
        <circle cx="72" cy="56" r="5" fill="#e91e63" opacity="0.8"/>
        <circle cx="104" cy="56" r="5" fill="#e91e63" opacity="0.8"/>
        <!-- Groom -->
        <circle cx="152" cy="70" r="22" fill="#ffcc02"/>
        <ellipse cx="152" cy="95" rx="18" ry="12" fill="#e65100"/>
        <!-- Groom hair -->
        <ellipse cx="152" cy="52" rx="18" ry="8" fill="#3e2723"/>
        <!-- Groom face -->
        <circle cx="147" cy="68" r="2" fill="#3e2723"/>
        <circle cx="157" cy="68" r="2" fill="#3e2723"/>
        <path d="M148 76 Q152 80 156 76" fill="none" stroke="#795548" stroke-width="1.5" stroke-linecap="round"/>
        <!-- groom tie -->
        <polygon points="152,86 148,92 152,102 156,92" fill="#b71c1c"/>
        <!-- heart between them -->
        <text x="120" y="82" text-anchor="middle" font-size="18" fill="#e91e63">♥</text>
        <!-- text -->
        <line x1="30" y1="116" x2="210" y2="116" stroke="#ff6f00" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="136" text-anchor="middle" font-family="Georgia,serif" font-size="10" fill="#e65100" letter-spacing="2">CARICATURE INVITATION</text>
        <text x="120" y="162" text-anchor="middle" font-family="Georgia,serif" font-size="17" fill="#bf360c" font-style="italic">Divya &amp; Raj</text>
        <text x="120" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#e65100" font-style="italic">are tying the knot!</text>
        <line x1="55" y1="192" x2="185" y2="192" stroke="#ff6f00" stroke-width="0.7" opacity="0.5"/>
        <text x="120" y="210" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#bf360c" letter-spacing="1">Sunday, 18 May 2025</text>
        <text x="120" y="226" text-anchor="middle" font-size="8" fill="#e65100">Rainbow Gardens, Coimbatore</text>
        <text x="120" y="256" text-anchor="middle" font-size="14" fill="#ffa000" opacity="0.7">★  ♥  ★  ♥  ★</text>
        <text x="120" y="278" text-anchor="middle" font-family="Georgia,serif" font-size="7.5" fill="#e65100" letter-spacing="1.5">VIBRANT DIGITAL PRINTERS</text>
      </svg>`
  }
];

// ── CART STATE ──
let cart = JSON.parse(localStorage.getItem('lc_cart') || '[]');
function saveCart() { localStorage.setItem('lc_cart', JSON.stringify(cart)); }
function getCartCount() { return cart.reduce((sum, i) => sum + i.qty, 0); }

// ── CART UI UPDATE ──
function updateCartUI() {
  const countEl   = document.getElementById('cartCount');
  const listEl    = document.getElementById('cartItemsList');
  const totalEl   = document.getElementById('cartTotal');
  const totalRow  = document.getElementById('cartTotalRow');
  const waBtn     = document.getElementById('whatsappBtn');
  const emptyMsg  = document.getElementById('cartEmptyMsg');

  if (countEl) countEl.textContent = getCartCount();

  if (listEl) {
    if (cart.length === 0) {
      listEl.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (totalRow) totalRow.style.display = 'none';
      if (waBtn)    waBtn.style.display    = 'none';
    } else {
      if (emptyMsg) emptyMsg.style.display = 'none';
      const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
      listEl.innerHTML = cart.map(item => `
        <div class="cart-line">
          <div>
            <div class="cart-line-name">${item.name}</div>
            <div class="cart-line-sub">Qty: ${item.qty} × ₹${item.price.toFixed(2)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <span class="cart-line-price">₹${(item.price * item.qty).toFixed(2)}</span>
            <button class="cart-line-remove" onclick="removeFromCart(${item.id})">×</button>
          </div>
        </div>`).join('');
      if (totalEl)  totalEl.textContent    = `₹${total.toFixed(2)}`;
      if (totalRow) totalRow.style.display = 'flex';
      if (waBtn)    waBtn.style.display    = 'flex';
    }
  }
}

// ── ADD TO CART ──
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: product.name, price: product.price, qty: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`✓ "${product.name}" added to cart`);
}

// ── REMOVE FROM CART ──
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

// ── SEND TO WHATSAPP ──
function sendToWhatsApp() {
  if (cart.length === 0) { showToast('🛒 Cart is empty!'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let msg = `🛒 *New Order — Vibrant Digital Printers*\n\n*Items Ordered:*\n`;
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name}\n   Qty: ${item.qty} × ₹${item.price.toFixed(2)} = ₹${(item.price * item.qty).toFixed(2)}\n`;
  });
  msg += `\n━━━━━━━━━━━━━━━\n*Total Amount: ₹${total.toFixed(2)}*\n\nPlease confirm my order 🙏`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── TOAST ──
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── BADGE CLASS ──
function getBadgeClass(badge) {
  if (!badge) return '';
  return { New:'badge-new', Bestseller:'badge-bestseller', Sale:'badge-sale',
           Premium:'badge-bestseller', Popular:'badge-new' }[badge] || 'badge-new';
}

// ── RENDER PRODUCTS ──
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <div class="product-img-placeholder">
          ${p.cardSvg}
        </div>
        ${p.badge ? `<span class="product-badge ${getBadgeClass(p.badge)}">${p.badge}</span>` : ''}
        <button class="product-wishlist" aria-label="Wishlist" data-id="${p.id}">♡</button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">₹ ${p.price.toFixed(2)}</p>
      </div>
      <button class="product-quick-add btn-add" data-id="${p.id}" onclick="addToCart(${p.id})">
        Add to Cart
      </button>
    </div>
  `).join('');
}

// ── INIT ──
renderProducts();
updateCartUI();
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
