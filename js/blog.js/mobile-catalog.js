function openMobileMenu() {
    let btnMobile = document.getElementById('btn__nav-catalog');
    let menuMovile = document.getElementById('ul-mobile__nav-catalog');

    btnMobile.classList.toggle('active');
    menuMovile.classList.toggle('active');
}