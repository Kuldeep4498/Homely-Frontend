import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Tooltip } from '@mui/material';
import Rectangle104 from "../Images/Rectangle104.png";
import Rectangle105 from "../Images/Rectangle105.png";
import Button from '@mui/material/Button';
import './serviceCard.css'; // Import your CSS file

import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const cardsData = [
    { id: 1, imageUrl: Rectangle104, title: 'Expert haircut starting at ₹ 190' },
    { id: 2, imageUrl: Rectangle105, title: 'Shine your bathroom deserves' },
    { id: 3, imageUrl: Rectangle104, title: 'Expert haircut starting at ₹ 190' },
    { id: 4, imageUrl: Rectangle105, title: 'Shine your bathroom deserves' },
    { id: 5, imageUrl: Rectangle104, title: 'Expert haircut starting at ₹ 190' },
    // Add more cards as needed
  ];

  const showNextCards = () => {
    const nextIndex = currentIndex + cardsPerSlide;
    setCurrentIndex(nextIndex >= cardsData.length ? 0 : nextIndex);
  };

  const showPrevCards = () => {
    const prevIndex = currentIndex - cardsPerSlide;
    setCurrentIndex(prevIndex < 0 ? cardsData.length - cardsPerSlide : prevIndex);
  };

  const renderCards = () => {
    return cardsData.slice(currentIndex, currentIndex + cardsPerSlide).map((card, index) => (
      <CSSTransition
        key={card.id}
        timeout={{ enter: 500, exit: 0 }} // Adjust the enter duration as needed
        classNames={{
          enter: index === 0 ? 'card-enter-first' : 'card-enter',
          enterActive: 'card-enter-active',
          exit: 'card-exit',
          exitActive: 'card-exit-active',
        }}
      >
        <div className="col-md-4 col-sm-6 d-flex" style={{ backgroundColor: '#142257', borderRadius: '14px' }}>
          <div className="d-flex justify-content-center flex-column col-md-6 align-items-center grid gap-4">
            <div className='text-center'>
              <h4 className='mb-0' style={{ fontWeight: 'bold', fontSize: '19px', cursor: 'pointer', color: 'white' }}>
                {card.title}
              </h4>
            </div>
            <Button
              variant="contained"
              style={{ fontWeight: 600, fontSize: '15px', color: 'white', background: '#24346F', borderRadius: '30px' }}
            >
              Book Now
            </Button>
          </div>
          <div className='d-flex justify-content-end col-md-6 align-items-center'>
            <img src={card.imageUrl} alt="" style={{ height: "240px",width:'100%'}} />
          </div>
        </div>
      </CSSTransition>
    ));
  };

  // Automatically advance to the next set of cards every 5000 milliseconds (5 seconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextCards();
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="container-fluid py-5" >
    
        <div
          id="carouselExampleIndicators2"
          className="carousel slide row container-fluid position-relative"
          data-ride="carousel"
          style={{ width: '95vw' }}
        >
          <button
            className="btn btn-outline-light mb-3 prev-btn"
            onClick={(e) => {
              e.preventDefault();
              showPrevCards();
            }}
            disabled={currentIndex === 0}
          >
            <i className="fa fa-arrow-left fs-5" style={{ color: 'black' }}></i>
          </button>
          <TransitionGroup className="card-deck d-flex grid gap-4" style={{height:"240px"}}>{renderCards()}</TransitionGroup>
          <button
            className="btn btn-outline-light mb-3 next-btn"
            onClick={(e) => {
              e.preventDefault();
              showNextCards();
            }}
          >
            <i className="fa fa-arrow-right fs-5" style={{ color: 'black' }} />
          </button>
        </div>
   
    </div>
  );
};

export default ServiceCard;
