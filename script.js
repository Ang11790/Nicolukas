// script.js

// Función para abrir PDFs en nueva pestaña
function abrirPDF(ruta) {
  window.open(ruta, "_blank");
}

// Función para hacer scroll suave a una sección
function scrollToSection(id) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
  }
}

// Carrusel de imágenes del hero
window.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function nextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(nextSlide, 4000);

});