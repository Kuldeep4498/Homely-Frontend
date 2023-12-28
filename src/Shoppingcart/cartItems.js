import React from "react";
import { Card, CardMedia, Typography,Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
const ShoppingCartItem = ({ product }) => {

    const [count, setCount] = React.useState(1);

  return (

      <Card className="cart-items-card" style={{width:'100%'}}>
        <div className="col-md-12 d-flex align-items-center grid gap-2" style={{height:'180px'}}>
          <div className="col-md-4">
            <CardMedia
              className="cart-items-image"
              component="img"
              alt="Product Image"
              src={product.imageSrc}
              style={{height:'100%',width:'240px'}}
            />
          </div>

          <div className="col-md-8 d-flex flex-column grid gap-3">
            <div className="row">
              <Typography component="h5" variant="h5" className="cart-items-name">
                {product.name}
              </Typography>
            </div>
            <div className="row">
              <Typography variant="body2" className="cart-Items-farmer">
                {product.farmer_name}
              </Typography>
            </div>
            <div className="row">
              <div className="d-flex grid col-md-12">
                <Typography variant="body2" className="cart-items-location">
                {product.locationStatus}
                </Typography>
              </div>
            </div>
          
            <div className="col-md-12 d-flex grid align-items-center justify-content-between">
                <div className="col-md-4">
                <Typography className="cart-items-name" >
             <strong>
             {`$${product.price}/lb`}
                </strong>   
              </Typography>
                </div>
          <div  className="col-md-4 d-flex justify-content-center">
         <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Badge color="secondary" badgeContent={count}/>
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
 
  );
};
export default ShoppingCartItem;