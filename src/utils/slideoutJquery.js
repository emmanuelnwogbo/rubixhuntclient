import $ from "jquery";

function slidout_Jquery() {
	$("#nav-expander").on("click", function(e) {
		e.preventDefault();
		$("nav").toggleClass("nav-expanded");
		$(".navbar__overlay").show();
	});
	// This is to open and close the expanding nav-bar with the three bars //

	// This is to close the expanding nav-bar with the cancel button //
	$(".menu .close").on("click", function(e) {
		e.preventDefault();
		$("nav").toggleClass("nav-expanded");
		$(".navbar__overlay").hide();
	});
	// This is to close the expanding nav-bar with the cancel button //

	// To close offsite navigation after user click on an link in navigation //
	$(".nav__close__onclick  a").on("click", function(e) {
		//se.preventDefault();
		$("nav").removeClass("nav-expanded");
		$(".navbar__overlay").hide();
	});
	// To close offsite navigation after user click on an link in navigation //

	// To close overlay after user click on an link in navigation //
	$(".navbar__overlay").on("click", function(e) {
		//e.preventDefault();
		$("nav").removeClass("nav-expanded");
		$(".navbar__overlay").hide();
	});
	// To close overlay after user click on an link in navigation //

	// To change to the categories after clicking the category link navigation //
	$(".category").on("click", function(e) {
		e.preventDefault();
		$(".navbar__two").show();
		$(".navbar__one").hide();
	});
	// To change to the categories after clicking the category link navigation //

	// To change to the main menu after clicking the back link navigation //
	$(".back").on("click", function(e) {
		e.preventDefault();
		$(".navbar__one").show();
		$(".navbar__two").hide();
	});
	// To change to the main menu after clicking the back link navigation //

	// If category is displayed them main menu shouldn't //
	if ($(".navbar__one").is(":visible")) {
		$(".navbar__two").hide();
	}
}

export default slidout_Jquery;
