import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './AISummary.css'
import { HeartIcon, ShareIcon, SaveIcon } from '../assets/icons.js'

function AISummary({ item }) {
  if (!item) {
    return null
  }

  const summary = useMemo(() => item.aiSummary ?? null, [item])

  if (!summary) {
    return (
      <div
        className="ai-summary-container"
        style={{ padding: '40px 20px', textAlign: 'center', minHeight: '300px' }}
      >
        <p style={{ color: '#ff8a80' }}>
          AI insights are not available for this product yet. Check back soon for curated highlights.
        </p>
      </div>
    )
  }

  const insights = Array.isArray(summary.insights) ? summary.insights : []
  const reviews = Array.isArray(summary.reviews) ? summary.reviews : []
  const aiQuestions = Array.isArray(summary.aiQuestions) ? summary.aiQuestions : []

  return (
    <div className="ai-summary-container">
      {/* Hero Image */}
      <div className="ai-hero-section">
        <img src={item.image} alt={item.description} className="ai-hero-image" />
      </div>

      {/* Content */}
      <div className="ai-content-section">
        {/* Header */}
        <div className="ai-header">
          <div className="ai-header-top">
            <div className="ai-attribution">
              <img src={item.sponsorLogo} alt={item.sponsor} className="ai-sponsor-logo" />
              <span className="ai-sponsor-name">{item.sponsor}</span>
            </div>
            <div className="ai-actions">
              <button className="ai-follow-btn">Follow</button>
              <button className="ai-icon-btn">
                <span className="ai-more-icon">⋯</span>
              </button>
            </div>
          </div>
          <div className="ai-header-text">
            <p className="ai-description">{item.description}</p>
          </div>
          <div className="ai-header-footer">
            <span className="ai-timestamp">Curated insights</span>
            <div className="ai-footer-actions">
              <button className="ai-action-btn">
                <img src={HeartIcon} alt="Like" />
              </button>
              <button className="ai-action-btn">
                <img src={ShareIcon} alt="Share" />
              </button>
              <button className="ai-action-btn">
                <img src={SaveIcon} alt="Save" />
              </button>
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="ai-insights-section">
          <h3 className="ai-section-title">Insights from Top Tech Sites</h3>
          <div className="ai-insights-list">
            {insights.length === 0 && (
              <p className="ai-empty-copy">We’re still curating highlights for this product.</p>
            )}
            {insights.map((insight, index) => (
              <div key={index} className="ai-insight-item">
                <span className="ai-bullet">•</span>
                <div className="ai-insight-content">
                  <p className="ai-insight-text">
                    <span className="ai-insight-title">{insight.title}</span>
                    <span className="ai-insight-desc">: {insight.description}</span>
                  </p>
                  <div className="ai-insight-source">
                    <div className="ai-source-icon" />
                    <span className="ai-source-name">{insight.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ai-feedback-actions">
            <button className="ai-feedback-btn">
              <span className="ai-labs-icon">🧪</span>
            </button>
            <button className="ai-feedback-btn">
              <span className="ai-thumb-icon">👍</span>
            </button>
            <button className="ai-feedback-btn">
              <span className="ai-thumb-icon">👎</span>
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="ai-reviews-section">
          <h3 className="ai-section-title">Reviews from Tech Influencers</h3>
          <div className="ai-reviews-list">
            {reviews.length === 0 && (
              <p className="ai-empty-copy">No creator reactions just yet. Check back soon!</p>
            )}
            {reviews.map((review, index) => (
              <div key={index} className="ai-review-item">
                <span className="ai-bullet">•</span>
                <div className="ai-review-content">
                  <p className="ai-review-text">
                    <span className="ai-review-title">{review.title}</span>
                    <span className="ai-review-desc">: {review.description}</span>
                  </p>
                  <div className="ai-review-source">
                    <div className="ai-source-icon" />
                    <span className="ai-source-name">{review.source} · {review.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ai-feedback-actions">
            <button className="ai-feedback-btn">
              <span className="ai-labs-icon">🧪</span>
            </button>
            <button className="ai-feedback-btn">
              <span className="ai-thumb-icon">👍</span>
            </button>
            <button className="ai-feedback-btn">
              <span className="ai-thumb-icon">👎</span>
            </button>
          </div>
        </div>

        {/* Ask AI Mode Section */}
        <div className="ai-ask-section">
          <h3 className="ai-section-title">Ask AI Mode</h3>
          <div className="ai-questions-list">
            {aiQuestions.length === 0 && (
              <p className="ai-empty-copy">Customers haven’t asked anything yet.</p>
            )}
            {aiQuestions.map((question, index) => (
              <div key={index} className="ai-question-item">
                <span className="ai-question-icon">↩</span>
                <p className="ai-question-text">{question}</p>
              </div>
            ))}
          </div>
          <button className="ai-followup-btn">
            <span className="ai-gemini-icon">✨</span>
            <span className="ai-followup-text">Ask follow-up in AI Mode</span>
          </button>
        </div>
      </div>
    </div>
  )
}

AISummary.propTypes = {
  item: PropTypes.shape({
    aiSummary: PropTypes.shape({
      insights: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          source: PropTypes.string
        })
      ),
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          source: PropTypes.string,
          platform: PropTypes.string
        })
      ),
      aiQuestions: PropTypes.arrayOf(PropTypes.string)
    }),
    description: PropTypes.string,
    image: PropTypes.string,
    sponsor: PropTypes.string,
    sponsorLogo: PropTypes.string
  })
}

export default AISummary

