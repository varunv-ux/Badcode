import './OrganicCard.css'
import { HeartIcon, ShareIcon, SaveIcon } from '../assets/icons.js';

function OrganicCard({ item }) {
  return (
    <div className="organic-card">
      <div className="card-header">
        <img src={item.sourceAvatar} alt={item.source} className="source-avatar" />
        <div className="header-content">
          <span className="source-name">{item.source}</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
      
      <div className="card-media-container">
        <img src={item.image} alt={item.title} className="card-media" />
        <div className="media-scrim"></div>
        <div className="overlay-text">
          <h2 className="overlay-title">{item.title}</h2>
        </div>
      </div>
      
      <div className="card-footer">
        <span className="footer-timestamp">{item.timestamp}</span>
        <div className="footer-actions">
          <button className="action-icon" aria-label="Like">
            <img src={HeartIcon} alt="Like" />
          </button>
          <button className="action-icon" aria-label="Share">
            <img src={ShareIcon} alt="Share" />
          </button>
          <button className="action-icon" aria-label="Save">
            <img src={SaveIcon} alt="Save" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrganicCard