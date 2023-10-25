function toggleTheme() {
	const themeToggle = document.querySelector(".theme-toggle");
	const htmlElement = document.querySelector("html");

	if (themeToggle.style.justifyContent === "flex-start") {
		themeToggle.style.justifyContent = "flex-end";
		htmlElement.setAttribute("data-theme", "dark");
		setCookie("theme", "dark", 365);
	} else {
		themeToggle.style.justifyContent = "flex-start";
		htmlElement.setAttribute("data-theme", "light");
		setCookie("theme", "light", 365);
	}
}

window.addEventListener("DOMContentLoaded", function () {
	const theme = getCookie("theme");

	if (theme === "dark") {
		const themeToggle = document.querySelector(".theme-toggle");
		const htmlElement = document.querySelector("html");
		themeToggle.style.justifyContent = "flex-end";
		htmlElement.setAttribute("data-theme", "dark");
	}
});

function setCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = "expires=" + date.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
	const cookieName = name + "=";
	const cookies = document.cookie.split(";");

	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return "";
}

window.addEventListener("DOMContentLoaded", function () {
	const cookieConsent = getCookie("cookieConsent");

	if (!cookieConsent) {
		showCookieWarning();
	}
});

function showCookieWarning() {
	const cookieWarning = document.querySelector(".cookie-warning");
	cookieWarning.style.display = "block";
}

function hideCookieWarning() {
	const cookieWarning = document.querySelector(".cookie-warning");
	cookieWarning.style.display = "none";
	setCookie("cookieConsent", "true", 365);
}

const cookieWarningAcceptButton = document.querySelector(".cookie-warning-accept");
const cookieWarningCloseButton = document.querySelector(".cookie-warning-close");
cookieWarningAcceptButton.addEventListener("click", hideCookieWarning);
cookieWarningCloseButton.addEventListener("click", hideCookieWarning);

const slider = document.querySelector(".slider");
slider.addEventListener("click", toggleTheme);
