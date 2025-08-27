// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Popup de cookies
const cookiePopup = document.getElementById('cookiePopup');
const acceptBtn = document.getElementById('acceptCookies');

if (!localStorage.getItem('cookiesAccepted')) {
  cookiePopup.style.display = 'block';
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookiePopup.style.display = 'none';
});

// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por contactarme. Te responderé pronto.');
  this.reset();
});