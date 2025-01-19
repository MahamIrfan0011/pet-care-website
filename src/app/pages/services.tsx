import '../styles/style.css';
import React from 'react';

export default function Services() {
  return (
    <div>
      {/* Services Section */}
      <div id="services" className="services">
        {/* Section Heading */}
        <h2 className="services-heading">Our Services</h2>

        {/* Service Items */}
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">
              <img src="/groom.png" alt="Grooming" />
            </div>
            <h3>Grooming</h3>
            <p>Top-notch grooming for your pets.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/board.png" alt="Boarding" />
            </div>
            <h3>Boarding</h3>
            <p>Safe and comfortable boarding services.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/health.png" alt="Health Tips" />
            </div>
            <h3>Health Tips</h3>
            <p>Expert advice for your furry friends.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/photo.png" alt="Photography" />
            </div>
            <h3>Pet Photography</h3>
            <p>Capture beautiful moments with professional pet photography sessions.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/training.png" alt="Training" />
            </div>
            <h3>Training</h3>
            <p>Personalized training sessions to help your pet learn and grow.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/travel.png" alt="Pet Travel" />
            </div>
            <h3>Pet Travel</h3>
            <p>Safe and comfortable travel arrangements for your pets.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/nutrition.png" alt="Nutrition" />
            </div>
            <h3>Nutrition Advice</h3>
            <p>Expert nutrition advice to keep your pet healthy and strong.</p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <img src="/day-care.png" alt="Pet Daycare" />
            </div>
            <h3>Pet Daycare</h3>
            <p>Daycare services to keep your pet entertained and cared for during the day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


