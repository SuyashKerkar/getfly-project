import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-columns'>
        <div className='col1'>
          <h2>Company Name</h2>
          <p>Our mission is to bridge the gap between academia and industry, ensuring students secure the best career opportunities. We collaborate with top companies to arrange campus interviews, job fairs, and internships. Our dedicated team is committed to guiding you towards a successful professional journey.</p>
        </div>
        <div className='col2'>
          <ul>
            <li>Home</li>
            <li>Notification</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='col3'>
        <ul>
            <li>Past Drives</li>
            <li>Application</li>
        </ul>
        <input className = "text-box" type='text' placeholder='Your Queries'></input>
        <button>Send</button>
        
        </div>
      </div>
      <div className='end-footer'>
        <p>&copy; 2024 All Righst Reserved</p>
      </div>
    </footer>
  )
}

export default Footer