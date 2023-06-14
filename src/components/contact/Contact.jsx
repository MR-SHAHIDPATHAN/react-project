import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
    
       <div className="contact">
         <img src="https://assets.nicepagecdn.com/11a8ddce/4584696/images/36496528_bell_notice_alert_new_event_information_sign_or_symbol_website_icon_3d_illustration.png" alt="" />

         <h1>  Contact Us  </h1>
         <h3>   ANY QUESTIONS OR REMARKS? JUST WRITE US A MESSAGE! </h3>


       </div>



       <div className="contact_center">
         <div className="contact_form">


            <div className="email_name">

            <div className="contact_email">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter a valid email address' />
            </div>


            <div className="contact_name">
              <label htmlFor="">Name</label>
              <input type="text" placeholder='Enter Your Name' />
            
            </div>
            </div>




            <div className="checkbox">
                <input type="checkbox" />
                <span> I Accept the </span>
                <span className='terms'> Terms and Services </span>
            </div>
            

            <div className="contact_btns">
              <input type="submit" />
            </div>

         </div>


         </div>
    
    
    
    
    </div>
  )
}

export default Contact