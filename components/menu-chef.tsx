"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const menuData = {
  starters: [
    { name: "Wood-Roasted Beetroot", desc: "Aged goat's curd, ash oil, pickled walnut, micro sorrel", price: 18 },
    { name: "Smoked Bone Marrow", desc: "Fermented black garlic, sourdough toast, herbs from the garden", price: 22 },
    { name: "Charred Hispi Cabbage", desc: "Buttermilk, caperberries, preserved lemon, crispy capers", price: 16 },
    { name: "Hand-Dived Scallops", desc: "Cauliflower, brown butter, coastal herbs, sea herbs", price: 28 },
    { name: "Ember-Cured Salmon", desc: "Cucumber water, dill, horseradish cream, trout roe", price: 24 },
    { name: "Confit Duck Croquette", desc: "Smoked cherry gel, watercress, mustard leaf", price: 20 },
  ],
  mains: [
    { name: "Fire-Aged Côte de Bœuf", desc: "Bone marrow butter, heritage potatoes, charred onion soubise", price: 68 },
    { name: "Whole Roasted Sea Bass", desc: "Fennel, saffron broth, monk's beard, toasted almonds", price: 54 },
    { name: "Lamb Rack & Shoulder", desc: "Slow-cooked shoulder, rack over coals, spring peas, mint", price: 62 },
    { name: "Celeriac & Black Truffle", desc: "Whole-baked celeriac, truffle butter, hazelnut, aged parmesan", price: 44 },
  ],
  desserts: [
    { name: "Burnt Honey Tart", desc: "Raw honey from the apiary, crème fraîche, toasted lavender", price: 16 },
    { name: "Chocolate & Miso", desc: "Valrhona ganache, white miso caramel, sesame praline", price: 18 },
    { name: "Seasonal Cheese Board", desc: "Three cheeses, housemade quince, fig & walnut loaf", price: 22 },
    { name: "Smoked Pear Sorbet", desc: "Cold-smoked Comice pear, almond tuile, elderflower", price: 14 },
  ],
  wine: [
    { name: "Domaine Leflaive Puligny", desc: "Burgundy, France — Chardonnay, 2021", price: 95 },
    { name: "Château Léoville Poyferré", desc: "Saint-Julien, Bordeaux — Cabernet blend, 2018", price: 120 },
    { name: "Gut Oggau Theodora", desc: "Burgenland, Austria — Biodynamic Grüner, 2022", price: 78 },
    { name: "Clendenen Family Pinot", desc: "Santa Barbara, California — Pinot Noir, 2020", price: 88 },
  ],
}

const tabs = ["starters", "mains", "desserts", "wine"] as const

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("starters")

  return (
    <section id="menu" className="py-24 md:py-32 px-6 md:px-28 bg-deep">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24 md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.35em] uppercase text-amber flex items-center gap-4 mb-8"
          >
            <span className="block w-10 h-px bg-amber" />
            Seasonal Menu
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-none"
          >
            This<br /><em className="text-gold">Season&apos;s</em><br />Table.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-mist leading-relaxed text-[0.93rem] pb-2"
        >
          Our menu breathes with the seasons. What follows is a reflection of the current harvest — ingredients chosen this week, prepared over fire tonight. Prices reflect a single course; tasting menus available on reservation.
        </motion.p>
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex gap-0 mb-12 md:mb-16 border-b border-rule overflow-x-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative font-sans text-[0.72rem] tracking-[0.2em] uppercase px-4 md:px-8 py-4 transition-colors whitespace-nowrap ${
              activeTab === tab ? "text-cream" : "text-mist hover:text-cream"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Menu Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-0"
      >
        {menuData[activeTab].map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`group py-6 md:py-8 pr-8 md:pr-10 border-b border-rule flex justify-between items-start gap-6 hover:bg-amber/5 transition-colors ${
              i % 2 === 1 ? "pl-6 md:pl-10 md:border-l" : ""
            }`}
          >
            <div>
              <div className="font-serif text-lg md:text-xl font-normal mb-1 group-hover:text-gold transition-colors">
                {item.name}
              </div>
              <div className="text-[0.8rem] text-mist leading-relaxed italic">
                {item.desc}
              </div>
            </div>
            <div className="font-serif text-lg md:text-xl text-amber font-normal whitespace-nowrap">
              {item.price}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export function ChefSection() {
  return (
    <section id="the-chef" className="py-24 md:py-40 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[52%_1fr] gap-0">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[320px] md:h-[700px]"
        >
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop"
            alt="Chef Lucien Marais"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-ink to-transparent hidden md:block" />
        </motion.div>

        {/* Text */}
        <div className="px-6 py-14 md:px-20 md:py-0 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.65rem] tracking-[0.35em] uppercase text-amber flex items-center gap-4 mb-8"
          >
            <span className="block w-10 h-px bg-amber" />
            The Kitchen
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2"
          >
            Chef Lucien<br />Marais
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[0.72rem] tracking-[0.22em] uppercase text-amber mb-10"
          >
            Executive Chef & Founder
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-serif text-xl md:text-2xl italic font-light leading-relaxed text-gold border-l-2 border-amber pl-6 mb-10"
          >
            &quot;Fire tells you the truth about an ingredient. Everything else is distraction.&quot;
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-mist leading-relaxed text-[0.93rem] mb-6"
          >
            Lucien trained under Heston Blumenthal at The Fat Duck before spending three formative years in the Basque Country, learning live-fire technique from the grill masters of Asador Etxebarri. He returned to open Maison Ardent with a single hearth, twelve tables, and an unshakeable conviction about how food should taste.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-mist leading-relaxed text-[0.93rem]"
          >
            Today, Lucien leads a kitchen of seven, sourcing directly from the farms he grew up near, cooking meals he&apos;d want to eat, and refusing to compromise on ingredients — ever.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export function HoursStrip() {
  const hours = [
    { day: "Tuesday — Thursday", time: "6:00 – 10:30 pm" },
    { day: "Friday — Saturday", time: "5:30 – 11:00 pm" },
    { day: "Sunday", time: "12:00 – 4:00 pm" },
    { day: "Monday", time: "Closed" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-b border-rule flex flex-col md:flex-row justify-center"
    >
      {hours.map((item, i) => (
        <motion.div
          key={item.day}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="px-6 md:px-16 py-6 md:py-12 text-center md:border-r border-b md:border-b-0 border-rule last:border-r-0 last:border-b-0 flex md:flex-col justify-between md:justify-center items-center"
        >
          <div className="text-[0.68rem] tracking-[0.2em] uppercase text-mist md:mb-2">
            {item.day}
          </div>
          <div className="font-serif text-lg md:text-xl font-normal text-cream">
            {item.time}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
