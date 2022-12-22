import React from 'react'
import "./LoginPage.css"

const VerificationPage = () => {
  return (
    <div className="LoginPageBody">
      <div className="LoginPageCard">
        <h1>Enter Verification Code</h1>
        <h2>Your verification code has been
            sent to your email address.</h2>
        
        <input id="partitioned" type="text" maxlength="4" />

        <button className="verificationBtn">VERIFY</button>
      <h3>Didn't recieve the OTP code?<br/> Resend OTP</h3>
      </div>
      
    </div>
  )
}

export default VerificationPage;
