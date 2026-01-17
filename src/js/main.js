const whatsappBtn = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    whatsappBtn.classList.add('show');
  } else {
    whatsappBtn.classList.remove('show');
  }
});
