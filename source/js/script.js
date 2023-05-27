let headerMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-nav__toggle');
let navMain = document.querySelector('.main-nav');
let map = document.querySelector('.map');
let mapG = document.querySelector('.map-g');

headerMain.classList.remove('main-header--nav-nojs');
navMain.classList.add('main-nav--closed');
mapG.classList.remove('map-g--nojs');
map.classList.add('map--open');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
