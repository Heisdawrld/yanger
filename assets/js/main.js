/* ============================================================
   Yanga Boss Beaute — Main JS
   ============================================================ */
(function() {
  'use strict';

  // --- DOM ready ---
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); return; }
    document.addEventListener('DOMContentLoaded', fn);
  }

  // --- Nav scroll effect ---
  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!nav) return;
    window.addEventListener('scroll', function() {
      nav.classList.toggle('nav--scrolled', window.scrollY > 30);
    }, { passive: true });
    if (toggle && links) {
      toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
      });
      links.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() {
          toggle.classList.remove('active');
          links.classList.remove('active');
        });
      });
    }
  }

  // --- Hero loaded class ---
  function initHero() {
    var hero = document.querySelector('.hero');
    if (hero) { window.addEventListener('load', function() { hero.classList.add('loaded'); }); }
  }

  // --- Scroll reveal ---
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('in'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
  }

  // --- FAQ accordion ---
  function initFAQ() {
    document.querySelectorAll('.faq-item__q').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var item = btn.parentElement;
        var wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
        if (!wasActive) { item.classList.add('active'); }
      });
    });
  }

  // --- Lightbox ---
  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    if (!lightbox || !lightboxImg) return;
    document.querySelectorAll('.gallery__item, .ig-feed__item').forEach(function(item) {
      item.addEventListener('click', function() {
        var img = item.querySelector('img');
        if (img) { lightboxImg.src = img.src; lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; }
      });
    });
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox__close')) {
        lightbox.classList.remove('active'); document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active'); document.body.style.overflow = '';
      }
    });
  }

  // --- Newsletter ---
  function initNewsletter() {
    var form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (input && input.value.trim()) {
        showToast('✨ You\'re on the list! Welcome to the Yanga family.');
        input.value = '';
      }
    });
  }

  // --- Toast ---
  function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(function() { toast.classList.remove('show'); }, 3000);
  }

  // --- Smooth scroll for anchor links ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var href = a.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var navHeight = 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // --- Footer year ---
  function initYear() {
    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  // --- Init all ---
  ready(function() {
    initNav();
    initHero();
    initReveal();
    initFAQ();
    initLightbox();
    initNewsletter();
    initSmoothScroll();
    initYear();
  });
})();