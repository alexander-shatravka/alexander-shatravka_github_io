$(document).ready(function(){
    // Фикмированная шапка при скролле
    $("#header").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $("#header").addClass("default").fadeIn('fast');
        } else {
            $("#header").removeClass("default").fadeIn('fast');
        };
    });
});

