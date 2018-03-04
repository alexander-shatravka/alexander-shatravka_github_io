var slideIndexQ = 1;

var myTimer = setInterval(function () {
    AutoShowSlidesQ(slideIndexQ)
},10000);

function plusSlidesQ(k) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        AutoShowSlidesQ(slideIndexQ)
    },10000);
    showSlidesQ(slideIndexQ += k);
}

function currentSlideQ(k) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        AutoShowSlidesQ(slideIndexQ)
    },10000);
    showSlidesQ(slideIndexQ = k);
}


function showSlidesQ(k) {
    var slides = document.getElementsByClassName("mySlides-quote");
    var dots = document.getElementsByClassName("dot-q");
    if (k > slides.length) {slideIndexQ = 1}
    if (k < 1) {slideIndexQ = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexQ-1].style.display = "block";
    dots[slideIndexQ-1].className += " active";
}
showSlidesQ()

function AutoShowSlidesQ(k) {
    var slides = document.getElementsByClassName("mySlides-quote");
    var dots = document.getElementsByClassName("dot-q");
    if (k > slides.length) {slideIndexQ = 1}
    if (k < 1) {slideIndexQ = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexQ-1].style.display = "block";
    dots[slideIndexQ-1].className += " active";
    slideIndexQ++
}
setTimeout(function () {
    AutoShowSlidesQ(slideIndexQ)
},10000);

