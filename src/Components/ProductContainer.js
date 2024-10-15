import React from 'react'
import ItemContainer from './ItemContainer';

const ProductContainer = ({category,category_id}) => {

    
  return (
    <div style={{backgroundColor:"lightgray", height:"300px", width:"100%", marginTop:"20px", display:"flex", flexDirection:"column" ,padding:"1rem", marginBottom:"20px"}}>
        
    <div style={{backgroundColor:"", fontSize:"20px" , padding:"2px", marginLeft:"30px"}}>{category?.name}</div>
    <div style={{background:"black", height:"2px" ,width:"94%" ,marginLeft:"30px", marginTop:"10px"}}></div>

    <ItemContainer productList={Array.isArray(category?.productList)  && category?.productList} category={category} category_id={category_id}/>


    </div>
  )
}

export default ProductContainer