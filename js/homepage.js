$(document).ready(function() {
    $(".home-about__typo a").hover(function() {
        $(".home-about__typo a img").addClass("icon-read-more");
    }, function() {
        $(".home-about__typo a img").removeClass("icon-read-more");
    });

    $(window).resize(function() {

        // Responsive background spin game
        var width = $(window).width();
        console.log(width);
        if (width < 768) {
            $(".slider").removeClass("order-last");
            $(".navbar").addClass("bg-light");
            $(".logo").attr("src", "./images/homepage/logo-black.png");
            $(".fa-bars").css("color", "#000");
            $(".nav-item a").css("color", "#000");
        }
        if (width >= 768) {
            $(".slider").addClass("order-last");
        }
    });

    $(".owl-carousel").owlCarousel({

        autoPlay: 3000,
        items: 3,

        center: true,
        nav: true,
        loop: true,
        responsiveClass: true,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        paginationNumbers: true,
        navigationText: ["prev", "next"],

    });



});

$(document).on("scroll", function() {


    if ($(document).scrollTop() > 10 && $(window).width() >= 768) {

        $(".navbar").addClass("bg-light");
        $(".logo").attr("src", "./images/homepage/logo-black.png");
        $(".fa-bars").css("color", "#000");
        $(".nav-item a").css("color", "#000");

    }
    if ($(document).scrollTop() < 10 && $(window).width() >= 768) {
        $(".navbar").removeClass("bg-light");
        $(".logo").attr("src", "./images/homepage/logo.png");
        $(".fa-bars").css("color", "#fff");
        $(".nav-item a").css("color", "#fff");
    }


});