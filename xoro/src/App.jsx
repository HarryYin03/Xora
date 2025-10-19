import React from 'react'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import Features from './sections/Features.jsx'
import Pricing from './sections/Pricing.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Faq from './sections/Faq.jsx'

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
    </main>
  )
}

export default App
