window.addEventListener('load', function () {
  let preloader = document.getElementById('page-preloader');
  let spinner = preloader.querySelector('.spinner');
  let content = document.getElementById('page-content');

  spinner.style.opacity = 1;
  setTimeout(function () {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 800);
});