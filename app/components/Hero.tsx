"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import TrainerPhoto1 from '../../public/photo1.webp'


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const springConfig = { damping: 15, stiffness: 150 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full grid grid-cols-6 gap-px">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-full border-r border-yellow-500/10"></div>
            ))}
          </div>
          <div className="h-full w-full grid grid-rows-6 gap-px">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full border-b border-yellow-500/10"></div>
            ))}
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Typography */}
          <motion.div className="lg:col-span-5 space-y-8 relative z-20" style={{ opacity }}>
            {/* Vertical text */}
            <motion.div
              className="absolute -left-16 top-1/2 -translate-y-1/2 origin-center -rotate-90"
              style={{ y: y3 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-yellow-500/50"></div>
                <span className="text-yellow-500/70 uppercase tracking-[0.3em] text-xs font-medium">Est. 2010</span>
              </div>
            </motion.div>

            {/* Main heading with creative typography */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 font-medium tracking-wider text-xs uppercase">
                  Redefining Fitness
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="text-7xl md:text-8xl xl:text-9xl font-black leading-none tracking-tight"
              >
                <div className="flex flex-col">
                  <span className="text-white">BREAK</span>
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                      LIMITS
                    </span>
                    <motion.div
                      className="w-12 h-12 rounded-full border-2 border-yellow-500/50 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.h1>
            </div>

            {/* Description with animated line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-yellow-500/30"></div>
              <p className="text-xl text-gray-300 pl-6 max-w-md">
                A revolutionary fitness experience where science meets strength, and determination meets results.
              </p>
            </motion.div>

            {/* Stats with horizontal scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative overflow-hidden py-8"
            >
              <motion.div
                animate={{ x: [0, -100, 0] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="flex gap-8 absolute whitespace-nowrap"
              >
                {[
                  { number: "500+", label: "ELITE MEMBERS" },
                  { number: "24/7", label: "ACCESS" },
                  { number: "100%", label: "COMMITMENT" },
                  { number: "15+", label: "TRAINERS" },
                  { number: "∞", label: "POTENTIAL" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#fcca09]">{stat.number}</span>
                    <span className="text-xs text-gray-400 tracking-wider">{stat.label}</span>
                    <span className="mx-4 text-yellow-500/30">|</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center Column - Vertical Line */}
          <motion.div className="hidden lg:block lg:col-span-1 relative h-[70vh]" style={{ opacity }}>
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent"
              style={{ scaleY: useTransform(scrollYProgress, [0, 0.5], [1, 1.5]) }}
            ></motion.div>
          </motion.div>

          {/* Right Column - 3D Visual Element */}
          <motion.div
            className="lg:col-span-6 relative z-10"
            style={{
              opacity,
              rotateX: springRotateX,
              rotateY: springRotateY,
              perspective: 1000,
            }}
          >
            {/* 3D-like image stack */}
            <div className="relative h-[60vh] max-h-[700px] w-full perspective-1000">
              {/* Background shape */}
              <motion.div
                className="absolute inset-0 bg-yellow-500/5 rounded-3xl border border-yellow-500/20"
                style={{ y: y1, scale: 0.9, rotateX: 5, rotateY: -5, z: -100 }}
              ></motion.div>

              {/* Middle shape */}
              <motion.div
                className="absolute inset-0 bg-yellow-500/10 rounded-3xl border border-yellow-500/30"
                style={{ y: y2, scale: 0.95, rotateX: 5, rotateY: 5, z: -50 }}
              ></motion.div>

              {/* Main image container */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20"
                style={{ z: 0 }}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    // src="/placeholder.svg?height=700&width=500"
                    src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?cs=srgb&dl=pexels-anush-1229356.jpg&fm=jpg"
                    // src={TrainerPhoto1}
                    alt="Elite Fitness"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-yellow-500/20"></div>
                </div>

                {/* Overlay elements */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top overlay */}
                  <div className="flex justify-between items-start">
                    <div className="bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10">
                      <div className="text-xs text-gray-400">MEMBER LEVEL</div>
                      <div className="text-lg font-bold text-yellow-500">ELITE</div>
                    </div>

                    <motion.div
                      className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="text-black font-black text-xl">PG</div>
                    </motion.div>
                  </div>

                  {/* Bottom overlay */}
                  <div className="space-y-4">
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, delay: 1.5 }}
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">PROGRESS</span>
                      <span className="text-yellow-500 font-bold">85%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 bg-black p-4 rounded-xl border border-yellow-500/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 8 2 22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 15H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">STRENGTH</div>
                    <div className="text-lg font-bold text-white">+43%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-black p-4 rounded-xl border border-yellow-500/30 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">ENDURANCE</div>
                    <div className="text-lg font-bold text-white">+67%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-4"
        >
          <span className="text-xs text-yellow-500/70 uppercase tracking-widest">Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-yellow-500/80 to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-yellow-500/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-yellow-500/30"></div>
    </section>
  )
}

export default Hero
