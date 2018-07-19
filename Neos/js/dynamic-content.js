var desktopItems = $('#desktop-setup').html();
var mobileItems = $('#mobile-setup').html();

function dynamicContent (){
    $('.setup-items-container').html(desktopItems);
    if($(window).width() < '768'){
        $('.setup-items-container').html(mobileItems);
    }
}

$(window).resize(dynamicContent());
$(document).ready(dynamicContent());

