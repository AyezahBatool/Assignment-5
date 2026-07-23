let cartState = JSON.parse(localStorage.getItem('velour_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCartDrawer();
  updateCartBadge();
  initScrollEngine();
});

function initScrollEngine() {
  const autoTargets = document.querySelectorAll('.hero-content, .hero-media-wrapper, .section-header, .bento-card, .process-step, .footer-grid, .double-bezel');
  autoTargets.forEach((el, index) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
      if (index % 3 === 1) el.classList.add('delay-1');
      if (index % 3 === 2) el.classList.add('delay-2');
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
}

function initNavigation() {
  const header = document.querySelector('.header-nav');
  const hamburger = document.querySelector('.hamburger');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
      document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

function initCartDrawer() {
  const cartTrigger = document.querySelector('.cart-trigger');
  const cartBackdrop = document.querySelector('.cart-drawer-backdrop');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartClose = document.querySelector('.cart-close');

  const openCart = () => {
    cartBackdrop?.classList.add('active');
    cartDrawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  };

  const closeCart = () => {
    cartBackdrop?.classList.remove('active');
    cartDrawer?.classList.remove('active');
    document.body.style.overflow = '';
  };

  cartTrigger?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);
}

function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cartState.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`Added "${product.name}" to bag`);
}

function removeFromCart(productId) {
  cartState = cartState.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  showToast('Item removed from bag');
}

function updateCartQty(productId, delta) {
  const item = cartState.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartBadge();
      renderCartItems();
    }
  }
}

function saveCart() {
  localStorage.setItem('velour_cart', JSON.stringify(cartState));
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-count');
  const totalItems = cartState.reduce((sum, item) => sum + item.qty, 0);
  badges.forEach(b => {
    b.textContent = totalItems;
  });
}

function renderCartItems() {
  const container = document.querySelector('.cart-body');
  const totalElement = document.querySelector('.cart-total-val');
  if (!container) return;

  if (cartState.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <svg style="width: 48px; height: 48px; opacity: 0.4; margin-bottom: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        <p style="font-weight: 500;">Your shopping bag is empty</p>
      </div>
    `;
    if (totalElement) totalElement.textContent = '$0.00';
    return;
  }

  let total = 0;
  container.innerHTML = cartState.map(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.4rem;">
            <button onclick="updateCartQty('${item.id}', -1)" style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.1); font-weight: bold;">-</button>
            <span style="font-size: 0.85rem; font-weight: 600;">${item.qty}</span>
            <button onclick="updateCartQty('${item.id}', 1)" style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.1); font-weight: bold;">+</button>
          </div>
        </div>
        <button onclick="removeFromCart('${item.id}')" style="color: var(--text-muted); font-size: 0.8rem; hover: text-color: red;">✕</button>
      </div>
    `;
  }).join('');

  if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg style="width: 18px; height: 18px; color: var(--accent-gold);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
