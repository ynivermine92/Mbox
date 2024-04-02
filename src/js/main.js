// burger
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()

//<script>
/* Fancybox */
Fancybox.bind('[data-fancybox="gallery"]', {});





//sliderShows
const swiperShows = new Swiper('.swiperShows', {
  slidesPerView: 6,
  // If we need pagination
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 41
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 41
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 41
    },
    
  }
  
});

const swiperMovies = new Swiper('.swiperMovies', {
  slidesPerView: 6,
  // If we need pagination
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 41
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 41
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 41
    },
    
  }
  
});
