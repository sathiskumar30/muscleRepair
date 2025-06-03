import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PowerGym - Transform Your Body, Transform Your Life",
  description:
    "Premium fitness center with state-of-the-art equipment, expert trainers, and comprehensive workout programs. Join PowerGym and start your transformation today.",
  keywords: "gym, fitness, personal training, workout, strength training, cardio, membership",
  authors: [{ name: "PowerGym" }],
  openGraph: {
    title: "PowerGym - Transform Your Body, Transform Your Life",
    description: "Premium fitness center with state-of-the-art equipment and expert trainers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerGym - Transform Your Body, Transform Your Life",
    description: "Premium fitness center with state-of-the-art equipment and expert trainers.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
