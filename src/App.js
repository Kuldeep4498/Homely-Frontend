import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landingPage"; // Assuming Landing is your component
import Service from "./Services/servicesPage"
import HomeServicesCart from "./Shoppingcart/shoppingItem";
import AboutUs from "./aboutUs";
import Appointment from "./appointment";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Service />} />
        <Route path="/cart" element={<HomeServicesCart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;

