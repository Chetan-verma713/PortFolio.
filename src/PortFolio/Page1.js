import React from 'react'
import './Page1.css';
import image from '../PortFolio/images/chetan.png'
import resume from '../PortFolio/Chetan Resume.pdf'
export default function Page1() {
    return (
        <>
        <div className="body_page1" id="Home">
            <div className="content">
                <h4><b> HELLO, MY NAME IS </b></h4>
                <h2 className="name"><b> CHETAN </b></h2>
                <h2 className="name"><b> VERMA</b></h2>
                <h4 className="about"> Frontend-Developer/</h4>
                <h4 className="about"> Programmer</h4>
                <hr />
                <h5 >You are most welcome </h5>
                <h5 >in my world.</h5>
                <br />
                <div className="btn_buttons">
                   <a href={resume} download="Chetan Resume"> <button className="buttons" >Download CV</button></a>
                    {/* <button className="buttons">Firstly visit</button> */}
                </div>
            </div>
            <div className="poster">
                <img className="image" src={image}  />
            </div>
        </div>
        </>
    )
}
