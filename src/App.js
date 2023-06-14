import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Dsa from './pages/Dsa.jsx'

const App = () => {
  return (
    <div>
    
      <Routes>
        
        <Route  exact  path='/dsa' element={ <Dsa/> }    />
        <Route  exact  path='/' element={ <Home/> }    />
      </Routes>


    
    
    </div>
  )
}

export default App