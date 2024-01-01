import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Tooltip } from '@mui/material';
import Rectangle104 from "../Images/Rectangle104.png";
import Rectangle105 from "../Images/Rectangle105.png";
import Button from '@mui/material/Button';
import './serviceCard.css'; // Import your CSS file
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  Card, CardContent } from '@mui/material';
const ServiceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;
  const [slideIndex, setSlideIndex] = useState(0);
  const [cardsData, setCardsData] = useState([]);
  const [cardData, setCardData] = useState(null);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      showNextCards();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlecard = async () => {
    try {
      const selectedCard = cardsData[currentIndex];
      setCardData(selectedCard);

      // Assuming you have a 'card' object with necessary data for the POST request
    

      // Make a POST request to your API endpoint
      const response = await axios.post("http://localhost:8080/api/cart/add");
      setCardData(response.data);
      // Handle the response as needed
      console.log("Booking successful!", response.data);

      // Redirect to the cart page or do any other necessary actions
      window.location.href = '/cart';
    } catch (error) {
      console.error('Error booking service:', error.message);
    }
  };
  const convertStringToImage = (imageString) => {
    return `data:image/png;base64,${imageString}`;
  };
  const renderCards = () => {
    return cardsData.slice(currentIndex, currentIndex + cardsPerSlide).map((card, index) => (
      <CSSTransition
        key={card.id}
        timeout={{ enter: 500, exit: 0 }} // Adjust the enter duration as needed
        classNames={{
          enter: slideIndex === 0 ? 'slide-in-right' : 'slide-in-left',
          enterActive: 'card-enter-active',
          exit: 'card-exit',
          exitActive: 'card-exit-active',
        }}
      >
      <Card key={card.id} className="col-md-4 col-sm-6 d-flex" style={{ backgroundColor: '#142257', borderRadius: '14px' }}>
          <CardContent className=" col-md-6 d-flex justify-content-center flex-column align-items-center grid gap-4">
            <div className='text-center'>
              <h4 className='mb-0' style={{ fontWeight: 'bold', fontSize: '17px', cursor: 'pointer', color: 'white' }}>
                {card.description}
              </h4>
            </div>
            <Button
              variant="contained"
              style={{ fontWeight: 600, fontSize: '15px', color: 'white', background: '#24346F', borderRadius: '30px' }}
              onClick={handlecard}
            >
              Book Now
            </Button>
          </CardContent>
          <div className=' col-md-6 d-flex justify-content-end align-items-center'>
            <img src={card.imgUrl} alt="" style={{ height: '240px', width: '100%' }} />
          </div>
        </Card>
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
          className="carousel slide container-fluid "
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
            style={{ backgroundColor: 'white', borderRadius: '20px' }}
          >
            <i className="fa fa-arrow-left fs-5" style={{ color: 'black' }}></i>
          </button>
          <TransitionGroup className="card-deck d-flex grid gap-4" style={{height:"240px",width:'90vw'}}>{renderCards()}</TransitionGroup>
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

export default ServiceCard;
