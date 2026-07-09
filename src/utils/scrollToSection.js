const MOBILE_BREAKPOINT = 768
const MOBILE_SCROLL_OFFSET = 20

export const scrollToSection = (event, sectionId) => {
  event?.preventDefault()

  const element = document.getElementById(sectionId)
  if (!element) return

  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT

  if (isMobile) {
    const header = document.querySelector('.header')
    const headerHeight = header?.offsetHeight ?? 0
    const elementPosition = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: elementPosition - headerHeight - MOBILE_SCROLL_OFFSET,
      behavior: 'smooth',
    })
    return
  }

  element.scrollIntoView({ behavior: 'smooth' })
}

export const createScrollHandler = (sectionId, onAfterScroll) => (event) => {
  scrollToSection(event, sectionId)
  onAfterScroll?.()
}
