
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides-item");
    var dots = document.getElementsByClassName("slide-dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-i", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-i";
}


var sizes = document.querySelectorAll('.sizes');
for(var k = 0; k < sizes.length; k++){
    sizes[k].onclick = function () {
        document.querySelectorAll('.sizes').forEach(function (value) {value.classList.remove("active-sz")});
        this.classList.add("active-sz");
    }
}

var colors = document.querySelectorAll('.colors');
for(var n = 0; n < colors.length; n++){
    colors[n].onclick = function () {
        document.querySelectorAll('.colors').forEach(function (value) {value.classList.remove("active-col")});
        this.classList.add("active-col");
    }
}


var addingButton = document.querySelector('.addingButton');
var itemObject = {};
var arrayItems = [];
localStorage['item-to-bag']='';

function pushToStorage() {
    itemObject.title = document.querySelector('.title-item').innerText;
    itemObject.cost = document.querySelector('.cost').innerText;
    itemObject.size = document.querySelector('.active-sz').innerText;
    itemObject.color = document.querySelector('.active-col').innerText;
    itemObject.thumbnail = (document.querySelector('.mySlides-item:first-child').innerHTML).split('src="')[1].split('">')[0];
    arrayItems.push(itemObject);
    localStorage['item-to-bag'] = JSON.stringify(arrayItems);
}

addingButton.addEventListener('click', pushToStorage);


