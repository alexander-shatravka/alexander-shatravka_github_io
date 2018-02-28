var option = document.querySelectorAll(".list>li");
for(var i = 0; i < option.length; i++){
    option[i].addEventListener('click', addFilter);
}

function addFilter() {
    this.parentNode.parentNode.classList.add('choosed-filter');
    this.parentNode.previousElementSibling.innerHTML = this.innerText;
    this.parentNode.querySelectorAll(".list>li>a").forEach(function (value){value.classList.remove("active-li")});
    this.childNodes[0].classList.add("active-li");
    if(this.innerText === 'Not selected'){
        this.parentNode.parentNode.classList.remove('choosed-filter');
        this.parentNode.previousElementSibling.innerHTML = '';
    }
}

// for tablet and mobile

var openFilters = document.querySelector(".filters-list");
var categories = document.querySelector(".categories");
var close = document.querySelector(".close");
var catalogItems = document.querySelector(".catalog-container");

openFilters.onclick = function () {
    close.style.display="block";
    categories.classList.add("categories-visible");
    catalogItems.classList.add('dark');
};

close.onclick = function () {
    categories.classList.remove("categories-visible");
    close.style.display="none";
    catalogItems.classList.toggle('dark');
};

var aciveFilter = document.querySelectorAll('.category');
var filtersList = document.querySelectorAll('.filters-list li');

for (var k = 0; k < aciveFilter.length; k++) {
    aciveFilter[k].addEventListener('click', filtersModify);
}

function filtersModify() {
    var liText = this.childNodes[0].innerText;
    this.parentNode.querySelectorAll(".category li").forEach(function (value){value.classList.remove("active-category")});
    this.parentNode.querySelectorAll(".category li").forEach(function (value){value.classList.remove("active-not-selected")});
    this.classList.add('active-category');
    if(liText ==='Not selected'){
        this.classList.remove('active-category');
        this.classList.add('active-not-selected');
}

    var headerLi = this.parentNode.previousElementSibling.innerText;
    filtersList.forEach(function adding(value) {
        if(headerLi === value.innerText.substring(0,value.innerText.length-1)){
            value.innerText = liText + ',';
            value.style.color ='#DB4350';
        }
        if(headerLi === value.innerText){
            value.innerText = liText;
            value.style.color ='#DB4350';
        }
    });

}








