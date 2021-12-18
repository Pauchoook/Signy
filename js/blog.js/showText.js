function readMore() {
    let more = document.getElementById('more-text');
    let btn = document.getElementById('btn__show-text');
    let show = document.getElementById('block__show');

    btn.classList.toggle('active-show');

    if (show.style.display === 'none') {
        show.style.display='block';
        btn.innerText='развернуть';
        more.style.display='none';
    } else {
        show.style.display='none';
        btn.innerText='свернуть';
        more.style.display='block';
    }
}