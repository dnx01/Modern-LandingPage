"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const testimonialsRef = useRef(null)
  const pricingRef = useRef(null)
  const ctaRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  // Handle smooth scrolling
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setMobileMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-xl">Horizon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(featuresRef)}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Pricing
            </button>
            <Button
              onClick={() => scrollToSection(ctaRef)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-sm font-medium py-2 hover:text-purple-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="text-sm font-medium py-2 hover:text-purple-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection(testimonialsRef)}
                className="text-sm font-medium py-2 hover:text-purple-600 transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="text-sm font-medium py-2 hover:text-purple-600 transition-colors"
              >
                Pricing
              </button>
              <Button
                onClick={() => scrollToSection(ctaRef)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <motion.div style={{ y, opacity, scale }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                Elevate Your Digital Experience
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Create stunning, responsive websites with modern animations and effects that captivate your audience and
                drive engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 w-full sm:w-auto"
                onClick={() => scrollToSection(ctaRef)}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => scrollToSection(featuresRef)}
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-gray-200 relative">
              <Image
                src="/hero-dashboard.png"
                alt="Dashboard Preview"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl opacity-20 blur-xl"></div>
          </motion.div>

          <div className="mt-24 flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => scrollToSection(featuresRef)}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="animate-bounce" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features for Modern Websites</h2>
              <p className="text-lg text-gray-600">
                Everything you need to create stunning, high-performance websites that engage your audience.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Design",
                description:
                  "Automatically adapts to any screen size, ensuring your website looks great on all devices.",
                icon: "/responsive-design-icon-purple.png",
                image: "/responsive-showcase.png",
              },
              {
                title: "Smooth Animations",
                description: "Engage users with subtle, performant animations that enhance the user experience.",
                icon: "/animation-icon-purple.png",
                image: "/animation-showcase.png",
              },
              {
                title: "SEO Optimized",
                description: "Built with best practices to help your website rank higher in search engine results.",
                icon: "/seo-icon.png",
                image: "/seo-showcase.png",
              },
              {
                title: "Fast Performance",
                description: "Optimized for speed with efficient code and modern web technologies.",
                icon: "/performance-icon.png",
                image: "/performance-showcase.png",
              },
              {
                title: "Customizable",
                description: "Easily customize every aspect of your website to match your brand and vision.",
                icon: "/customization-icon.png",
                image: "/customization-showcase.png",
              },
              {
                title: "Scroll Effects",
                description: "Create engaging scroll-triggered animations and parallax effects.",
                icon: "/scroll-effects-icon.png",
                image: "/scroll-effects-showcase.png",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6 rounded-lg overflow-hidden h-48">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4">
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/testimonial-bg-pattern.png" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it. Here's what people are saying about our platform.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechCorp",
                quote:
                  "The animations and scroll effects have significantly increased our user engagement. Our bounce rate decreased by 40% after launching our new site.",
                avatar: "/testimonial-1.png",
              },
              {
                name: "Michael Chen",
                role: "Founder & CEO",
                company: "Startup Innovations",
                quote:
                  "The responsive design works flawlessly across all devices. We've received countless compliments on how professional our website looks and feels.",
                avatar: "/testimonial-2.png",
              },
              {
                name: "Emily Rodriguez",
                role: "E-commerce Manager",
                company: "StyleBoutique",
                quote:
                  "The modern design and smooth animations have transformed our online store. Our conversion rate has increased by 25% since the redesign.",
                avatar: "/testimonial-3.png",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-200">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the plan that works best for your needs. No hidden fees or surprises.
              </p>
            </motion.div>
          </div>

          <div className="mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/pricing-showcase.png"
                alt="Platform Features Overview"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">All the tools you need</h3>
                  <p className="text-white/80">Choose the plan that works best for your business needs</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small businesses and personal projects.",
                features: ["Responsive design", "Basic animations", "SEO optimization", "1 website", "Email support"],
                highlighted: false,
              },
              {
                name: "Professional",
                price: "$79",
                description: "Ideal for growing businesses and professional websites.",
                features: [
                  "Everything in Starter",
                  "Advanced animations",
                  "Custom scroll effects",
                  "5 websites",
                  "Priority support",
                  "Performance optimization",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$149",
                description: "For large businesses with complex requirements.",
                features: [
                  "Everything in Professional",
                  "Custom development",
                  "Unlimited websites",
                  "24/7 dedicated support",
                  "Advanced analytics",
                  "Team collaboration",
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`rounded-xl p-6 border ${
                  plan.highlighted
                    ? "border-purple-200 shadow-lg relative bg-gradient-to-br from-purple-50 to-pink-50"
                    : "border-gray-100 shadow-sm bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => scrollToSection(ctaRef)}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 md:py-32 bg-gradient-to-br from-purple-600 to-pink-500 text-white relative"
      >
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image src="/cta-background.png" alt="CTA Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Website?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of businesses creating stunning websites with our platform.
              </p>
              <form className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    required
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                </div>
              </form>
              <p className="text-sm opacity-80">No credit card required. Start your 14-day free trial today.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-100 relative">
        <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 w-full h-20 text-gray-50 fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg"></div>
                <span className="font-bold text-xl">Horizon</span>
              </Link>
              <p className="text-gray-600 text-sm">
                Creating modern, responsive websites with stunning animations and effects.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-center text-gray-500 mb-6">Trusted by leading companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-24 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <Image
                    src={`/brand-logo-${i}.png`}
                    alt={`Brand Logo ${i}`}
                    width={120}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Horizon. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 0 000 0" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 11H17v2H7zm0 4h10v2H7zm0-8h10v2H7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
