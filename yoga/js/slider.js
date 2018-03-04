var slideIndex = 1;

var myTimer = setInterval(function () {
    AutoShowSlides(slideIndex)
},10000);

function plusSlides(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        AutoShowSlides(slideIndex)
    },10000);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        AutoShowSlides(slideIndex)
    },10000);
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
showSlides()

function AutoShowSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slideIndex++
}
setTimeout(function () {
    AutoShowSlides(slideIndex)
},10000);

