import React, { useState } from 'react';
import './landingpage.css';
import CookingFailCard from '../components/CookingFailCard';

function FunniestCookingFails() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  // Dummy data for cooking fails
  const dummyFails = [
    {
      id: 1,
      title: "Burnt Birthday Cake Catastrophe",
      description: "What was supposed to be a simple birthday cake turned into a charcoal brick. I forgot it in the oven for 2 hours while binge-watching my favorite show!",
      username: "BakingDisaster",
      date: "2025-02-15",
      imageUrl: "https://placehold.co/400x200/f94144/ffffff?text=Burnt+Cake",
      likes: 245,
      comments: 37
    },
    {
      id: 2,
      title: "Pasta Explosion",
      description: "I didn't know spaghetti expands in water. I filled the pot to the brim with dry pasta and ended up with enough to feed a small country... all over my kitchen floor.",
      username: "PastaNewbie",
      date: "2025-02-28",
      imageUrl: "https://placehold.co/400x200/f8961e/ffffff?text=Pasta+Mess",
      likes: 189,
      comments: 52
    },
    {
      id: 3,
      title: "Microwave Metal Mistake",
      description: "Pro tip: don't put aluminum foil in the microwave. I learned this the hard way and now have a new modern art installation where my microwave used to be.",
      username: "MicrowaveMaster",
      date: "2025-03-05",
      imageUrl: "https://placehold.co/400x200/577590/ffffff?text=Microwave+Fail",
      likes: 312,
      comments: 86
    }
  ];

  return (
    <div className="container">
      <header>
        <nav>
          <div className="logo">CookingFails</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#submit">Submit Your Fail</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Funniest Cooking Fails</h1>
          <p className="tagline">Where culinary disasters become internet gold!</p>
          <div className="cta-buttons">
            <a href="#gallery" className="btn primary">View Fails</a>
            <a href="#submit" className="btn secondary">Share Your Fail</a>
          </div>
        </section>

        <section id="featured">
          <h2>Featured Cooking Fails</h2>
          <div className="fail-grid">
            {dummyFails.map((fail) => (
              <CookingFailCard
                key={fail.id}
                title={fail.title}
                description={fail.description}
                username={fail.username}
                date={fail.date}
                imageUrl={fail.imageUrl}
                likes={fail.likes}
                comments={fail.comments}
              />
            ))}
          </div>
        </section>

        {/* Rest of your landing page content */}
        <section id="submit-fail">
          <h2>Share Your Cooking Catastrophe</h2>
          <p>Got a kitchen disaster story that will make us laugh? Join our community!</p>
          
          {submitted ? (
            <div className="success-message">Thanks for subscribing! We'll notify you when we launch.</div>
          ) : (
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                required 
              />
              <button type="submit" className="btn primary">Get Notified</button>
            </form>
          )}
        </section>

        <section id="testimonials">
          <h2>What Our Community Says</h2>
          <div className="testimonial-container">
            <div className="testimonial">
              <p>"I never thought burning spaghetti was possible until I tried. Thanks for making me feel less alone!"</p>
              <cite>- Kitchen Disaster Dave</cite>
            </div>
            <div className="testimonial">
              <p>"My exploding pressure cooker story got me 10k likes! This community is amazing!"</p>
              <cite>- Pressure Cooker Paula</cite>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>CookingFails</h3>
            <p>Celebrating culinary catastrophes since 2025</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#submit">Submit</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 Funniest Cooking Fails. All rights (and recipes) reserved.
        </div>
      </footer>
    </div>
  );
}

export default FunniestCookingFails;