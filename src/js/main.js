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
//sliderMovies
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
// mask
const Mask = () => {
  const maskElement = document.querySelector('.modalRegist__tell')
  const maskOptions = {
    mask: '+{38}(000)000-00-00',
  }
  const mask = IMask(maskElement, maskOptions)

}
Mask();

// modal
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
}
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')

/* regular */
const modelRegular = () => {

  /* Modal block */
  const ModalinputEmail = document.querySelector('.modal__mail');
  const ModalPassword = document.querySelector('.modal__password');
  const ModalBtn = document.querySelector('.modal__button');
  const ModalWrapper = document.querySelector('.modal__wrapper');
  const Modalink = document.querySelector('.modal__verification');


  /*Modal Valid */
  ModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]+$/;

    let EmailValid = emailRegex.test(ModalinputEmail.value);
    let PasswordValid = passwordRegex.test(ModalPassword.value);

    if (EmailValid) {
      ModalinputEmail.style.color = '#333';
    } else {
      ModalinputEmail.style.color = 'red';
      if (ModalinputEmail.value.trim() === '') {
        ModalinputEmail.value = 'ведите имейл';
      }

      if (!ModalinputEmail.value.includes('*')) {
        ModalinputEmail.value += '*';
        ModalinputEmail.style.color = 'red';
      }
    }
    ModalinputEmail.addEventListener('click', () => {
      ModalinputEmail.style.color = '#333';
      ModalinputEmail.value = '';
    })


    /*  Password */
    if (PasswordValid) {
      ModalPassword.style.color = '#333';
    } else {
      ModalPassword.style.color = 'red';
      if (ModalPassword.value.trim() === '') {
        ModalPassword.value = 'ведіть номер телефону';
      }

      if (!ModalPassword.value.includes('*')) {
        ModalPassword.value += '*';
        ModalPassword.style.color = 'red';
      }
    }

    ModalPassword.addEventListener('click', () => {
      ModalPassword.style.color = '#333';
      ModalPassword.value = '';
    })




    if (EmailValid && PasswordValid) {

      ModalinputEmail.value = '';
      ModalPassword.value = '';
      ModalWrapper.style.display = 'none'

    }

  });
  /*link */
  Modalink.addEventListener('click', () => {
    ModalWrapper.style.display = 'none'
    ModalRegistWrapper.style.display = 'flex'
  })




  /* ModalRegist */
  const ModalRegistWrapper = document.querySelector('.modalRegist__wrapper');
  const ModalRegisLink = document.querySelector('.modalRegist__regist');

  const ModalRegisInputTell = document.querySelector('.modalRegist__tell');
  const ModalRegisInputEmail = document.querySelector('.modal__email');
  const ModalRegitBtn = document.querySelector('.modalRegist__button');
  const ModalRegitClouse = document.querySelector('.modalRegist__close');



  /*ModalRegist Valid */

  ModalRegitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const tellRegex = /^\+?\d{1,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/;

    let EmailValid = emailRegex.test(ModalRegisInputEmail.value);
    let telldValid = tellRegex.test(ModalRegisInputTell.value);

    if (EmailValid) {
      ModalRegisInputEmail.style.color = '#333';
    } else {
      ModalRegisInputEmail.style.color = 'red';
      if (ModalRegisInputEmail.value.trim() === '') {
        ModalRegisInputEmail.value = 'ведите имейл';
      }

      if (!ModalRegisInputEmail.value.includes('*')) {
        ModalRegisInputEmail.value += '*';
        ModalRegisInputEmail.style.color = 'red';
      }
    }

    if (telldValid) {
      ModalRegisInputTell.style.color = '#333';
    } else {
      ModalRegisInputTell.style.color = 'red';
      if (ModalRegisInputTell.value.trim() === '') {
      }

      if (!ModalRegisInputTell.value.includes('*')) {
        ModalRegisInputTell.value += '*';
        ModalRegisInputTell.style.color = 'red';
      }
    }
    if (telldValid && EmailValid) {
      ModalRegisInputEmail.value = '';
      ModalRegisInputTell.value = '';
      ModalRegistWrapper.style.display = 'none'
      modalThankWrapepr.style.display = 'flex'
    }
  })
  /*link*/
  ModalRegisLink.addEventListener('click', () => {
    ModalWrapper.style.display = 'flex'
    ModalRegistWrapper.style.display = 'none'
  })
  /*clouse*/
  ModalRegitClouse.addEventListener('click', () => {
    ModalRegistWrapper.style.display = 'none'
    body.classList.remove('locked')
  })
  /*ModalRegist target */
  ModalRegistWrapper.addEventListener('click', e => {
    if (e.target === ModalRegistWrapper) {
      ModalRegistWrapper.style.display = 'none'
      body.classList.remove('locked')
    }
  })



  /* modalThank */
  const modalThankWrapepr = document.querySelector('.modalThank__wrapper');
  const modalThankClouse = document.querySelector('.modalThank__close');

  /*clouse*/
  modalThankClouse.addEventListener('click', () => {
    modalThankWrapepr.style.display = 'none'
    body.classList.remove('locked')
  })
  /*modalThank target */
  modalThankWrapepr.addEventListener('click', e => {
    if (e.target === modalThankWrapepr) {
      modalThankWrapepr.style.display = 'none'
      body.classList.remove('locked')
    }
  })

};
modelRegular();


const search = () => {
  const searchBtn = document.querySelector('.search__btn-clouse');
  const search = document.querySelector('.search');
  const searchImage = document.querySelector('.navigation__search');
  

  searchBtn.addEventListener('click', ()=>{
    search.classList.remove('active')
  })  
  searchImage.addEventListener('click', ()=>{
    search.classList.add('active')

  })  
}
search();