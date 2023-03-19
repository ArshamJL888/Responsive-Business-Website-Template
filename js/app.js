let headerIcon = document.querySelector('.header-icon');
let menuClass = document.querySelector('.menu');
let barIcon = document.querySelector('.header-icon i');

headerIcon.addEventListener('click', menuBarHandler);


function menuBarHandler() {
    if (barIcon.classList.contains('fa-bars')) {
        menuClass.style.left = '0';
        barIcon.classList.remove('fa-bars');
        barIcon.classList.add('fa-times');
    }
    else {
        menuClass.style.left = '-240px';
        barIcon.classList.add('fa-bars');
        barIcon.classList.remove('fa-times');
    }
}