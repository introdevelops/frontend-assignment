import { createSlice } from "@reduxjs/toolkit"



const cart= createSlice({

    name:"cartSlice",
    initialState:{
        cartItems:[],
        totalQuantity:0,
       
    },
    reducers:{

        addToCart:(state,action)=>{

      const current_item=action.payload;

     
        const  itemFound=state.cartItems.find((element)=>{
        return element.id === current_item.id;        
       });
                
                if(itemFound){
                itemFound.quantity=itemFound.quantity+current_item.quantity;
                
                state.totalQuantity++;

                window.localStorage.setItem("cart",JSON.stringify(state));
                console.log("Product Added to the Cart: ", JSON.stringify(current_item));
                console.log(JSON.stringify(state.cartItems));
              
           }

      else{
        state.cartItems.push(action.payload);
        state.totalQuantity++;
        window.localStorage.setItem("cart",JSON.stringify(state));

        console.log("Product Added to the Cart: ", JSON.stringify(current_item));
        console.log(JSON.stringify(state.cartItems));
       

       }
          
        },

        removeFromCart:(state,action)=>{
         const currentItem=action.payload;

         const itemFound=state.cartItems.find((element)=>{
                return element.id===currentItem.id;
         })

         if(itemFound){
            state.totalQuantity=state.totalQuantity-currentItem.quantity;
            
           
            if(itemFound?.quantity>1){
                itemFound.quantity=itemFound.quantity-currentItem.quantity;
                
                window.localStorage.setItem("cart",JSON.stringify(state));
            }else{
               let filteredArray=[...state.cartItems.filter((element)=>{
                    return element.id!==currentItem.id;
                })];
                state.cartItems=[...filteredArray];
                window.localStorage.setItem("cart",JSON.stringify(state));
            }
           
               
           
           
           
            console.log("Product Removed From the Cart : ",JSON.stringify(currentItem));
            console.log(JSON.stringify(state.cartItems));
            
            
         }
        else{ console.log("This Item is not in the cart!!");}
         window.localStorage.setItem("cart",JSON.stringify(state));
        },

        getCart:(state,action)=>{
           
            
            if(action.payload){
            state.cartItems=[...action.payload?.cartItems];
            state.totalQuantity=action.payload?.totalQuantity;
            }
        },

      



    }


}
)

export  const {addToCart,removeFromCart,getCart,toggleIsCart} = cart.actions;

export default cart.reducer;
