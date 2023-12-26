import React from "react";
import "./footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ReactComponent as ExampleLogo } from "../Images/Example Logo.svg";
const Footer = () => {

  // to guess the year
  const currentYear=new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-section">

 
            <div className="col-md-12 d-flex grid gap-5" style={{width:'80vw'}}>
              <div className="d-flex justify-content-start flex-column align-items-center col-md-4 grid gap-3" >
 <div className="d-flex align-items-center col-md-12">
 <ExampleLogo/><span style={{fontSize:'25px',fontWeight:'bold'}}>Homely</span>
 </div>

                
                  <div className="description1">
                  Home Pro is your premier destination for top-notch smart home service and repair. 
                  </div>
            
           
              </div>
              <div className="d-flex justify-content-center col-md-4">
                <div className="footer-links-column col-md-6">
                  <div className="product">Company</div>
                  <div className="footer-links">
                    <div className="button6">
                      <div className="button7">About us</div>
                    </div>
                    <div className="button6">
                      <div className="button7">Services</div>
                    </div>
                    <div className="button6">
                      <div className="button7">Our Blog</div>
                    </div>
                 
                  </div>
                </div>
                <div className="footer-links-column col-md-6">
                  <div className="product">Legal</div>
                  <div className="footer-links">
                    <div className="button6">
                      <div className="button7">Terms</div>
                    </div>
                    <div className="button6">
                      <div className="button7">Privacy</div>
                    </div>
                    <div className="button12">
                      <div className="button7">Cookies</div>
                    </div>
                    <div className="button12">
                      <div className="button7">Blog</div>
                    </div>
                    <div className="button12">
                      <div className="button7">Contact</div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="d-flex justify-content-center align-items-start col-md-4">
                <div className="d-flex justify-content-evenly align-items-center col-md-6">
      
                   <i className="bi bi-facebook fs-4"></i>
                   <i className="bi bi-instagram fs-4"></i>
                   <i className="bi bi-twitter-x fs-4"></i>
                   <i className="bi bi-linkedin fs-4"></i>
           
                </div>
             
              
              </div>
            </div>
            <div className="divider"style={{}} />
            <div className="bottom-info">
              <div className="whitespace-ui-">
                &copy; {currentYear} Homely - All rights reserved
              </div>
            
            </div>
   
  
      </div>

    </div>
  );
};

export default Footer;
