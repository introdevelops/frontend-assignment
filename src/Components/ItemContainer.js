import React from 'react'
import CartItem from './CartItem';

const ItemContainer = ({productList,category_id}) => {
    
  return (

    <div style={{backgroundColor:"", height:"90%", width:"100%", marginTop:"10px", display:"flex", flexDirection:"row" ,padding:"1rem", overflowX:"auto", overflowY:"hidden", }}>
    
       {productList && productList.map((element,index)=>{
        return <CartItem key={index} itemDetails={element} item_id={parseInt(category_id+""+(index+1))}/>
       })  } 

    

    </div>
    
  )
}

export default ItemContainer;