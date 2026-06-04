/* Savoyard — Main JavaScript */

document.addEventListener('DOMContentLoaded', () => {

  // Header scroll effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Smooth reveal on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Contact form segmentation
  const subjectSelect = document.getElementById('assunto');
  if (subjectSelect) {
    subjectSelect.addEventListener('change', (e) => {
      const placeholder = document.getElementById('mensagemPlaceholder');
      if (!placeholder) return;
      const placeholders = {
        comercial: 'Descreva seu interesse comercial...',
        imprensa: 'Descreva sua solicitação de imprensa...',
        experiencias: 'Conte-nos sobre a experiência que deseja...',
        parcerias: 'Descreva a parceria que propõe...'
      };
      placeholder.placeholder = placeholders[e.target.value] || 'Sua mensagem...';
    });
  }
});
