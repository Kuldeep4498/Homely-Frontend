import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Tooltip } from '@mui/material';

const ServiceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const showNextCards = () => {
    const nextIndex = currentIndex + cardsPerSlide;
    setCurrentIndex(nextIndex);
  };

  const showPrevCards = () => {
    const prevIndex = currentIndex - cardsPerSlide;
    setCurrentIndex(prevIndex);
  };

  const renderCards = () => {
    // Replace this with your actual data
    const cardsData = [
      { id: 1, imageUrl: 'path/to/image1.jpg', title: 'Service 1' },
      { id: 2, imageUrl: 'path/to/image2.jpg', title: 'Service 2' },
      { id: 3, imageUrl: 'path/to/image3.jpg', title: 'Service 3' },
      // Add more cards as needed
    ];

    return cardsData.slice(currentIndex, currentIndex + cardsPerSlide).map((card) => (
      <CSSTransition key={card.id} timeout={500} classNames="card">
        <div className="col-md-4 col-sm-6 mb-3 ms-1 card-height5">
          <div className="card bg-transparent border-0 h-100">
            <img
              className="img-fluid object-fit-cover rounded-3 h-100"
              alt="Card Image"
              src={card.imageUrl}
              style={{ borderRadius: '14px' }}
            />
            <div
              className="position-absolute text-light d-flex justify-content-between col-md-12 px-3 py-3 align-items-center"
              style={{
                backgroundColor: 'rgba(20, 28, 36, 0.24)',
                borderTopLeftRadius: '7px',
                borderTopRightRadius: '7px',
              }}
            >
              <div className="tooltip-container">
                <h4 className="mb-0 col-md-12 custom-hover" style={{ fontWeight: 'bold', fontSize: '23px', cursor: 'pointer' }}>
                  {card.title}
                </h4>
                <div className="tooltip">
                  <Tooltip arrow>Click to view the details</Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    ));
  };

  return (
    <div className="container pt-0">
      <div className="row d-flex">
        <div className=" col-md-10 col-12">
          <p className="text-light-farmer">
            Here are some handpicked coffees from top farmers for you...
          </p>
        </div>
        <div className=" col-md-2 col-12 d-flex justify-content-end grid gap-2">
          <button
            className="btn btn-outline-light mb-3 mr-1 px-2 border border-3"
            style={{ borderRadius: '20px' }}
            onClick={(e) => {
              e.preventDefault();
              showPrevCards();
            }}
            disabled={currentIndex === 0}
          >
            <i className="fa fa-arrow-left fs-5"></i>
          </button>
          <button
            className="btn btn-outline-light mb-3 px-2 border border-3"
            style={{ borderRadius: '20px' }}
            onClick={(e) => {
              e.preventDefault();
              showNextCards();
            }}
          >
            <i className="fa fa-arrow-right fs-5"></i>
          </button>
        </div>
        <div
          id="carouselExampleIndicators2"
          className="carousel slide row container-fluid"
          data-ride="carousel"
          style={{ width: '81.5vw' }}
        >
          <TransitionGroup className="card-deck grid gap-4">{renderCards()}</TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
