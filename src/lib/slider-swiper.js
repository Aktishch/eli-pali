import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import media from '../ts/functions/media'
import quiz from '../ts/quiz'

const init = () => {

  const quizImages = new Swiper('.quiz-images .swiper', {

    effect: 'cube',
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: false

  })

  const quizSlider = new Swiper('.quiz-slider .swiper', {

    navigation: {

      prevEl: '.quiz-slider .swiper-button-prev',
      nextEl: '.quiz-slider .swiper-button-next'

    },

    pagination: {

      el: '.quiz-slider .swiper-pagination',
      type: 'custom',

      renderCustom: (swiper, current, total) => {

        return total - current

      }

    },

    effect: 'flip',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,

    on: {

      slideChange: (swiper) => {

        quizImages.slideTo(swiper.activeIndex)

        quiz.checkQuizSlide(swiper.visibleSlides[0])

        if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

          swiper.el.closest('[data-quiz]').setAttribute('data-quiz-end', '')

        } else {

          swiper.el.closest('[data-quiz]').removeAttribute('data-quiz-end')

        }

      }

    }

  })

  const eventsSlider = new Swiper('.events-slider .swiper', {

    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 24,
    speed: 2000,
    loop: true,
    allowTouchMove: false,
    centeredSlides: true,
    watchSlidesProgress: true,
    freeMode: true,

    autoplay: {

      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const repertoireSlider = new Swiper('.repertoire-slider .swiper', {

    navigation: {

      prevEl: '.repertoire-slider .swiper-button-prev',
      nextEl: '.repertoire-slider .swiper-button-next'

    },

    effect: 'coverflow',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        spaceBetween: 30

      },

      [media.lg]: {

        centeredSlides: true

      },

      [media.xl]: {

        centeredSlides: true

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const clipsSlider = new Swiper('.clips-slider .swiper', {

    navigation: {

      prevEl: '.clips-slider .swiper-button-prev',
      nextEl: '.clips-slider .swiper-button-next'

    },

    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        slidesPerView: 2,
        spaceBetween: 42

      },

      [media.lg]: {

        slidesPerView: 3

      },

      [media.xl]: {

        slidesPerView: 4

      }

    },

    autoplay: {

      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: true

    }

  })

  const teamSlider = new Swiper('.team-slider .swiper', {

    pagination: {

      el: '.team-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 1.4,
    spaceBetween: 16,

    breakpoints: {

      [media.sm]: {

        slidesPerView: 2,
        spaceBetween: 30

      },

      [media.lg]: {

        slidesPerView: 'auto',
        spaceBetween: 0,
        allowTouchMove: false

      }

    },

  })

  const reviewSlider = new Swiper('.reviews-slider .swiper', {

    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    speed: 8000,
    allowTouchMove: false,

    breakpoints: {

      [media.md]: {

        spaceBetween: 32

      }

    },

    autoplay: {

      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false

    }

  })

  const performancesSlider = new Swiper('.performances-slider .swiper', {

    navigation: {

      prevEl: '.performances-slider .swiper-button-prev',
      nextEl: '.performances-slider .swiper-button-next'

    },

    pagination: {

      el: '.performances-slider .swiper-pagination',
      clickable: true

    },

    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 1000,
    grabCursor: true,

    breakpoints: {

      [media.md]: {

        loop: true

      },

      [media.xl]: {

        spaceBetween: 36,
        centeredSlides: true,
        loop: true

      }

    }

  })

  window.Swiper = Swiper

}

export default { init }