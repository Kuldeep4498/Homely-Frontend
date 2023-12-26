import React from "react";
import { Navbar } from "./navbar";
import Footer from "./Globalcomponent/footer";
import { ReactComponent as ExampleLogo } from "./Images/Example Logo.svg";
const AboutUs = () =>{
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
        style={{ height: "95vh", boxSizing: "border-box" }}
      >
        <div className="col-md-12 d-flex justify-content-center container-fluid bg-light">
          <div class="box-1  user  col-md-6">
            <div class="d-flex align-items-center mb-3 col-md-12">
              <img
                
                class="pic rounded-circle"
                alt=""
              />
              <p
                class="ps-2 mb-0 fs-4 "
                style={{ textTransform: "capitalize" }}
              >
               
              </p>
            </div>
            <div class="box-inner-1  ">
              <div class="d-flex  mb-3 userdetails">
              
              </div>
              <div
                id="my"
                class="carousel slide carousel-fade img-details"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#my"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#my"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    {" "}
          
                  </div>
                  <div class="carousel-item">
                    {" "}
            
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#my"
                  data-bs-slide="prev"
                >
                  {" "}
                  <div class="icon">
                    {" "}
                    <span class="fas fa-arrow-left"></span>{" "}
                  </div>{" "}
                  <span class="visually-hidden">Previous</span>{" "}
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#my"
                  data-bs-slide="next"
                >
                  {" "}
                  <div class="icon">
                    {" "}
                    <span class="fas fa-arrow-right"></span>{" "}
                  </div>{" "}
                  <span class="visually-hidden">Next</span>{" "}
                </button>
              </div>
              <div className="d-flex" style={{ height: "27vh" }}>
                <p
                  class=" d-flex align-items center info fs-6"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Indulge in the rich world of premium coffee. Elevate your
                  mornings with our meticulously curated blends, sourced from
                  the finest beans worldwide. Securely proceed to payment and
                  embark on a journey of exceptional flavors. Your delightful
                  coffee experience awaits – brew perfection, sip satisfaction!{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="box-2 d-flex justify-content-center align-items-center col-md-6">
            <div class="box-inner-2 p-4 border-2 bg-white">
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
              
                  <p class="dis fw-bold mb-2 fs-6">
                    Card details<span className="text-danger">*</span>
                  </p>

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
                  <p class="dis fw-bold mb-3 fs-6">
                    Billing address<span className="text-danger">*</span>
                  </p>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    
                  >
                    {" "}
                    <option selected hidden>
                      Country ...
                    </option>{" "}
                    <option value="India">India</option>{" "}
                    <option value="USA">USA</option>{" "}
                    <option value="Brazil">Brazil</option>{" "}
                  </select>
                  <div class="d-flex">
                    {" "}
                    <input
                      class="form-control zip"
                      type="text"
                      placeholder="ZIP"
                    
                    />{" "}
                    <input
                      class="form-control state"
                      type="text"
                      placeholder="State"
                     
                    />
                  </div>
                  <div class="d-flex flex-column dis my-3">
                    {/* <div class="d-flex align-items-center justify-content-between mb-2 fs-6">
                        <p>Subtotal</p>
                        <p>
                         ${cartDetailsData.readOneOrdersnew.productData[0].total_price}
                        </p>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-2 fs-6">
                        <div class="d-flex align-items-center">
                          <p class="pe-2">
                            Discount

                          </p>
                        </div>
                        <p>
                         $5.00
                        </p>
                      </div> */}

                    <div class="d-flex align-items-center justify-content-between mb-2 fs-6">
                      <p class="fw-bold">Total</p>
                     
                    </div>
                    <button
                      class="btn mt-2"
                      style={{ backgroundColor: "deepskyblue", color: "white" }}
                  
                      type="submit"
                     
                    >
                      Pay
                    </button>
                  </div>
                </form>
       
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