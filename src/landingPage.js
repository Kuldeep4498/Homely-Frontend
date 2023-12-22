import React from "react";
import "./landingPage.css";
import { ReactComponent as ExampleLogo } from "./Images/Example Logo.svg";
import { ReactComponent as Ic24Calendar } from "./Images/Ic_24-Calendar.svg";
import { ReactComponent as Ic24Check } from "./Images/Ic_24-Check.svg";
import { ReactComponent as Ic24Clock } from "./Images/Ic_24-Clock.svg";
import { ReactComponent as Ic24Guarantee } from "./Images/Ic_24-Guarantee.svg";
import { ReactComponent as Ic24MapPin } from "./Images/Ic_24-Map-pin.svg";
import { ReactComponent as Decoration } from "./Images/Decoration.svg"
import {ReactComponent as Decoration2 } from "./Images/Decorationright.svg"
import { ReactComponent as Shadow } from "./Images/Shadow.svg";
import beauty from "./Images/beauty.png"
import Image from "./Images/Image.png";
import Image2 from "./Images/Image2.png";
import { Navbar } from "./navbar";
import { TextField, InputAdornment} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";

import { useEffect, useState } from "react";
const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClearInput = () => {
    setSearchTerm("");
    setFilteredOptions([]);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Add animation classes to trigger the animation
    document.getElementById("image1").classList.add("animate-from-left");
    document.getElementById("image2").classList.add("animate-from-right");
  }, []); 

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
    <div
      className="box container-fluid min-vh-100"
      style={{
        backgroundColor: "#142257",
      }}
    >
    
     <div className="d-flex flex-column grid gap-3">
     <div
        className="d-flex align-items-center justify-content-between col-md-12"
        style={{ height: "100vh" }} >
   
    <div id="image1" className="animate-image col-md-2 " style={{ backgroundImage: `url(${Image2})`, backgroundSize: "cover", overflow: "hidden", width: '20vw',backgroundRepeat:'no-repeat',borderRadius:'20px'}}>
  
    </div>
    
  
  <div ClassName="container-fluid d-flex flex-column  justify-content-evenly col-md-8" >
  <div className="content mt-4">
          <div className="text grid gap-4 justify-content-center">
            <div className="col-md-12 d-flex justify-content-center grid gap-3">
              <div className="text-wrapper-3">Maintenances</div>
              <div className="text-2">{""}</div>
              <div className="text-wrapper-3">Repairs</div>
              <div className="text-2">{""}</div>
              <div className="text-wrapper-3">Improvements</div>
            </div>
            <p className="title">
              Revamp your space with massages, plumbing, beauty, and repairs!
            </p>
            <div className="feature">
              <div className="commitment-free">
                <Ic24Check className="icon-instance-node" color="#15B2F5" />
                <div className="element-commitment">
                  100%&nbsp;&nbsp;Commitment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-4 pb-4">
          <TextField
            variant="outlined"
            //   value={searchTerm}
            //   onChange={handleInputChange}
            //   onClick={handelInputClick}
            //   onKeyDown={handleEnterPress}
            //   onBlur={handleInputBlur}
            className=" search-bar-custom"
            placeholder="What are you looking for ?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchTerm ? (
                    <CancelIcon
                      style={{ color: "#3169B7;", cursor: "pointer" }}
                      onClick={handleClearInput}
                    />
                  ) : (
                    <SearchIcon style={{ color: "#3169B7;" }} />
                  )}
                </InputAdornment>
              ),
              style: {
                color: "#3169B7",
                backgroundColor: "white",
                height: "50px",
                width: "33vw",
                borderRadius:'20px'
              },
              classes: {
                root: "white-placeholder",
                input: "custom-placeholder",
              },
            }}
          />
          {isDropdownOpen && (
            <ul
              className="list-group col-md-7 "
              style={{
                position: "absolute",
                zIndex: "1",
                maxheight: "400px",
                overflowY: "auto",
                cursor: "pointer",
                fontSizesize: "15px",
                width: "63.5vw",
              }}
            >
              {filteredOptions.map((option) => (
                <li className="list-group-item" key={option.product_id}>
                  {option.name}, {option.farmer_name}, {option.region_name},{" "}
                  {option.country_name}
                </li>
              ))}
            </ul>
          )}
        </div>
<div className="d-flex justify-content-center mt-4 pt-4">
<div className="highlights grid gap-3 col-md-10">
          <div className="satisfaction grid gap-2 col-md-3">
            <div className="icon">
              <Ic24Guarantee className="icon-instance-node" />
            </div>
            <div className="text-wrapper-4">
              Satisfaction
              <br />
              Guarantee
            </div>
          </div>
          <div className="div-2 grid gap-2 col-md-3">
            <div className="icon">
              <Ic24Clock className="icon-instance-node" color="white" />
            </div>
            <div className="text-wrapper-4">
              24H
              <br />
              Availability
            </div>
          </div>
          <div className="div-2 grid gap-2 col-md-3">
            <div className="icon">
              <Ic24MapPin className="icon-instance-node" color="white" />
            </div>
            <div className="text-wrapper-4">
              Local US
              <br />
              Professional
            </div>
          </div>
          <div className="div-2 grid gap-2 col-md-3">
            <div className="icon">
              <Ic24Calendar className="icon-instance-node" color="white" />
            </div>
            <div className="text-wrapper-5">Flexible Appointments</div>
          </div>
        </div>
</div>
  </div>
  <div id="image2" className="animate-image col-md-2" style={{ backgroundImage: `url(${beauty})`, backgroundSize: "cover", overflow: "hidden", width: '20vw',backgroundRepeat:'no-repeat',borderRadius:'20px'}}>

    </div>
       
       
      </div>
      <div className="col-md-12 d-flex justify-content-between">
            <div  ClassName="col-md-4">
            <Decoration />
            </div >
<div ClassName="col-md-4">
<Decoration2/>
</div>
  
    </div>
     </div>
     
    </div>
    </>
  );
};
export default Landing;
