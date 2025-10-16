import './Reviews.css'
import { StarIcon } from '../assets/icons.js';

function Reviews({ brandName, rating, reviewCount, reviews }) {
  const renderStars = (count) => {
    const stars = []
    const fullStars = Math.floor(count)
    const hasHalfStar = count % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img src={StarIcon} key={i} className="review-star-icon" alt="" />)
    }
    
    if (hasHalfStar) {
      stars.push(<img src={StarIcon} key="half" className="review-star-icon half-star" alt="" />)
    }
    
    const emptyStars = 5 - Math.ceil(count)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img src={StarIcon} key={`empty-${i}`} className="review-star-icon empty-star" alt="" />)
    }
    
    return stars
  }

  const ratingDistribution = [
    { rating: 5, percentage: 85 },
    { rating: 4, percentage: 10 },
    { rating: 3, percentage: 3 },
    { rating: 2, percentage: 1 },
    { rating: 1, percentage: 1 }
  ]

  return (
    <div className="reviews-container">
      {/* Header */}
      <div className="reviews-header">
        <h2 className="reviews-title">Reviews of {brandName}</h2>
      </div>

      {/* User Reviews Section */}
      <div className="reviews-content">
        <div className="reviews-label-container">
          <span className="reviews-label">USER REVIEWS</span>
        </div>

        {/* Rating Overview */}
        <div className="rating-overview">
          <div className="rating-bars">
            {ratingDistribution.map((item) => (
              <div key={item.rating} className="rating-bar-row">
                <span className="rating-number">{item.rating}</span>
                <div className="rating-bar-container">
                  <div className="rating-bar-bg">
                    <div 
                      className="rating-bar-fill" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rating-summary">
            <div className="rating-value-large">{rating}</div>
            <div className="rating-stars-display">
              {renderStars(parseFloat(rating))}
            </div>
            <div className="rating-count-text">{reviewCount} reviews</div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="pros-cons-section">
          <p className="pros-text">
            <span className="pros-label">Pros:</span> Clean ingredients, Easy to digest
          </p>
          <p className="cons-text">
            <span className="cons-label">Cons:</span> Foaminess, Chalky texture
          </p>
        </div>

        {/* Divider */}
        <div className="reviews-divider" />

        {/* Reviews List */}
        <div className="reviews-list">
          {reviews && reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-header">
                <p className="review-author">{review.author}</p>
                <p className="review-source">Reviewed on {review.source}</p>
                <div className="review-meta">
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                  <span className="review-time">{review.timeAgo}</span>
                </div>
              </div>
              <div className="review-snippet">
                <p className="review-text">{review.text}</p>
                <button className="review-more-btn">
                  <span>More</span>
                  <span className="review-more-icon">▼</span>
                </button>
              </div>
              {index < reviews.length - 1 && <div className="review-divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews