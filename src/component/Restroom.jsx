import React from 'react'
import img1 from "../assets/images/19.png"
import img2 from "../assets/images/20.jpg"

const Restroom = () => {
  return (
    <div>
        <div className="rest-fluid">
            <div className="no col-md-12">
                <div className="mn">
                        <div className="h1">
                        <h1 className='text-center'>How many restrooms do you need</h1>
                        </div>

                        <div className="inputdiv">       
                       <input type="radio" name="course" value="react" checked></input>
                        <label htmlFor="">Contrauction Site</label>
                       <input type="radio" name="course" value=""></input>
                       <label htmlFor="">Events</label>
                       
                       <select name="" className='Kumar11'>
                            <option value="">0</option>
                            <option value="delhi">5</option>
                            <option value="mumbai">25</option>
                            <option value="lucknow">50</option>
                            <option value="jaipur">75</option>
                            <option value="jaipur">100</option>
                            <option value="jaipur">150</option>
                            <option value="jaipur">200</option>
                        </select>
                        </div>                 

                </div>
            </div>
             <div className="massage row">
                <h1>A Message from Our Visionary Founder </h1>
                <div className="msg col-md-7">
                    <div className="row">
                        <div className="head col-md-6">
                            <img src={img1} alt="" />
                            <h3>Mr. Rajeev Kher</h3>
                            <h5>Founder And Chairman</h5>
                        </div>
                        <div className="head1 col-md-6">
                            <h2>Welcome to Sara Plast Pvt. Ltd.</h2>
                            <p>India’s Trusted Partner in Smart Sanitation Solutions With a robust network spanning the nation, Sara Plast Pvt. Ltd. proudly leads the way in portable sanitation and hygiene management. Whether it's a major event, infrastructure project or emergency response — we’re here to provide reliable, eco-friendly sanitation tailored to your needs.</p>
                            <p className='para1'>As pioneers in mobile toilets and smart hygiene infrastructure, we’re committed to delivering clean, safe, and sustainable solutions that enhance public health and protect the environment. From a single unit to a large-scale fleet, we ensure sanitation is always accessible, efficient, and future-ready.

</p>
                        <button>More about Us</button>

                        </div>
                    </div>
                </div>
                <div className="msg1 col-md-5 bg-light">
                    <img src={img2} alt="" />
                </div>  
             </div>
        </div>
    </div>
  )
}

export default Restroom