import React from "react";
import "./about.css"

const About = () => {
  return (
  <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img src="https://i.pinimg.com/564x/6f/91/57/6f9157c963f8ab510226542d7884925e.jpg" alt="" className="a-img" />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        Name : Supakorn Ieamgomol<br />Nickname : GAP<br /> Age : 16 years old<br />From : Thailand<br />Funfact : Yeji itzy  so cute
      </p>
      <hr />
      <p className="a-desc">
        I love to coding, I'm interest in Backend Developer, My hobby is watch anime or series <br /> I love to listing music all the time
      </p>
      <div className="a-award">
        <img src="" alt="" className="a-award-img" />
      </div>
    </div>
  </div>
  );
};

export default About;
