import React from 'react';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <h1>Featured Books</h1>
      <div className="card-container">
        <div className="card">
            <img src="/images/book1.jpg" alt="Book 1" />
            <h2>You Have a Brain</h2>
            <p>Ben Carson</p>
            <button className="buy-btn">Buy Now</button>
        </div>
        <div className="card">
          <img src="images/book2.jpg" alt="Book 2" />
          <h2>It Found Us</h2>
          <p>Lindsay Currie</p>
          <button className="buy-btn">Buy Now</button>
        </div>
        <div className="card">
          <img src="images/book9.jpg" alt="Book 3" />
          <h2>You Like It Darker</h2>
          <p>Stephen King</p>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
