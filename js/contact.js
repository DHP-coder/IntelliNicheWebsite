$(document).ready(function() {


    $(window).resize(function() {

        // Responsive background spin game
        var width = $(window).width();
        console.log(width);
        if (width < 768) {
            $(".slider").removeClass("order-last");

        }
        if (width >= 768) {
            $(".slider").addClass("order-last");
        }
    });





});