import React from 'react'
import { ThemeProvider } from './contexts/ThemeProvider'
import DocumentHead from './components/layout/DocumentHead'
import CloudflareAnalytics from './components/layout/CloudflareAnalytics'
import SkipLink from './components/layout/SkipLink'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <DocumentHead />
      <CloudflareAnalytics />
      <div className="App">
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
