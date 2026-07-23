let activeCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilterTabs();
  setupSearchInput();
  setupModalEvents();
});

function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  let filtered = PRODUCTS_DATA.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.tag && product.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem; opacity: 0.5;">☕</div>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; color: var(--text-primary);">No artisanal products found</h3>
        <p style="color: var(--text-secondary);">Try clearing your search term or select another category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((product, index) => {
    const delayClass = index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : '';
    return `
      <article class="product-card double-bezel reveal-on-scroll ${delayClass}" data-id="${product.id}">
        <div class="bezel-core">
          <div class="product-img-wrapper" onclick="openQuickView('${product.id}')" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
            <span class="product-rating">★ ${product.rating.toFixed(1)}</span>
          </div>
          <div class="product-info">
            <h3 class="product-title" onclick="openQuickView('${product.id}')" style="cursor: pointer;">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-footer">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <button class="btn-add-cart" onclick="addToCart('${product.id}')">
                <span>Add to Bag</span>
                <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (typeof initScrollEngine === 'function') {
    setTimeout(() => initScrollEngine(), 50);
  } else {
    setTimeout(() => {
      document.querySelectorAll('#productsContainer .reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    }, 100);
  }
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-category');
      renderProducts();
    });
  });
}

function setupSearchInput() {
  const searchInput = document.getElementById('productSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });
}

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('quickViewModal');
  const modalContent = document.getElementById('modalContentContainer');
  if (!modalBackdrop || !modalContent) return;

  let specsHtml = '';
  if (product.details) {
    specsHtml = Object.entries(product.details).map(([key, val]) => `
      <div class="spec-item">
        <label>${key.replace(/([A-Z])/g, ' $1')}</label>
        <span>${val}</span>
      </div>
    `).join('');
  }

  modalContent.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-img-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-body-info">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span class="eyebrow">${product.tag || 'Specialty'}</span>
          <span style="color: var(--accent-gold); font-weight: 600; font-size: 0.9rem;">★ ${product.rating.toFixed(1)} / 5.0</span>
        </div>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price">$${product.price.toFixed(2)}</div>
        <p class="modal-desc">${product.description}</p>

        ${specsHtml ? `<div class="modal-specs">${specsHtml}</div>` : ''}

        <div style="margin-top: auto; display: flex; gap: 1rem;">
          <button class="btn-primary" style="flex-grow: 1; justify-content: center;" onclick="addToCart('${product.id}'); closeQuickView();">
            <span>Add to Bag</span>
            <div class="btn-icon-circle">
              <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modalBackdrop = document.getElementById('quickViewModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function setupModalEvents() {
  const modalBackdrop = document.getElementById('quickViewModal');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn?.addEventListener('click', closeQuickView);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeQuickView();
    }
  });
}
