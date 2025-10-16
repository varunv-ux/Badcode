import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import './AISummary.css'
import { HeartIcon, ShareIcon, SaveIcon } from '../assets/icons.js';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    insights: {
      type: Type.ARRAY,
      description: 'Two key insights about the product, from the perspective of top tech sites.',
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: 'Catchy title for the insight.' },
          description: { type: Type.STRING, description: 'Detailed description of the insight.' },
          source: { type: Type.STRING, description: 'Name of the tech site source, e.g., Wirecutter.' },
        },
        required: ['title', 'description', 'source']
      },
    },
    reviews: {
      type: Type.ARRAY,
      description: 'Two summarized reviews from the perspective of tech influencers.',
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: 'Catchy title for the review summary.' },
          description: { type: Type.STRING, description: 'The summarized review text.' },
          source: { type: Type.STRING, description: 'Name of the influencer, e.g., Marques Brownlee.' },
          platform: { type: Type.STRING, description: 'Platform of the review, e.g., YouTube.' },
        },
        required: ['title', 'description', 'source', 'platform']
      },
    },
    aiQuestions: {
      type: Type.ARRAY,
      description: 'Three follow-up questions a potential customer might ask.',
      items: {
        type: Type.STRING,
      },
    },
  },
  required: ['insights', 'reviews', 'aiQuestions']
};


function AISummary({ item }) {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      if (!item) return;
      try {
        setLoading(true);
        setError(null);

        const prompt = `Generate a concise AI summary for the product: "${item.sponsor} - ${item.description}". 
        Provide the following:
        1. Two key insights, presented as if from top tech sites (e.g., Wirecutter, Engadget).
        2. Two summarized reviews, presented as if from tech influencers (e.g., Marques Brownlee).
        3. Three follow-up questions a potential customer might ask about the product.
        
        Your response must be in the provided JSON format.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseSchema: responseSchema,
          },
        });
        
        const jsonResponse = JSON.parse(response.text);
        setSummary(jsonResponse);

      } catch (e) {
        console.error('Error fetching AI summary:', e);
        setError('Failed to generate AI summary. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [item]);

  if (loading) {
    return (
        <div className="ai-summary-container" style={{ padding: '40px 20px', textAlign: 'center', minHeight: '300px' }}>
            <p>✨ Generating AI Summary...</p>
        </div>
    );
  }
  
  if (error) {
    return (
        <div className="ai-summary-container" style={{ padding: '40px 20px', textAlign: 'center', minHeight: '300px' }}>
            <p style={{color: '#ff8a80'}}>{error}</p>
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