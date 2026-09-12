/**
 * K.K. BONE & JOINT CARE — MAIN JAVASCRIPT
 * Vanilla JS implementation: Navigation, Sticky Header, ScrollSpy,
 * FAQ Accordion, Gallery Lightbox, Modal & Appointment Form
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Sticky Header
  // --------------------------------------------------------------------------
  const siteHeader = document.querySelector('.site-header');

  const handleHeaderScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 24) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMobileNav = (forceState) => {
    if (!mobileNavToggle || !mainNav) return;
    const isExpanded = forceState !== undefined 
      ? forceState 
      : mobileNavToggle.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;

    mobileNavToggle.setAttribute('aria-expanded', String(newState));
    if (newState) {
      mainNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      mainNav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  // Close mobile nav on nav-link click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mainNav && mainNav.classList.contains('is-open')) {
        toggleMobileNav(true);
      }
    });
  });

  // Close mobile nav on click outside
  document.addEventListener('click', (e) => {
    if (mainNav && mainNav.classList.contains('is-open')) {
      if (!mainNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        toggleMobileNav(true);
      }
    }
  });

  // Close mobile nav on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('is-open')) {
      toggleMobileNav(true);
    }
  });

  // --------------------------------------------------------------------------
  // 3. Navigation Active Link Detection (Multi-Page + ScrollSpy)
  // --------------------------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  let isMultiPageActive = false;

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute('href');
    if (linkHref) {
      const linkFile = linkHref.split('#')[0].split('/').pop();
      if (linkFile && linkFile === currentPath) {
        link.classList.add('is-active');
        isMultiPageActive = true;
      } else {
        link.classList.remove('is-active');
      }
    }
  });

  // If on index.html, optional on-page scroll spy
  if (currentPath === 'index.html' || currentPath === '') {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
      const updateActiveNavLink = () => {
        const scrollY = window.scrollY + 120;
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('href') === `index.html#${sectionId}`) {
                link.classList.add('is-active');
              }
            });
          }
        });
      };
      window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    }
  }

  // --------------------------------------------------------------------------
  // 4. Accessible FAQ Accordion
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Single-open mode: close other accordion items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          otherItem.classList.remove('is-open');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });

    // Keyboard support: Arrow up / down between triggers
    trigger.addEventListener('keydown', (e) => {
      const triggers = Array.from(document.querySelectorAll('.faq-trigger'));
      const index = triggers.indexOf(trigger);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = triggers[(index + 1) % triggers.length];
        if (next) next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = triggers[(index - 1 + triggers.length) % triggers.length];
        if (prev) prev.focus();
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Clinic Gallery Lightbox
  // --------------------------------------------------------------------------
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('#lightbox-img') : null;
  const lightboxCaption = lightbox ? lightbox.querySelector('#lightbox-caption') : null;
  const lightboxCounter = lightbox ? lightbox.querySelector('#lightbox-counter') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close-btn') : null;
  const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev-btn') : null;
  const lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next-btn') : null;

  let currentGalleryIndex = 0;

  const galleryData = galleryItems.map((item) => {
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-caption-title')?.textContent || '';
    const sub = item.querySelector('.gallery-caption-sub')?.textContent || '';
    return {
      src: img?.getAttribute('src') || '',
      alt: img?.getAttribute('alt') || 'Clinic Photograph',
      caption: title ? `${title} — ${sub}` : ''
    };
  });

  const updateLightboxView = (index) => {
    if (!lightboxImg || !galleryData[index]) return;
    currentGalleryIndex = index;
    const data = galleryData[currentGalleryIndex];
    lightboxImg.src = data.src;
    lightboxImg.alt = data.alt;
    if (lightboxCaption) lightboxCaption.textContent = data.caption;
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryData.length}`;
  };

  const openLightbox = (index) => {
    if (!lightbox) return;
    updateLightboxView(index);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      const prevIdx = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
      updateLightboxView(prevIdx);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextIdx = (currentGalleryIndex + 1) % galleryData.length;
      updateLightboxView(nextIdx);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      const prevIdx = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
      updateLightboxView(prevIdx);
    } else if (e.key === 'ArrowRight') {
      const nextIdx = (currentGalleryIndex + 1) % galleryData.length;
      updateLightboxView(nextIdx);
    }
  });

  // --------------------------------------------------------------------------
  // 6. Appointment Booking Modal & Form Handling
  // --------------------------------------------------------------------------
  const appointmentModal = document.getElementById('appointment-modal');
  const appointmentModalClose = appointmentModal ? appointmentModal.querySelector('.modal-close-btn') : null;
  const bookAppointmentBtns = document.querySelectorAll('[data-action="book-appointment"]');

  const openAppointmentModal = () => {
    if (!appointmentModal) return;
    appointmentModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    const firstInput = appointmentModal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  };

  const closeAppointmentModal = () => {
    if (!appointmentModal) return;
    appointmentModal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  bookAppointmentBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // If it's an anchor pointing to #contact, only prevent default if we want modal popup
      if (btn.classList.contains('open-modal')) {
        e.preventDefault();
        openAppointmentModal();
      }
    });
  });

  if (appointmentModalClose) {
    appointmentModalClose.addEventListener('click', closeAppointmentModal);
  }

  if (appointmentModal) {
    appointmentModal.addEventListener('click', (e) => {
      if (e.target === appointmentModal) {
        closeAppointmentModal();
      }
    });
  }

  // Set min date to today for all date inputs
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const todayISO = new Date().toISOString().split('T')[0];
  dateInputs.forEach((input) => {
    input.setAttribute('min', todayISO);
  });

  // Form Validation & Demo Submission
  const forms = document.querySelectorAll('.clinic-appointment-form');

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      const nameField = form.querySelector('[name="full_name"]');
      const phoneField = form.querySelector('[name="phone"]');
      const dateField = form.querySelector('[name="preferred_date"]');
      const reasonField = form.querySelector('[name="reason"]');
      const submitBtn = form.querySelector('button[type="submit"]');

      // Clear previous invalid states
      form.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));

      // Validate Name
      if (nameField && !nameField.value.trim()) {
        nameField.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Phone (Indian phone format: 10 digits or with +91)
      const phoneClean = phoneField ? phoneField.value.replace(/[\s\-()]/g, '') : '';
      const phoneRegex = /^(\+?91)?[6789]\d{9}$/;
      if (phoneField && (!phoneClean || !phoneRegex.test(phoneClean))) {
        phoneField.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Date
      if (dateField && !dateField.value) {
        dateField.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Reason
      if (reasonField && !reasonField.value) {
        reasonField.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulated Submission Loading State
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="spinner" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"/>
          </svg>
          Submitting Request...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();

          // Close booking modal if form was inside modal
          closeAppointmentModal();

          // Open Success Modal
          openSuccessModal();
        }, 600);
      }
    });
  });

  // Success Modal
  const successModal = document.getElementById('success-modal');
  const successModalClose = successModal ? successModal.querySelector('.modal-close-btn') : null;
  const successOkBtn = successModal ? successModal.querySelector('.success-ok-btn') : null;

  const openSuccessModal = () => {
    if (!successModal) return;
    successModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    successOkBtn?.focus();
  };

  const closeSuccessModal = () => {
    if (!successModal) return;
    successModal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (successModalClose) successModalClose.addEventListener('click', closeSuccessModal);
  if (successOkBtn) successOkBtn.addEventListener('click', closeSuccessModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccessModal();
    });
  }

  // --------------------------------------------------------------------------
  // 7. Scroll Reveal Animations (IntersectionObserver)
  // --------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion is preferred or observer not supported, show immediately
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }
});

// Inline spinner keyframes
const style = document.createElement('style');
style.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);
