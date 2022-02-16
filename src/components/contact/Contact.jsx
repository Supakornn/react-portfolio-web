import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Addres from "../../img/address.png"

const Contact = () => {
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> +66 95 164 5372
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" /> supakorn0728@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Addres} alt="" className="c-icon" /> Bangkok, Thailand
            </div>
          </div>
        </div>
        <div className="c-right">
          
        </div>
      </div>
    </div>
  )
};

export default Contact;
