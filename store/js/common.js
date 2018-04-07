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

function active() {
        for(var i = 0; i < navigation.length; i++) {
        	if (navigation[i].innerText === localStorage['active-nav']){
        		navigation[i].classList.add("active-nav");
        	};    
    	}
    }
 active()

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
var body = document.querySelector('body');

showMenu.onclick = function () {
    menu.classList.toggle('nav-show');
    this.classList.toggle('menu-icon-close');
    darkSheet.classList.toggle('toggle-dark-sheet');
    body.classList.toggle('scroll-off')
}



