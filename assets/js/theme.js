function toggleTheme() {
	const themeToggle = document.querySelector(".theme-toggle");
	const htmlElement = document.querySelector("html");

	if (themeToggle.style.justifyContent === "flex-start") {
		themeToggle.style.justifyContent = "flex-end";
		htmlElement.setAttribute("data-theme", "dark");
		//setCookie("theme", "dark", 365);
	} else {
		themeToggle.style.justifyContent = "flex-start";
		htmlElement.setAttribute("data-theme", "light");
		//setCookie("theme", "light", 365);
	}
}

window.addEventListener("DOMContentLoaded", function () {
	const theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");

	if (theme === "dark") {
		const themeToggle = document.querySelector(".theme-toggle");
		const htmlElement = document.querySelector("html");
		//themeToggle.style.justifyContent = "flex-end";
		htmlElement.setAttribute("data-theme", "dark");
	}
});

const slider = document.querySelector(".slider");
slider.addEventListener("click", toggleTheme);