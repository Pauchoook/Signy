function openMenu() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('burger').style.display='none';
    document.querySelector('body').style.overflow='hidden';
}

function closeMenu() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('burger').style.display='block';
    document.querySelector('body').style.overflow='auto';
}