'use strict';
$(document).ready(function () {

    $(".nav-button").click(function () {
        $(this).next().slideToggle();
    });
	
	$(".header-form").submit(function(){
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Спасибо! Мы свяжемся с Вами в ближайшее время.");
			$(".header-form").find("input").val("");
			$('select').val("");
		});
		return false;
	});

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
    });

    $(".menu-resp").click(function () {
        $(this).toggleClass("menu-resp_active");
        $(".menu-resp-list").toggleClass("menu-resp-list_active");
    });
    $(".menu-resp-list a").click(function () {
        $(".menu-resp-list").toggleClass("menu-resp-list_active");
        $(".menu-resp").toggleClass("menu-resp_active");
    });
});
