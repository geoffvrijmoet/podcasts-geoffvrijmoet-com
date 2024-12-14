"use client"
import { Zap, Wand2, Volume2, Clock, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ServiceFeature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const serviceFeatures: ServiceFeature[] = [
  {
    title: "Lightning Fast Turnaround",
    description: "I deliver your edited episodes back within 48 hours on average, so you can maintain a consistent release schedule",
    icon: Zap
  },
  {
    title: "Professional Audio Magic",
    description: "I transform your raw recordings into broadcast-quality sound with advanced noise reduction and crystal-clear audio",
    icon: Wand2
  },
  {
    title: "Perfect Sound Balance",
    description: "I ensure your podcast sounds consistently professional with expert volume normalization and EQ adjustment",
    icon: Volume2
  },
  {
    title: "Precision Editing",
    description: "I seamlessly remove mistakes and long pauses while maintaining natural conversation flow",
    icon: Clock
  },
  {
    title: "Unlimited Revisions",
    description: "I provide 7 days a week support with as many revisions as needed until you're 100% satisfied with the final edit",
    icon: HeartHandshake
  }
]

export function ServicesSection() {
  const router = useRouter()

  return (
    <section className="py-32 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your podcast deserves
            <span className="block mt-2">to sound amazing.</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light">
            Send me your raw recordings and get back professionally edited episodes. 
            It&apos;s that simple.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {serviceFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg font-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 h-auto rounded-full font-medium"
            onClick={() => router.push("/#contact")}
          >
            Start Your First Edit
          </Button>
          <p className="text-gray-500 mt-4 font-light">
            48-hour delivery on average • Unlimited revisions
          </p>
        </div>
      </div>
    </section>
  )
} 