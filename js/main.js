const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

if (!nav || !abrir || !cerrar) {
  console.error("⚠️ Alguno de los elementos no se encontró. Revisa los IDs en HTML.");
}

// Abrir menú
abrir.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.add("visible");
});

// Cerrar menú
cerrar.addEventListener("click", (e) => {
  e.stopPropagation(); 
  nav.classList.remove("visible");
});

// Cerrar al hacer clic FUERA
document.addEventListener("click", (e) => {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
  }
});

//----------------CARRUSEL-------------------- 

const swiper = new Swiper('.swiper-hero', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove:true,
  effect:'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});