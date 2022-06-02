import React from 'react'
import './Page2.css'
import about from '../PortFolio/images/about.JPG'

function Page2() {
    return (
        <>
            <div className="body_page_2 container" id="About">
                <div className="title2">
                    <h1>ABOUT ME</h1> 
                </div>
                <div className='about_matter container'>
                    <div className="image_space">
                        <img src={about}  /> 
                    </div>
                    <div className="matter_space">
                        <h3 style={{color:'gray'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rem doloribus sequi ab earum voluptatem. Facilis maxime consectetur laborum repellendus earum, ducimus, cum doloribus sed inventore voluptate porro, nesciunt illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi recusandae harum ut incidunt rem earum sit quidem fugit repudiandae maiores.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2
