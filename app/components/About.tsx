"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Target } from "lucide-react"
import Image from "next/image"

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Active Members" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Access Available" },
    { icon: Target, number: "95%", label: "Success Rate" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-yellow-500">PowerGym</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're dedicated to helping you achieve your fitness goals with our world-class facilities, expert trainers,
            and supportive community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Owner & Trainer Photos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Owner */}
            <div className="relative group">
              <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-black/50 z-10" />
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Gym Owner"
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover filter contrast-110 saturate-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-bold text-xl">John Smith</h3>
                  <p className="text-yellow-400 font-medium">Owner & Founder</p>
                </div>
                <div className="absolute inset-0 border-4 border-yellow-500/50 rounded-2xl group-hover:border-yellow-500 transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Head Trainer */}
            <div className="relative group mt-8">
              <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-black/50 z-10" />
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Head Trainer"
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover filter contrast-110 saturate-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-bold text-xl">Sarah Johnson</h3>
                  <p className="text-yellow-400 font-medium">Head Trainer</p>
                </div>
                <div className="absolute inset-0 border-4 border-yellow-500/50 rounded-2xl group-hover:border-yellow-500 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our founder John Smith brings over 15 years of fitness industry experience, having transformed thousands
              of lives through personalized training programs. Alongside our head trainer Sarah Johnson, a certified
              fitness expert with specializations in strength training and nutrition, we're committed to your success.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Together, we've created a supportive environment where every member feels empowered to push their limits
              and achieve their fitness goals.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full mb-4">
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
