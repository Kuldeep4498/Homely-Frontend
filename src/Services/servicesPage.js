import React from "react";
import Divservices from "./services"
import { Navbar } from "../navbar";
import { ReactComponent as ExampleLogo } from "../Images/Example Logo.svg";
import Servicecard from "./serviceCard";
const servicespage = () =>{
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
    <div className="container-fluid min-vh-100">
<Divservices/>
<Servicecard/>
    </div>
    </>
)
}
export default servicespage;