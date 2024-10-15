import React, { useEffect } from 'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from '../Utils/cartSlice';

const Cart = () => {
    const currentCartData=useSelector((store)=>store?.cart);
    const dispatch=useDispatch();


    const handleCart=()=>{
        let currentState=JSON.parse(window.localStorage.getItem("cart"));
      
        dispatch(getCart(currentState));


    }

    useEffect(()=>{
       
        handleCart();
        
    },[])

    if(!currentCartData) return null;



  return ( 
  <div style={{backgroundColor:"lightgray", height:"800px" , width:"100%",paddingBottom:"50px"}}>

    <div style={{padding:"1rem" , fontSize:"40px",display:"flex", justifyContent:"center"
    }} > Your Cart <i  style={{marginTop:"6px" ,marginLeft:"4px"}} className="ri-shopping-cart-fill"></i><span>({currentCartData?.totalQuantity})</span></div>

    <div style={{height:"10px" , backgroundColor:"black"}}></div>


    <div style={{display:"flex", flex:"row" , flexWrap:"wrap", marginTop:"20px"}}>
   { currentCartData && currentCartData?.cartItems.map((element,index)=>{
    return <CartItem  key={index} itemDetails={element} item_id={element?.id} isCart={true}/>
   })
   }
   </div>
   
   {<Link to={"/"}
   style={{textDecoration:"none",color:"black",
   }}>
    <button  className="buttonStyle remov-btn" style={{backgroundColor:"darkblue" ,fontSize:"20px" ,marginLeft:"520px",marginTop:"100px",width:"200px"} } >See More</button>
   </Link>  
    }


    </div> 
 )
}

export default Cart;