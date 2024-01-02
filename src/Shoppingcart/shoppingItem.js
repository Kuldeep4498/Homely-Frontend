import React , { useEffect, useState }  from "react";
import { Navbar } from "../navbar";
import { ReactComponent as ExampleLogo } from "../Images/Example Logo.svg";
import ShoppingCartItem from "./cartItems";
import Rectangle104 from "../Images/Rectangle104.png";
import Rectangle105 from "../Images/Rectangle105.png";
import Footer from "../Globalcomponent/footer";
import { Card,CardMedia,CardHeader,CardContent, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Divider,

  Button,


  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete"; 
const HomeServicesCart = ({ services, cart, onAddToCart, onRemoveFromCart }) => {
  const mockProducts = [
    {
      id: 1,
      imageSrc: Rectangle104 ,
      name: "Instant glow facials",
      farmer_name: "Perfect for an upcoming special occaision",
      locationStatus: "3.8 (78 reviews)",
   
      price: 622,
      Button:'add'
    },

  ];
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []);

const handlepayment = () => {
  window.location.href="/payment"
}

  return (
    <div>
      <Navbar
        className="navbar-v col-md-12"
        divClassName="navbar-v1"
        divClassName1="navbar-v1"
        divClassNameOverride="navbar-v1"
        hasDiv={false}
        icon={<ExampleLogo className="example-logo-instance" />}
        size="dekstop"
        text="Login"
      />
      <div className="container-fluid justify-content-center align-items-center d-flex " >
        <div className="d-flex  col-md-12 min-vh-100 py-5 grid gap-2" style={{width:'90vw'}}>
        <div className="d-flex align-items-center flex-column col-md-8 grid gap-3">

<div className="d-flex col-md-12 flex-column">
  <h3>
  Service Cart: 1 item
  </h3>
  <h6>

  Thank you for choosing the Homely. Please check the address before checking out.
  </h6>


</div>
<div className="d-flex flex-column grid gap-2 col-md-12">
{mockProducts.map((product) => (
<ShoppingCartItem key={product.id} product={product} />
))}
</div>






</div>
<div className="d-flex flex-column col-md-4">
  <div>
  <Card sx={{ mb: 2, padding: 2 }}>
      <Typography className="delivery-title">Select Address</Typography>
      <CardMedia
        component="iframe"
        height="194"
        width="320"
        // Use userLocation to set the map to the user's current location
        src={`http://maps.google.com/maps?q=${userLocation?.latitude || 0},${userLocation?.longitude || 0}&z=16&output=embed`}
        title="Pickup Address"
      />
      <CardContent>
        <div className="col-md-12">
          <div className="row">
            <Typography className="shipped-address">
              {userLocation
                ? `Current Location: ${userLocation.latitude}, ${userLocation.longitude}`
                : 'Fetching location...'}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
<div>
<Card>
          <div sx={{ mb: 2, padding: 2 }}>
            <List>
              <ListItem>
                <Typography className="summary-title" sx={{ flexGrow: 1 }}>
                  Summary
                </Typography>
              </ListItem>
              <ListItem
                style={{
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                }}
              >
                <Typography className="price-list-item">
                  Item total price
                </Typography>

                <Typography className="price-list-item-1">
          
                </Typography>
              </ListItem>
              <ListItem style={{ justifyContent: "space-between" }}>
                <Typography className="price-list-item">
                  Subtotal (Tax excluded)
                </Typography>

                <Typography className="price-list-item-1">
              
                </Typography>
              </ListItem>
              <ListItem style={{ justifyContent: "space-between" }}>
                <Typography className="price-list-item">Tax</Typography>

                <Typography className="price-list-item-1">
          
                </Typography>
              </ListItem>
              <ListItem
                style={{
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                }}
              >
  
              </ListItem>
              <ListItem style={{ justifyContent: "space-between" }}>
                <Typography className="total-price">Total</Typography>
                <Typography className="total-price">
        
                </Typography>
               
              </ListItem>
            </List>
          </div>

         
     
         


              <div style={{ marginBottom: "16px", padding: "12px 12px" }}>
                <Button
                  fullWidth
                  className="shopping-btn-proceed text-capitalize fs-6"
               onClick={handlepayment}
                  style={{backgroundColor:'deepskyblue',color:'white',marginBottom:'5px'}}
                >
                  Pay
                </Button>
          
              </div>
      
   
      
   
        </Card>
</div>
</div>
        </div>

      </div>
     
      <Footer/>
    </div>
  );
};

export default HomeServicesCart;
