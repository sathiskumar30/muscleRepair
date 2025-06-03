"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown } from "lucide-react"

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support",
      ],
      popular: false,
      icon: Star,
    },
    {
      name: "Premium",
      price: 59,
      period: "month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal trainer consultation",
        "Nutrition guidance",
        "Priority booking",
        "Guest passes (2/month)",
      ],
      popular: true,
      icon: Crown,
    },
    {
      name: "Elite",
      price: 99,
      period: "month",
      description: "Ultimate package for maximum results and convenience",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal planning",
        "Recovery services",
        "VIP locker room",
        "Unlimited guest passes",
        "24/7 trainer support",
      ],
      popular: false,
      icon: Crown,
    },
  ]

  return (
    <section id="membership" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Membership <span className="text-yellow-500">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan that fits your lifestyle and fitness goals. All plans include access to our
            world-class facilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: plan.popular ? "0 25px 50px rgba(245, 158, 11, 0.2)" : "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              className={`relative p-8 rounded-3xl shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-yellow-500 to-yellow-600 text-black transform scale-105"
                  : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-yellow-500 px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? "bg-black text-yellow-500" : "bg-yellow-500 text-black"
                  }`}
                >
                  <plan.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-black/80" : "text-gray-600 dark:text-gray-300"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span
                    className={`text-lg ml-2 ${plan.popular ? "text-black/80" : "text-gray-600 dark:text-gray-300"}`}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        plan.popular ? "bg-black text-yellow-500" : "bg-yellow-500 text-black"
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    <span className={plan.popular ? "text-black" : "text-gray-600 dark:text-gray-300"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-black text-yellow-500 hover:bg-gray-800"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"
                }`}
              >
                Choose {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">All Plans Include</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-center">
                <Check className="text-yellow-500 mr-2" size={20} />
                No enrollment fees
              </div>
              <div className="flex items-center justify-center">
                <Check className="text-yellow-500 mr-2" size={20} />
                Cancel anytime
              </div>
              <div className="flex items-center justify-center">
                <Check className="text-yellow-500 mr-2" size={20} />
                Free trial week
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Membership
