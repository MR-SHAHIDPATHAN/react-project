import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Dsa from './pages/Dsa.jsx'
import CartData from './context/CartData'


const App = () => {
  return (
    <div>

    <CartData>  
    
  
    
  
      <Routes>
        
        <Route  exact  path='/dsa' element={ <Dsa/> }    />
        <Route  exact  path='/' element={ <Home/> }    />
      </Routes>

 
    
      </CartData>
    </div>
  )
}

export default App