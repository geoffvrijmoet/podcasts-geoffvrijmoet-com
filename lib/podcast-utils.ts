import Parser from 'rss-parser'

interface PodcastEpisode {
  pubDate: string
  'itunes:duration': string
}

interface PodcastFeed {
  items: PodcastEpisode[]
}

const parser = new Parser({
  customFields: {
    item: ['itunes:duration']
  }
})

function parseDuration(duration: string): number {
  // Handle different duration formats (HH:MM:SS or MM:SS or seconds)
  if (duration.includes(':')) {
    const parts = duration.split(':').map(Number)
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]
    }
    return parts[0] * 60 + parts[1]
  }
  return parseInt(duration)
}

export async function getPodcastStats(feedUrl: string, startDate: string) {
  try {
    const feed = await parser.parseURL(feedUrl) as PodcastFeed
    const startTimestamp = new Date(startDate).getTime()
    
    const editedEpisodes = feed.items.filter(episode => 
      new Date(episode.pubDate).getTime() >= startTimestamp
    )

    const totalSeconds = editedEpisodes.reduce((acc, episode) => {
      return acc + parseDuration(episode['itunes:duration'])
    }, 0)

    return {
      episodeCount: editedEpisodes.length,
      totalHours: Math.round(totalSeconds / 3600)
    }
  } catch (error) {
    console.error('Error fetching podcast stats:', error)
    return null
  }
} 