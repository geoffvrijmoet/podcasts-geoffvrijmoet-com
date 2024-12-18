import { Button } from "@/components/ui/button"
import { HeroDecorations } from "@/components/ui/hero-decorations"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <HeroDecorations />
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          I help podcasters
          <span className="block text-blue-400">sound their absolute best.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Professional podcast editing made simple. You record, I edit, 
          your listeners enjoy.
        </p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          Get Started
        </Button>
      </div>
    </section>
  )
} 