import './App.css';
import Nav from '../src/components/navbar/Nav.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import Placeorder from './pages/placeorder/Placeorder.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Login from './components/login/Login.jsx';
import { useState } from 'react';
function App() {
  const[showlogin,setShowlogin]=useState(false)
  return (
    <>
    {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
    <div className="app">
      <BrowserRouter>
      <Nav setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
