"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reserve" className="py-24 md:py-32 bg-deep relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-52 -right-52 w-[600px] h-[600px] bg-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.65rem] tracking-[0.35em] uppercase text-amber mb-8"
        >
          Book Your Table
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
        >
          An evening<br /><em className="text-gold">awaits.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-mist text-[0.93rem] leading-relaxed mb-12"
        >
          We hold twelve tables each service. Reservations are recommended at least five days in advance. For private dining or special occasions, please contact us directly.
        </motion.p>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="First & Last Name"
              required
              className="w-full bg-white/5 border border-rule text-cream font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors placeholder:text-mist"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-white/5 border border-rule text-cream font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors placeholder:text-mist"
            />
            <input
              type="date"
              required
              className="w-full bg-white/5 border border-rule text-mist font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors"
            />
            <select
              required
              className="w-full bg-white/5 border border-rule text-mist font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors cursor-pointer appearance-none"
            >
              <option value="" disabled selected>Time Preference</option>
              <option>5:30 pm</option>
              <option>6:00 pm</option>
              <option>7:00 pm</option>
              <option>7:30 pm</option>
              <option>8:30 pm</option>
              <option>9:00 pm</option>
            </select>
            <select
              required
              className="w-full bg-white/5 border border-rule text-mist font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors cursor-pointer appearance-none"
            >
              <option value="" disabled selected>Party Size</option>
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
              <option>5 guests</option>
              <option>6 guests</option>
              <option>Larger party — please call</option>
            </select>
            <select
              className="w-full bg-white/5 border border-rule text-mist font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors cursor-pointer appearance-none"
            >
              <option value="" disabled selected>Occasion (optional)</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business dinner</option>
              <option>Celebration</option>
              <option>No special occasion</option>
            </select>
            <textarea
              placeholder="Dietary requirements or special requests..."
              className="w-full md:col-span-2 bg-white/5 border border-rule text-cream font-sans text-[0.88rem] px-5 py-4 outline-none focus:border-amber transition-colors placeholder:text-mist resize-y min-h-28"
            />
            <motion.button
              type="submit"
              whileHover={{ y: -2, backgroundColor: "#e2a84b" }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 w-full bg-amber text-ink font-sans text-[0.78rem] font-medium tracking-[0.2em] uppercase py-5 transition-all"
            >
              Request Reservation
            </motion.button>
            <p className="md:col-span-2 text-[0.72rem] text-mist tracking-wide mt-2">
              We will confirm your reservation within 24 hours via email.
            </p>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="font-serif text-5xl text-gold italic mb-4">✓</div>
            <h3 className="font-serif text-3xl font-light mb-3">Thank You</h3>
            <p className="text-mist text-[0.9rem]">
              We&apos;ve received your request and will confirm your reservation shortly.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <>
      <footer className="px-6 py-12 md:px-28 md:py-20 border-t border-rule">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase mb-4">
              Maison <span className="text-amber italic">Ardent</span>
            </div>
            <p className="text-mist text-[0.85rem] leading-relaxed">
              A dining experience rooted in live-fire tradition, seasonal provenance, and the quiet confidence of a kitchen that needs no shortcuts.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-amber mb-6">
              Find Us
            </h4>
            <p className="text-mist text-[0.85rem] leading-relaxed">
              42 Rue du Commerce<br />
              33000 Bordeaux<br />
              France
            </p>
            <a href="tel:+33556789012" className="text-mist text-[0.85rem] hover:text-cream transition-colors mt-4 block">
              +33 5 56 78 90 12
            </a>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-amber mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-mist text-[0.85rem] hover:text-cream transition-colors">
                Instagram
              </a>
              <a href="#" className="text-mist text-[0.85rem] hover:text-cream transition-colors">
                Facebook
              </a>
              <a href="mailto:hello@maisonardent.com" className="text-mist text-[0.85rem] hover:text-cream transition-colors">
                hello@maisonardent.com
              </a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="px-6 py-6 md:px-28 md:py-8 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[0.72rem] text-mist tracking-wide">
          © 2024 Maison Ardent. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[0.72rem] text-mist tracking-wide hover:text-cream transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[0.72rem] text-mist tracking-wide hover:text-cream transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </>
  )
}
