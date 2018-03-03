var slideIndex = 1;

var myTimer = setInterval(function () {
    AutoShowSlides(slideIndex)
},10000);

function plusSlidesQ(k) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        AutoShowSlides(slideIndex)
    },10000);
    showSlides(slideIndex += k);
}

function currentSlideQ(k) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        AutoShowSlides(slideIndex)
    },10000);
    showSlides(slideIndex = k);
}


function showSlides(k) {
    var slides = document.getElementsByClassName("mySlides-quote");
    var dots = document.getElementsByClassName("dot-q");
    if (k > slides.length) {slideIndex = 1}
    if (k < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
showSlides()

function AutoShowSlides(k) {
    var slides = document.getElementsByClassName("mySlides-quote");
    var dots = document.getElementsByClassName("dot-q");
    if (k > slides.length) {slideIndex = 1}
    if (k < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    slideIndex++
}
setTimeout(function () {
    AutoShowSlides(slideIndex)
},10000);

