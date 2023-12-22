import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./landingPage"; // Assuming Landing is your component
import Service from "./Services/servicesPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;

