import './OrganicSmallCard.css'
import { HeartIcon, ShareIcon, MoreIcon } from '../assets/icons.js';

function OrganicSmallCard({ item }) {
  return (
    <div className="organic-small-card">
      <div className="card-header">
        <img src={item.sourceAvatar} alt={item.source} className="source-avatar" />
        <div className="header-content">
          <span className="source-name">{item.source}</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
      
      <div className="small-card-content">
        <div className="small-card-text">
          <h3 className="small-card-title">{item.title}</h3>
        </div>
        <div className="small-card-thumbnail">
          <img src={item.thumbnail} alt={item.title} className="thumbnail-image" />
        </div>
      </div>
      
      <div className="card-footer">
        <div className="footer-attribution">
           <span className="footer-timestamp">{item.timestamp}</span>
        </div>
        <div className="footer-actions">
          <button className="action-icon" aria-label="Like">
            <img src={HeartIcon} alt="Like" />
          </button>
          <button className="action-icon" aria-label="Share">
            <img src={ShareIcon} alt="Share" />
          </button>
          <button className="action-icon" aria-label="More">
            <img src={MoreIcon} alt="More" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrganicSmallCard