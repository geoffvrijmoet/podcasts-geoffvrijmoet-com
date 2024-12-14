import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          I help podcasters
          <span className="block text-blue-400">sound their absolute best.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your raw recordings into professionally polished podcasts. 
          Expert editing, crystal-clear audio quality, and quick turnaround times.
        </p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          Get Started
        </Button>
      </div>
    </section>
  )
} 