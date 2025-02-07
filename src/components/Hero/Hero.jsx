import React from 'react'
import './Hero.css'
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className='hero container' id="hero"> 
      <div className='hero-text'>
        <h1> We Ensure Music Is accessible to everyone</h1>
        <p>Unlock Your Musical Journey – Anytime, Any Age!</p>
        <button className="btn">
  <Link to="/courses">Explore More</Link>
</button>
       
      </div>
    </div>
  )
}

export default Hero
