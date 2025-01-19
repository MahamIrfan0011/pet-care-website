import '../styles/style.css';
import React from 'react';

export default function Reviews() {
  return (
    <div id="reviews" className="reviews">
      <h3>Customer Reviews</h3>
      
      <div className="review-card">
        <div className="review-content">
          <p>&quotAmazing service! My pet loved it!&quot</p>
          <div className="reviewer-name">John Doe</div>
          <div className="review-date">December 12, 2024</div>
          <div className="star-rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span> {/* Empty star */}
          </div>
        </div>
      </div>
      
      <div className="review-card">
        <div className="review-content">
          <p>&quotHighly recommend. Very professional staff.&quot</p>
          <div className="reviewer-name">Jane Smith</div>
          <div className="review-date">December 15, 2024</div>
          <div className="star-rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
          </div>
        </div>
      </div>
      
      <div className="review-card">
        <div className="review-content">
          <p>&quotFantastic care and attention to detail.&quot</p>
          <div className="reviewer-name">Alice Brown</div>
          <div className="review-date">December 18, 2024</div>
          <div className="star-rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span> {/* Full 5 stars */}
          </div>
        </div>
      </div>
      
      <div className="review-card">
        <div className="review-content">
          <p>&quotVery pleased with the grooming services.&quot</p>
          <div className="reviewer-name">Bob White</div>
          <div className="review-date">December 20, 2024</div>
          <div className="star-rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
          </div>
        </div>
      </div>
      
      <div className="review-card">
        <div className="review-content">
          <p>&quotFriendly staff and great facilities.&quot</p>
          <div className="reviewer-name">Samantha Green</div>
          <div className="review-date">December 22, 2024</div>
          <div className="star-rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
            <span className="star">☆</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

