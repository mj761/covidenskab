//Get the button
var mybutton = document.getElementById("topBtn");

//scrool funktion
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// skifter video vi animation slide + video controls
$(document).ready(function () {
    var pos = 0,
        slides = $('.slide'),
        numOfSlides = slides.length;

    function nextSlide() {
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '-100%' }, 500);
        pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
        slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
    }

    function previousSlide() {
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '100%' }, 500);
        pos = (pos == 0 ? numOfSlides - 1 : --pos);
        slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
    }
    // opretter onclick via class 
    $('.left').click(previousSlide);
    $('.right').click(nextSlide);
})

function onYouTubeIframeAPIReady() {
    $('.slide').each(function (index, slide) {
        // tag -video elentet inde i hver .slide
        var iframe = $(slide).find('.video')[0]
        // laver ny YT plater fra iframe og gemmer den i slide objectet
        slide.video = new YT.Player(iframe)
    })
}

// slider text i forhold til video
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

};

// funktion til at gemme og vise pop up boxe på forsiden
function overlay() {

    if (!$('.historie-box').is(':visible')) {
        $(".historie-box").show();

    } else {
        $(".historie-box").hide();
    }
}
$(".overly").click(function () {
    overlay();
})

function overlayspil() {

    if (!$('.minispil-box').is(':visible')) {
        $(".minispil-box").show();

    } else {
        $(".minispil-box").hide();
    }
}
$(".overly").click(function () {
    overlayspil();
})

function overlayquiz() {

    if (!$('.quiz-box').is(':visible')) {
        $(".quiz-box").show();

    } else {
        $(".quiz-box").hide();
    }
}
$(".overly").click(function () {
    overlayquiz();
})




