'use strict';

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.header__menu-btn');
const body = document.body;
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Перевіряємо, чи існують елементи перед додаванням слухачів
if (menuBtn && header) {
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  });
}

// Закриваємо мобільне меню при кліку на будь-яке посилання
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });
});
