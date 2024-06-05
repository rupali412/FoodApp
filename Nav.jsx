import React, { useContext, useState } from 'react'
import './nav.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Nav = ({setShowlogin}) => {
    let[menu,setMenu]=useState('home');
    const{gettotalcartamt}=useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
           <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
            <a href='#explore' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#app-down' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={gettotalcartamt()===0 ?'':'dot'}>

                </div>
            </div>
            <button onClick={()=>setShowlogin(true)}>Sign In</button>

        </div>
    </div>
  )
}

export default Nav
