"use strict"

//прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', omMenuLinkClick);
    });

    function omMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__inner').offsetHeight; 
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');  
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');  
    });
}



const input = document.querySelectorAll('.form__input');

const html = document.querySelector('html');

for( let index = 0; input.length > 0; index++) {
    input[index].addEventListener("click", () => {
        input[index].classList.add('_active');
        input[index].parentElement.classList.add('_active');

        html.addEventListener("click", (e) => {
            if (e.target !== input[index]) {
                input[index].classList.remove('_active');
                input[index].parentElement.classList.remove('_active');
            }
        });
    });
}

