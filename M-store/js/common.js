var navigation = document.querySelectorAll('.nav li');
for(var k = 0; k < navigation.length; k++){
    navigation[k].onclick = function () {
        document.querySelectorAll('.nav li').forEach(function (value) {value.classList.remove("active")});
        this.classList.add("active");
    }
}

var genres = document.querySelectorAll('.genres li');
for(var k = 0; k < genres.length; k++){
    genres[k].onclick = function () {
        document.querySelectorAll('.genres li').forEach(function (value) {value.classList.remove("active")});
        this.classList.add("active");
    }
}


var squareSorting = document.querySelector('.s-squares');
var listSorting = document.querySelector('.s-list');
var products = document.querySelectorAll('.products');

listSorting.onclick = function () {
    for(var i = 0; i <= products.length; i++){
        products[i].classList.add('products-in-line');
    }}

squareSorting.onclick = function () {
    for(var i = 0; i <= products.length; i++){
        products[i].classList.remove('products-in-line');
    }}