import { coordinates } from './functions/coordinates'
import scrolledPage from './functions/scrolled-page'

const init = (): void => {

  const body = document.body as HTMLBodyElement
  const parallaxItems = body.querySelectorAll('*[data-parallax]') as NodeListOf<Element>

  parallaxItems.forEach((element: Element): void => {

    const parallaxItem = element as HTMLElement

    if (!parallaxItem) return

    const parallaxToScroll = (): void => {

      if (parallaxItem.dataset.parallax == 'scroll') {

        const depth: number = parallaxItem.dataset.parallaxDepth ? Number(parallaxItem.dataset.parallaxDepth) / 10 : 0.02

        parallaxItem.style.setProperty('--y', `${scrolledPage.init().top * depth}px`)

        window.requestAnimationFrame(parallaxToScroll)

      }

    }

    window.requestAnimationFrame(parallaxToScroll)

  })

}

export default { init }