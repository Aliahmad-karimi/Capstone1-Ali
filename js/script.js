//menu Icon toggle
const menuBar = document.querySelector('.menuIcon');
const menuList = document.querySelector('nav');
const menuItem = document.getElementById('ml');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    menuList.classList.toggle('active');
})