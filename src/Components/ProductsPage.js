import React,{useState,useEffect} from 'react'
import ProductContainer from './ProductContainer'
import { products } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getCart} from '../Utils/cartSlice';
import { Link } from 'react-router-dom';



const ProductsPage = () => {
    const [categories,setCategories]=useState([]);
   
    const totalQuantity=useSelector((store)=>store?.cart?.totalQuantity);
   
    const dispatch = useDispatch();
    
    
    const getCategories=()=>{

        setCategories([...products?.data]);
    }

    const handleCart=()=>{
        let currentState=JSON.parse(window.localStorage.getItem("cart"));
       
        dispatch(getCart(currentState));


    }

    useEffect(()=>{
        getCategories();
        handleCart();
        
    },[])


  return (
    <div style={{color:"black", backgroundColor:"white" , height:"100%" , width:"100%",display:"flex", flexDirection:"column",overflow:"hidden" ,fontSize:"20px" }}>
    <div style={{marginLeft:"45px",marginTop:"20px",fontSize:"40px",backgroundColor:"",display:"flex",flexDirection:"row" ,justifyContent:"space-between"}}>Products:  
        <Link 
        to={"/cart"}
        style={{textDecoration:"none",color:"black",marginRight:"20px"
        }}
        >
        <span style={{marginRight:"10px"}}>
           {<span>({totalQuantity})</span>}
          <i className="ri-shopping-cart-2-line"></i>
          <span>Cart</span>
        </span>
      </Link></div>
   
   
   {categories &&  categories.map((element,index)=>{
     return <ProductContainer key={index} category={element} category_id={index+1} />
   }) 

     }

    
    
    </div>
  )
}

export default ProductsPage