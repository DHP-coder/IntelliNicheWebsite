$(document).ready(function() {
    $(".section2-about__typo a").hover(function() {
        $(".section2-about__typo a img").addClass("icon-read-more");
    }, function() {
        $(".section2-about__typo a img").removeClass("icon-read-more");
    });

    $(window).resize(function() {

        // Responsive background spin game
        var width = $(window).width();
        console.log(width);
        if (width < 768) {
            $(".text-service-introduce").addClass("mb-7");
            $(".col-first").removeClass("order-first");
        }
        if (width >= 768) {
            $(".text-service-introduce").removeClass("mb-7");
            $(".col-first").addClass("order-first");
        }
    });
});