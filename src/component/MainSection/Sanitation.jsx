import React from 'react'
import logo1 from "../../assets/images/10.png"
import logo2 from "../../assets/images/11.png"
import logo3 from "../../assets/images/12.png"
const Sanitation = () => {
  return (
    <div>
        <div className="Sani-fluid">
            <div className="row">
                <div className="col-md-6">
                    <p className='para0'>Find Reliable Sanitation Solutions Tailored to You!</p>
                    <h2>Our Smart Sanitation Services For Events, Construction Sites, and Public Spaces!</h2>
                </div>
                <div className="col-md-6">
                    <div className="para1">
                        At Sara Plast Pvt Ltd, we are redefining hygiene and sanitation standards across India with our cutting-edge portable toilets and smart waste management solutions. With a strong commitment to sustainability and innovation, we support a cleaner and healthier environment. We serve diverse industries — from construction to large-scale public events — with over 18,000+ portable units and a growing fleet. Our professionally managed team ensures timely servicing, cleanliness, and seamless setup, keeping your site efficient and compliant.
                    </div>
                    <div className="para2">
                        Our under-construction facility, with more than 6,000 employees, will carry out all essential operations daily to support our economy, including collection, recycling, and treatment.
                    </div>
                </div>
            </div> 
        </div>
        <div className="al-fluid bg-light">
            <div className="row" id='Kumar1'>
                <div className="w col-md-3">
                     <img src={logo1} alt="" />
                    <h3>Morden Equipments</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam provident quasi iure mollitia, aut vel voluptate enim tempore laboriosam esse culpa ducimus perferendis velit impedit aliquam recusandae ipsam placeat.</p>
                    <button type="button">Explore<i class="bi bi-arrow-up-right"></i></button>
                </div>
                <div className="w col-md-3">
               <img src={logo2} alt="" />
                    <h3>Automate Technology</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam provident quasi iure mollitia, aut vel voluptate enim tempore laboriosam esse culpa ducimus perferendis velit impedit aliquam recusandae ipsam placeat.</p>
                    <button type="button">Explore<i class="bi bi-arrow-up-right"></i></button>

                </div>
                <div className="w col-md-3">
                   <img src={logo3} alt="" />
                    <h3>Height Quility Product</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aperiam provident quasi iure mollitia, aut vel voluptate enim tempore laboriosam esse culpa ducimus perferendis velit impedit aliquam recusandae ipsam placeat.</p>
                    <button type="button">Explore<i class="bi bi-arrow-up-right"></i></button>
                </div>
            </div>
                
        </div>
    </div> 
  )
}

export default Sanitation