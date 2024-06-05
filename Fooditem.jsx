import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { StoreContext } from '../../context/StoreContext'

const Fooditem = ({id,name,price,description,image}) => {

    const{cartitem,addtocart,removefromcart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className='food-item-img' />
            {
                !cartitem[id]
                ?
                <img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" />
                :
                <div className="food-item-counter">
                    <img src={assets.remove_icon_red} onClick={()=>removefromcart(id)} alt="" />
                    <p>{cartitem[id]}</p>
                    <img src={assets.add_icon_green} onClick= {()=>addtocart(id)}alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-ratin">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
            
        </div>

    </div>
  )
}

export default Fooditem