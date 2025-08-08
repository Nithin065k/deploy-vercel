import React from 'react'

export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>Rent the perfect car for every trip</h1>
        <p>Affordable. Reliable. Fast — ZoomRide gets you on the road.</p>
        <div className="hero-cta">
          <input type="text" placeholder="Enter city or pickup location" />
          <button className="btn">Find Cars</button>
        </div>
        <div className="highlights">
          <div><strong>24/7</strong><span>Support</span></div>
          <div><strong>Free</strong><span>Cancellation</span></div>
          <div><strong>Secure</strong><span>Payments</span></div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-card">
          <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d9f6e1c9e0b6f1a8b2a1e2a7b5ed3b6" alt="car"/>
          <div className="price">From ₹1,299/day</div>
        </div>
      </div>
    </section>
  )
}