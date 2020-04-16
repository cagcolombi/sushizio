//PARALLAX
const rellax = new Rellax('.rellax-header',{
  speed: -8,
  breakpoints: [600, 900, 1200]
});

const rellax1 = new Rellax('.rellax-features',{
  speed: -8,
  center: true,
  breakpoints: [600, 900, 1200]
});

const rellax2 = new Rellax('.rellax-heading',{
  speed: 10,
  breakpoints: [600, 900, 1200]
});

//SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    if(innerWidth < 900){
      closeNav();
    }
  });
});

//Function for the showMeMore button and arrow button due to the parallax
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("arrow").addEventListener('click', () => {
//End Rellax and reset parallax header to his original position
  rellax.refresh();
  scrollTo(document.getElementById("header"));
})

document.getElementById("btn-showme").addEventListener('click', () => {
  scrollTo(document.getElementById("features"));
})

//HAMBURGER ANIMATION
const icon = document.querySelector('.icon');
const menu = document.querySelector('.navigation__nav');

icon.addEventListener('click', () => {
  if (!icon.classList.contains('open')) {
    icon.classList.add('open');
    menu.style.height = "100%";
    menu.style.opacity = "1";
  } else {
    icon.classList.remove('open');
    menu.style.height = "0%";
    menu.style.opacity = "0";
  }
});

function closeNav(){
  icon.classList.remove('open');
  menu.style.height = "0%";
  menu.style.opacity = "0";
}

//ADD EVENT ON RESIZE TO RESET MENU'S OPACITY TO 1 AT 900PX(BREAKPOINT)
window.addEventListener('resize', function(){
  if(this.innerWidth > 900){
    menu.style.opacity = "1";
  }
});

//SCROLL REVEAL
ScrollReveal({ reset: true });

ScrollReveal().reveal('.flex-container', {
  delay:100,
  duration: 800
});

ScrollReveal().reveal('.flex-cont', {
  delay:100,
  duration: 800
});