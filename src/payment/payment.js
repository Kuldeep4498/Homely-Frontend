import React, { useState, useEffect } from "react";
import "./payment.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Background from "../Images/payment.jpg";
import axios from "axios";  // Import Axios library
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const stripePromise = loadStripe(
  "pk_test_51OUpamSIED645FFTWK9gfLChOwVRfQDopjgpr3gbUaRQ2JQANxfDvVLUrGmbt7M3PelRcGosMMaoQmYwaI4HpqOm00sXHqNOnN"
);

const StripeComponent = () => {



  const stripe = useStripe();

  const elements = useElements();
  const [emailAddress, setEmailAddress] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const isFormValid = () => {
    const isEmailValid = emailAddress.trim() !== "";
    const isCardholderNameValid = cardholderName.trim() !== "";
   

    return (
      isEmailValid &&
      isCardholderNameValid 
  
    );
  };

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validateEmail = () => {
    const usernameValue = emailAddress.trim();
    if (!emailPattern.test(usernameValue)) {
      setErrorMessage("Invalid email format.");
    } else {
      setErrorMessage(""); // Clear error message if email is valid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements) return;
  
    const cardElement = elements.getElement(CardElement);
  
    // Create a PaymentMethod with the card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: cardholderName,
      },
    });
  
    if (error) {
      toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
    } else {
  
  
  
  
      try {
        const response = await axios.post(
          `http://localhost:8080/payment/charge?token=${paymentMethod.id}&amount=222`
        );
  
        if (response.data.success) {
          // Handle success
          console.log("Payment successful");
        } else {
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (error) {
        console.error('Error submitting payment:', error.message);
      }
    }
  };
  
  

  return (
    <div className="container-fluid d-flex justify-content-center"style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", overflow: "hidden",backgroundRepeat:'no-repeat',height:'100vh'}}>
      <div
        class="box-2 d-flex justify-content-center align-items-center col-md-6"
       
      >
        <div class="box-inner-2 p-4 border-2 bg-white"  style={{ borderRadius: "15px" }}>
          <div>
            <p class="fw-bold fs-5">Payment Details</p>
            <p class="dis mb-3 fs-6">
              Complete your purchase by providing your payment details
            </p>
          </div>
          <div className="StripeComponent">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <p class="dis fw-bold mb-2 fs-6">
                  Email address<span className="text-danger">*</span>
                </p>
                <input
                  class="form-control"
                  placeholder="Enter Email address..."
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  onBlur={validateEmail}
                />
              </div>
              <div className="text-danger mb-1">{errorMessage}</div>
              <p class="dis fw-bold mb-2 fs-6">
                Card details<span className="text-danger">*</span>
              </p>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <div class="my-3 cardname">
                <p class="dis fw-bold mb-2 fs-6">
                  Cardholder name<span className="text-danger">*</span>
                </p>{" "}
                <input
                  class="form-control"
                  placeholder="Enter Cardholder name..."
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />
              </div>

              <div class="d-flex align-items-center justify-content-between  fs-6">
                <p class="fw-bold mb-0">Total </p>
                <Button
                  type="submit"
                  class="btn btn-info btn-lg btn-rounded d-flex align-items-center"
          
                  style={{cursor:'pointer'}}
                  onClick={handleSubmit}
                >
                  <i class="fas fa-arrow-right" style={{ color: "white" }}></i>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function AppWithStripe() {
  return (
    <Elements stripe={stripePromise}>
      <StripeComponent />
    </Elements>
  );
}

export default AppWithStripe;
