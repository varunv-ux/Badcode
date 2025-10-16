import './TwitterCard.css'
import { HeartIcon, ShareIcon, MoreIcon } from '../assets/icons.js';

function TwitterCard({ item }) {
  return (
    <div className="twitter-card">
      <div className="card-header">
        <img src={item.sourceAvatar} alt={item.source} className="source-avatar" />
        <div className="header-content">
          <span className="source-name">{item.source}</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
      
      <div className="card-text">
        <p className="twitter-content">{item.content}</p>
      </div>
      
      <div className="card-media-square">
        <img src={item.image} alt={item.content} className="card-media" />
      </div>
      
      <div className="card-footer">
        <div className="footer-attribution">
          <div className="footer-info">
            <span className="footer-timestamp">{item.timestamp}</span>
            <span className="footer-dot">·</span>
            <span className="footer-platform">{item.platform}</span>
            <span className="external-icon">↗</span>
          </div>
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

export default TwitterCard