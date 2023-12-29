import React, { useEffect } from 'react';
import { Navbar } from "./navbar";
import Footer from "./Globalcomponent/footer";
import { ReactComponent as ExampleLogo } from "./Images/Example Logo.svg";
import { ReactComponent as Icon2 } from "./Images/Icon.svg";
import { ReactComponent as Tick } from "./Images/tick.svg.svg";
import about from "./Images/make-appointment-img.png.png";
import about2 from "./Images/make-appointment-shape.png.png";
import "./aboutUs.css"
import Button from '@mui/material/Button';

const Appointment = () =>{

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
        <div className="box-1 user col-md-7" style={{ position: 'relative' }}>
      <div className="slide-container top">
        <img
          src={about2}
          alt="About2 Image"
          className="slide-in"
          style={{ width: '430px', height: '500px' }}
        />
      </div>
      <div className="slide-container bottom">
        <img
          src={about}
          alt="About Image"
          className="slide-in"
          style={{ width: '430px', height: '500px' }}
        />
      </div>
    </div>


          <div class="box-2 d-flex justify-content-center align-items-center col-md-5">
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
              }}>Make Appointment</span>
                </div>
             
              <div className="d-flex flex-column justify-content-center" style={{
                color: '#002434',
               lineHeight:"40px",
                fontSize: '40px',
                fontWeight: 700,
              }}>
                <p style={{ marginBottom: 0 }}>Schedule A Services </p>
        
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididu
labore et dolore magna aliqua sed do eiusmod temp sit amet voluptatum deleniti atque
eiu corrupti quos dolores et quas molestias excepturi sint occaecati cupio
               </p>
            </div>
          </div>

            <div className='col-md-12 flex-column d-flex grid gap-2'>
                <div className='col-md-12 d-flex grid gap-2'>
                <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Name"
                      
                      />
         
          </div>
          <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Email"
                      
                      />
         
          </div>
                </div>
          
                <div className='col-md-12 d-flex grid gap-2'>
                <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Phone Number"
                      
                      />
         
          </div>
          <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Select Date"
                      
                      />
         
          </div>
                </div>
          <div className='col-md-12 d-flex grid gap-2'>
          <input
                        className="form-control border-secondary"
                        placeholder="Installation"
                      
                      />
         
          </div>
          <div className='col-md-12 d-flex grid gap-2'>
          <textarea
                    className="form-control border-secondary"
                    id="nameInput"
                    placeholder="Message"
                   
                  />
         
          </div>
          <div className='col-md-12 d-flex grid gap-2'>
        <Button style={{borderRadius: '30px',
background: '#1F3584',color:'white',width:'100%'}}> Make an Appointment</Button>
         
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
export default Appointment;