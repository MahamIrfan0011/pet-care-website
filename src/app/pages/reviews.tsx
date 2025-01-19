import '../styles/style.css';
import React from 'react';

export default function Reviews() {
  return (
    <div id="reviews" className="reviews">
      <h3>Customer Reviews</h3>
      
      <div className="review-card">
        <div className="review-content">
          <p>"Amazing service! My pet loved it!"</p>
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
          <p>"Highly recommend. Very professional staff."</p>
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
          <p>"Fantastic care and attention to detail."</p>
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
          <p>"Very pleased with the grooming services."</p>
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
          <p>"Friendly staff and great facilities."</p>
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

