import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import './serviceCard.css'; // Import your CSS file
import Rectangle104 from "../Images/Rectangle104.png";
import Rectangle105 from "../Images/Rectangle105.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
const BestService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/homely-services"); // Replace with your API endpoint
        setCardsData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const showNextCards = () => {
    const nextIndex = currentIndex + cardsPerSlide;
    setCurrentIndex(nextIndex >= cardsData.length ? 0 : nextIndex);
  };

  const showPrevCards = () => {
    const prevIndex = currentIndex - cardsPerSlide;
    setCurrentIndex(prevIndex < 0 ? cardsData.length - cardsPerSlide : prevIndex);
  };

  const handlecart = () =>{
    window.location.href="/cart"
  }

  const renderCards = () => {
    return cardsData.slice(currentIndex, currentIndex + cardsPerSlide).map((card, index) => (
      <CSSTransition
        key={card.id}
        timeout={{ enter: 500, exit: 0 }}
        classNames={{
          enter: index === 0 ? 'card-enter-first' : 'card-enter',
          enterActive: 'card-enter-active',
          exit: 'card-exit',
          exitActive: 'card-exit-active',
        }}
      >
        <Card className="custom-card "style={{width:'26vw',borderRadius:'12px'}}>
          <CardMedia component="img" height="210" image={card.imgUrl} alt={card.title} />
          <CardContent>
            <Typography variant="h6" component="div" style={{fontWeight:600}}>
              {card.serviceName}
            </Typography>
          
            <div className='d-flex justify-content-between'>
            <Typography style={{fontSize:'28px'}}>
            ₹ {card.price}
            </Typography>
            <Button
              variant="contained"
              onClick={handlecart}
              style={{ fontWeight: 600, fontSize: '14px', color: 'white', background: '#2CAAC1', borderRadius: '30px' }}
            >
              Add
            </Button>
            </div>
         
          </CardContent>
        </Card>
      </CSSTransition>
    ));
  };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       showNextCards();
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

  return (
    <div className="container-fluid py-5" style={{ background: 'rgb(231, 240, 249)' }}>

        <div className='d-flex justify-content-center pb-3' style={{fontWeight:'bolder',color:'rgb(0, 36, 52)'}}>
          <h2>Most Booked Services</h2>
        </div>
        <div
          id="carouselExampleIndicators2"
          className="carousel slide position-relative"
          data-ride="carousel"
        >
          <button
            className="btn btn-outline-light mb-3 prev-btn"
            onClick={(e) => {
              e.preventDefault();
              showPrevCards();
            }}
            disabled={currentIndex === 0}
            style={{ backgroundColor: 'white', borderRadius: '20px' }}
          >
            <i className="fa fa-arrow-left fs-5" style={{ color: 'black' }}></i>
          </button>
          <TransitionGroup className="card-deck d-flex justify-content-center grid gap-5">{renderCards()}</TransitionGroup>
          <button
            className="btn btn-outline-light mb-3 next-btn"
            onClick={(e) => {
              e.preventDefault();
              showNextCards();
            }}
            style={{ backgroundColor: 'white', borderRadius: '20px' }}
          >
            <i className="fa fa-arrow-right fs-5" style={{ color: 'black' }} />
          </button>
        </div>
     
    </div>
  );
};

export default BestService;
