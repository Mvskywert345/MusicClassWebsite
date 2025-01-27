import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <section id="courses">
          <h1 className="section-title">Our Courses</h1>
          <Courses />
        </section>

        <section id="about">
          <h2 className="section-title">About Us</h2>
          <About />
        </section>

        <section id="contact">
          <h2 className="section-title">Get in Touch</h2>
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
