import React from 'react'
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/1.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Slider2 from './Slider1';



const Mainsection = () => {
  return (
    <div>
       <div className="cont-fluid">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-4 " href="">
            <h2>SARA-PLAST Pvt. Ltd.</h2>
          </div>
          <div className="col-md-4" id="menu">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
            ☰ Menu
            </button>

    
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">HOME</h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column gap-3">

          <button className="btn btn-outline-primary">
            Home
          </button>

          <button className="btn btn-outline-primary">
            Company
          </button>

          <button className="btn btn-outline-primary">
            Service
          </button>

          <button className="btn btn-outline-primary">
            Media
          </button>

          <button className="btn btn-outline-primary">
            Contact
          </button>

        </div>
      </div>
   
          </div>
        </div>
       </div>
       <Slider2 />
       <hr />
    </div>
  )
}

export default Mainsection