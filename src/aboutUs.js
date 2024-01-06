import React, { useEffect } from 'react';
import { Navbar } from "./navbar";
import Footer from "./Globalcomponent/footer";
import { ReactComponent as ExampleLogo } from "./Images/Example Logo.svg";
import { ReactComponent as Icon2 } from "./Images/Icon.svg";
import { ReactComponent as Tick } from "./Images/tick.svg.svg";
import about from "./Images/about-three-imag-1.png.png";
import about2 from "./Images/about-three-shape1.png.png";
import "./aboutUs.css"
import Button from '@mui/material/Button';
const AboutUs = () =>{

    useEffect(() => {
        const images = document.querySelectorAll('.slide-in');
        images.forEach(image => {
          image.classList.add('slide');
        });
      }, []);
return(
    <>
      <Navbar
    className="navbar-v col-md-12"
    divClassName="navbar-v1"
    divClassName1="navbar-v1"
    divClassNameOverride="navbar-v1"
    hasDiv={false}
    icon={<ExampleLogo className="example-logo-instance" />}
    size="dekstop"
    text="Login"
  />
 <div
        className="container d-flex justify-content-center"
        style={{ boxSizing: "border-box" }}
      >
        <div className="col-md-12 d-flex justify-content-center container-fluid grid gap-3" style={{height:'40rem'}}>
        <div className="box-1 user col-md-6" style={{ position: 'relative' }}>
      <div className="slide-container top">
        <img
          src={about2}
          alt="About2 Image"
          className="slide-in"
          style={{ width: '470px', height: '500px' }}
        />
      </div>
      <div className="slide-container bottom">
        <img
          src={about}
          alt="About Image"
          className="slide-in"
          style={{ width: '470px', height: '500px' }}
        />
      </div>
    </div>


          <div class="box-2 d-flex justify-content-center align-items-center col-md-6">
            <div class="box-inner-2 p-4 border-2 d-flex flex-column grid gap-3">
            <div className="d-flex col-md-12 flex-column grid gap-3">
            <div className="d-flex grid gap-2 col-md-12 flex-column">
                <div className="d-flex ">
                <Icon2 />
              <span style={{
                color: '#2CAAC1',
           
                fontSize: '19.385px',
                fontWeight: 500,
                lineHeight: '24.578px',
              }}>About Us</span>
                </div>
             
              <div className="d-flex flex-column justify-content-center" style={{
                color: '#002434',
               lineHeight:"40px",
                fontSize: '40px',
                fontWeight: 700,
              }}>
                <p style={{ marginBottom: 0 }}>Best & Quality  Services Providers </p>
        
              </div>
            </div>
            <div className="d-flex col-md-12 justify-content-center flex-column" style={{
              color: '#555',
              fontFamily: 'Roboto',
              fontSize: '16.385px',
              fontWeight: 400,
              lineHeight:'30px'
            }}>
              <p className="mb-0">
              Discover excellence in every service with our commitment to being the best and providing top-quality solutions. At Homely, we pride ourselves on being the go-to service providers that prioritize your satisfaction. Our skilled professionals are dedicated to delivering services that exceed expectations, ensuring every task is executed with precision and care. Experience the pinnacle of service quality as we strive to set new standards in reliability, efficiency, and customer satisfaction. Choose us for unparalleled service excellence – where your needs are met with the best and quality is never compromised.
               </p>
            </div>
          </div>
          <div className="d-flex flex-column grid gap-3">
            <div>
            <Tick />
              <span style={{
                color: '#002434',
           
                fontSize: '17.385px',
                fontWeight: 500,
                lineHeight: '24.578px',
              }}>First Class Quality Service at Affordable Prices</span>   
            </div>
        <div>
        <Tick />
              <span style={{
                color: '#002434',
           
                fontSize: '17.385px',
                fontWeight: 500,
                lineHeight: '24.578px',
              }}>First Class Quality Service at Affordable Prices</span>
        </div>


                </div>
                <div className='d-flex  justify-content-between'>
<div className='d-flex col-md-4 '>
    <Button style={{borderRadius: '30px',
background: '#1F3584',color:'white',width:'100%'}}>
        Learn More
    </Button>
</div>
<div className='d-flex flex-column col-md-4'>
<p className='mb-0' style={{fontSize:'12px'}}>Need Help ? Contact Number</p>
<p className='mb-0' style={{fontWeight:'bold'}}>(808) 555-0111</p>
</div>
                </div>
            </div>
          </div>
        </div>
      </div>
 <Footer/>
 </>  
)
}
export default AboutUs;