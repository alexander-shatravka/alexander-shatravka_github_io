
var menu = document.querySelector('.nav');
var showMenu = document.querySelector('.menu-icon');
var darkSheet = document.querySelector('.hide-dark-sheet');
var wrapper = document.querySelector('#wrapper');

showMenu.onclick = function () {
    menu.classList.toggle('nav-show');
    this.classList.toggle('menu-icon-close');
    darkSheet.classList.toggle('toggle-dark-sheet');
    wrapper.classList.toggle('fixed');
}



