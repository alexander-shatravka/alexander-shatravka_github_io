
$(function() {
    $(".nav li a").click(function() {
        $(".nav li a").removeClass("active");
        $(this).toggleClass("active");
        $('.menu-icon-close').removeClass('.menu-icon-close')
    });
})