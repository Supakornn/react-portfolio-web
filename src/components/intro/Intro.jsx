import React from 'react'
import "./intro.css"
import Me from "../../img/pro.png"

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Supakorn</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">16 Years old</div>
                            <div className="i-title-item">interest in Backend Developer</div>
                            <div className="i-title-item">From Thailand</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        My name is Supakorn Ieamgomol, Nickename Gap, Age 16, 
                        Interest in Backend Developer
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro