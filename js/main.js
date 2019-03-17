let sidebar = $('.sidebar');
let showSidebar = $('.me');
let hideSidebar = $('.close');
let body = $('body');

function hideS(){
    sidebar.removeClass('show-sidebar');
    body.removeClass('scroll-off');
}

function showS(){
    sidebar.toggleClass('show-sidebar');
    body.toggleClass('scroll-off');

    $(document).mouseup(function (e) {
        var container = $(".sidebar");
        if (container.has(e.target).length === 0 && e.target.className !== 'sidebar show-sidebar'){
            hideS();
        }
    });
}

showSidebar.click(showS);
hideSidebar.click(hideS);
