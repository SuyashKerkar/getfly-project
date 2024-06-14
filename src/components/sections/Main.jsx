import React from 'react'
import "./main.css"
import Card from './Card'

const Main = ({companyLogo, companyName, companyDescription, companyjobLink}) => {
  

  return (
    <div className='main-sec'>
      <div className='card'>
        <div className='company-logo'><img src={companyLogo}></img></div>
        <div className="company-info">
              <h2>{companyName}</h2>
              <p className="job-description">{companyDescription}</p>
              <a  href = {companyjobLink} target="_blank" rel="noopener noreferrer" className="doc-link">Follow the link for job Documentation and Details</a>
              <a target="_blank" rel="noopener noreferrer" className="apply-button"><button className='apply-btn'>Apply</button></a>
            </div>
      </div>
    </div>
  )
}

export default Main