"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md py-4 px-8 md:px-16 border-b border-rule"
          : "bg-transparent py-8 px-8 md:px-16"
      }`}
    >
      <a href="#" className="font-serif text-lg md:text-xl font-light tracking-[0.22em] uppercase text-cream">
        Maison <span className="text-amber italic">Ardent</span>
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        {["Menu", "The Chef", "Reserve"].map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-[0.72rem] tracking-[0.18em] uppercase text-mist hover:text-cream transition-colors"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        href="#reserve"
        className="text-[0.72rem] tracking-[0.15em] uppercase text-amber border border-amber px-4 py-2 md:px-6 md:py-3 hover:bg-amber hover:text-ink transition-all"
      >
        Reserve
      </motion.a>
    </motion.nav>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/my_demo__up_restaurant/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-ink/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end px-6 pb-24 md:px-28 md:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-[0.7rem] tracking-[0.3em] uppercase text-amber mb-6"
        >
          Est. 2017 — Bordeaux & Beyond
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] font-light leading-[0.92] mb-8"
        >
          Where fire<br />
          <em className="text-gold">shapes every</em><br />
          plate.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="text-[0.95rem] leading-relaxed text-mist max-w-[400px] mb-12"
        >
          A dining experience rooted in live-fire tradition, seasonal provenance, and the quiet confidence of a kitchen that needs no shortcuts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          <a
            href="#reserve"
            className="bg-amber text-ink font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase px-10 py-4 hover:bg-gold hover:-translate-y-0.5 transition-all"
          >
            Reserve Your Evening
          </a>
          <a
            href="#menu"
            className="text-[0.72rem] tracking-[0.18em] uppercase text-cream flex items-center gap-3 group"
          >
            Explore the Menu
            <span className="block w-8 h-px bg-amber group-hover:w-12 transition-all" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute right-8 md:right-16 bottom-16 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-amber to-transparent scroll-pulse" />
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-mist writing-mode-vertical-rl rotate-180" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}

export function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-8 px-6 md:px-28 my-8"
    >
      <div className="flex-1 h-px bg-rule" />
      <span className="font-serif text-xl text-amber italic">— & —</span>
      <div className="flex-1 h-px bg-rule" />
    </motion.div>
  )
}

export function Story() {
  const stats = [
    { num: "12", label: "Tables only" },
    { num: "6", label: "Course tasting menu" },
    { num: "80", label: "Mile sourcing radius" },
  ]

  return (
    <section id="about" className="py-24 md:py-40 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_55%] gap-0 items-center">
        {/* Text */}
        <div className="px-6 py-14 md:px-28 md:py-24 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.35em] uppercase text-amber flex items-center gap-4 mb-8"
          >
            <span className="block w-10 h-px bg-amber" />
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
          >
            Honest food,<br />
            <em className="text-gold">uncompromising</em><br />
            craft.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-mist leading-relaxed text-[0.95rem] mb-6 max-w-[440px]"
          >
            Maison Ardent was born from a single conviction: that the oldest cooking method — fire — is still the most revelatory. Every dish begins at the hearth, where smoke, heat, and time[...]
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-mist leading-relaxed text-[0.95rem] mb-12 max-w-[440px]"
          >
            Our suppliers are farmers, fishers, and foragers within 80 miles of our kitchen. The menu changes when the land does. Nothing more, nothing less.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-6 md:gap-12 pt-10 border-t border-rule"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="font-serif text-4xl md:text-5xl font-light text-gold leading-none">
                  {stat.num}
                </div>
                <div className="text-[0.7rem] tracking-[0.15em] uppercase text-mist mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] md:h-[680px] order-1 md:order-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent z-10 hidden md:block" />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop"
            alt="The Maison Ardent dining room"
            className="w-full h-full object-cover object-center"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 md:bottom-12 left-4 md:-left-8 z-20 bg-amber text-ink px-6 py-4 text-center"
          >
            <div className="font-serif text-3xl md:text-4xl font-semibold leading-none">4.9</div>
            <div className="text-[0.62rem] tracking-[0.12em] uppercase mt-1">Michelin Recognition</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
