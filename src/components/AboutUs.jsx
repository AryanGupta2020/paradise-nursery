import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <main className="about-content">
        <p className="eyebrow">OUR STORY</p>
        <h1>About Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your destination for beautiful indoor
          plants and greenery. We believe plants make every space more peaceful,
          welcoming, and full of life.
        </p>
        <p>
          Our goal is to make bringing nature home simple. Our collection
          includes air-purifying plants, easy-care succulents, and tropical
          favourites for plant lovers at every experience level.
        </p>
        <h2>Our Mission</h2>
        <p>
          We want to inspire greener homes and help everyone build a lasting
          connection with nature, one plant at a time.
        </p>
        <Link to="/plants" className="primary-btn">Explore Plants</Link>
      </main>
    </div>
  );
}
