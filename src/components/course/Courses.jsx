import React, { useContext } from 'react'
import './Courses.css'
import Coursedata from './courseData.js'
import cartContext from '../../context/CartContext'


const Courses = () => {
      const incr = useContext(cartContext);





  return (
    <div>
      <div className="course_heading">
        <h1> Featured Courses </h1>
        <button> Browse All <i class="fa-solid fa-right-to-bracket"></i>  </button>
      </div>

      <div className="allcoures">

            {

              Coursedata.map((ele,index,arr)=>{
                return(

                <div className="courses">
                <img src={ele.courseimg} alt="course" />
                <div className="rating">
                     <div className="admin_name">
                       <img src={ele.authorimg} alt="course" />
                       <p> {ele.authorName}  </p>
                     </div>
                     
                     <div className="star_rating">
                       <span> {ele.courserating}   </span>
                       <span>  
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       
                       </span>
                     </div>
   
                </div>
   
             <div className="course_desc">
                <p> {ele.coursedecr}  </p>
                </div>
   
                <div className="coures_time">
                  <div className="times">
                    yy<span><i class="fa-solid fa-stopwatch"></i> {ele.coursehrs}   </span>
                  </div>
   
                  <div className="course_price">
                    <span> {ele.couresprice}  </span>
                  </div>
                     

                </div> 
                <button className='carts' onClick={incr.demos} > Add to cart </button> 
                </div>

              )})
            }
      </div>
    
    </div>
  )
}

export default Courses