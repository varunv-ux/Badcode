import React, { useState } from 'react'
import './AdCard.css'
import { Drawer, DrawerContent, DrawerTrigger } from './Drawer'
import Reviews from './Reviews'
import AISummary from './AISummary'
import { StarIcon, AiIcon, HeartIcon, ShareIcon, MoreIcon } from '../assets/icons.js'

function AdCard({ item }) {
  const [reviewsOpen, setReviewsOpen] = useState(false)
  const [aiOpen, setAiOpen] = useState(false)
  
  return (
    <div className="ad-card">
      <div className="ad-header">
        <img src={item.sponsorLogo} alt={item.sponsor} className="sponsor-logo" />
        <div className="sponsor-info">
          <div className="sponsor-name-row">
            <span className="sponsor-name">{item.sponsor}</span>
            {item.rating && (
              <Drawer open={reviewsOpen} onOpenChange={setReviewsOpen}>
                <DrawerTrigger asChild>
                  <button className="rating-trigger">
                    <span className="rating-separator">·</span>
                    <span className="rating-value">{item.rating}</span>
                    <img src={StarIcon} alt="star" className="star-icon" />
                    <span className="review-count">({item.reviewCount})</span>
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <Reviews 
                    brandName={item.sponsor}
                    rating={item.rating}
                    reviewCount={item.reviewCount}
                    reviews={item.reviews}
                  />
                </DrawerContent>
              </Drawer>
            )}
          </div>
          <span className="sponsored-label">Sponsored</span>
        </div>
      </div>
      
      <div className="ad-text">
        <p className="ad-description">{item.description}</p>
      </div>
      
      <div className="ad-media-container">
        <img src={item.image} alt={item.description} className="ad-media" />
      </div>
      
      <div className="card-footer">
        <div className="footer-attribution">
          <div className="footer-info"></div>
        </div>
        <div className="footer-actions">
          <Drawer open={aiOpen} onOpenChange={setAiOpen}>
            <DrawerTrigger asChild>
              <button className="action-icon" aria-label="AI Summary">
                <img src={AiIcon} alt="AI Summary" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <AISummary item={item} />
            </DrawerContent>
          </Drawer>
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

export default AdCard