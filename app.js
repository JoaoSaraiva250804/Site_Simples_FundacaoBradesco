'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', () => {

  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  var className = document.body.className;

  if (className == 'light-theme') {
    switcher.textContent = 'Dark'; 
    console.log('current class name: ' + className);
  } else {
    switcher.textContent = 'Light'; 
    console.log('current class name: ' + className);
  }
});