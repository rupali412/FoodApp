import React, { useContext } from 'react'
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext';
const Placeorder = () => {
  const {gettotalcartamt}=useContext(StoreContext);
  return (
    <form className='order'>
        <div className="order-left">
            <p className="title">Delivery Information</p>
            <div className="multi">
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Street' />
            <div className="multi">
              <input type="text" placeholder='City'/>
              <input type="text" placeholder='State'/>
            </div>
            <div className="multi">
              <input type="number" placeholder='Zip-Code'/>
            </div>
            <input type="number" placeholder='Phone'/>
        </div>
        <div className="order-right">
        <div className="cart-total">
          <h2>Total Product Price</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${gettotalcartamt()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivert Fee</p>
              <p>${gettotalcartamt()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalcartamt()===0?0:gettotalcartamt()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
          </div>
        
    </form>
  )
}

export default Placeorder