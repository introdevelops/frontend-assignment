import React,{useState,useEffect} from 'react'
import ProductContainer from './ProductContainer'
import { products } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { getCart } from '../Utils/cartSlice';


const ProductsPage = () => {
    const [categories,setCategories]=useState([]);
    const dispatch = useDispatch();
    
  
    
    
    const getCategories=()=>{

        setCategories([...products?.data]);
    }

    const handleCart=()=>{
        const currentState=JSON.parse(window.localStorage.getItem("cart"));
        
        dispatch(getCart(currentState));


    }

    useEffect(()=>{
        getCategories();
        handleCart();
    },[])


  return (
    <div style={{color:"black", backgroundColor:"white" , height:"100%" , width:"100%",display:"flex", flexDirection:"column",overflow:"hidden" ,fontSize:"20px" }}>
    <span style={{marginLeft:"45px",marginTop:"20px",fontSize:"40px"}}>Products:</span>
    
   
   {categories &&  categories.map((element,index)=>{
     return <ProductContainer key={index} category={element} category_id={index+1}/>
   }) 

     }
    
    </div>
  )
}

export default ProductsPage