import React from "react";
import './bestServices.css'; // Import your CSS file
import Rectangle104 from "../Images/Rectangle104.png";
import Rectangle105 from "../Images/Rectangle105.png";
const BestService = () => {
  // Sample data for most booked services
  const mostBookedServices = [
    { id: 1, name: "Service 1", totalBookings: 100, imageUrl: Rectangle105 },
    { id: 2, name: "Service 2", totalBookings: 80, imageUrl: Rectangle104 },
    { id: 3, name: "Service 3", totalBookings: 120, imageUrl: Rectangle105 },
    // Add more services as needed
  ];

  return (
    <div className="best-service-carousel">
      {mostBookedServices.map((service) => (
        <div key={service.id} className="carousel-item">
          <div className="card">
            <img src={service.imageUrl} alt={service.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">Total Bookings: {service.totalBookings}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestService;
