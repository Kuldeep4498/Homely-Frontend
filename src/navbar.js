import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ReactComponent as IconComponentNode } from "./Images/Example Logo.svg";
import "./navbar.css";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Box,Tabs,Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Navbar = ({
  size,
  className,
  icon = <IconComponentNode className="example-logo" />,
  divClassName,
  divClassNameOverride,
  hasDiv = true,
  divClassName1,
  text = "Login",
}) => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openVerificationDialog, setOpenVerificationDialog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [verificationCode, setVerificationCode] = useState([]);
  const [timer, setTimer] = useState(30);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);

  const navigate = useNavigate();
  const [identifier, setidentifier] = useState("");
  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);

  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  const handleOpenVerificationDialog = () => {
    setOpenVerificationDialog(true);
    startTimer();
  };

  const handleCloseVerificationDialog = () => {
    setOpenVerificationDialog(false);
  };

  const handleToggleInput = () => {
    setShowPhoneNumberInput((prevValue) => !prevValue);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleIdentifier = (event) => {
    const input = event.target.value
    setidentifier(input)
  }

  const handleVerificationCodeChangeForIndex = (event, index) => {
    const input = event.target.value;
  
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index - 1] = input;
    setVerificationCode(newVerificationCode);
  
    // Automatically move to the next input field
    if (index < 6 && input !== "") {
      const nextInput = document.getElementById(`verification-code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  


  const handleProceed = async () => {
    try {

      const response = await axios.get(`http://localhost:8080/api/client/auth/requestOtp/${identifier}`);


      console.log("API Response:", response.data);

      handleCloseLoginDialog();
      handleOpenVerificationDialog();
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);

    }

  };


  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/client/auth/verifyOtp", {
        otp: verificationCode.join(''),
        identifier: identifier,
      });
  
      console.log("API Response:", response.data);
  
      // Check if the login is successful
      if (response.data.status === "success") {
        // Set isLoggedIn to true
        setIsLoggedIn(true);
  
        handleCloseVerificationDialog();
  
        const userId = response.data.User_id;
  
        // Save authentication state to localStorage
        localStorage.setItem('userId', userId);
      } else {
        // Handle unsuccessful login
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);
    }
  };
  useEffect(() => {
    // Check if the user is logged in
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setIsLoggedIn(true);
    }
  }, []);  


  const startTimer = () => {
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 30000);
  };

  const handleResendCode = () => {
    // Add logic to resend the verification code
    startTimer();
  };


  const handleservices = () => {
    navigate("/services") 
  };

  const handlehome = () => {
    navigate("/") 
  };

  const handleaboutus = () => {
    window.location.href = "/aboutus"
  };

  const handleappointment = () => {
    window.location.href = "/appointment"
  };

  const handleLogout = () => {
    // Add logic to handle logout
    setIsLoggedIn(false);
    handleCloseMenu();
    localStorage.removeItem("userId")
  };

  const handleBooking = () => {

    window.location.href = "/cart"
    handleCloseMenu(); // Close the menu after selecting booking
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `tabpanel-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <div className={`navbar ${size} ${className}`}>
      <div className="d-flex align-items-center col-md-2 justify-content-center" onClick={handlehome}>
        {icon}
        <span style={{ fontWeight: '700', fontSize: '20px', color: 'white', cursor: 'pointer' }}>Homely</span>
      </div>

      <div className="navigation col-md-6 justify-content-center">
        <div className={`text-wrapper ${divClassName}`} style={{ cursor: 'pointer' }} onClick={handleaboutus}>About Us</div>
        <div className={`text-wrapper ${divClassNameOverride}`} style={{ cursor: 'pointer' }} onClick={handleservices}>Services</div>
        {hasDiv && <div className="text-wrapper">Our Blog</div>}
        <div className={`text-wrapper ${divClassName1}`} style={{ cursor: 'pointer' }} onClick={handleappointment}>Appointment</div>
      </div>

      <div className="element-services col-md-2 justify-content-center">
        <div className="shape" />
        {isLoggedIn ? (
          // Render user information and actions if logged in
          <div>
            <IconButton onClick={handleOpenMenu}>
              {/* Replace this with your user image */}
              <span><AccountCircleRoundedIcon style={{ color: 'white', height: '40px', width: '40px' }} /></span>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              <MenuItem onClick={handleBooking}>Booking</MenuItem>
            </Menu>
          </div>
        ) : (
          // Render login button if not logged in
          <Button
            className="element-hour-services"
            style={{ cursor: "pointer", fontSize: '19px' }}
            onClick={handleOpenLoginDialog}
          >
            Login
          </Button>
        )}
      </div>

      {/* Login Dialog */}
      <Dialog open={openLoginDialog} onClose={handleCloseLoginDialog} fullWidth maxWidth="xs">
        <DialogTitle>
          <h4>
          Login/Signup
          </h4>
     
          <IconButton
            aria-label="close"
            onClick={handleCloseLoginDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
 
        <Box
    sx={{
      display: "flex",
      justifyContent: "center",
 
    }}
  >
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "transparent", // Hide default indicator
        },
      }}
    >
      <Tab
        label="Consumer"
        {...a11yProps(0)}
        sx={{
          color: value === 0 ? "white !important" : "#142257",
          backgroundColor: value === 0 ? "#142257" : "#E6E6E6",
          width: value === 0 ? "130px" : "130px", // Adjust the width as needed
          borderTopLeftRadius: value === 0 ? "20px" : "20px", // Adjust the border radius as needed
          borderBottomLeftRadius: value === 0 ? "20px" : "20px",
        fontWeight:'bold',
          fontSize:'12px'
        }}
      />
      <Tab
        label="Provider"
        {...a11yProps(1)}
        sx={{
          color: value === 1 ? "white !important" : "#142257",
          backgroundColor: value === 1 ? "#142257" : "#E6E6E6",
          width: value === 1 ? "130px" : "130px", // Adjust the width as needed
          borderTopRightRadius: value === 0 ? "20px" : "20px", // Adjust the border radius as needed
          borderBottomRightRadius: value === 0 ? "20px" : "20px", // Adjust the border radius as needed
         fontSize:'12px',
         fontWeight:'bold',
        }}
      />
      {/* Add similar styling for other tabs */}
    </Tabs>
  </Box>
        <DialogContent style={{margin:0}}>
          {showPhoneNumberInput && (
            <>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={identifier}
                onChange={handleIdentifier}

              />
              <FormControlLabel
                control={<Checkbox id="orderUpdates" />}
                label="Receive order updates"
              />
            </>
          )}
          {!showPhoneNumberInput && (
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={identifier}
              onChange={handleIdentifier}

            />
          )}
          <div style={{ marginTop: '10px' }}>
            <h6 style={{ color: 'deepskyblue', cursor: 'pointer' }} onClick={handleToggleInput}>
              Another way ?
            </h6>
          </div>
        </DialogContent>
        <DialogActions>
          {showPhoneNumberInput ? (
            <Button
              fullWidth
              disabled={!identifier || identifier.length <= 1}
              onClick={handleProceed}
              style={{ backgroundColor: '#142257', color: 'white' }}
            >
              Proceed
            </Button>
          ) : (
            <Button
              fullWidth
              disabled={!identifier}
              onClick={handleProceed}
              style={{ backgroundColor: '#142257', color: 'white' }}
            >
              Proceed
            </Button>
          )}
        </DialogActions>
      </Dialog>


      {/* Verification Dialog */}
      <Dialog open={openVerificationDialog} onClose={handleCloseVerificationDialog} fullWidth maxWidth="xs">
        <DialogTitle>
          Verification Code
          <IconButton
            aria-label="close"
            onClick={handleCloseVerificationDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div>
            <h6>We have sent you a 4 Digit code</h6>
          </div>
          {timer > 0 ? (
            <div>
              <p>Time remaining: {timer} seconds</p>
            </div>
          ) : (
            <div style={{ cursor: 'pointer', color: 'blue' }} onClick={handleResendCode}>
              Resend Code
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
  <TextField
    key={index}
    id={`verification-code-${index}`}
    variant="outlined"
    margin="normal"
    inputProps={{
      maxLength: 1,
      style: { textAlign: 'center', width: '2em' },
    }}
    value={verificationCode[index - 1] || ''}
    onChange={(event) => handleVerificationCodeChangeForIndex(event, index)}
  />
))}

          </div>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={verificationCode.length !== 6 || verificationCode.includes('')}
            onClick={handleLogin}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Navbar.propTypes = {
  size: PropTypes.oneOf(["desktop", "mobile"]),
  hasDiv: PropTypes.bool,
  text: PropTypes.string,
};
