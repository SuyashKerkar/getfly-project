import React from 'react'
import "./notification.css"
import Main from '../sections/Main';
import Card from '../sections/Card';
import moment from 'moment';


const Notification = () => {
  return (
    <div className='noti'>
      <h1>List Of Latest Company Placement Drives & updates</h1>
      <div className='noti-element'>
        <div className='noti-lft'>
        <h2>Company Name : Google</h2>
        <p>Last Date To Register : {moment().add(1, 'days').calendar()}</p>
        <p>Any Upadtes : Need Python proficiency</p>
        </div>
        <div className='noti-rgt'>
          <button>Apply Now</button>
        </div>
        
      </div>
      <div className='noti-element'>
        <div className='noti-lft'>
        <h2>Company Name : Flipkart</h2>
        <p>Last Date To Register : {moment().add(5, 'days').calendar()}</p>
        <p>Any Upadtes : Need 2+ years experience in Java</p>
        </div>
        <div className='noti-rgt'>
          <button>Apply Now</button>
        </div>
        
      </div>
      <div className='noti-element'>
        <div className='noti-lft'>
        <h2>Company Name : TCS</h2>
        <p>Last Date To Register : {moment().add(7, 'days').calendar()}</p>
        <p>Any Upadtes : Need 5+ year experience in Development Operations Engineer</p>
        </div>
        <div className='noti-rgt'>
          <button>Apply Now</button>
        </div>
        
      </div>
      <div className='noti-element'>
        <div className='noti-lft'>
        <h2>Company Name : Flipkart</h2>
        <p>Last Date To Register : {moment().add(10, 'days').calendar()}</p>
        <p>Any Upadtes : Fresher can apply for Front-End Developer</p>
        </div>
        <div className='noti-rgt'>
          <button>Apply Now</button>
        </div>
        
      </div>
      <div className='noti-element'>
        <div className='noti-lft'>
        <h2>Company Name : GetFly technologies</h2>
        <p>Last Date To Register : {moment().add(1.5, 'days').calendar()}</p>
        <p>Any Upadtes : freshers can apply for back-End Developer</p>
        </div>
        <div className='noti-rgt'>
          <button>Apply Now</button>
        </div>
        
      </div>
      <div className='card-noti'>
      <Card/>
      </div>
      
    </div>
  );
}

export default Notification