const nav = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');

function showMenu() {
    nav.classList.toggle('active');
}

mobileMenu.onclick = function () {
    showMenu();
};

window.onscroll = function(){
  headerScroll()
};

function headerScroll(){
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
    header.style.height = "60px";
    nav.style.top = "60px";
  } else {
    header.style.height = "120px";
    nav.style.top = "120px";
  }
}