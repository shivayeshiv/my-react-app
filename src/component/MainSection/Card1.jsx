import React from 'react'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'

const Card1 = () => {
  return (
    <div>
        <hr />
        <div className="card-fluid">
           <div className="row d-flex ">
            <div className="col-md-3">
               <img src={img5} alt="" />
                    <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div className="col-md-3">
                <div className="col-md-3">
               <img src={img6} alt="" />
                    <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default Card1