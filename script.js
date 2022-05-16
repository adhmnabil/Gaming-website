let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');


menu.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    menu.classList.toggle('move')
    bell.classList.remove('seenotfic')
})

// notify 

let bell = document.querySelector('.notfication')
let notify = document.querySelector('#bell-icon')

notify.addEventListener('click' , ()=>{
    bell.classList.toggle('seenotfic')
})


//swiper

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:2000, 
        disableOnInteraction:false ,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // custom scrol bar 

  window.onscroll = function() {myfunction()}

  function myfunction(){
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winscroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%'
  }