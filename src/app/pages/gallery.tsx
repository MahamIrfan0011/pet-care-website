import '../styles/style.css';
import React from 'react';

export default function Gallery() {
  return (
    <div id="gallery" className="gallery"> {/* Added id="gallery" */}
      <h3>Our Happy Customers</h3>
      <div className="gallery-images">
        <img src="cat.jpg" alt="Pet Care Image 1" />
        <img src="dog.jpg" alt="Pet Care Image 2" />
        <img src="dog1.jpg" alt="Pet Care Image 3" />
        <img src="rabbit.png" alt="Pet Care Image 4" />
        <img src="cat1.jpg" alt="Pet Care Image 5" />
        <img src="bird.jpg" alt="Pet Care Image 6" />
      </div>
    </div>
  );
}

