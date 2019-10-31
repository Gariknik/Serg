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

    prev.addEventListener ('click', function () {
        plusSlides (-1);
    });

    next.addEventListener ('click', function () {
        plusSlides (1);
    });

    sliderDots.addEventListener ('click', function (e) {
        for (let i = 0; i < dotSlider.length + 1; i++) {
            if (e.target.classList. contains ('dot') && e.target == dotSlider [i - 1]) {
                currentSlides (i);
            }
        }
    });

    // Таймер
    let deadline = '2019-10-21';
    
    // получаем остаток часов минут секунд

    function getTimeRemaining (endtime) {
        let t = Date.parse(endtime) - Date.parse (new Date()),
        seconds = Math.floor ((t/1000) % 60),
        minutes = Math.floor ((t/1000/60) % 60),
        hours = Math.floor ((t/(1000*60*60)));
// создаём объект 
        return {
            'total': t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds 
       };
    }

    // Берём из вёрстки блок timer

    function setClock (id , endtime) {
        let timer = document.getElementById (id),
            hours = timer.querySelector ('.hours'),
            minutes = timer.querySelector ('.minutes'),
            seconds = timer.querySelector ('.seconds'),
            timeInterval = setInterval (updateClock, 1000);// обновляем функцию каждую секунду

    
        function updateClock() {
            let t = getTimeRemaining(endtime);

            // добавляем ноль к числу от 0 до 9

            function zeroNum (a){
                if(a <= 9) {
                    return '0' + a;
                    } else return a;
                };

                hours.textContent = zeroNum(t.hours);
                minutes.textContent = zeroNum(t.minutes);
                seconds.textContent = zeroNum(t.seconds);

            if (t.total <= 0) {
                clearInterval (timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock ('timer', deadline);

    // Модальное окно
    let more = document.querySelector ('.more'),
        overlay = document.querySelector ('.overlay'),
        close = document.querySelector ('.popup-close');

    // открыть окно при нажатии на кнопку 
    more.addEventListener ('click', function() {
        overlay.style.display='block';
        this.classList.add ('more-splash');
        document.body.style.overflow = 'hidden'; //остановить прокрутку страницы на фоне
    })

    // закрыть окно при нажатии на крестик 
    close.addEventListener ('click', function() {
        overlay.style.display='none';
        more.classList.remove ('more-splash');
        document.body.style.overflow = ''; //убрать блок прокрутки
    });

    // Вызов модальных окон в табах

    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(element => {
        element.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
});