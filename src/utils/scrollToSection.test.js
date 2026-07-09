import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { scrollToSection, createScrollHandler } from './scrollToSection'

describe('scrollToSection', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <header class="header"></header>
      <section id="about"></section>
    `

    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true, configurable: true })
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })

    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('prevents default navigation when event is provided', () => {
    const event = { preventDefault: vi.fn() }
    const element = document.getElementById('about')
    element.scrollIntoView = vi.fn()

    scrollToSection(event, 'about')

    expect(event.preventDefault).toHaveBeenCalledOnce()
  })

  it('scrolls into view on desktop', () => {
    const element = document.getElementById('about')
    element.scrollIntoView = vi.fn()

    scrollToSection(null, 'about')

    expect(element.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(window.scrollTo).not.toHaveBeenCalled()
  })

  it('uses header offset on mobile', () => {
    Object.defineProperty(window, 'innerWidth', { value: 480, writable: true, configurable: true })

    const header = document.querySelector('.header')
    Object.defineProperty(header, 'offsetHeight', { value: 64, configurable: true })

    const element = document.getElementById('about')
    element.getBoundingClientRect = () => ({ top: 200 })
    element.scrollIntoView = vi.fn()

    scrollToSection(null, 'about')

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 216,
      behavior: 'smooth',
    })
    expect(element.scrollIntoView).not.toHaveBeenCalled()
  })

  it('does nothing when section is missing', () => {
    scrollToSection(null, 'missing-section')

    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})

describe('createScrollHandler', () => {
  beforeEach(() => {
    document.body.innerHTML = '<section id="contact"></section>'
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true, configurable: true })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('runs callback after scrolling', () => {
    const element = document.getElementById('contact')
    element.scrollIntoView = vi.fn()
    const onAfterScroll = vi.fn()

    createScrollHandler('contact', onAfterScroll)(null)

    expect(onAfterScroll).toHaveBeenCalledOnce()
  })
})
