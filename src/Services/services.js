import React, { useState, useEffect } from "react";
import { ReactComponent as Icon2 } from "../Images/Icon.svg";
import Rectangle84 from "../Images/Rectangle84.png";
import Rectangle86 from "../Images/Rectangle86.png";
import Rectangle88 from "../Images/Rectangle88.png";
import Rectangle90 from "../Images/Rectangle90.png";
import Rectangle92 from "../Images/Rectangle92.png";
import { Card, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import "./services.css";
import axios from 'axios';

const Divservices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsData, setCardsData] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (index) => {
    setSelectedService(cardsData[index]);
  };

  const handleCloseDialog = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/homely-services");
        setCardsData(response.data);
        const firstService = response.data;
        if (firstService.id) {
          localStorage.setItem('selectedServiceId', firstService.id);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const renderCard = (index, imageUrl) => {
    const isHovered = hoveredCard === index;
    const card = cardsData[index];

    if (!card || !card.serviceName) {
      return null;
    }

    return (
      <div key={index} className="col-md-4 mb-4" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
        <Card onClick={() => handleCardClick(index)} style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}>
          <CardMedia component="img" height="190" image={imageUrl} />
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
                  Explore a world of exceptional services at Homely. From Plumbing to Beauty service, we redefine excellence.
                </p>
              </div>
            </div>
            {renderCard(1, Rectangle92)}
            {renderCard(2, Rectangle84)}
          </div>
          <div className="row slide-in-right" style={{ height: '40em' }}>
            {renderCard(3, Rectangle86)}
            {renderCard(4, Rectangle88)}
            {renderCard(5, Rectangle90)}
          </div>
        </div>
      </div>

      {/* Dialog for displaying service details */}
      <Dialog open={selectedService !== null} onClose={handleCloseDialog}>
        <DialogTitle><h5>{selectedService?.serviceName}</h5></DialogTitle>
        <DialogContent>
  <div className="d-flex flex-column">
    <div className="d-flex col-md-12 w-100">
      <img src={selectedService?.imgUrl} alt={selectedService?.serviceName} style={{ width: '100%', height: '200px' }} />
    </div>
    <div>
      <Typography variant="h6">{selectedService?.description}</Typography>
    </div>

    {/* Map through the data and render cards inside the dialog */}
    <div className="d-flex flex-wrap col-md-12  mt-4">
      {cardsData.map((service, index) => (
        <Card key={index} style={{ margin: '8px',width:'100%', textAlign: 'center' }}>
          <div className="col-md-12 d-flex">
          <div className="col-md-3">
          <CardMedia component="img" height="120" image={service.imgUrl} />
          </div>
        
          <div className="d-flex col-md-9 flex-column align-items-center justify-content-center grid gap-2" >
            <div className="px-2 d-flex col-md-12 align-items-center">
            <Typography variant="body1" className="mb-0 fw-bold fs-5">
              {service.serviceName}
            </Typography>
            </div>
         
            <div className="px-2 d-flex col-md-12 align-items-center">
            <Typography variant="body2">{service.description}</Typography>
          </div>
          <div className="d-flex col-md-12 justify-content-between">
            <div className=" px-4 col-md-4 d-flex  align-items-center">
            <Typography variant="body1" className="mb-0 fw-bold fs-5">
            ₹ {service.price}
            </Typography>
            </div>
     <div className="col-md-4 d-flex justify-content-center ">
     <Button style={{backgroundColor:'deepskyblue',color:'white'}}>
              Add
            </Button>
     </div>
    
          </div>
          </div>
          </div>
      
         
        </Card>
      ))}
    </div>
  </div>
</DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Divservices;
