"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "PowerGym completely transformed my life! The trainers are incredibly knowledgeable and the equipment is top-notch. I've lost 30 pounds and gained so much confidence.",
      achievement: "Lost 30 lbs in 4 months",
    },
    {
      name: "Jessica Chen",
      role: "Marketing Manager",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The group classes are amazing and the community here is so supportive. I never thought I'd enjoy working out this much. The results speak for themselves!",
      achievement: "Gained 15 lbs muscle",
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "As a busy entrepreneur, I needed a gym that could work with my schedule. The 24/7 access and personal training have been game-changers for my fitness journey.",
      achievement: "Improved strength by 40%",
    },
    {
      name: "Sarah Williams",
      role: "Teacher",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The nutrition guidance and meal planning have been incredible. Combined with the workouts, I've never felt healthier or more energetic in my life.",
      achievement: "Completed first marathon",
    },
    {
      name: "Alex Johnson",
      role: "Student",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The student-friendly pricing and flexible hours make it perfect for my college schedule. The trainers really care about helping you reach your goals.",
      achievement: "Built lean muscle mass",
    },
    {
      name: "Maria Garcia",
      role: "Nurse",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "After working long shifts, PowerGym is my sanctuary. The recovery services and relaxing environment help me unwind and stay in shape.",
      achievement: "Improved flexibility 60%",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our amazing members who have transformed their lives and achieved their fitness goals with
            PowerGym.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.1)",
              }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-yellow-500/20">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Achievement Badge */}
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                {testimonial.achievement}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-500/50"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-3xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-500 rounded-full"
                  animate={{
                    x: [0, Math.random() * 50, 0],
                    y: [0, Math.random() * 50, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community of achievers and start your transformation today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Start Your Journey
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
