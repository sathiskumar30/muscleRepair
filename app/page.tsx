"use client"

import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Membership from "./components/Membership"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import { ThemeProvider } from "./components/ThemeProvider"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling polyfill for older browsers
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href")?.substring(1)
        const targetElement = document.getElementById(targetId || "")

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Membership />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
