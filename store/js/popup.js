var popupWindow = document.querySelector('.popup');
var button = document.querySelector('.button');
var close = document.querySelector('.close-popup');
var confirm = document.querySelector('.confirm');
var popupDarkness= document.querySelector('.popup-darkness')
var wrapper = document.querySelector('#wrapper');
var body = document.querySelector('body');

button.onclick=function () {
    popupWindow.classList.toggle('popup-show');
    popupDarkness.classList.toggle('darkness-toggle');
    wrapper.classList.toggle('wrapper-fixed');
    body.classList.add('scroll-off');
}

close.onclick=function () {
    popupWindow.classList.toggle('popup-show');
    popupDarkness.classList.toggle('darkness-toggle');
    wrapper.classList.toggle('wrapper-fixed');
    body.classList.remove('scroll-off');
}

confirm.onclick=function () {
    popupWindow.classList.toggle('popup-show');
    popupDarkness.classList.toggle('darkness-toggle');
    wrapper.classList.toggle('wrapper-fixed');
    body.classList.remove('scroll-off');
}