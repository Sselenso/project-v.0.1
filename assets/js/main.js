document.addEventListener('DOMContentLoaded', function() {
  const tabsMenu = document.querySelector('.tabs-menu');
  const stickyClass = 'sticky';
  let isSticky = false;
  let lastScrollPosition = window.pageYOffset;

  function toggleStickyClass() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > tabsMenu.offsetTop && currentScrollPosition > lastScrollPosition && !isSticky) {
      tabsMenu.classList.add(stickyClass);
      isSticky = true;
    } else if (currentScrollPosition < lastScrollPosition && isSticky) {
      tabsMenu.classList.remove(stickyClass);
      isSticky = false;
    }

    lastScrollPosition = currentScrollPosition;
  }

  window.addEventListener('scroll', toggleStickyClass);
});


