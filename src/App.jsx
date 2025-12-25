import { useState, useEffect } from 'react';
import { Scissors, Palette, Sparkles, User, Phone, MapPin, Calendar, MessageCircle, Instagram, Facebook, Clock, ArrowUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [serviceSlides, setServiceSlides] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide effect for service images
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceSlides(prev => {
        const newSlides = {};
        services.forEach((_, idx) => {
          const currentSlide = prev[idx] || 0;
          newSlides[idx] = (currentSlide + 1) % 3;
        });
        return newSlides;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const services = [
    { 
      icon: Scissors, 
      name: 'Hair Cut', 
      desc: 'Expert precision cuts tailored to your style', 
      price: 'From LKR 500',
      images: [
        'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
        'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=800&q=80',
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80'
      ]
    },
    { 
      icon: Palette, 
      name: 'Hair Colouring', 
      desc: 'Professional color transformation', 
      price: 'From LKR 2,500',
      images: [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80'
      ]
    },
    { 
      icon: Sparkles, 
      name: 'Hair Straightening', 
      desc: 'Smooth, sleek, lasting results', 
      price: 'From LKR 3,500',
      images: [
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80'
      ]
    },
    { 
      icon: User, 
      name: 'Facial', 
      desc: 'Deep cleansing & rejuvenation', 
      price: 'From LKR 1,500',
      images: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
      ]
    },
    { 
      icon: Sparkles, 
      name: 'Cleanup', 
      desc: 'Fresh look, glowing skin', 
      price: 'From LKR 800',
      images: [
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'
      ]
    },
    { 
      icon: User, 
      name: 'Head & Body Massage', 
      desc: 'Ultimate relaxation experience', 
      price: 'From LKR 2,000',
      images: [
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80'
      ]
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
    'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80',
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80'
  ];

  const whatsappNumber = '94760784005';
  const bookingMessage = 'Hi Salon Hub! I would like to book an appointment.';

  const handleBooking = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <img src="images/logo.png" alt="Salon Hub Logo" className="logo-image" />
            <div className="logo-text-container">
              <span className="logo-text">SALON HUB</span>
              <span className="logo-tagline">Your Style, Our Expertise</span>
            </div>
          </div>
          <button className="book-btn" onClick={handleBooking}>
            <MessageCircle size={18} />
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Dickwella's Premier Salon</div>
          <h1 className="hero-title">
            Where Style
            <br />
            Meets Expertise
          </h1>
          <p className="hero-subtitle">
            Experience premium grooming services with expert stylists.
            <br />
            Book your transformation today.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleBooking}>
              <MessageCircle size={20} />
              Book via WhatsApp
            </button>
            <a href="#services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">Premium Grooming</h2>
          <p className="section-subtitle">Expert care for every style</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, idx) => {
            const currentSlide = serviceSlides[idx] || 0;
            return (
              <div 
                key={idx} 
                className="service-card"
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className="service-slideshow">
                  {service.images.map((image, imgIdx) => (
                    <div 
                      key={imgIdx}
                      className={`service-slide ${imgIdx === currentSlide ? 'active' : ''}`}
                      style={{backgroundImage: `url(${image})`}}
                    >
                      <div className="service-image-overlay"></div>
                    </div>
                  ))}
                  <div className="slide-indicators">
                    {service.images.map((_, imgIdx) => (
                      <span 
                        key={imgIdx} 
                        className={`indicator ${imgIdx === currentSlide ? 'active' : ''}`}
                      ></span>
                    ))}
                  </div>
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <div className="service-price">{service.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Gallery */}
      <section className="gallery">
        <div className="section-header">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">Happy Customers</h2>
          <p className="section-subtitle">Transformations we're proud of</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              style={{backgroundImage: `url(${image})`}}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-overlay">
                <Sparkles size={32} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="features-content">
          <div className="features-text">
            <span className="section-badge">Why Salon Hub</span>
            <h2 className="section-title">Excellence in Every Detail</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4>Expert Stylists</h4>
                  <p>Trained professionals with years of experience</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Quick Service</h4>
                  <p>Efficient appointments that respect your time</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4>Premium Products</h4>
                  <p>Only the finest quality products for your hair</p>
                </div>
              </div>
            </div>
          </div>
          <div className="features-visual">
            <div className="visual-card card-1" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80)'}}></div>
            <div className="visual-card card-2" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80)'}}></div>
            <div className="visual-card card-3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80)'}}></div>
          </div>
        </div>
      </section>

      {/* CTA Section with Premium Background */}
      <section className="cta">
        <div className="cta-background-pattern"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready for Your Transformation?</h2>
          <p className="cta-subtitle">Book your appointment now via WhatsApp</p>
          <button className="btn-cta" onClick={handleBooking}>
            <MessageCircle size={22} />
            Book Appointment
          </button>
          <div className="cta-info">
            <span>📍 Dickwella, Sri Lanka</span>
            <span>⏰ Mon-Sat, 9AM-7PM</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Visit Us</h3>
            <div className="info-item">
              <MapPin size={20} />
              <div>
                <strong>Salon Hub</strong>
                <p>Dickwella, Sri Lanka</p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <div>
                <strong>Call Us</strong>
                <p>+94 76 078 4005</p>
              </div>
            </div>
            <div className="info-item">
              <Clock size={20} />
              <div>
                <strong>Working Hours</strong>
                <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contact-social">
            <h3>Connect With Us</h3>
            <div className="social-buttons">
              <a href="#" className="social-btn">
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/iphonezone12" className="social-btn">
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <button className="social-btn whatsapp" onClick={handleBooking}>
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="images/logo1.png" alt="Salon Hub Logo" className="footer-logo-image" />
            <span className="logo-text">SALON HUB</span>
            <p>Your Style, Our Expertise</p>
          </div>
          <div className="footer-copy">
            © 2025 Salon Hub. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button className="floating-whatsapp" onClick={handleBooking}>
        <img src="images/wa.png" alt="WhatsApp" className="whatsapp-icon" />
      </button>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <img src="images/scissor.png" alt="Scroll to top" className="scissor-icon" />
      </button>

      {/* Lightbox for Full-Screen Images */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <img src={lightboxImage} alt="Full size" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default App;