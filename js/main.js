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
  const emailRouting = {
    comercial: 'comercial@savoyard.com.br',
    imprensa: 'fernandobertolazi@savoyard.com.br',
    experiencias: 'eventos@savoyard.com.br',
    parcerias: 'sac@savoyard.com.br'
  };
  if (subjectSelect) {
    subjectSelect.addEventListener('change', (e) => {
      const placeholder = document.getElementById('mensagemPlaceholder');
      if (placeholder) {
        const placeholders = {
          comercial: 'Descreva seu interesse comercial...',
          imprensa: 'Descreva sua solicitação de imprensa...',
          experiencias: 'Conte-nos sobre a experiência que deseja...',
          parcerias: 'Descreva a parceria que propõe...'
        };
        placeholder.placeholder = placeholders[e.target.value] || 'Sua mensagem...';
      }
      const form = document.getElementById('contactForm');
      if (form && emailRouting[e.target.value]) {
        form.action = 'https://formsubmit.co/' + emailRouting[e.target.value];
      }
    });
  }

  // Contact form submission handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const nome = formData.get('nome');
      const assunto = formData.get('assunto');
      const targetEmail = emailRouting[assunto] || 'sac@savoyard.com.br';
      const actionUrl = 'https://formsubmit.co/' + targetEmail;
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando...'; }
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          contactForm.innerHTML = `
            <div style="text-align: center; padding: 3rem 0;">
              <h3 style="color: var(--champagne-gold); margin-bottom: 1rem;">Mensagem enviada!</h3>
              <p>Obrigado, ${nome}. Recebemos sua mensagem e retornaremos em até 24 horas úteis.</p>
            </div>
          `;
        } else {
          throw new Error('Erro no envio');
        }
      }).catch(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Enviar mensagem'; }
        alert('Ocorreu um erro ao enviar. Tente novamente ou entre em contato por WhatsApp.');
      });
    });
  }
});
