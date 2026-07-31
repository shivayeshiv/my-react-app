import React from 'react'
import img1 from "../../assets/images/23.png"
const Login = () => {
  return (
    <div>
        <hr />
        <div className="from-fluid" id='Shiv'>
            <div className="row">
                <div className="col-md-7 hl" >
                    <form action="">
                        <h1 className='text-center m-4 '>REQUEST FROM</h1>
                        <div className='Name'>
                        <input type="text" placeholder='Name' />
                        <input type="email" name="Email" id="" placeholder='Email Id' />
                        </div>
                        <div className='details'>
                            <input type="number" name="" id="" Phone No placeholder='Require of Toilet' />
                            <input type="text" placeholder='city' />
                        </div>
                        <input className='Hlo' type="text" placeholder='Enter the Require of NO Toilet' />
                        <input className='Hlo' type="text" placeholder='Write a Massage Here' />
                        <button>SUBMITTED</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login