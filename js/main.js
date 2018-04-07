let sidebar = $('.sidebar');
let showSidebar = $('.me');
let hideSidebar = $('.close');
let body = $('body');

showSidebar.click(function (event) {
    let target = event.target;
    sidebar.addClass('show-sidebar');
    body.addClass('scroll-off');
})

hideSidebar.click(function () {
    sidebar.removeClass('show-sidebar');
    body.removeClass('scroll-off');
})