import React from 'react'
import './explore.css'
import { menu_list } from '../../assets/assets'
import { Prev } from 'react-bootstrap/esm/PageItem'
const Explore = ({category, setcategory}) => {
  return (
    <div className='explore' id='explore'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delecatable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to statisfied your cravings and elevate your dining experience, one delicious at a time.</p>
        <div className="explore-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(Prev=>Prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
        
    </div>
  )
}

export default Explore