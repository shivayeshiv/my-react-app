import React from 'react'
import img1 from "../../src/assets/images/13.jpg"
import img2 from "../../src/assets/images/14.jpg"
import img3 from "../../src/assets/images/15.jpg"
import img4 from "../../src/assets/images/18.jpg"
import img5 from "../../src/assets/images/16.jpg"
import cover from "../assets/images/cover.png"

const OurService = () => {  
  return (
    <div>
        <div className="Our-fluid">
          <div className="first row">
            <div className="card col-md-8">
              <div className="card1 row">
              <h1 className='text-center'>Our Services</h1>

                <div className="col-md-6">  
                    <h2>Standard Portable Toilets</h2>
                    <p>
                      Clean and affordable toilets suitable for construction sites and temporary projects.
                    </p>
                    <img src={img2} alt="" />
                </div>
                 <div className="col-md-6">  
                    <h2>Luxury Portable Toilets</h2>
                    <p>
                      Premium toilets with modern interiors, ideal for weddings, VIP events, and corporate functions.
                    </p>
                    <img src={img3} alt="" />
                </div>
                 <div className="col-md-6">  
                    <h2>Event Toilet Renta</h2>
                    <p>
                     Portable restroom solutions for concerts, festivals, exhibitions, and public gatherings.
                    </p>
                    <img src={img4} alt="" />
                </div>
                 <div className="col-md-6">  
                    <h2>Construction Site Toilets</h2>
                    <p>
                     Durable portable toilets designed for workers at construction and industrial sites
                    </p>
                    <img src={img5} alt="" />
                </div>
               
              </div>
            </div>

            <div className="imge col-md-4">
                <div className="cover img">
                  <img src={cover} alt="" className='cover' />


                </div>
            </div>

          </div>
        </div> 
    </div>
  )
}

export default OurService