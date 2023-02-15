import scrolledPage from './functions/scrolled-page'

const init = (): void => {

  const header = document.querySelector('*[data-header]') as HTMLElement

  if (!header) return

  const scrollHeader = (): void => {

    if (scrolledPage.init().top > header.offsetHeight) {

      header.dataset.header = 'scroll'
      header.classList.add('bg-black', 'py-lg-2')
      header.classList.remove('py-lg-6')

    } else {

      header.dataset.header = 'auto'
      header.classList.remove('bg-black', 'py-lg-2')
      header.classList.add('py-lg-6')

    }

  }

  document.addEventListener('scroll', scrollHeader as EventListener)

}

export default { init }