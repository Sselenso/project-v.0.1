function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetOffset = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetOffset - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollY = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const chapterLinks = document.querySelectorAll('a[href^="#chapter-"]');
chapterLinks.forEach(function(chapterLink) {
  chapterLink.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target, 1000);
  });
});

const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > window.innerHeight) {
    upButton.style.opacity = '1';
  } else {
    upButton.style.opacity = '0';
  }
});

upButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

