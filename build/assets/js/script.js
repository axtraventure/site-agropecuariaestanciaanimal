/**
 * Agropecuária Estância Animal - Interatividades e Otimizações
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Controle de Sombra e Estilo do Header Sticky
  const header = document.querySelector('header');
  const mainNav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav?.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
      mainNav?.classList.remove('bg-white');
    } else {
      mainNav?.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
      mainNav?.classList.add('bg-white');
    }
  });

  // 2. Destaque de Link Ativo no Menu de Navegação
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-[#247A38]', 'font-bold');
            link.classList.remove('text-gray-700');
          } else {
            link.classList.remove('text-[#247A38]', 'font-bold');
            link.classList.add('text-gray-700');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  // 3. Fechamento suave do menu mobile ao clicar em um link
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const alpineContainer = document.querySelector('[x-data]');
      if (alpineContainer && window.Alpine) {
        Alpine.raw(alpineContainer)?.mobileMenuOpen === false;
      }
    });
  });
});
