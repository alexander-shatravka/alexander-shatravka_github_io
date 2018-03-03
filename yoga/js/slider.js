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
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
}
showSlides()

function AutoShowSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
    slideIndex++
}
setTimeout(function () {
    AutoShowSlides(slideIndex)
},10000);

