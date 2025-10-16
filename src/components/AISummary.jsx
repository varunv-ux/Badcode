import React, { useState, useEffect } from 'react';
import './AISummary.css'
import { HeartIcon, ShareIcon, SaveIcon } from '../assets/icons.js';

// Mock data for AI summary
const mockSummaryData = {
  insights: [
    {
      title: "Best-in-class performance",
      description: "Leading tech reviewers praise this product for its exceptional performance and reliability in real-world testing scenarios",
      source: "Wirecutter"
    },
    {
      title: "Outstanding value proposition",
      description: "Experts agree that this product offers premium features at a competitive price point, making it a smart purchase decision",
      source: "Engadget"
    }
  ],
  reviews: [
    {
      title: "Highly Recommended",
      description: "After extensive testing, this product exceeded expectations across all key metrics. The build quality and user experience are top-notch",
      source: "Marques Brownlee",
      platform: "YouTube"
    },
    {
      title: "A Game Changer",
      description: "This product sets a new standard in its category. The innovative features and attention to detail make it stand out from the competition",
      source: "Linus Tech Tips",
      platform: "YouTube"
    }
  ],
  aiQuestions: [
    "How does this compare to similar products in the market?",
    "What warranty and customer support options are available?",
    "Are there any known issues or common complaints from users?"
  ]
};

function AISummary({ item }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!item) return;
    
    // Simulate loading delay
    setLoading(true);
    const timer = setTimeout(() => {
      setSummary(mockSummaryData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [item]);

  if (loading) {
    return (
        <div className="ai-summary-container" style={{ padding: '40px 20px', textAlign: 'center', minHeight: '300px' }}>
            <p>✨ Loading Summary...</p>
        </div>
    );
  }

  if (!summary) {
    return null;
  }

  const { insights, reviews, aiQuestions } = summary;

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
            <span className="ai-timestamp">Generated now</span>
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
            {insights && insights.map((insight, index) => (
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
            {reviews && reviews.map((review, index) => (
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
            {aiQuestions && aiQuestions.map((question, index) => (
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

export default AISummary