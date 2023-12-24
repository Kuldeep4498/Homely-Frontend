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

const BestService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const cardsData = [
    { id: 1, imageUrl: Rectangle104, title: 'Expert haircut starting at ₹ 190' },
    { id: 2, imageUrl: Rectangle105, title: 'Shine your bathroom deserves' },
    { id: 3, imageUrl: Rectangle105, title: 'Expert haircut starting at ₹ 190' },
    { id: 4, imageUrl: Rectangle104, title: 'Shine your bathroom deserves' },
    { id: 5, imageUrl: Rectangle105, title: 'Expert haircut starting at ₹ 190' },
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
        timeout={{ enter: 500, exit: 0 }}
        classNames={{
          enter: index === 0 ? 'card-enter-first' : 'card-enter',
          enterActive: 'card-enter-active',
          exit: 'card-exit',
          exitActive: 'card-exit-active',
        }}
      >
        <Card className="custom-card">
          <CardMedia component="img" height="140" image={card.imageUrl} alt={card.title} />
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Button
              variant="contained"
              style={{ fontWeight: 600, fontSize: '15px', color: 'white', background: '#24346F', borderRadius: '30px' }}
            >
              Book Now
            </Button>
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
    <div className="container-fluid py-5" style={{ width: '80vw',background: '#1F3584' }}>
      <div className="row ">
        <div
          id="carouselExampleIndicators2"
          className="carousel slide row container-fluid position-relative"
          data-ride="carousel"
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
          <TransitionGroup className="card-deck d-flex grid gap-4">{renderCards()}</TransitionGroup>
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
    </div>
  );
};

export default BestService;
