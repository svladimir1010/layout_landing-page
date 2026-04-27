'use strict';

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__menu-btn');
const body = document.body;

if (menuBtn && header) {
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('is-open');

    body.classList.toggle('no-scroll');
  });
}
