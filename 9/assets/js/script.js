
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
let s = document.querySelectorAll('.lines input[name="banner"]');
setInterval(changeSlide, 5000);

function select_slide(num) {
    slides[currentIndex].style.opacity = 0;
    currentIndex = num.id;
    s[currentIndex].checked = true;
    slides[currentIndex].style.opacity = 1;
}

function changeSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    s[currentIndex].checked = true;
    slides[currentIndex].style.opacity = 1;
}