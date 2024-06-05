import React, { useState } from 'react'
import './home.css';
import Header from '../../components/header/Header';
import Explore from '../../components/explore/Explore';
import Fooddisplay from '../../components/fooddisplay/Fooddisplay';
import Appdown from '../../components/appdown/Appdown';
const Home = () => {

  const[category,setcategory] = useState("All");
  return (
    <div>
        <Header/>
        <Explore category={category} setcategory={setcategory}/>
        <Fooddisplay category={category} />
        <Appdown/>
    </div>
  )
}

export default Home