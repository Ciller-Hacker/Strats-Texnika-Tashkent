var elMore = document.querySelector('.header__res')
var eltitle = document.querySelector('.header--title')

elMore.addEventListener('click', () => {
    eltitle.classList.toggle('title__header')
});
