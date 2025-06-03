"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "equipment", name: "Equipment" },
    { id: "members", name: "Members" },
    { id: "classes", name: "Classes" },
    { id: "facilities", name: "Facilities" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "equipment",
      image: "/placeholder.svg?height=400&width=600",
      title: "State-of-the-Art Equipment",
      description: "Premium strength training machines",
    },
    {
      id: 2,
      category: "members",
      image: "/placeholder.svg?height=400&width=600",
      title: "Member Success Story",
      description: "John's incredible transformation",
    },
    {
      id: 3,
      category: "classes",
      image: "/placeholder.svg?height=400&width=600",
      title: "High-Intensity Training",
      description: "Group fitness at its finest",
    },
    {
      id: 4,
      category: "facilities",
      image: "/placeholder.svg?height=400&width=600",
      title: "Modern Locker Rooms",
      description: "Luxury amenities for comfort",
    },
    {
      id: 5,
      category: "members",
      image: "/placeholder.svg?height=400&width=600",
      title: "Community Champions",
      description: "Our elite member community",
    },
    {
      id: 6,
      category: "equipment",
      image: "/placeholder.svg?height=400&width=600",
      title: "Cardio Zone",
      description: "Advanced cardiovascular equipment",
    },
    {
      id: 7,
      category: "classes",
      image: "/placeholder.svg?height=400&width=600",
      title: "Yoga & Flexibility",
      description: "Mind-body wellness sessions",
    },
    {
      id: 8,
      category: "facilities",
      image: "/placeholder.svg?height=400&width=600",
      title: "Recovery Center",
      description: "Professional recovery services",
    },
    {
      id: 9,
      category: "members",
      image: "/placeholder.svg?height=400&width=600",
      title: "Personal Training",
      description: "One-on-one expert guidance",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Witness the excellence that defines PowerGym. From cutting-edge equipment to inspiring member
            transformations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(245, 158, 11, 0.15)",
              }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/30 rounded-2xl transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 p-12 rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-black rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50, 0],
                    y: [0, Math.random() * 100 - 50, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 15 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-black mb-4">Experience PowerGym Yourself</h3>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Schedule your exclusive tour and see why we're the choice of champions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-black text-yellow-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
              >
                Book Your Tour
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
