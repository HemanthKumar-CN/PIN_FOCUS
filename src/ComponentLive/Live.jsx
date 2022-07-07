import React, { useState } from 'react'
import Pin from './Pin'

const Live = () => {
    const [otp, setOtp] = useState("")
    // console.log(otp)
  return (
    <div>
        <Pin 
        length={4} 
        setOtpHandler={(value)=> {setOtp(value)}}/>

        <h2>OTP:{otp}</h2>
    </div>
  )
}

export default Live