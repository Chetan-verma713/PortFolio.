import React from 'react'
import facebook from "./images/facebook.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import github from "./images/github.png"
import whatsapp from "./images/whatsapp.png"
import "./Contact.css"
function Contact() {
    return (
        <>
            <div className="body_page_6 mb-4 container my-7" id="Contact">  
                <div className="title2">
                        <h1>CONTACT US</h1> 
                </div>
           
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" placeholder='Your Name'/>
                                    </div>
                                </div>
                          
                                <div className="col-md-6 my-3">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" placeholder='Email'/>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="row">
                                <div className="col-md-12 my-3">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder='Subject'/>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="row">
                                <div className="col-md-12 my-3">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='Your Message'></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary" href='#'>Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                   
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-address mt-4 fa-2x"></i>
                                <p>KK. Nagar, Sikandra, Agra, 282007</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+91 7037376727</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>chetan.verma_cs19@gla.ac.in</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container logos">
                <a href="https://www.linkedin.com/in/chetan-verma-b842a31b8/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" srcset="" /></a>
                <a href="https://github.com/Chetan-verma713" target="_blank" rel="noopener noreferrer"><img src={github} alt="" srcset="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100028257044126" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" srcset="" /></a>
                <a href="https://wa.me/qr/U3TDFPFEAZ7EI1" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="" srcset="" /></a>
                <a href="https://www.instagram.com/csoni5586/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" srcset="" /></a>
            </div>

        </>
    )
}

export default Contact
