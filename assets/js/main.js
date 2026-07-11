/* ============================================================
   GENTS OF LAGOS — Interactions
   ============================================================ */
(function() {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); return; }
    document.addEventListener('DOMContentLoaded', fn);
  }

  // --- Preloader ---
  function initPreloader() {
    var pl = document.getElementById('preloader');
    if (!pl) return;
    window.addEventListener('load', function() {
      setTimeout(function() { pl.classList.add('hide'); }, 600);
    });
    // Fallback
    setTimeout(function() { pl.classList.add('hide'); }, 2500);
  }

  // --- Custom Cursor ---
  function initCursor() {
    var cursor = document.getElementById('cursor');
    var follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;
    if (window.matchMedia('(max-width: 768px)').matches) return;

    var mouseX = 0, mouseY = 0, fX = 0, fY = 0;
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animate() {
      fX += (mouseX - fX) * 0.15;
      fY += (mouseY - fY) * 0.15;
      follower.style.left = fX + 'px';
      follower.style.top = fY + 'px';
      requestAnimationFrame(animate);
    }
    animate();

    document.querySelectorAll('a, button, [data-hover], .work__item, .service-row').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('hover');
        follower.classList.add('hover');
      });
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      });
    });
  }

  // --- Nav ---
  function initNav() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!nav) return;
    window.addEventListener('scroll', function() {
      nav.classList.toggle('nav--scrolled', window.scrollY > 40);
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

  // --- Smooth scroll ---
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

  // --- Reveal on scroll ---
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .service-row, .work__item, .stat, .visit__block').forEach(function(el) { el.classList.add('in'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.service-row, .work__item, .stat, .visit__block, .about__cols p').forEach(function(el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // --- Year ---
  function initYear() {
    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  // --- Marquee duplicate for seamless loop ---
  function initMarquee() {
    var track = document.querySelector('.marquee__track');
    if (!track) return;
    track.innerHTML += track.innerHTML;
  }

  ready(function() {
    initPreloader();
    initCursor();
    initNav();
    initSmoothScroll();
    initReveal();
    initYear();
    initMarquee();
  });
})();