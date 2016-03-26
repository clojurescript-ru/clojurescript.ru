(function() {
  var menu = document.querySelector('.list.links');
  var open = document.querySelector('.open');
  document.querySelector('.close div')
    .addEventListener('click', function() {
      menu.classList.remove('open');
      open.style.display = 'block';
    }, false);
  open
    .addEventListener('click', function() {
      menu.classList.add('open');
      open.style.display = 'none';
    }, false);
})();
