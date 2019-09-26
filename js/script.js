window.addEventListener ('DOMContentLoaded', function() {

'use strict';

    let tab = document.querySelectorAll ('.info-header-tab'),
        info = document.querySelector ('.info-header'),
        tabContent = document.querySelectorAll ('.info-tabcontent');
        

        
    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent [i].classList. remove ('show');
            tabContent [i].classList. add ('hide');
        }
    }

    hideTabContent (1);
    function showTabContent (b) {
        if (tabContent [b].classList.contains ('hide')) {
            tabContent [b].classList. remove ('hide');
            tabContent [b].classList. add ('show');
        }
    }

    info.addEventListener ('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains ('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab [i]) {
                    hideTabContent (0);
                    showTabContent (i);
                    break;
                }
            }
        }
    });

// СЛАЙДЕР
    let sliderItem = document.querySelectorAll ('.slider-item'),
        prev = document.querySelector ('.prev'),
        next = document.querySelector ('.next'),
        sliderDots = document.querySelector ('.slider-dots'),
        dotSlider = document.querySelectorAll ('.dot'),
        slideIndex = 1;
        //slider = document.querySelector ('.wrap'),
// функция скрывающая неактивные слайды
    showSlides (slideIndex);

    function showSlides (n) {
        if (n < 1) {
            slideIndex = sliderItem.length;
        } else if (n > sliderItem.length) {
            slideIndex = 1;
        }
        for (let i = 0; i < sliderItem.length; i++) {
            sliderItem [i].style.display = 'none';
        }
        for (let i = 0; i < dotSlider.length; i++) {
            dotSlider [i].classList.remove ('dot-active');
        }
        sliderItem [slideIndex - 1].style.display = 'block';
        dotSlider [slideIndex - 1].classList.add ('dot-active');
    }

    //Листать слайдер
    function plusSlides (n) {
        showSlides (slideIndex += n);
    }
   // При клике на точку высвечивается корректный слайд
   function currentSlides (n) {
    showSlides (slideIndex = n);
    }
    // навешивание обработчика событий

    prev.onclick = function () {
        plusSlides (-1);
    }

    next.onclick = function () {
        plusSlides (1);
    }

    sliderDots.onclick = function (e) {
        for (let i = 0; i < dotSlider.length + 1; i++) {
            if (e.target.classList. contains ('dot') && e.target == dotSlider [i - 1]) {
                currentSlides (i);
            }
        }
    }
});

