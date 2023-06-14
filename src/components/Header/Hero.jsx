import React from 'react'
import './Hero.css'
import heroimg from './../../images/hero.png'

const Hero = () => {
  return (
    <div>
    
      <div className="hero_parent">
        <div className="hero_one">
        <h1> Better Solutions For Your <br /> Placement Journey </h1>
        

           <div className="codding_imgs">
            <img className="rotate-90-cw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
            <img className="rotate-90-cw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
            <img className="rotate-90-cw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
            <img className="rotate-90-cw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
            <img className="rotate-90-cw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
           </div>

           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda officiis temporibus repellat odit ullam! Quam aliquam explicabo nihil totam voluptate iure quis vitae mollitia! Repellat aliquam incidunt sapiente ducimus eveniet.</p>

           <div className="hero_btns">
              <button>   <i class="fa-solid fa-play"></i> Start </button>
              <button> Register </button>
           </div>
        
        </div>
        <div className="hero_two">
           <img src={heroimg} alt="" />
        </div>
        
      </div>
    
    
    </div>
  )
}

export default Hero