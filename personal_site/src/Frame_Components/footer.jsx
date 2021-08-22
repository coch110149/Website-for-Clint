import React from 'react'
import './footer.css';


const Footer = () => {
    return (
        <div className = "footer">
       <a href = "https://github.com/coch110149" target = "_blank"> <img src = "github.png" alt = "github" /></a>
       <a href = "nowhere_yet" className="socialLinks">LinkedIn</a> 
       <a href = "http://instagram.com/sf_hippie?ref=badge" target = "_blank"><img src="//badges.instagram.com/static/images/ig-badge-32.png" alt="Instagram" /></a>
       <a href = "nowhere_yet" className="socialLinks">Bartlesville Bike Clinic</a> 
        </div>
    )
}

export default Footer
