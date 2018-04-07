var showMenu = document.querySelector('.menu-icon');

    $(document).ready(function(){
        $(".nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
             showMenu.classList.remove('menu-icon-close');
        });
    });