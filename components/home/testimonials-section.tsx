import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  podcastName: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Geoff has done a fantastic job editing episodes for my podcast, 'Just Screen It: Case Studies in Creative Distribution.' His editing work is so good I rarely request changes. He meets publication deadlines, usually by several days, even when I'm late getting the recordings to him. He is always professional, easy to communicate with, and open to change requests. I enthusiastically recommend Geoff as a podcast editor!",
    author: "Colin Stryker",
    role: "Host",
    podcastName: "Just Screen It",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - hear from the podcasters I work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-lg p-8 shadow-lg relative"
            >
              <Quote className="absolute text-blue-100 h-24 w-24 -top-4 -left-4 -z-10" />
              <blockquote className="relative">
                <p className="text-lg text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <footer className="flex items-center gap-4">
                  <div>
                    <cite className="not-italic font-semibold text-gray-900">
                      {testimonial.author}
                    </cite>
                    <div className="text-gray-600">
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