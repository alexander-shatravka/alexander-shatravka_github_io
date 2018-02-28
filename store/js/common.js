function costInHeader(){
    if(localStorage['totalAmount'] !== undefined) {
        document.querySelector(".cost-header").innerText = localStorage['totalAmount'];
    }
    if (localStorage['totalAmountItems'] !== undefined){
        document.querySelector(".quantityHeader").innerText = localStorage['totalAmountItems'];
    }
}
costInHeader();


var navigation = document.querySelectorAll('.nav li a');
for(var k = 0; k < navigation.length; k++){
    navigation[k].onclick = function () {
        document.querySelectorAll('.nav li a').forEach(function (value) {value.classList.remove("active-nav")});
        this.classList.add("active-nav");
        localStorage['active-nav'] = this.innerText;
    }
}

var searchIco = document.querySelector(".search-icon");
var searchField = document.querySelector(".search");

searchIco.onclick = function () {
    searchField.style.display="block";
    this.onclick = function () {
        searchField.classList.toggle('search-visible')
    }
}


var menu = document.querySelector('.nav');
var showMenu = document.querySelector('.menu-icon');
var darkSheet = document.querySelector('.hide-dark-sheet');

showMenu.onclick = function () {
    menu.classList.toggle('nav-show');
    this.classList.toggle('menu-icon-close');
    darkSheet.classList.toggle('toggle-dark-sheet');
}



