import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="request-fluid" id='login'>
            <form action="">
                <div className="req row">
                    <div className="col-md-6">
                    <h1>Request Demo</h1>
                </div>
                <div className="main">
                    <div>
                    <input type="text" placeholder='Name' />
                    <input type="email" name="Email" id="" placeholder='Email Id' />
                    </div>
                    <div>
                        <input type="number" name="" id="" Phone No />
                        <input type="text" placeholder='city' />
                    </div>
                    <input type="text" placeholder='Enter the Require of NO Toilet' />
                    <input type="text" placeholder='Write a Massage Here' />
                </div>
                </div>

                <div className="col-md-6">
                    hallo
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login