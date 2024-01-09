import React, { useEffect, useState } from "react";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Badge from "@mui/material/Badge";

const ShoppingCartItem = ({ product }) => {
  const [count, setCount] = React.useState(1);
  const [cardsData, setCardsData] = useState([]);
  const userId = parseInt(localStorage.getItem("userId"), 10);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        if (isNaN(userId)) {
          console.error("Invalid userId in localStorage");
          return;
        }

        const response = await axios.get(
          `http://localhost:8080/api/cart/user/${userId}`
        );
        setCardsData(response.data);
      } catch (error) {
        console.error("Error fetching card data:", error.message);
      }
    };

    fetchCards();
  }, [userId]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/cart/user/${userId}`
      );
      setCardsData(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error.message);
    }
  };

  const updateCartItem = async (cartItemId, newQuantity) => {
    try {
      await axios.post(
        `http://localhost:8080/api/cart/update-quantity/${cartItemId}?newQuantity=${newQuantity}`
      );
      fetchCartItems(); // Fetch updated cart items after updating
    } catch (error) {
      console.error("Error updating cart item:", error.message);
    }
  };

  const removeCartItem = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/remove/${cartItemId}`);
      fetchCartItems(); // Fetch updated cart items after removing
    } catch (error) {
      console.error("Error removing cart item:", error.message);
    }
  };

  const handleAddToCart = async (serviceId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/cart/add?userId=${userId}&serviceId=${serviceId}&quantity=${count}`
      );

      // Handle the response, e.g., show a success message
      fetchCartItems(); // Fetch updated cart items after adding
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:8080/api/cart/remove/${cartItemId}`);
      fetchCartItems(); // Fetch updated cart items after removing
    } catch (error) {
      console.error("Error removing from cart:", error.message);
    }
  };

  return (
    <>
      {cardsData.map((item) => (
        <Card key={item.id} className="cart-items-card" style={{ width: "100%" }}>
          <div
            className="col-md-12 d-flex align-items-center grid gap-2"
            style={{ height: "180px" }}
          >
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
                <Typography
                  variant="h6"
                  className="cart-items-name"
                  style={{ fontWeight: "bold" }}
                >
                  {item.service.serviceName}
                </Typography>
              </div>
              <div className="row">
                <Typography
                  className="cart-Items-farmer"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  {item.service.description}
                </Typography>
              </div>
              <div className="row">
                <div className="d-flex grid col-md-12">
                  <Typography
                    variant="body2"
                    className="cart-items-location"
                  >
                    {item.service.ratings &&
                    item.service.ratings.length > 0
                      ? item.service.ratings[0].rating
                      : "N/A"}
                  </Typography>
                </div>
              </div>

              <div className="col-md-12 d-flex grid align-items-center justify-content-between">
                <div className="col-md-4">
                  <Typography className="cart-items-name" variant="h6">
                    <strong>{`₹ ${item.service.price}`}</strong>
                  </Typography>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <ButtonGroup>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                        const newQuantity = Math.max(count - 1, 0);
                        updateCartItem(item.id, newQuantity);
                        if (newQuantity === 0) {
                          removeCartItem(item.id);
                        }
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Badge color="secondary" badgeContent={count} />
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setCount(count + 1);
                        updateCartItem(item.id, count + 1);
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
