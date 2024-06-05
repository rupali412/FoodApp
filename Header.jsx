import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delecatable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to statisfied your cravings and elevate your dining experience, one delicious at a time.</p>
                <button><a href='#explore'>View Menu</a></button>
            </div>
    </div>
  )
}

export default Header