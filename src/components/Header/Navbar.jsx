import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    
      <div className="parent">
       <div className="logo">
         <p> <i class="fa-solid fa-code"></i>  CODDING MASTER </p>
       </div>


       
       <div className="menus">

     
         <div className="all_menu menu_one">
         <i class="fa-solid fa-house"></i>
            <span> Coures</span>
         </div>
      

         <Link to="/dsa">  
         <div className="all_menu menu_two">
         <i class="fa-solid fa-book"></i>
               <span> DSA</span>
         </div> 
         </Link>



         <div className="all_menu menu_three">
          <i class="fa-brands fa-slack"></i>
            <span> Coures</span>
         </div>

         <div className="all_menu menu_four">
         <i class="fa-solid fa-clipboard"></i>
            <span> Coures</span>
         </div>

         <div className="all_menu menu_four">
         <i class="fa-solid fa-clipboard"></i>
            <span> Coures</span>
         </div>

         <div className="all_menu menu_four">
         <i class="fa-solid fa-clipboard"></i>
            <span> Coures</span>
         </div>


            



       </div>
       <div className="right">
          <button> Register</button>
          <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
       </div>
      
      </div>
    
    </div>
  )
}

export default Navbar