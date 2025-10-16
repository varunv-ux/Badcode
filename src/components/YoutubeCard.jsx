import './YoutubeCard.css'
import { HeartIcon, ShareIcon, MoreIcon } from '../assets/icons.js';

function YoutubeCard({ item }) {
  const aspectRatio = item.orientation === 'vertical' ? '3 / 4' : '375 / 211'
  
  return (
    <div className="youtube-card">
      <div className="card-header">
        <img src={item.sourceAvatar} alt={item.source} className="source-avatar" />
        <div className="header-content">
          <span className="source-name">{item.source}</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
      
      <div className="card-text">
        <p className="youtube-description">{item.description}</p>
      </div>
      
      <div className="card-media-container" style={{ aspectRatio }}>
        <img src={item.videoUrl} alt={item.description} className="card-media" />
        <div className="video-badge">
          <span className="play-icon">▶</span>
          <span className="video-duration">{item.videoDuration}</span>
        </div>
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

export default YoutubeCard