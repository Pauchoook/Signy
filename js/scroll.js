function scrollTo(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let btnScroll = document.querySelector('.up__footer');
let sectionScroll = document.querySelector('.header');

btnScroll.addEventListener('click', () => {
    scrollTo(sectionScroll);
})