import React , { useEffect, useState }  from "react";
import { Card, CardMedia, Typography,Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
const ShoppingCartItem = ({ product }) => {

    const [count, setCount] = React.useState(1);
    const [cardsData, setCardsData] = useState([]);
    const userId = parseInt(localStorage.getItem('userId'), 10);
  
  
    useEffect(() => {
      const fetchCards = async () => {
        try {
          if (isNaN(userId)) {
            console.error('Invalid userId in localStorage');
            return;
          }
  
          const response = await axios.get(`http://localhost:8080/api/cart/user/${userId}`);
          setCardsData(response.data);
        } catch (error) {
          console.error('Error fetching card data:', error.message);
        }
      };
  
      fetchCards();
    }, [userId]);


    return (
      <>
  {cardsData.map((item) => (
  <Card key={item.id} className="cart-items-card" style={{ width: '100%' }}>
    <div className="col-md-12 d-flex align-items-center grid gap-2" style={{ height: '180px' }}>

      {/* Card Image */}
      <div className="col-md-3">
        <CardMedia
          className="cart-items-image"
          component="img"
          alt="Product Image"
          src={item.service.imgUrl}
        />
      </div>

      {/* Card Details */}
      <div className="col-md-9 d-flex flex-column grid gap-3 px-3">
        <div className="row">
          <Typography component="h5" variant="h5" className="cart-items-name">
            {item.service.serviceName}
          </Typography>
        </div>
        <div className="row">
          <Typography variant="body2" className="cart-Items-farmer">
            {item.service.description}
          </Typography>
        </div>
        <div className="row">
          <div className="d-flex grid col-md-12">
            <Typography variant="body2" className="cart-items-location">
              {item.service.ratings && item.service.ratings.length > 0 ? item.service.ratings[0].rating : 'N/A'}
            </Typography>
          </div>
        </div>

        <div className="col-md-12 d-flex grid align-items-center justify-content-between">
          <div className="col-md-4">
            <Typography className="cart-items-name" variant="h6">
              <strong>
                {`$${item.service.price}/lb`}
              </strong>
            </Typography>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Badge color="secondary" badgeContent={count} />
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  </Card>
))}

      </>
    );
    
};
export default ShoppingCartItem;