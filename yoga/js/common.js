var menu = document.querySelector('.nav');
var showMenu = document.querySelector('.menu-icon');
var darkSheet = document.querySelector('.hide-dark-sheet');
var wrapper = document.querySelector('#wrapper');
var body = document.querySelector('body');

showMenu.onclick = function () {
    menu.classList.toggle('nav-show');
    this.classList.toggle('menu-icon-close');
    darkSheet.classList.toggle('toggle-dark-sheet');
    body.classList.toggle('scroll-off');

    var navLi = document.querySelectorAll('.nav li a');

    for (var i = 0; i < navLi.length; i++){
        navLi[i].onclick = function () {
            menu.classList.remove('nav-show');
            this.classList.remove('menu-icon-close');
            darkSheet.classList.remove('toggle-dark-sheet');
            wrapper.classList.remove('fixed');
        }
    }
}



