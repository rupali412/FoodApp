import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            

            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Choose from a diverse menu featuring a delecatable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to statisfied your cravings and elevate your dining experience, one delicious at a time</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privcy Policy</li>
                </ul>

            </div>
            <div className="footer-right">
             <h2>GET INTO TOUCH</h2>
                <ul>
                     <li>123456789</li>
                     <li>tomato@gmail.com</li>
                 </ul>
            </div>
        </div>

              <hr />
              <p className="copyright">
                Copyright2024 @Tomato.com -All Rights Reserved.
              </p>
    </div>
  )
}

export default Footer