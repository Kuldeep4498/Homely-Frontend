import React from "react";
import { Navbar } from "../navbar";
import  ExampleLogo  from "../Images/newlogo.png";
import ShoppingCartItem from "./cartItems";
import Rectangle104 from "../Images/Rectangle104.png";
import Rectangle105 from "../Images/Rectangle105.png";
import Footer from "../Globalcomponent/footer";
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
    // Add more products as needed
  ];
  return (
    <div>
      <Navbar
        className="navbar-v col-md-12"
        divClassName="navbar-v1"
        divClassName1="navbar-v1"
        divClassNameOverride="navbar-v1"
        hasDiv={false}
        icon={ExampleLogo }
        size="dekstop"
        text="Login"
      />
      <div className="container-fluid justify-content-center align-items-center d-flex min-vh-100" >
        <div className="d-flex align-items-center col-md-12">
        <div className="d-flex align-items-center col-md-7">



{mockProducts.map((product) => (
<ShoppingCartItem key={product.id} product={product} />
))}





</div>
        </div>

      </div>
     
      <Footer/>
    </div>
  );
};

export default HomeServicesCart;
