/* ============================================================
   GENTS OF LAGOS — Main JS
   ============================================================ */
(function() {
  'use strict';
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); return; }
    document.addEventListener('DOMContentLoaded', fn);
  }

  function initNav() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
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

  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    if (!lightbox || !lightboxImg) return;
    document.querySelectorAll('.gallery__item').forEach(function(item) {
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

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var href = a.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  function initYear() {
    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  function initHoursHighlight() {
    var days = ['sun','mon','tue','wed','thu','fri','sat'];
    var today = days[new Date().getDay()];
    var todayEl = document.getElementById('hours-' + today);
    if (todayEl) todayEl.classList.add('today');
  }

  ready(function() {
    initNav();
    initReveal();
    initFAQ();
    initLightbox();
    initSmoothScroll();
    initYear();
    initHoursHighlight();
  });
})();