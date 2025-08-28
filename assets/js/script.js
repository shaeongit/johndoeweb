// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
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


// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});