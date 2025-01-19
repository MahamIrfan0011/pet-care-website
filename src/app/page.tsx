import About from "./pages/about";
import Services from "./pages/services";
import Footer from "./pages/footer";
import Blog from "./pages/blog";
import Reviews from "./pages/reviews";
import Navbar from "./pages/navbar";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Image and Text */}
      <div className="hero-section">
        <img src="/hero.jpg" alt="Pet Care" className="hero-image" />
       
      </div>

      {/* Other sections of your website */}
      <div id="home" className="home">
        <Navbar />
        <div className="home-content">
          
        </div>
        <About />
        <Services />
        <Blog />
        <Reviews />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
