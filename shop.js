/* ════════════════════════════════════════════════
   NANCY STORE — shop.js
   Products data · Cart · Filters · Grid/List · Detail
   ════════════════════════════════════════════════ */

// ═══════════════════════════════════════
//  PRODUCTS DATA — 19 real products
// ═══════════════════════════════════════

const NS_PRODUCTS = [
  // ── SACS À MAIN ──────────────────────────────
  {
    id: 1,
    cat: 'sacs',
    img: 'images/Lvcouleur2.JPG',
    badge: 'bestseller',
    price: 18000,
    name: { fr: 'Mini Bag Monogram Blanc', en: 'White Monogram Mini Bag' },
    desc: { fr: 'Mini sac iconique en toile monogram blanc et beige. Anses rondes, chaîne dorée amovible, doublure en tissu.',
            en: 'Iconic mini bag in white & beige monogram canvas. Round handles, removable gold chain, fabric lining.' }
  },
  {
    id: 2,
    cat: 'sacs',
    img: 'images/lvcouleur1.JPG',
    badge: 'new',
    price: 18000,
    name: { fr: 'Alma BB Damier Chocolat', en: 'Alma BB Damier Chocolate' },
    desc: { fr: 'Sac Alma BB en toile Damier ébène. Structure rigide, serrure à clé, bretelle chaîne bimatière.',
            en: 'Alma BB in Damier ébène canvas. Rigid structure, key lock, bi-material chain strap.' }
  },
  {
    id: 3,
    cat: 'sacs',
    img: 'images/lv3couleurs.JPG',
    badge: '',
    price: 18000,
    name: { fr: 'Collection Alma BB — Trio', en: 'Alma BB Collection — Trio' },
    desc: { fr: 'Trio Alma BB en toile monogram, damier et monogram blanc. Chaînes dorées, finitions premium.',
            en: 'Alma BB trio in monogram, damier and white monogram canvas. Gold chains, premium finishes.' }
  },
  {
    id: 4,
    cat: 'sacs',
    img: 'images/tabby-vert.JPG',
    badge: 'new',
    price: 22000,
    name: { fr: 'Tabby Quilted Vert Olive', en: 'Tabby Quilted Olive Green' },
    desc: { fr: 'Sac Tabby matelassé en cuir nappa vert olive. Fermeture tournante dorée, bretelle chaîne argentée.',
            en: 'Quilted Tabby bag in olive green nappa leather. Gold turnlock closure, silver chain strap.' }
  },

  // ── SANDALES FEMMES ──────────────────────────
  {
    id: 5,
    cat: 'sandales-femmes',
    img: 'images/sandale-hermes-rose.JPG',
    badge: 'bestseller',
    price: 15000,
    name: { fr: 'Oran Rose Poudré', en: 'Oran Powder Pink' },
    desc: { fr: 'Sandale Oran en cuir grainé rose poudré. Semelle anatomique, découpe H iconique, finition mate.',
            en: 'Oran sandal in powder pink grained leather. Anatomical sole, iconic H cut-out, matte finish.' }
  },
  {
    id: 6,
    cat: 'sandales-femmes',
    img: 'images/hermes-chypre.JPG',
    badge: 'new',
    price: 21000,
    name: { fr: 'Chypre Bicolore Rose/Bordeaux', en: 'Chypre Bicolor Pink/Burgundy' },
    desc: { fr: 'Sandale Chypre bicolore rose et bordeaux. Double bride réglable, semelle confort en cuir.',
            en: 'Bicolor Chypre sandal in pink and burgundy. Double adjustable strap, leather comfort sole.' }
  },
  {
    id: 7,
    cat: 'sandales-femmes',
    img: 'images/hermes-chyprecroco.JPG',
    badge: 'premium',
    price: 25000,
    name: { fr: 'Chypre Croco Blanc & Gris', en: 'Chypre Croco White & Grey' },
    desc: { fr: 'Sandale Chypre en cuir croco embossé bicolore blanc et gris naturel. Semelle plate légère, look luxe.',
            en: 'Chypre sandal in bicolor embossed croco leather, white and natural grey. Lightweight flat sole, luxury look.' }
  },
  {
    id: 8,
    cat: 'sandales-femmes',
    img: 'images/sandale-dgnoire.JPG',
    badge: '',
    price: 15000,
    name: { fr: 'Mule DG Logo Noire', en: 'DG Logo Mule Black' },
    desc: { fr: 'Mule plate en caoutchouc noir avec logo DG 3D. Bout carré, légèreté maximale.',
            en: 'Black rubber flat mule with 3D DG logo. Square toe, maximum lightness.' }
  },
  {
    id: 9,
    cat: 'sandales-femmes',
    img: 'images/sandale-dg-rose.JPG',
    badge: 'new',
    price: 15000,
    name: { fr: 'Mule DG Logo Fuchsia', en: 'DG Logo Mule Fuchsia' },
    desc: { fr: 'Mule plate fuchsia en gomme laquée avec logo DG en relief. Ultra-légère, colorée, iconique.',
            en: 'Fuchsia lacquered rubber flat mule with embossed DG logo. Ultra-light, colorful, iconic.' }
  },
  {
    id: 10,
    cat: 'sandales-femmes',
    img: 'images/sandale-alaia.JPG',
    badge: 'new',
    price: 18000,
    name: { fr: 'Ballerine Résille Dorée', en: 'Gold Buckle Mesh Ballet' },
    desc: { fr: 'Ballerine en résille noire avec boucle dorée sculptée. Bout carré, semelle légère, style avant-gardiste.',
            en: 'Black mesh ballet flat with sculpted gold buckle. Square toe, light sole, avant-garde style.' }
  },
  {
    id: 11,
    cat: 'sandales-femmes',
    img: 'images/sandale-lv1.JPG',
    badge: 'bestseller',
    price: 20000,
    name: { fr: 'Bom Dia Monogram Marron', en: 'Bom Dia Brown Monogram' },
    desc: { fr: 'Sandale plate Bom Dia en toile monogram marron. Double bride ajustable, semelle noire, boucles dorées.',
            en: 'Flat Bom Dia sandal in brown monogram canvas. Double adjustable strap, black sole, gold buckles.' }
  },
  {
    id: 12,
    cat: 'sandales-femmes',
    img: 'images/SandaleLV3.JPG',
    badge: 'new',
    price: 20000,
    name: { fr: 'Bom Dia Monogram Rose Fuchsia', en: 'Bom Dia Monogram Hot Pink' },
    desc: { fr: 'Sandale Bom Dia en caoutchouc embossé rose fuchsia. Double bride dorée, semelle plateforme légère.',
            en: 'Bom Dia sandal in hot pink embossed rubber. Double gold strap, light platform sole.' }
  },
  {
    id: 13,
    cat: 'sandales-femmes',
    img: 'images/Sandalelv2.JPG',
    badge: '',
    price: 21000,
    name: { fr: 'Bom Dia Monogram Denim Bleu', en: 'Bom Dia Denim Blue Monogram' },
    desc: { fr: 'Sandale Bom Dia en jean monogram bleu ciel. Double bride ajustable boucles dorées, semelle bleue.',
            en: 'Bom Dia sandal in sky blue monogram denim. Double adjustable strap with gold buckles, blue sole.' }
  },
  {
    id: 14,
    cat: 'sandales-femmes',
    img: 'images/coach-sandal.JPG',
    badge: '',
    price: 15000,
    name: { fr: 'Claquette Signature Coach', en: 'Coach Signature Slide' },
    desc: { fr: 'Claquette en toile signature beige avec logo C doré. Semelle confort, légère et élégante.',
            en: 'Beige signature canvas slide with golden C logo. Comfort sole, light and elegant.' }
  },

  // ── SANDALES HOMMES ──────────────────────────
  {
    id: 15,
    cat: 'sandales-hommes',
    img: 'images/Hermes-marron.JPG',
    badge: 'bestseller',
    price: 27000,
    name: { fr: 'Izmir Cuir Fauve', en: 'Izmir Tawny Leather' },
    desc: { fr: 'Sandale Izmir en cuir lisse fauve avec surpiqûres contrastantes. Semelle plate confort, style casual luxe.',
            en: 'Izmir sandal in smooth tawny leather with contrasting stitching. Comfort flat sole, casual luxury style.' }
  },
  {
    id: 16,
    cat: 'sandales-hommes',
    img: 'images/sandale-homme1.JPG',
    badge: '',
    price: 27000,
    name: { fr: 'Sandale Clous Noir', en: 'Black Studded Sandal' },
    desc: { fr: 'Sandale double bride cloutée noire avec semelle chunky. Boucles argent, look rock contemporain.',
            en: 'Black double studded strap sandal with chunky sole. Silver buckles, contemporary rock look.' }
  },
  {
    id: 17,
    cat: 'sandales-hommes',
    img: 'images/sandale-homme2.JPG',
    badge: 'new',
    price: 27000,
    name: { fr: 'Slide Croisé FF Noir', en: 'FF Crossover Slide Black' },
    desc: { fr: 'Claquette croisée en cuir noir avec motif FF monogram. Semelle EVA épaisse, intérieur rembourré.',
            en: 'Crossover slide in black leather with FF monogram pattern. Thick EVA sole, padded interior.' }
  },
  {
    id: 18,
    cat: 'sandales-hommes',
    img: 'images/Sandale-homme3.JPG',
    badge: '',
    price: 27000,
    name: { fr: 'Slide Croisé Zara Cuir', en: 'Zara Leather Cross Slide' },
    desc: { fr: 'Claquette croisée en cuir lisse noir et gris. Semelle épaisse confort, style minimaliste urbain.',
            en: 'Crossover slide in smooth black and grey leather. Thick comfort sole, urban minimalist style.' }
  },
  {
    id: 19,
    cat: 'sandales-hommes',
    img: 'images/sandale homme4.JPG',
    badge: 'new',
    price: 27000,
    name: { fr: 'Sandale Tressée Croisée Noire', en: 'Black Woven Cross Sandal' },
    desc: { fr: 'Sandale double bride croisée en cuir tressé embossé noir. Semelle confort, marque intérieure.',
            en: 'Double cross strap sandal in embossed woven black leather. Comfort sole, branded interior.' }
  }
];

// ═══════════════════════════════════════
//  CART SYSTEM
// ═══════════════════════════════════════

const CART_KEY = 'ns-cart-v1';

function cartGet() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function cartSave(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartUI();
}

function cartAdd(id) {
  const items = cartGet();
  const idx   = items.findIndex(i => i.id === id);
  if (idx > -1) { items[idx].qty += 1; }
  else           { items.push({ id, qty: 1 }); }
  cartSave(items);
  showToast();
  renderCartDrawer();
}

function cartRemoveItem(id) {
  cartSave(cartGet().filter(i => i.id !== id));
  renderCartDrawer();
}

function cartChangeQty(id, delta) {
  const items = cartGet();
  const idx   = items.findIndex(i => i.id === id);
  if (idx === -1) return;
  items[idx].qty += delta;
  if (items[idx].qty <= 0) items.splice(idx, 1);
  cartSave(items);
  renderCartDrawer();
}

function cartClear() {
  cartSave([]);
  renderCartDrawer();
}

function cartCount() {
  return cartGet().reduce((s, i) => s + i.qty, 0);
}

function cartTotal() {
  return cartGet().reduce((s, i) => {
    const p = NS_PRODUCTS.find(x => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

function formatPrice(n) {
  return n.toLocaleString('fr-FR') + ' FCFA';
}

function updateCartUI() {
  const count = cartCount();
  document.querySelectorAll('.cart-count, #cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  const total = document.getElementById('cartTotalAmount');
  if (total) total.textContent = formatPrice(cartTotal());
}

function renderCartDrawer() {
  const wrap   = document.getElementById('cartDrawerItems');
  const footer = document.getElementById('cartDrawerFooter');
  if (!wrap) return;

  const lang  = getLang();
  const items = cartGet();

  if (items.length === 0) {
    wrap.innerHTML = `<div class="cart-empty-msg">
      <span>🛍️</span>
      <p data-fr="Votre panier est vide" data-en="Your cart is empty">${lang === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}</p>
      <a href="products.html" class="btn-primary" data-fr="Voir les produits" data-en="Browse products">${lang === 'fr' ? 'Voir les produits' : 'Browse products'}</a>
    </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'flex';

  wrap.innerHTML = items.map(item => {
    const p = NS_PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    return `
    <div class="cart-item" data-id="${p.id}">
      <img src="${p.img}" alt="${p.name[lang]}" class="cart-item-img"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${p.name[lang]}</p>
        <p class="cart-item-price">${formatPrice(p.price)}</p>
        <div class="cart-item-qty">
          <button class="qty-mini" onclick="cartChangeQty(${p.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-mini" onclick="cartChangeQty(${p.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-del" onclick="cartRemoveItem(${p.id})" aria-label="Supprimer">✕</button>
    </div>`;
  }).join('');

  updateCartUI();
}

// ═══════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════

function showToast() {
  const lang  = getLang();
  const toast = document.getElementById('nsToast');
  if (!toast) return;
  toast.textContent = lang === 'fr' ? '✓ Ajouté au panier !' : '✓ Added to cart!';
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2600);
}

// ═══════════════════════════════════════
//  PRODUCT CARD BUILDER
// ═══════════════════════════════════════

function buildCard(p, lang) {
  const badgeMap = {
    bestseller: { fr: 'Bestseller', en: 'Bestseller' },
    new:        { fr: 'Nouveau',    en: 'New' },
    premium:    { fr: 'Premium',    en: 'Premium' }
  };
  const badgeHTML = p.badge ? `<span class="prod-badge badge-${p.badge}">${badgeMap[p.badge]?.[lang] || ''}</span>` : '';

  return `
  <article class="prod-card" data-id="${p.id}" data-cat="${p.cat}">
    <a href="product-details.html?id=${p.id}" class="prod-card-img-wrap">
      <img src="${p.img}" alt="${p.name[lang]}" class="prod-card-img" loading="lazy"/>
      ${badgeHTML}
      <div class="prod-card-overlay">
        <span data-fr="Voir le produit" data-en="View product">${lang === 'fr' ? 'Voir le produit' : 'View product'}</span>
      </div>
    </a>
    <div class="prod-card-body">
      <p class="prod-card-cat">${catLabel(p.cat, lang)}</p>
      <h3 class="prod-card-name">
        <a href="product-details.html?id=${p.id}">${p.name[lang]}</a>
      </h3>
      <div class="prod-card-footer">
        <span class="prod-card-price">${formatPrice(p.price)}</span>
        <button class="btn-add-cart" data-id="${p.id}" aria-label="${lang === 'fr' ? 'Ajouter au panier' : 'Add to cart'}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span data-fr="Ajouter" data-en="Add">${lang === 'fr' ? 'Ajouter' : 'Add'}</span>
        </button>
      </div>
    </div>
  </article>`;
}

function buildListRow(p, lang) {
  const badgeMap = { bestseller: { fr: 'Bestseller', en: 'Bestseller' }, new: { fr: 'Nouveau', en: 'New' }, premium: { fr: 'Premium', en: 'Premium' } };
  const badgeHTML = p.badge ? `<span class="prod-badge badge-${p.badge}">${badgeMap[p.badge]?.[lang] || ''}</span>` : '';
  return `
  <article class="prod-list-row" data-id="${p.id}" data-cat="${p.cat}">
    <a href="product-details.html?id=${p.id}" class="prod-list-img-wrap">
      <img src="${p.img}" alt="${p.name[lang]}" class="prod-list-img" loading="lazy"/>
      ${badgeHTML}
    </a>
    <div class="prod-list-info">
      <p class="prod-card-cat">${catLabel(p.cat, lang)}</p>
      <h3 class="prod-list-name"><a href="product-details.html?id=${p.id}">${p.name[lang]}</a></h3>
      <p class="prod-list-desc">${p.desc[lang]}</p>
      <div class="prod-list-footer">
        <span class="prod-card-price">${formatPrice(p.price)}</span>
        <button class="btn-add-cart" data-id="${p.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span data-fr="Ajouter au panier" data-en="Add to Cart">${lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  </article>`;
}

function catLabel(cat, lang) {
  const m = { sacs: { fr: 'Sacs à main', en: 'Handbags' }, 'sandales-femmes': { fr: 'Sandales Femmes', en: "Women's Sandals" }, 'sandales-hommes': { fr: 'Sandales Hommes', en: "Men's Sandals" } };
  return m[cat]?.[lang] || cat;
}

// ═══════════════════════════════════════
//  PRODUCTS PAGE LOGIC
// ═══════════════════════════════════════

let currentCat  = 'all';
let currentSort = 'default';
let currentView = 'grid';  // 'grid' | 'list'

function getFiltered() {
  let list = currentCat === 'all' ? [...NS_PRODUCTS] : NS_PRODUCTS.filter(p => p.cat === currentCat);
  if (currentSort === 'asc')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'desc') list.sort((a, b) => b.price - a.price);
  return list;
}

function renderProducts() {
  const grid   = document.getElementById('productsGrid');
  const noRes  = document.getElementById('noResults');
  const count  = document.getElementById('productCount');
  if (!grid) return;

  const lang = getLang();
  const list = getFiltered();

  if (list.length === 0) {
    grid.innerHTML = '';
    if (noRes) { noRes.style.display = 'block'; noRes.textContent = lang === 'fr' ? 'Aucun produit trouvé.' : 'No products found.'; }
    return;
  }
  if (noRes) noRes.style.display = 'none';

  if (currentView === 'grid') {
    grid.className = 'products-grid grid-view';
    grid.innerHTML = list.map(p => buildCard(p, lang)).join('');
  } else {
    grid.className = 'products-grid list-view';
    grid.innerHTML = list.map(p => buildListRow(p, lang)).join('');
  }

  if (count) count.textContent = list.length + (lang === 'fr' ? ' article' + (list.length > 1 ? 's' : '') : ' item' + (list.length > 1 ? 's' : ''));

  // Re-translate newly injected data-fr/data-en elements
  applyLang(lang);

  // Bind add-to-cart buttons
  grid.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      cartAdd(id);
      // Visual feedback
      btn.classList.add('added');
      const span = btn.querySelector('span');
      const prev = span ? span.textContent : '';
      if (span) span.textContent = '✓';
      setTimeout(() => { btn.classList.remove('added'); if (span) span.textContent = prev; }, 1600);
    });
  });

  // Fade-in animation
  grid.querySelectorAll('.prod-card, .prod-list-row').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.05}s`;
    el.classList.add('fade-in-card');
  });
}

function initProductsPage() {
  if (!document.getElementById('productsGrid')) return;

  // Pre-filter from URL param (e.g. products.html?cat=sacs)
  const urlParams = new URLSearchParams(window.location.search);
  const urlCat    = urlParams.get('cat');
  if (urlCat) {
    currentCat = urlCat;
    document.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.cat === urlCat);
    });
  }

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCat = tab.dataset.cat;
      renderProducts();
    });
  });

  // Sort
  document.getElementById('sortSelect')?.addEventListener('change', e => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Grid / List toggle
  document.getElementById('btnGrid')?.addEventListener('click', () => {
    currentView = 'grid';
    document.getElementById('btnGrid').classList.add('active');
    document.getElementById('btnList').classList.remove('active');
    renderProducts();
  });
  document.getElementById('btnList')?.addEventListener('click', () => {
    currentView = 'list';
    document.getElementById('btnList').classList.add('active');
    document.getElementById('btnGrid').classList.remove('active');
    renderProducts();
  });

  renderProducts();
}

// ═══════════════════════════════════════
//  PRODUCT DETAIL PAGE LOGIC
// ═══════════════════════════════════════

function initDetailPage() {
  const main = document.getElementById('detailMain');
  if (!main) return;

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const p      = NS_PRODUCTS.find(x => x.id === id);
  const lang   = getLang();

  if (!p) {
    main.innerHTML = `<div class="not-found"><h2>${lang === 'fr' ? 'Produit introuvable' : 'Product not found'}</h2><a href="products.html" class="btn-primary">${lang === 'fr' ? '← Retour' : '← Back'}</a></div>`;
    return;
  }

  // Update page title & breadcrumb
  document.title = p.name[lang] + ' — Nancy Store';
  const bc = document.getElementById('bc-product-name');
  if (bc) bc.textContent = p.name[lang];

  // Render
  main.innerHTML = `
  <div class="detail-layout">

    <!-- IMAGE -->
    <div class="detail-image-wrap">
      <div class="detail-img-main">
        <img src="${p.img}" alt="${p.name[lang]}" id="detailImgMain"/>
        ${p.badge ? `<span class="prod-badge badge-${p.badge} detail-badge">${p.badge === 'new' ? (lang === 'fr' ? 'Nouveau' : 'New') : p.badge === 'bestseller' ? 'Bestseller' : 'Premium'}</span>` : ''}
      </div>
      <div class="detail-img-zoom-hint" data-fr="Cliquez pour agrandir" data-en="Click to zoom">${lang === 'fr' ? 'Cliquez pour agrandir' : 'Click to zoom'}</div>
    </div>

    <!-- INFO -->
    <div class="detail-info">
      <a href="products.html" class="detail-back">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        <span data-fr="Retour aux produits" data-en="Back to products">${lang === 'fr' ? 'Retour aux produits' : 'Back to products'}</span>
      </a>

      <p class="detail-cat">${catLabel(p.cat, lang)}</p>
      <h1 class="detail-name">${p.name[lang]}</h1>
      <p class="detail-price">${formatPrice(p.price)}</p>

      <p class="detail-desc">${p.desc[lang]}</p>

      <!-- Quantity -->
      <div class="detail-qty-row">
        <label class="form-label" data-fr="Quantité" data-en="Quantity">${lang === 'fr' ? 'Quantité' : 'Quantity'}</label>
        <div class="qty-ctrl-detail">
          <button class="qty-btn-detail" id="qtyMinus">−</button>
          <span class="qty-val-detail" id="qtyVal">1</span>
          <button class="qty-btn-detail" id="qtyPlus">+</button>
        </div>
      </div>

      <!-- Add to cart -->
      <button class="btn-primary btn-full detail-add-btn" id="detailAddBtn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <span data-fr="Ajouter au panier" data-en="Add to Cart">${lang === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
      </button>

      <!-- Perks -->
      <div class="detail-perks">
        <div class="perk-item">
          <span class="perk-icon">🚚</span>
          <span data-fr="Livraison disponible à Abidjan" data-en="Delivery available in Abidjan">${lang === 'fr' ? 'Livraison disponible à Abidjan' : 'Delivery available in Abidjan'}</span>
        </div>
        <div class="perk-item">
          <span class="perk-icon">↩️</span>
          <span data-fr="Retours sous 7 jours" data-en="Returns within 7 days">${lang === 'fr' ? 'Retours sous 7 jours' : 'Returns within 7 days'}</span>
        </div>
        <div class="perk-item">
          <span class="perk-icon">✅</span>
          <span data-fr="Produit authentique garanti" data-en="Authentic product guaranteed">${lang === 'fr' ? 'Produit authentique garanti' : 'Authentic product guaranteed'}</span>
        </div>
      </div>
    </div>
  </div>`;

  // Qty logic
  let qty = 1;
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    if (qty > 1) { qty--; document.getElementById('qtyVal').textContent = qty; }
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    qty++; document.getElementById('qtyVal').textContent = qty;
  });

  // Add to cart
  document.getElementById('detailAddBtn')?.addEventListener('click', () => {
    for (let i = 0; i < qty; i++) cartAdd(p.id);
    const btn   = document.getElementById('detailAddBtn');
    const span  = btn.querySelector('span');
    const prev  = span ? span.textContent : '';
    btn.classList.add('added');
    if (span) span.textContent = lang === 'fr' ? '✓ Ajouté !' : '✓ Added!';
    setTimeout(() => { btn.classList.remove('added'); if (span) span.textContent = prev; }, 2000);
  });

  // Image zoom (lightbox simple)
  document.getElementById('detailImgMain')?.addEventListener('click', () => {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<div class="lb-backdrop"></div><img src="${p.img}" alt="${p.name[lang]}" class="lb-img"/><button class="lb-close">✕</button>`;
    document.body.appendChild(lb);
    lb.querySelector('.lb-backdrop').addEventListener('click', () => lb.remove());
    lb.querySelector('.lb-close').addEventListener('click', () => lb.remove());
  });

  // Related products
  const related = NS_PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const relGrid = document.getElementById('relatedGrid');
  if (relGrid) {
    relGrid.innerHTML = related.map(r => buildCard(r, lang)).join('');
    relGrid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); cartAdd(parseInt(btn.dataset.id)); showToast(); });
    });
    applyLang(lang);
  }
}

// ═══════════════════════════════════════
//  CART DRAWER INIT
// ═══════════════════════════════════════

function initCartDrawer() {
  const cartBtn     = document.getElementById('cartIconBtn');
  const drawer      = document.getElementById('cartDrawer');
  const overlay     = document.getElementById('cartOverlay');
  const closeBtn    = document.getElementById('cartClose');
  const clearBtn    = document.getElementById('cartClearBtn');

  function openDrawer()  { drawer?.classList.add('open'); overlay?.classList.add('show'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { drawer?.classList.remove('open'); overlay?.classList.remove('show'); document.body.style.overflow = ''; }

  cartBtn?.addEventListener('click', e => { e.preventDefault(); renderCartDrawer(); openDrawer(); });
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);
  clearBtn?.addEventListener('click', () => { cartClear(); renderCartDrawer(); });
}

// ═══════════════════════════════════════
//  GLOBAL INIT
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initCartDrawer();
  renderCartDrawer();
  initProductsPage();
  initDetailPage();
});

// Re-render on language switch (override the global applyLang hook)
const _origApplyLang = window.applyLang;
if (typeof window.applyLang === 'function') {
  const _prev = window.applyLang;
  window.applyLang = function(lang) {
    _prev(lang);
    initDetailPage();
  };
}
