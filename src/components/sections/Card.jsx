import React from 'react'
import Main from './Main';
import "./card.css"
import Notification from '../pages/Notification';
import img1 from "../images/amazon.jpeg"
import img2 from "../images/flipkart.webp"
import img3 from "../images/google.jpg"
import img4 from "../images/tcs.webp"
import img5 from "../images/getfly.jpg"


const drives = [
  {
    companyLogo: img1,
    companyName: 'Amazon',
    companyDescription: "Software Developer - Join Amazon's team to manage customer orders, ensure timely deliveries, and enhance overall customer satisfaction in a fast-paced environment.",
    companyjobLink: 'https://amazon.jobs/',
    applyLink: '#',
  },
  {
    companyLogo: img2,
    companyName: 'Flipkart',
    companyDescription: "Software Developer - Contribute to Flipkart's tech team by developing scalable software applications, enhancing e-commerce platforms, and ensuring a seamless customer experience.",
    companyjobLink: "https://www.flipkartcareers.com/#!/joblist",
    applyLink: '#',
  },
  {
    companyLogo: img3,
    companyName: 'Google',
    companyDescription: " Software Developer - Join Google’s innovative team to develop cutting-edge software solutions, improve user experiences, and solve complex problems in a dynamic environment.",
    companyjobLink: "https://careers.google.com/jobs#!t=jo&jid=127025001&",
    applyLink: '#',
  },
  {
    companyLogo: img4,
    companyName: 'TCS ',
    companyDescription: " Software Developer - Be part of TCS's global team, where you'll design and implement software solutions, optimize systems, and deliver high-quality technology services.",
    companyjobLink: "https://www.tcs.com/careers/india/entry-level",
    applyLink: '#',
  },
  {
    companyLogo: img5,
    companyName: 'GetFly Technologies',
    companyDescription: 'Software Developer - Join GetFly to create innovative software, enhance aviation solutions, and drive technological advancements in the aviation industry.',
    companyjobLink: "https://in.linkedin.com/in/getfly-technologies-86a033283",
    applyLink: '#',
  },
  // Add more drives as needed
];

const Card = () => {
  return (
    <div className="notifications">
      <h2>Latest Placement Drives</h2>
      <div className="drives-list">
        {drives.map((drive, index) => (
          <Main
            key={index}
            companyLogo={drive.companyLogo}
            companyName={drive.companyName}
            companyDescription={drive.companyDescription}
            companyjobLink={drive.companyjobLink}
            applyLink={drive.applyLink}
          />
        ))}
      </div>
    </div>
  );
 
}

export default Card