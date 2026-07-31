import React from 'react'
import img1 from "../../assets/images/21.jpg"
const Footer = () => {
  return (
    <div>
        <hr />
        <div className="footer-fluid">
            <div className="row">
                 <div className="col-md-6">
                    <img src={img1} alt="" />
                </div>      
                <div className="col-md-6">
                    <h2>Address: </h2>
                    <p>203,Rujuta Complex Nachiket Park, Baner Rd, Pune, Maharashtra 411045</p>
                 
                     <iframe className='iframee'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.8174936627!2d73.800644!3d18.553543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf26ab62f593%3A0xc7fb09072baa1470!2sSara%20Plast%20Pvt.%20Ltd.%20%7C%20Mobile%20Toilet%20Rental%20Service!5e0!3m2!1sen!2sin!4v1785486460130!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Sara Plast Location"
                    ></iframe>
                       <div>
                        
                        <h2>Email:<a href="">customercare@3sindia.com</a> </h2>
                        <h2>Contacts: </h2>
                        <p><i class="bi bi-telephone-forward-fill"></i> <a href=""> 1800 209 3450</a></p>
                        <p><i class="bi bi-telephone-forward-fill"></i> <a href="">+91 9823074747</a> </p>
                    </div>
                </div> 
                          
            </div>
        </div>
        <div className="media-fluid ">
            <div className="col-md-12">
                <div className='hi d-flex'>
              <h2><i class="bi bi-instagram"></i></h2>
              <h2><i class="bi bi-twitter"></i> </h2>
              <h2><i class="bi bi-youtube"></i></h2>
              <h2><i class="bi bi-facebook"></i></h2>
              <h2><i class="bi bi-linkedin"></i></h2>  
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer