/*============scroll section native line======*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscreen = () => {
    sections.forEach(sec => {;
    let top = window.scrollY;
    let offset = sec.offsetTop = 150;
    let height = sec.offsetHeight;
    let id = sec.getaAttributes('id');

    if(top >= offset &&  top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector("header nav a[href"=' + id + ']').classList.add('active');
        });
    };
});




 /*========sticky navbar======*/   
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);
}; 


/*============ swiper ======*/
var swiper = new Swiper(".my swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabcursor: true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
  navigation: {
    nextE1:".swiper-button-next",
    prevE1:".swiper-button-prev",
  },
});  
