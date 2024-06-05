import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { Prev } from "react-bootstrap/esm/PageItem";

export const StoreContext = createContext(null)


const StoreContextProvider=(props)=>{

    const [ cartitem, setCarditem]=useState({});
    const addtocart=(itemId)=>{
        if(!cartitem[itemId]){
            setCarditem((Prev)=>({...Prev,[itemId]:1}))
        }
       else{
        setCarditem((Prev)=>({...Prev,[itemId]:Prev[itemId]+1}))
       } 
    }
    const removefromcart=(itemId)=>{
        setCarditem((Prev)=>({...Prev,[itemId]: Prev[itemId]-1}))

    }
    const gettotalcartamt=()=>{
        let totalamt=0;
        for(const item in cartitem)
        {
            if(cartitem[item]>0){
            let iteminfo=food_list.find((product)=>product._id === item);
            totalamt+=iteminfo.price*cartitem[item];}
        }
        return totalamt;
    }
    const contextvalue= {  
        food_list,
        cartitem,
        setCarditem,
        addtocart,
        removefromcart,
        gettotalcartamt
        
    }
    return(
        <StoreContext.Provider value= {contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;