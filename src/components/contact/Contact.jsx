import React, { useRef, useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Addres from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef()
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_t5upydd', 'template_itg13u8', formRef.current, 'user_7AKkwaZZdrbXuQgmd44IB')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
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
          <p className="c-desc">
            <b>Wana talk with me ?</b> Contact me for make friend or works 
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
          </form >
        </div>
      </div>
    </div>
  )
};

export default Contact;
