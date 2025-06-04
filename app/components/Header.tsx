"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import logo from '../../public/logo.png'
import Image from "next/image"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Membership", href: "#membership" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent dark:from-gray-900/50 dark:via-gray-900/20"
        }`}
    >
      {/* Subtle top border */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 group">
            <div className="relative">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                <span className="text-black font-black text-xl">P</span>
              </div> */}
              <div>
                <Image
                  src={logo}
                  alt="MuscleRepair Logo"
                  width={60}
                  height={60}
                />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div> */}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">
                <span className="text-[#fcca09]"> Muscle Repair</span>
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                Elite Fitness
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                    : "text-white/90 hover:text-yellow-400"
                  }`}
              >
                {item.name}
                <div className="absolute inset-0 bg-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}

            {/* Enhanced Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-4 p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? "text-gray-700 dark:text-gray-300 hover:text-yellow-500" : "text-white hover:text-yellow-400"
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden mt-6 pb-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl"
          >
            <div className="px-4 py-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(245, 158, 11, 0.1)" }}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition-all duration-300 rounded-lg"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
