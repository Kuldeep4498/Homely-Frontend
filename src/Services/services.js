import React, { useState, useEffect } from "react";
import { ReactComponent as Icon2 } from "../Images/Icon.svg";
import Rectangle84 from "../Images/Rectangle84.png";
import Rectangle86 from "../Images/Rectangle86.png";
import Rectangle88 from "../Images/Rectangle88.png";
import Rectangle90 from "../Images/Rectangle90.png";
import Rectangle92 from "../Images/Rectangle92.png";
import { Card, CardMedia, Typography } from '@mui/material';
import "./services.css";
import axios from 'axios';
const Divservices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/homely-services");
        setCardsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const renderCard = (index, imageUrl) => {
    const isHovered = hoveredCard === index;
    const card = cardsData[index]; // Use the fetched data for the corresponding card


    if (!card || !card.serviceName) {
      // Handle the case where card or card.serviceName is undefined
      return null;
    }
  

    return (
      <div key={index} className="col-md-4 mb-4" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
        <Card
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <CardMedia
            component="img"
            height="190"
            image={imageUrl}
          />
          <div className="d-flex col-md-12 align-items-center justify-content-center" style={{ background: '#2CAAC1', height: '74px', color: 'white', fontSize: '20px', fontWeight: 700 }}>
            <Typography variant="body1" className="mb-0 fw-bold fs-5 ">
              {card.serviceName}
            </Typography>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center " style={{ backgroundColor: '#E7F0F9' }}>
      <div className="d-flex col-md-12 justify-content-center">
        <div className="d-flex col-md-12 flex-column py-5" style={{ height: '40rem', width: '80vw' }}>
          <div className="row slide-in-left" style={{ height: '40em' }}>
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
                  lineHeight: "50px",
                  fontSize: '50px',
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
                lineHeight: '30px'
              }}>
                <p className="mb-0">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                </p>
              </div>
            </div>
            {renderCard(1, Rectangle92)}
            {renderCard(2, Rectangle84)}
            {/* Add more cards with appropriate index and image */}
          </div>
          <div className="row slide-in-right" style={{ height: '40em' }}>
            {renderCard(3, Rectangle86)}
            {renderCard(4, Rectangle88)}
            {renderCard(5, Rectangle90)}
            {/* Add more cards with appropriate index and image */}
          </div>
          {/* ... other content ... */}
        </div>
      </div>
    </div>
  );
};


export default Divservices;
