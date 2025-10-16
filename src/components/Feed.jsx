import OrganicCard from './OrganicCard'
import SummaryCard from './SummaryCard'
import TwitterCard from './TwitterCard'
import YoutubeCard from './YoutubeCard'
import AdCard from './AdCard'
import OrganicSmallCard from './OrganicSmallCard'
import { feedItems } from '../data/mockData'
import './Feed.css'

function Feed() {
  const renderCard = (item) => {
    switch (item.type) {
      case 'organic':
        return <OrganicCard key={item.id} item={item} />
      case 'summary':
        return <SummaryCard key={item.id} item={item} />
      case 'twitter':
        return <TwitterCard key={item.id} item={item} />
      case 'youtube':
        return <YoutubeCard key={item.id} item={item} />
      case 'ad':
        return <AdCard key={item.id} item={item} />
      case 'organic-small':
        return <OrganicSmallCard key={item.id} item={item} />
      default:
        return null
    }
  }

  return (
    <div className="feed-container">
      <div className="feed-content">
        {feedItems.map(item => renderCard(item))}
      </div>
    </div>
  )
}

export default Feed