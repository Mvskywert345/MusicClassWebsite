import React from 'react';
import vocal_1 from '../../assets/vocal2.jpg';
import vocal_2 from '../../assets/instr.jpg';
import vocal_3 from '../../assets/vocal5.avif';

import './Courses.css';

const Courses = () => {

  return (
    <div>
     
    <div className='courses'>
    <h2>What We Offer</h2>

      <div className='program' id="courses">
        <img src={vocal_1} alt="Vocal Course" />
        <h3>Vocal Training</h3>
        <p>Master your voice with expert guidance.</p>
      </div>

      <div className='program'>
        <img src={vocal_2} alt="Instrument Course" />
        <h3>Instrument Training</h3>
        <p>Learn to play your favorite instruments.</p>
        </div>

        <div className='program' >      
        <img src={vocal_3} alt="Music Production" />
        <h3>Music Production</h3>
        <p>Experiece the art of creating a music.</p>
      </div>


      </div>
    </div>
    
  );
}

export default Courses;
