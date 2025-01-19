'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo with Paw Image */}
        <div className="logo">
          <Link href="/">
            <span className="logo-with-icon">
              <img
                src="/paw-cat1.png"
                alt="Paw Icon"
                className="paw-icon"
              />
              PetCare
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#reviews">Reviews</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <button>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#blog">Blog</Link>
        <Link href="#reviews">Reviews</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

