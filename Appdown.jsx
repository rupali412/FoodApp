import React from 'react'
import './appdown.css'
import { assets } from '../../assets/assets'

const Appdown = () => {
  return (
    <div className='app-down' id='app-down'>
        <p>For better experience download <br /> Tomato App</p>
        <div className="platform">
            <img src={assets.play_store}alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdown