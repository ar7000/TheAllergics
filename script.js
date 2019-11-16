const nav = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');

function showMenu() {
    nav.classList.toggle('active');
}

mobileMenu.onclick = function () {
    showMenu();
};