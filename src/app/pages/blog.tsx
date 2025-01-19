import '../styles/style.css';
import React from 'react';

export default function Blog() {
  return (
    <div id="blog" className="blog"> {/* Added id="blog" */}
      <h3>Our Blog</h3>
      
      {/* Existing Blog Posts */}
      <div className="blog-post">
        <h4>How to Groom Your Pet at Home</h4>
        <p>
          Learn the best techniques for grooming your pet at home, from brushing to trimming nails...
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h4>Top Health Tips for Your Pet</h4>
        <p>
          Keep your furry friend in top shape with these essential health tips for pets.
        </p>
        <a href="#">Read More</a>
      </div>
      
      {/* New Blog Posts */}
      <div className="blog-post">
        <h4>Understanding Pet Nutrition</h4>
        <p>
          Learn about the essential nutrients your pet needs to stay healthy and strong.
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h4>Training Tips for Your Dog</h4>
        <p>
          Effective and easy training tips to make sure your dog learns basic commands and behavior.
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h4>How to Keep Your Pet Safe During Travel</h4>
        <p>
          Tips and tricks for making sure your pet stays comfortable and safe during trips.
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h4>Pet Behavior Explained</h4>
        <p>
          A guide to understanding common pet behaviors and how to address them.
        </p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h4>Choosing the Right Pet for Your Family</h4>
        <p>
          A comprehensive guide to picking the right pet based on your lifestyle and living space.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

