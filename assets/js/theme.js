function toggleTheme() {
  const themeToggle = document.querySelector(".theme-toggle");
  const htmlElement = document.querySelector("html");

  if (themeToggle.style.justifyContent === "flex-start") {
    themeToggle.style.justifyContent = "flex-end";
    htmlElement.setAttribute("data-theme", "dark");
    document.cookie = "theme=dark; expires=365; path=/";
  } else {
    themeToggle.style.justifyContent = "flex-start";
    htmlElement.setAttribute("data-theme", "light");
    document.cookie = "theme=light; expires=365; path=/";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  if (theme === "dark") {
    const themeToggle = document.querySelector(".theme-toggle");
    const htmlElement = document.querySelector("html");
    themeToggle.style.justifyContent = "flex-end";
    htmlElement.setAttribute("data-theme", "dark");
  }
});

const slider = document.querySelector(".slider");
slider.addEventListener("click", toggleTheme);



