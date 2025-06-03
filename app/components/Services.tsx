"use client"

import { motion } from "framer-motion"
import { Dumbbell, Heart, Users, Zap, Clock, Trophy } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength training programs.",
      features: ["Free Weights", "Resistance Machines", "Functional Training"],
    },
    {
      icon: Heart,
      title: "Cardio Workouts",
      description: "Improve your cardiovascular health with our variety of cardio equipment and classes.",
      features: ["Treadmills", "Ellipticals", "Rowing Machines"],
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our energetic group fitness classes led by certified instructors.",
      features: ["HIIT Classes", "Yoga Sessions", "Spin Classes"],
    },
    {
      icon: Zap,
      title: "Personal Training",
      description: "Get personalized attention with our one-on-one training sessions.",
      features: ["Custom Programs", "Nutrition Guidance", "Progress Tracking"],
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work out on your schedule with our round-the-clock gym access.",
      features: ["Keycard Entry", "Security Cameras", "Emergency Support"],
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      description: "Prepare for competitions with specialized training and nutrition plans.",
      features: ["Contest Prep", "Posing Practice", "Diet Planning"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your goals, no matter your fitness level or
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-yellow-500 to-yellow-600 p-12 rounded-3xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Start Your Fitness Journey?</h3>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members who have transformed their lives at PowerGym.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
