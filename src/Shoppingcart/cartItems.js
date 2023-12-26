import React from "react";
import { Card, CardMedia, Typography,Button } from "@mui/material";

const ShoppingCartItem = ({ product }) => {
  return (

      <Card className="cart-items-card" style={{width:'100%'}}>
        <div className="col-md-12 d-flex align-items-center grid gap-2" style={{height:'180px'}}>
          <div className="col-md-4">
            <CardMedia
              className="cart-items-image"
              component="img"
              alt="Product Image"
              src={product.imageSrc}
              style={{height:'160px',width:'240px'}}
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
          <Button
              variant="contained"
         
              style={{ fontWeight: 600, fontSize: '14px', color: 'white', background: '#2CAAC1', borderRadius: '30px' }}
            >
              {product.Button}
            </Button>
          </div>
             
            </div>
          </div>

        </div>
      </Card>
 
  );
};
export default ShoppingCartItem;