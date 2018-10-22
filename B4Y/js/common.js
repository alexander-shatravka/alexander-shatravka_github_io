$(document).ready(function(){
    initDatepicker();
    initMobileMenu();
    initSlickSliders();
})


function initDatepicker() {
    var now = new Date();
    var today = now.format('dd.mm.yyyy');
    jQuery('.datepicker').datepicker({
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Aвгуст", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        minDate: today,
        dateFormat: 'dd.mm.yy',
        prevText: '<',
        nextText: '>',
    });

    jQuery('.datepicker').val(today);
}

function initMobileMenu(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active'); 
        $('.header-container').toggleClass('is-open');       
    });
}

function initSlickSliders(){
    if($(window).width() < 768){
        $('.mobile-slider').slick({
            autoplay: false,
            vertical: false,
            speed	: 1000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            draggable: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnClick: false,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
        })
    }
}