import React from 'react'
import './Categories.css'
import CategoriesData from './CategoriesData.js'


const Categories = () => {
   

  return (
    <div>
    <div className="cate_header">
        <h1> Trending Categories  </h1>
        <button> Browse All <i class="fa-solid fa-right-to-bracket"></i>  </button>
    </div>

    <div className="all_cate">


        {
          CategoriesData.map((ele,index,arr)=>{
             return(
                 
              <div className="cate cate_1">
              <i class="fa-solid fa-feather-pointed"></i>
                <span> {ele.categoriesTitle}  </span>
                <span> {ele.courseNumbers} </span>
              </div>

             )

          

          })
          
        }


     

   

 </div>



 

    </div>
    
 
  )
}

export default Categories;