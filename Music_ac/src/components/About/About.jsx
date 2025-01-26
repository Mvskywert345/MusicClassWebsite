import React from 'react';
import './About.css';  // Correct CSS import

function About() {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <div className="about-img"></div> {/* Only one image div */}
      </div>
      <div className="about-right">
        <h3>Why Choose Us?</h3>
        <h2>At Shadan Music Academy,</h2>
        <p>We are passionate about nurturing musical talent and helping individuals achieve their artistic potential. With over five years of excellence in music education, we take pride in offering high-quality training led by experienced teachers who are experts in their fields.</p>

        <p>Our curriculum spans a diverse range of styles, from Western Classical to Indian Classical, ensuring a comprehensive musical journey for our students. We specialize in teaching various instruments, including bass, electric, and acoustic guitars, piano, flute, and many others.</p>

        <p>Whether you're a beginner or an advanced musician, Shadan Music Academy provides personalized guidance, fostering creativity, technique, and confidence. Join us to embark on a rewarding musical journey!</p>
      </div>
    </div>
  );
}

export default About;
