$(document).ready(function() {
    $('#splitScreen').multiscroll({
		scrollingSpeed: 700,
		easing: "easeOutExpo",
		sectionSelector: '.slide',
		leftSelector: '.left_slides',
        rightSelector: '.right_slides'
	});
});