// Small enhancements: mobile nav & current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('navLinks');
if (toggle && links){
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
