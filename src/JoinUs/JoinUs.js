import React, { useState } from "react";
import { ReactComponent as ExampleLogo } from "../Images/Example Logo.svg";
import Background from "../Images/payment.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from "../navbar";
import Footer from "../Globalcomponent/footer";
import ApplicationImage from "../Images/partner_hero.png"
const ApplicationComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: parseInt(localStorage.getItem('userId'), 10) || 0,
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    aadharNumber: "",
    panNumber: "",
    documentData: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDocumentChange = (e) => {
    const { files } = e.target;
    const documentData = Array.from(files).map(file => file.name);
    setFormData((prevData) => ({
      ...prevData,
      documentData,
    }));
  };

  const isFormValid = () => {
    // Add validation logic here if needed
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/applications",
        formData
      );

      if (response.data.success) {
        console.log("Application submitted successfully");
        toast.success('Application has been submitted!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        // Redirect or handle success as needed
        navigate("/success");
      } else {
        toast.error(response.data.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error.message);
    }
  };

  return (
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
    <div className="container-fluid d-flex justify-content-center  col-md-12" style={{backgroundColor:'#E1F5F5'}}>
        <div className="d-flex col-md-7 justify-content-evenly align-items-center flex-column px-3" > 
<div className="d-flex col-md-12 justify-content-center flex-column px-3 grid gap-2">
<div>
<h1>Earn More. Earn Respect. Safety Ensured.</h1>
</div>
<div>
<h5 style={{color:'lightgray'}}>
Join 40,000+ partners across India, USA, Singapore, UAE and many more
</h5>
</div>
</div>
      <div className="d-flex col-md-12 justify-content-center align-items-center flex-column px-3 ">
<div>
 <ApplicationComponent/>  
</div>
      </div>
 

        </div>
      <div class=" d-flex py-5 align-items-center justify-content-center col-md-5" >
        <div class=" p-4 border-2 bg-white" style={{ borderRadius: "15px" }}>
          <div>
            <p class="fw-bold fs-5">Application Form</p>
            <p class="dis mb-3 fs-6">
              Complete your application by providing the required details
            </p>
          </div>
          <div className="ApplicationComponent">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  First Name<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter First Name..."
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  Last Name<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter Last Name..."
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  Email<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter Email..."
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  Phone Number<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter Phone Number..."
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  Aadhar Number<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter Aadhar Number..."
                  type="text"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  PAN Number<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter PAN Number..."
                  type="text"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  Document Data<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  type="file"
                  name="documentData"
                  multiple
                  onChange={handleDocumentChange}
                  required
                />
              </div>

              <div class="d-flex align-items-center justify-content-between fs-6">
                <p class="fw-bold mb-0">Submit Application </p>
                <Button
                  type="submit"
                  class="btn btn-info btn-lg btn-rounded d-flex align-items-center"
                  onClick={handleSubmit}
                >
                  <i class="fas fa-arrow-right" style={{ color: "white" }}></i>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
};

export default ApplicationComponent;
