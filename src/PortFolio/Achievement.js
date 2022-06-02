import React from 'react'
import "./Achievement.css"
import achiev1 from '../PortFolio/images/python.png'
import achiev2 from '../PortFolio/images/java.png'
import achiev3 from '../PortFolio/images/sql_basic.png'
import achiev4 from '../PortFolio/images/sql_intermediate.png'
import achiev5 from '../PortFolio/images/css.png'
import achiev6 from '../PortFolio/images/tech-python.png'
import achiev7 from '../PortFolio/images/tech-web.png'
import achiev8 from '../PortFolio/images/problem-solving-intermediate.png'

function Achievement() {
    return (
        <>
        <div className="body_page_4 container" id="Achievement">
            <div className="title2">
                <h1>ACHIEVEMENTS</h1>
            </div>
            <div className="achievement_box">
                <div className="achievement">
                    <a href="https://www.hackerrank.com/certificates/cbab79dcef21" target="_blank"><img src={achiev1} alt="" /></a>
                </div>
                <div className="achievement">
                    <a href="https://www.hackerrank.com/certificates/da6012aecca4"><img src={achiev2} alt="" /></a>
                </div>
                <div className="achievement">
                    <a href="https://www.hackerrank.com/certificates/cd6836ee0c88"><img src={achiev3} alt="" /></a>
                </div>
                <div className="achievement">
                    <a href="https://www.hackerrank.com/certificates/d35720efa3d4"><img src={achiev5} alt="" /></a>
                </div>
                <div className="achievement">
                    <img src={achiev8} alt="" />
                </div>
                <div className="achievement">
                    <a href="https://www.hackerrank.com/certificates/b2cdf84bc0ce"><img src={achiev4} alt="" /></a>
                </div>
                <div className="achievement">
                    <img src={achiev6} alt="" />
                </div>
                <div className="achievement">
                    <img src={achiev7} alt="" />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Achievement
