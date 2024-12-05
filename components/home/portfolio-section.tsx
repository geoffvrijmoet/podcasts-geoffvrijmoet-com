import Image from "next/image"
import { getPodcastStats } from "@/lib/podcast-utils"

interface PodcastProject {
  name: string
  description: string
  imageUrl: string
  feedUrl: string
  startDate: string
  link: string
}

const portfolioItems: PodcastProject[] = [
  {
    name: "Making Movies is HARD!!!",
    description: "The Struggles of Indie Filmmaking - Liz Manashil and Alrik Bursell discuss independent filmmaking, from writing and producing to directing",
    imageUrl: "/podcasts/making-movies-is-hard.jpg",
    feedUrl: "https://feeds.simplecast.com/2oTJk36x",
    startDate: "2021-10-01", // Update with your actual start date
    link: "https://podcasts.apple.com/us/podcast/making-movies-is-hard-the-struggles-of-indie-filmmaking/id1006416952"
  },
  {
    name: "That's My Girl",
    description: "A podcast celebrating women's achievements and sharing inspiring stories",
    imageUrl: "/podcasts/thats-my-girl.jpg",
    feedUrl: "https://anchor.fm/s/bf179994/podcast/rss",
    startDate: "2023-01-01", // Update with your actual start date
    link: "https://open.spotify.com/show/0bKmVwvn6spoYaA5csyhSh"
  },
  {
    name: "Just Screen It",
    description: "Host Colin Stryker interviews filmmakers about self-distribution and creative methods to distribute independent films",
    imageUrl: "/podcasts/just-screen-it.jpg",
    feedUrl: "https://feeds.captivate.fm/just-screen-it/",
    startDate: "2023-10-23", // Update with your actual start date
    link: "https://podcasts.apple.com/us/podcast/just-screen-it/id1674088267"
  },
]

export async function PortfolioSection() {
  const podcastStats = await Promise.all(
    portfolioItems.map(async (podcast) => {
      const stats = await getPodcastStats(podcast.feedUrl, podcast.startDate)
      return {
        ...podcast,
        ...stats
      }
    })
  )

  const totalEditingHours = podcastStats.reduce((acc, item) => 
    acc + (item.totalHours || 0), 0
  )

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfolio & Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over {Math.floor(totalEditingHours)} hours of professional podcast editing experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {podcastStats.map((project) => (
            <div
              key={project.name}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">Episodes</div>
                      <div>{project.episodeCount || 'Loading...'}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Hours Edited</div>
                      <div>{project.totalHours || 'Loading...'}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 