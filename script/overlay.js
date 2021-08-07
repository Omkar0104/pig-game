'use strict';
const showModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-btn');

const rmHiddenClass = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeBtn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', rmHiddenClass);
}
close.addEventListener('click', closeBtn);
overlay.addEventListener('click', closeBtn);
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
