let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.getElementById('mobilenav');

link.addEventListener('click', function() {
    ul.classList.toggle('open');
  })