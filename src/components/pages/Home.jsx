import React from 'react'
import "./home.css"
import Card from '../sections/Card';
import img10 from "../images/student.avif"
export const Home = () => {

  const totalDrives = 20;
  const drivesAttended = 8;
 
  return (
    <div className = 'hero-section'>
      <div className = "hero">
        <h1>Welcome User To Your Placement Drives Portal</h1>
        <h2>Drives Conducted : {totalDrives}</h2>
        <h2>Drives Attended : {drivesAttended}</h2>
        <p>Scroll For Latest Drives</p>
      </div>
      <div className='card-holder'>
      <Card/>
      </div>
      <div className = "placement-box">
        <div className='placement-left'>
          <h2>Latest Student <u>Placed</u> <br></br> through drives <br></br>Conducted <u>by us</u>.</h2>
        </div>
        <div className='placement-right'>
          <img src={img10} className='student-img'></img>
          <div className='student-info'>
            <h1>Placed In : Google</h1>
            <h2>Position : Junior Developer</h2>
            <p><b>Testimonial</b> : "I am really thankful towards our college and placement cell, for supporting and providing us opportunities to learn interview skills, communication skills and guiding us in placements."</p>
          </div>
        </div>
      
      </div>
    </div>
      
    
  );
}

export default Home
