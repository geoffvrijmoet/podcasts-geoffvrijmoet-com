import { Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  role: string
  podcastName: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'I\'ve been lucky enough to have been working with Geoff for over three years on well over 200 episodes of my podcast and I\'ve gotta say I don\'t think there\'s a better podcast editor out there. He\'s always on time, and even if I forget to pass him an asset on time, he still gets his episodes done in time for them to air! I would highly recommend Geoff for all of your podcasting and non-podcating editing needs!',
    author: "Alrik Bursell",
    role: "Host",
    podcastName: "Making Movies is Hard!!!",
    image: "/images/making-movies-is-hard.jpg"
  },
  {
    quote: 'Geoff has done a fantastic job editing episodes for my podcast, \'Just Screen It: Case Studies in Creative Distribution.\' His editing work is so good I rarely request changes. He meets publication deadlines, usually by several days, even when I\'m late getting the recordings to him. He is always professional, easy to communicate with, and open to change requests. I enthusiastically recommend Geoff as a podcast editor!',
    author: "Colin Stryker", 
    role: "Host",
    podcastName: "Just Screen It",
    image: "/images/just-screen-it.webp"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm relative"
            >
              <Quote className="absolute text-blue-100 h-24 w-24 -top-4 -left-4 -z-10" />
              <blockquote className="relative">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.podcastName} Artwork`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-lg text-gray-700 italic font-light">
                  {testimonial.quote}
                  </p>
                </div>
                <footer className="flex items-center gap-4">
                  <div>
                    <cite className="not-italic font-semibold text-gray-900">
                      {testimonial.author}
                    </cite>
                    <div className="text-gray-600 font-light">
                      {testimonial.role}, {testimonial.podcastName}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 