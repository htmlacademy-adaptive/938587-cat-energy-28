let headerMain = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-nav__toggle');
let navMain = document.querySelector('.main-nav');

headerMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
