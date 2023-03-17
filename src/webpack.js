// Libraries
import airDatepicker from './lib/air-datepicker'
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import accordion from './ts/accordion'
import parallax from './ts/parallax'
import formSubmit from './ts/form-submit'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'
import quiz from './ts/quiz'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  airDatepicker.init()
  fancybox.init()
  sliderSwiper.init()
  scrollHeader.init()
  mobileMenu.init()
  scrollTo.init()
  animation.init()
  waved.init()
  accordion.init()
  parallax.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()
  quiz.init()

})