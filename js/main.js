let sidebar = $('.sidebar');
let showSidebar = $('.me');
let hideSidebar = $('.close');

showSidebar.click(function (event) {
    let target = event.target;
    sidebar.addClass('show-sidebar');
})

hideSidebar.click(function () {
    sidebar.removeClass('show-sidebar');
})