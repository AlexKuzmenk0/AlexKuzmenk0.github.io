const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const couters = document.querySelectorAll('.progress__item-counter'),
    lines = document.querySelectorAll('.progress__item-line span');

couters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
