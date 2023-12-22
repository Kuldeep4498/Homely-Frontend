import React from "react";
import { ReactComponent as Icon2 } from "../Images/Icon.svg";
import Rectangle84 from "../Images/Rectangle84.png";
import Rectangle86 from "../Images/Rectangle86.png";
import Rectangle88 from "../Images/Rectangle88.png";
import Rectangle90 from "../Images/Rectangle90.png";
import Rectangle92 from "../Images/Rectangle92.png";

const Divservices = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#E7F0F9' }}>
      <div className="container d-flex col-md-12 justify-content-center " style={{width:'75vw'}}>
        <div className="d-flex col-md-12 flex-column" style={{height:'50rem'}}>
        <div className="row" style={{height:'40em'}}>
          <div className="d-flex col-md-4 flex-column grid gap-3">
            <div className="d-flex col-md-12 flex-column">
                <div className="d-flex ">
                <Icon2 />
              <span style={{
                color: '#2CAAC1',
           
                fontSize: '19.385px',
                fontWeight: 500,
                lineHeight: '24.578px',
              }}>Our Services</span>
                </div>
             
              <div className="d-flex flex-column justify-content-center" style={{
                color: '#002434',
               lineHeight:"60px",
                fontSize: '59.156px',
                fontWeight: 700,
              }}>
                <p style={{ marginBottom: 0 }}>Our </p>
                <p style={{ marginBottom: 0 }}>Services</p>
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
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book <br />
               </p>
            </div>
          </div>

          {/* Cards */}
         
            <div className="col-md-4 mb-4">
              <div className="card" style={{ backgroundImage: `url(${Rectangle84})`, backgroundSize: "cover", overflow: "hidden", borderRadius: '20px' ,height:'100%'}}>
                <div className="card-body p-0 d-flex align-items-end">
                  <div className="d-flex col-md-10 align-items-center justify-content-center"style={{borderRadius: '0px 9px 0px 0px',
background:'#2CAAC1',height:'74px' ,color:'white',fontSize:'20px',fontWeight:700}}>
                    <p className="mb-0">
                    Men salon & spa
                    </p>
                   
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ backgroundImage: `url(${Rectangle86})`, backgroundSize: "cover", overflow: "hidden", borderRadius: '20px',height:'100%' }}>
                <div className="card-body p-0 d-flex align-items-end">
                  <div className="d-flex col-md-10 align-items-center justify-content-center"style={{borderRadius: '0px 9px 0px 0px',
background:'#2CAAC1',height:'74px' ,color:'white',fontSize:'20px',fontWeight:700}}>
                  <p className="mb-0">
                    Men salon & spa
                    </p>
                    </div>
                </div>
              </div>
            </div>
         
          </div>

          <div className="row" style={{height:'40em'}}>
          <div className="col-md-4 mb-4">
              <div className="card" style={{ backgroundImage: `url(${Rectangle88})`, backgroundSize: "cover", overflow: "hidden", borderRadius: '20px',height:'100%' }}>
                <div className="card-body p-0 d-flex align-items-end">
                  <div className="d-flex col-md-10 align-items-center justify-content-center"style={{borderRadius: '0px 9px 0px 0px',
background:'#2CAAC1',height:'74px' ,color:'white',fontSize:'20px',fontWeight:700}}>
                  <p  className="mb-0">
                    Men salon & spa
                    </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ backgroundImage: `url(${Rectangle90})`, backgroundSize: "cover", overflow: "hidden", borderRadius: '20px',height:'100%' }}>
                <div className="card-body p-0 d-flex align-items-end">
                  <div className="d-flex col-md-10 align-items-center justify-content-center"style={{borderRadius: '0px 9px 0px 0px',
background:'#2CAAC1',height:'74px' ,color:'white',fontSize:'20px',fontWeight:700}}>
                  <p className="mb-0">
                    Men salon & spa
                    </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ backgroundImage: `url(${Rectangle92})`, backgroundSize: "cover", overflow: "hidden", borderRadius: '20px',height:'100%' }}>
                <div className="card-body p-0 d-flex align-items-end">
                  <div className="d-flex col-md-10 align-items-center justify-content-center"style={{borderRadius: '0px 9px 0px 0px',
background:'#2CAAC1',height:'74px' ,color:'white',fontSize:'20px',fontWeight:700}}>
                  <p  className="mb-0">
                    Men salon & spa
                    </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divservices;
