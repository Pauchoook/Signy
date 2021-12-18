var btnOpen = document.querySelector('#btn__input');
var windowNews = document.querySelector('#window__input');
var windowClose = document.querySelector('#close__window');

btnOpen.onclick = function() {
    windowNews.style.display="block";
    windowClose.style.display="none";
};