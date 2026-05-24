/* ==========================================
   script.js — EcoNusa Indonesia (Bootstrap)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Navbar Scroll ----------
  const navbar = document.querySelector('.navbar-econusa');

  if (navbar) {
    function handleNavScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();
  }

  // ---------- Scroll Animations ----------
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    fadeElements.forEach(el => fadeObserver.observe(el));
  }

  // ---------- Counter Animation ----------
  const counterElements = document.querySelectorAll('[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = prefix + current.toLocaleString('id-ID') + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target.toLocaleString('id-ID') + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  // ---------- Filter Tabs ----------
  const filterTabs = document.querySelectorAll('.filter-tab');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.filter-tabs-wrapper');
      parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      const cards = document.querySelectorAll('[data-category]');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ---------- Contact Form ----------
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      let isValid = true;
      for (const value of formData.values()) {
        if (!value.trim()) { isValid = false; break; }
      }
      if (isValid) {
        showToast('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
        contactForm.reset();
      } else {
        showToast('Mohon lengkapi semua field yang diperlukan.', 'error');
      }
    });
  }

  // ---------- Newsletter Form ----------
  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        showToast('Terima kasih! Anda berhasil berlangganan newsletter kami.');
        email.value = '';
      } else {
        showToast('Mohon masukkan alamat email yang valid.', 'error');
      }
    });
  }

  // ---------- Toast ----------
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast-econusa');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-econusa';
    if (type === 'error') toast.classList.add('error');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---------- Init Lucide Icons ----------
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

});