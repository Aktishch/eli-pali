import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeRu from 'air-datepicker/locale/ru'
import touchDevice from '../ts/functions/touch-device'

const init = () => {

  const calendars = document.querySelectorAll('*[data-input="calendar"]')

  calendars.forEach(calendar => {

    new AirDatepicker(calendar, {

      locale: localeRu,
      isMobile: touchDevice.init(),
      autoClose: true,
      minDate: new Date(),
      position: calendar.dataset.position || 'bottom left'

    })

  })

}

export default { init }