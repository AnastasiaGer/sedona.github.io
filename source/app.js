var mainNavigation = document.querySelector(".main-nav");

var mainNvaigationItems = mainNavigation.querySelector(".main-nav__list");
var btnOpenNavigation = mainNavigation.querySelector(".main-nav__btn-open");
var btnCloseNavigation = mainNavigation.querySelector(".main-nav__btn-close");

mainNavigation.classList.remove("main-nav--nojs");


btnOpenNavigation.addEventListener("click", function() {

	if (mainNvaigationItems.classList.contains("hidden")) {

		mainNvaigationItems.classList.remove("hidden");

		btnOpenNavigation.classList.add("hidden");
		btnCloseNavigation.classList.remove("hidden");
	}
});


btnCloseNavigation.addEventListener("click", function() {

	if (!mainNvaigationItems.classList.contains("hidden")) {

		mainNvaigationItems.classList.add("hidden");

		btnOpenNavigation.classList.remove("hidden");
		btnCloseNavigation.classList.add("hidden");
	}
});
