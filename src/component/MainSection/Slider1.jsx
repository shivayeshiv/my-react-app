import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
const Slider1 = () => {
  return (
    <div>
      <Carousel className='image1'>
      <Carousel.Item className='d-flex justify-content-center rounded'>
        <img className="d-block " src={img1} alt="Slide 1"  />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block" src={img2} alt="Slide 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block " src={img3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider1