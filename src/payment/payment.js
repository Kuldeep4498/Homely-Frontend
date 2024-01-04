import React from "react";
import "./payment.css";
import Background from "../Images/payment.jpg";
const Payment = () => {
  return (
<div
        className="container-fluid d-flex justify-content-center"
        style={{ height: "100vh", boxSizing: "border-box" ,backgroundImage: `url(${Background})`, backgroundSize: "cover", overflow: "hidden",backgroundRepeat:'no-repeat' }}
      >
      
          
          <div class="box-2 d-flex justify-content-center align-items-center col-md-6" >
            <div class="box-inner-2 p-4 border-2 bg-white"style={{borderRadius:'15px'}}>
              <div>
                <p class="fw-bold fs-5">Payment Details</p>
                <p class="dis mb-3 fs-6">
                  Complete your purchase by providing your payment details
                </p>
              </div>
              <div className="StripeComponent">
                <form >
                  <div class="mb-3">
                    <p class="dis fw-bold mb-2 fs-6">
                      Email address<span className="text-danger">*</span>
                    </p>
                    <input
                      class="form-control"
                      placeholder="Enter Email address..."
                    
                      type="email"
                    />
                  </div>
                  <div className="text-danger mb-1"> </div>
                  <p class="dis fw-bold mb-2 fs-6">
                    Card details<span className="text-danger">*</span>
                  </p>
                  <input
                      class="form-control"
                      placeholder="Enter Card Number... "
                      type="text"
                    
                    />
                   
                  <div class="my-3 cardname">
                    <p class="dis fw-bold mb-2 fs-6">
                      Cardholder name<span className="text-danger">*</span>
                    </p>{" "}
                    <input
                      class="form-control"
                      placeholder="Enter Cardholder name..."
                      type="text"
                    
                    />
                  </div>
             
                 

                    <div class="d-flex align-items-center justify-content-between  fs-6">
                      <p class="fw-bold mb-0">Total</p>
                   
                      <button type="button" class="btn btn-info btn-lg btn-rounded d-flex align-items-center">
                  <i class="fas fa-arrow-right" style={{color:'white'}}></i>
                </button>
                    </div>
                   
           
                </form>
            
              </div>
            </div>
          </div>
    
      </div>
  );
};

export default Payment;
