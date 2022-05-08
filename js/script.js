//////////////////////////////////////////////////
/////////// NUESTROS ELEMENTOS DEL DOM ///////////
//////////////////////////////////////////////////

const $btnClose = document.getElementById('btn-close');
const $btnNext = document.getElementById('btn-next');
const $btnPrev = document.getElementById('btn-prev');
const $images = document.querySelectorAll('img');
const $modal = document.getElementById('container__modal');
const $imageActive = document.getElementById('img-active');
let indexImage = 0;

//////////////////////////////////////////////////
////////// ABRIMOS NUESTRO MODAL /////////////////
//////////////////////////////////////////////////

const openModal = (e) => {
  $imageActive.src = e.target.src;
  $modal.style.display = 'flex';
  indexImage = Array.from($images).indexOf(e.target);
};

$images.forEach((el) => {
  el.addEventListener('click', openModal);
});

//////////////////////////////////////////////////
//////////// CERRAMOS NUESTRO MODAL //////////////
//////////////////////////////////////////////////

$btnClose.addEventListener('click', () => {
  $modal.style.display = 'none';
});

//////////////////////////////////////////////////
////////////// BOTON ADELANTAR //////////////////
//////////////////////////////////////////////////

const nextImage = () => {
  if (indexImage === $images.length - 1) {
    indexImage = -1;
  }
  $imageActive.src = $images[indexImage + 1].src;
  indexImage++;
};

$btnNext.addEventListener('click', nextImage);

//////////////////////////////////////////////////
////////////// BOTON ATRASAR //////////////////
//////////////////////////////////////////////////

const prevImage = () => {
  if (indexImage === 0) {
    indexImage = $images.length;
  }
  $imageActive.src = $images[indexImage - 1].src;
  indexImage--;
};

$btnPrev.addEventListener('click', prevImage);
