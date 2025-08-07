import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.')
      return;
    }

    alert('Message sent successfully!');

    setForm({ name: '', email: '', message: '' });
  };
  return (
    <div className="App">
      <header>
        <h1>FitZone Gym</h1>
        <nav>
          <a href="#about" className='no-underline'>About&nbsp;</a>
          <a href="#plans" className='no-underline'>Plans&nbsp;</a>
          <a href="#contact" className='no-underline'>Contact</a>
        </nav>
      </header>
      
      <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
      className="banner-Carousel"
      >
      <div>
      <img src="/banner-img-2.jpg" alt="Banner-2" className="banner-img-2.jpg" />
      </div>
      <div>
        <img src="/banner-img-3.jpg" alt="Banner-3" className="banner-img-3.jpg"/>
      </div>
      </Carousel>
      

      <section class="hero">
        <h2>Shape Your body, Shap Your Life</h2>
        <p>Join us today and transform!</p>
        <button onClick={() => alert("Thanks For Your Interest!")}>Join Now</button>
      </section>
      <hr></hr>

      <section id="about">
        <h2>About Us</h2>
        <p>We are a community-focused gym providing world-class equipement,Experet trainers, and personalized fitness plans.</p>
      </section>

      <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
      className="banner-Carousel-2"
      >
      <div>
        <img src="/banner-img-4.jpg" alt="Banner-4" className="banner-img-4.jpg" />
      </div>
      </Carousel>
      <section id="plans">
        <h2>Members Plans</h2>
        <div class="plans">
          <div class="plan">
            <h3>Basic</h3>
            <p>499/Month</p>
          </div>
          <div class="plan">
            <h3>Standard</h3>
            <p>699/Month</p>
          </div>
          <div class="plan">
            <h3>Premium</h3>
            <p>899/Month</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <h4>8220809016 FitZoneGym@gmail.com</h4>
        <form onsubmit={validateForm}>
          <input type="text"
            id="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange} />
          <input type="email"
            id="email"
            placeholder="Yor Email"
            value={form.email}
            onChange={handleChange} />
          <textarea
            id="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p> 2025 FitZone Gym. All right reserved.</p>
      </footer>
    </div>
  );
}

export default App;