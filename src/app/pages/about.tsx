'use client'
import React, { useEffect, useRef } from 'react';
import '../styles/style.css'; // Make sure this path is correct

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section?.classList.add('animate');
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-us">
      <div className="about-container">
        <h2 className="heading">About Us</h2>
        <p className="intro">
          Welcome to <span className="highlight">Pet Care</span>, a place where pets are treated like family.
        </p>
        <div className="about-content">
          <div className="text">
            <h3 className="subheading">Our Mission</h3>
            <p className="text-body">
              Our mission is to provide high-quality care for your pets, ensuring their comfort and well-being at all times.
            </p>
          </div>
        </div>
        <a href="#services" className="cta-button">Explore Our Services</a>
      </div>
    </section>
  );
};

export default AboutUs;
