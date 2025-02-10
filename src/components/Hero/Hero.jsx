import React from 'react'
import './Hero.css'





const Hero = () => {
  return (
    <div className='hero container' id="hero"> 
      <div className='hero-text'>
        <h1> We Ensure Music Is accessible to everyone</h1>
        <p>Unlock Your Musical Journey – Anytime, Any Age!</p>
<<<<<<< HEAD

        <button className="btn" onClick={() => document.getElementById("courses").scrollIntoView({ behavior: "smooth" })}>
  Explore More
</button>

=======
      
        <button className="btn" onClick={() => document.getElementById("courses").scrollIntoView({ behavior: "smooth" })}>
        Explore More
        </button>
       
>>>>>>> f76b2421cf5491774c7f22c4cc1cbccef3f742c3
      </div>
    </div>
  )
}

export default Hero
