import React from 'react'

function Navbar() {
  return (
      <div className="nav-fluid">
        <div className="row">
          <div className="col-md-4 ">
            <div>
            <h4><i class="bi bi-geo-alt-fill"></i></h4>
            </div>
            <div>
            <a href="">Pune: Mumbai</a>
            </div>
          </div>  
          <div className="col-md-8 d-flex">
            <div className="row">
              <div className='d-flex'>
            <a href="#abouting">Contact</a>
            <a href="">Career</a>
            <a href="">FAQs</a>
            </div>
            </div>
            <div className='d-flex'>
              <h2><i class="bi bi-instagram"></i></h2>
              <h2><i class="bi bi-twitter"></i> </h2>
              <h2><i class="bi bi-youtube"></i></h2>
              <h2><i class="bi bi-facebook"></i></h2>
              <h2><i class="bi bi-linkedin"></i></h2>  
            </div>
          </div>

        </div>
      </div>
  );
}

export default Navbar