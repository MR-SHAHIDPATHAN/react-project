import React, { useState } from 'react'
import cartContext  from './CartContext'

const CartData = (props) => {

   const [ cart , setCart ] = useState(0);

     const increment = (()=>{
         setCart(cart + 1)
     })




  return (
    <div>
    
    <cartContext.Provider value={{items:cart,demos:increment}}>

    { props.children}
    
    </cartContext.Provider>
    
    
    
    </div>
  )
}

export default CartData