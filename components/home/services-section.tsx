"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ServiceFeature {
  title: string
  description: string
}

const serviceFeatures: ServiceFeature[] = [
  {
    title: "Professional Audio Cleanup",
    description: "Crystal-clear sound quality with advanced noise reduction and audio restoration techniques",
  },
  {
    title: "Precision Editing",
    description: "Seamless removal of mistakes, long pauses, and unwanted content while maintaining natural conversation flow",
  },
  {
    title: "Audio Enhancement",
    description: "Professional volume normalization and EQ adjustment to ensure consistent, broadcast-ready sound",
  },
  {
    title: "Creative Sound Design",
    description: "Integration of music, sound effects, and transitions to enhance your podcast's production value",
  },
  {
    title: "Dedicated Support",
    description: "7 days a week support with unlimited revisions to ensure you're completely satisfied with the final product",
  }
]

export function ServicesSection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Podcast Editing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your raw recordings into professionally polished episodes
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {serviceFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="mt-1">
                <Check className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => router.push("/#contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
} 