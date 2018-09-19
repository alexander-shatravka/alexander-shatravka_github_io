$(document).ready(function(){
    
initPreloader();
initSlickAutoplay();
initFancybox();
initHeaderSlideLine();
initPlayVideo();
initPriceSlider();
//initPagination();
//initItemOpener();
initFixedHeader();
initAnchorsScrolling();
initSelectFilters();
initActiveOption();
initItemCounter();
initCartOpener();

function initPreloader() {
	$(window).load(function() {
		setTimeout(function() {
			$('#preloader').fadeOut('slow', function() {});
		}, 2000);
	});
} 

function initAnchorsScrolling() {
    $(".main-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
            showMenu.classList.remove('menu-icon-close');
    });
}

function initFixedHeader(){
    var headerMain = $('#wrapper>header');
    headerMain.removeClass("fixed");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            headerMain.addClass("fixed");
        }
        if ($(this).scrollTop() > $(window).height()-150) {
            headerMain.addClass('slideDown');
        }
         else {
            headerMain.removeClass("fixed");
            headerMain.removeClass("slideDown");
        };
    });
}

function initPlayVideo() {
	$('.play-button').click(function(){
		$('.live-wrapper').toggleClass('play');
	})
}

function initHeaderSlideLine() {
    var j$ = jQuery,
        $nav = j$(".main-nav"),
        $slideLine = j$("#slide-line"),
        $currentItem = j$(".main-nav>.active");

    j$(function(){

        // Underline transition
        j$($nav).find("a").hover(
            // Hover on
            function(){
                $slideLine.css({
                    "width": j$(this).width(),
                    "left": j$(this).position().left
                });
            },
            // Hover out
            function(){
            	$slideLine.width(0);
            }
        );
    });
}

function initSlickAutoplay(){
    setTimeout(function() {
        initSlick();
    }, 3000);
    
}


function initSlick(){
	$('.slick-slider').slick({
        autoplay: true,
        vertical: false,
		autoplaySpeed: 4000,
		speed	: 1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		pauseOnFocus: false,
		pauseOnHover: false,
        pauseOnClick: false,
        prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
	});
}

/*$('.slick-slider').on('afterChange', function(){
    setTimeout(function(){
        $('')
    }, 1000)
})*/

// lightbox init
function initFancybox() {
	jQuery('a.lightbox-opener, [data-fancybox]').fancybox({
		parentEl: 'body',
		margin: [50, 0],
		smallBtn: false,
		closeClickOutside: true,
		touch: true,
		speed: 400,
		overlayOpacity: 0.2,
	});
	jQuery('a.lightbox-opener, [data-fancybox]').on('click', function() {
		jQuery(this).closest('html').toggleClass('fancybox-enabled');
	})
}

function initItemOpener(){
	$('.open-item').on('click', function(){
		$(this).parent().toggleClass('opened-item');
		$('body').toggleClass('scroll-off');
	})
}

function initPriceSlider() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 2000,
      values: [ 75, 2000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "грн " + ui.values[ 0 ] + " - грн " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "грн " + $( "#slider-range" ).slider( "values", 0 ) +
      " - грн " + $( "#slider-range" ).slider( "values", 1 ) );
  };
});

function template(data) {
    var html = '';
    $.each(data, function(index, item){
        html += item;
    });
    return html;
}

function initPagination() {
    var items = document.getElementsByClassName('item');
	$('.pagination').pagination({
        pageSize: 9,
        dataSource: window.arrOfItemsHTML,
        prevText: 'пред.',
        nextText: 'след.',

        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            $('.items-container').html(html);
        },
    })
    return items;
}

function initSelectFilters(){
    $('.category').on('click','a', function(){
        $(this).addClass('active');
    })

    $('.features').on('click','a', function(){
        $(this).toggleClass('active');
    })
}

function initActiveOption(){
    $('.dropdown').on('click','a', function(){
        $('.dropdown a').removeClass('active');
        $(this).addClass('active');
        $('.select-block .selected').html($(this).html());
    })
}


var sizeOfSet = Number($('.size').text().split(' ')[0]);
var weightOfSet = Number($('.weight').text().split(' ')[0]);
var priceOfSet = Number($('.current-price b').text());
function initItemCounter(){
    $('.counter').on('click', 'span', function(e){
        var quantity = $('.quantity');
        var quantityValue = Number($('.quantity').text());
        
        if($(this).hasClass('plus')){
            quantity.text(quantityValue + 1);
            quantityValue ++;
            initUpdateItemMenu();
        }
        if($(this).hasClass('minus') && ($(this).hasClass('disabled')) === false){
            quantity.text(quantityValue - 1);
            quantityValue --;
            initUpdateItemMenu()
        }
        if(quantityValue === 1){
            $('.minus').addClass('disabled');
        }
        else{
            $('.minus').removeClass('disabled');
        }

        function initUpdateItemMenu() {
            //$('.size').text((sizeOfSet * quantityValue) + ' шт');
            //$('.weight').text((weightOfSet * quantityValue) + ' гр'); 
            $('.current-price b').text((priceOfSet * quantityValue)); 
        }
    })
}


function initCartOpener(){
    $('.cart-icon').on('click', function(e){
        e.preventDefault();
        $('.cart-container').toggleClass('open');
    })

    $('.icon-close').on('click', function(){
        $('.cart-container').removeClass('open');
    })

    $(document).mouseup(function (e) {
        var container = $(".cart-container");
        if (container.has(e.target).length === 0 && e.target.className !== 'cart-container open'){
            $('.cart-container').removeClass('open');
        }
    });
}








