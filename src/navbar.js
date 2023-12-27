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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState([]);
  const [timer, setTimer] = useState(30);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
    setShowPhoneNumberInput(true);
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


  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);

    // Validate phone number length
    if (input.length > 10) {
      setPhoneNumberError('Phone number cannot exceed 10 digits');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleEmailChange = (event) => {
    const input = event.target.value;
    setEmail(input);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleVerificationCodeChangeForIndex = (event, index) => {
    const input = event.target.value;

    const newVerificationCode = [...verificationCode];
    newVerificationCode[index - 1] = input;
    setVerificationCode(newVerificationCode);
  };

  const handleProceedToVerification = async () => {
    try {

      const response = await axios.get(`http://localhost:8080/api/client/auth/requestOtp/${phoneNumber}`);


      console.log("API Response:", response.data);

      handleCloseLoginDialog();
      handleOpenVerificationDialog();
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);

    }

  };
  const handleProceedToVerificationemail = async () => {
    try {

      const response = await axios.post(`http://localhost:8080/api/register?email=${email}`);


      console.log("API Response:", response.data);

      handleCloseLoginDialog();
   
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);

    }

  };

  const handleLogin = async () => {
    try {

      const response = await axios.post("http://localhost:8080/api/client/auth/verifyOtp",
        {

          otp: verificationCode.join(''),
          phoneNo: phoneNumber,
        }





      );


      console.log("API Response:", response.data);

      handleCloseVerificationDialog();
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);

    }

  };


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

  const handleToggleInput = () => {
    setShowPhoneNumberInput((prevValue) => !prevValue);
  };

  const handleservices = () => {
    window.location.href = "/services"
  };

  const handlehome = () => {
    window.location.href = "/"
  };

  const handleaboutus = () => {
    window.location.href = "/aboutus"
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
        <div className={`text-wrapper ${divClassName1}`} style={{ cursor: 'pointer' }}>Appointment</div>
      </div>

      <div className="element-services col-md-2 justify-content-center">
        <div className="shape" />
        <div className="element-hour-services" style={{ cursor: 'pointer' }} onClick={handleOpenLoginDialog}>{text}</div>
      </div>

      {/* Login Dialog */}
      <Dialog open={openLoginDialog} onClose={handleCloseLoginDialog} fullWidth maxWidth="xs">
  <DialogTitle>
    Login/Signup
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
  <DialogContent>
    {showPhoneNumberInput && (
      <>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          error={Boolean(phoneNumberError)}
          helperText={phoneNumberError}
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
        value={email}
        onChange={handleEmailChange}
        error={Boolean(emailError)}
        helperText={emailError}
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
        disabled={!phoneNumber || phoneNumber.length <= 1}
        onClick={handleProceedToVerification}
        style={{ backgroundColor: 'deepskyblue', color: 'white' }}
      >
        Proceed
      </Button>
    ) : (
      <Button
        fullWidth
        disabled={!email}
        onClick={handleProceedToVerificationemail}
        style={{ backgroundColor: 'darkblue', color: 'white' }}
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
