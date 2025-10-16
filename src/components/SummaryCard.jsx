import './SummaryCard.css'
import { HeartIcon, ShareIcon, MoreIcon } from '../assets/icons.js';

function SummaryCard({ item }) {
  return (
    <div className="summary-card">
      <div className="card-header">
        <div className="multi-source-avatars">
          {item.sources.slice(0, 3).map((source, idx) => (
            <img 
              key={idx} 
              src={source.avatar} 
              alt={source.name} 
              className="multi-avatar"
              style={{ zIndex: 3 - idx }}
            />
          ))}
        </div>
        <span className="source-count">+{item.sourceCount}</span>
        <span className="divider">|</span>
        <span className="topic-title">{item.topicTitle}</span>
      </div>
      
      <div className="card-text">
        <p className="card-description">{item.description}</p>
      </div>
      
      <div className="card-media-container">
        {item.videoUrl && (
          <>
            <img src={item.videoUrl} alt={item.title} className="card-media" />
            <div className="video-badge">
              <span className="play-icon">▶</span>
              <span className="video-duration">{item.videoDuration || '00:00'}</span>
            </div>
          </>
        )}
        {item.image && !item.videoUrl && (
          <img src={item.image} alt={item.title} className="card-media" />
        )}
      </div>
      
      <div className="card-title-section">
        <h3 className="card-main-title">{item.title}</h3>
      </div>
      
      <div className="card-footer">
        <div className="footer-attribution">
          <div className="footer-info">
            <span className="footer-timestamp">{item.timestamp}</span>
            <span className="footer-dot">·</span>
            <span className="footer-platform">{item.platformSource || item.platform}</span>
            {item.platform && item.platformSource && (
              <>
                <span className="footer-dot">·</span>
                <span className="footer-platform">{item.platform}</span>
              </>
            )}
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

export default SummaryCard