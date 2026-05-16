import { Navigation, Hero, Divider, Story } from "@/components/restaurant-sections"
import { MenuSection, ChefSection, HoursStrip } from "@/components/menu-chef"
import { ReservationSection, Footer } from "@/components/reservation-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Divider />
      <Story />
      <MenuSection />
      <ChefSection />
      <HoursStrip />
      <ReservationSection />
      <Footer />
    </main>
  )
}
