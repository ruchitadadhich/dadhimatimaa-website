import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Icon from './components/Icon.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Gallery from './pages/Gallery.jsx'
import Darshan from './pages/Darshan.jsx'
import Visit from './pages/Visit.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sandstone-50 dark:bg-nightstone-900 text-sandstone-800 dark:text-sandstone-100 transition-colors">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/darshan" element={<Darshan />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      <a
        href="tel:+919001865226"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-saffron-500 text-maroon-900 flex items-center justify-center shadow-lg hover:bg-saffron-400 transition-colors"
        aria-label="Call temple office"
      >
        <Icon name="phone" className="w-6 h-6" />
      </a>
    </div>
  )
}
