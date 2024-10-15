import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart ,removeFromCart} from '../Utils/cartSlice';



const CartItem = ({itemDetails,item_id}) => {
    

    const dispatch = useDispatch();
    
    

    const handleAddToCart = ()=>{
        dispatch(addToCart({...itemDetails,id:item_id,quantity:1}));
    }

    const handleRemoveFromCart = () =>{
        dispatch(removeFromCart({...itemDetails,id:item_id}));
    }



  return (<>
  {itemDetails && <div style={{backgroundColor:"white", minWidth:"250px", width:"250px",  height:"230px", marginLeft:"1rem", marginBottom:"1rem",display:"flex", flexDirection:"column" , justifyContent:"space-around",  border:"black", borderRadius:"7px" }}>
   
   <div style={{width:"100%",marginLeft:"1rem"}}>
   <div style={{backgroundColor:"", padding:"5px" ,margin:"0.6rem", width:"60%", fontSize:"18px"}}>Name:  {itemDetails?.name}</div>

   <div style={{backgroundColor:"", padding:"5px" ,margin:"0.6rem", width:"60%" , fontSize:"18px"}}>Price: {itemDetails?.price}</div>
   </div>


    <div style={{ width:"100%",}}>
    <button  className="buttonStyle" onClick={handleAddToCart}>
     Add To Cart
    </button>
    <button  className='buttonStyle remove-btn' onClick={handleRemoveFromCart}>
     Remove From Cart
    </button>
    </div>
    
    </div>}
 </> )
}


export default CartItem;