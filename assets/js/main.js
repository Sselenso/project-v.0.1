document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".tabs-menu-button");
  const tabs = document.querySelectorAll(".tabs-content");
  const menuWrap = document.querySelector(".tabs-menu-wrap");
  const menu = document.querySelector(".tabs-menu");
	const searchBlock = document.querySelector(".search-block");

  function setActiveTab(sectionId) {
    menuButtons.forEach(button => {
      const href = button.getAttribute("href");
      if (href === sectionId) {
        button.classList.add("active");				
      } else {
        button.classList.remove("active");
      }
    });
  }

  function toggleStickyClass() {
    const currentScrollPosition = window.scrollY;
    const menuWrapOffsetTop = menuWrap.offsetTop;

    if (currentScrollPosition > menuWrapOffsetTop) {
      menu.classList.add("sticky");
			searchBlock.classList.add("hidden");
    } else {
      menu.classList.remove("sticky");
			searchBlock.classList.remove("hidden");
    }

    tabs.forEach(tab => {
      const tabOffsetTop = tab.offsetTop;
      const sectionId = `#${tab.getAttribute("id")}`;

      if (currentScrollPosition >= tabOffsetTop && currentScrollPosition < tabOffsetTop + tab.offsetHeight) {
        setActiveTab(sectionId);
      }
    });
  }

  menuButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = button.getAttribute("href");
      const targetTab = document.querySelector(sectionId);
      targetTab.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", toggleStickyClass);
});
