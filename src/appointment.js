import React, { useEffect , useState } from 'react';
import { Navbar } from "./navbar";
import Footer from "./Globalcomponent/footer";
import { ReactComponent as ExampleLogo } from "./Images/Example Logo.svg";
import { ReactComponent as Icon2 } from "./Images/Icon.svg";
import about from "./Images/make-appointment-img.png.png";
import about2 from "./Images/make-appointment-shape.png.png";
import "./aboutUs.css"
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointment = () =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [services, setServices] = useState([]);
const [pincode,setpincode] =  useState('')
  const handleMakeAppointment = async () => {
    try {
      const userId = localStorage.getItem('userId');

      // Check if user ID is available
      if (!userId) {
        console.error('User ID not found in local storage');
        return;
      }
  
      // Parse user ID as an integer
      const parsedUserId = parseInt(userId, 10);

      const response = await axios.post('http://localhost:8080/api/appointments/make', {
        user: {
          id: parsedUserId,
        },
        service: {
          id: selectedService,
        },
        appointmentDateTime: selectedDate,
        name:name,
        email:email,
        phone: phoneNumber,
        address:message,
        pincode:pincode
      });

      // Handle the response as needed
      console.log('Appointment request successful:', response.data);

      // Show a success toast notification
      toast.success('Appointment has been made!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the toast after 3 seconds
      });
// window.location.href='/payment'
      // Clear the form fields after successful submission
      clearFormFields();
    } catch (error) {
      console.error('Error making appointment:', error.message);
      // Show an error toast notification
      toast.error('Error making appointment. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  const clearFormFields = () => {
    // Reset all form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
    setSelectedDate('');
 
    setMessage('');
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/homely-services`)
      .then((response) => {
        // Log the response data
        console.log('Fetched services:', response.data);
  
        // Update the services state with the fetched data
        setServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error.message);
      });
  }, []);
  


    useEffect(() => {
        const images = document.querySelectorAll('.slide-in');
        images.forEach(image => {
          image.classList.add('slide');
        });
      }, []);
return(
    <>
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
 <div
        className="container d-flex justify-content-center"
        style={{ boxSizing: "border-box" }}
      >
        <div className="col-md-12 d-flex justify-content-center container-fluid grid gap-3" style={{height:'40rem'}}>
        <div className="box-1 user col-md-6" style={{ position: 'relative' }}>
      <div className="slide-container top">
        <img
          src={about2}
          alt="About2 Image"
          className="slide-in"
          style={{ width: '430px', height: '500px' }}
        />
      </div>
      <div className="slide-container bottom">
        <img
          src={about}
          alt="About Image"
          className="slide-in"
          style={{ width: '430px', height: '500px' }}
        />
      </div>
    </div>


          <div class="box-2 d-flex justify-content-center align-items-center col-md-6">
            <div class="box-inner-2 p-4 border-2 d-flex flex-column grid gap-3">
            <div className="d-flex col-md-12 flex-column grid gap-3">
            <div className="d-flex grid gap-2 col-md-12 flex-column">
                <div className="d-flex ">
                <Icon2 />
              <span style={{
                color: '#2CAAC1',
           
                fontSize: '19.385px',
                fontWeight: 500,
                lineHeight: '24.578px',
              }}>Make Appointment</span>
                </div>
             
              <div className="d-flex flex-column justify-content-center" style={{
                color: '#002434',
               lineHeight:"40px",
                fontSize: '40px',
                fontWeight: 700,
              }}>
                <p style={{ marginBottom: 0 }}>Schedule A Services </p>
        
              </div>
            </div>
            <div className="d-flex col-md-12 justify-content-center flex-column" style={{
              color: '#555',
              fontFamily: 'Roboto',
              fontSize: '16.385px',
              fontWeight: 400,
              lineHeight:'30px'
            }}>
              <p className="mb-0">
              Take control of your schedule and elevate your living experience with our easy service scheduling. At Homely, we understand the importance of convenience. Simply choose the service you need, pick a date and time that suits you, and leave the rest to us. Our expert technicians are ready to provide top-notch service, ensuring your home is well taken care of. Experience the ease of scheduling with us – because your time matters.
               </p>
            </div>
          </div>

            <div className='col-md-12 flex-column d-flex grid gap-2'>
                <div className='col-md-12 d-flex grid gap-2'>
                <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
         
          </div>
          <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{width:'98%'}}
                      />
         
          </div>
                </div>
          
                <div className='col-md-12 d-flex grid gap-2'>
                <div className='col-md-6'>
          <input
                        className="form-control border-secondary"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
         
          </div>
          <div className='col-md-6'>
          <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select Date and Time"
          className="form-control border-secondary"
        />
          </div>
                </div>
                <div className='col-md-12 d-flex grid gap-2'>
         
                    <div className="col-md-6">
                    <select
        className="form-select border-secondary"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
      >
        <option value="">Select Service</option>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.serviceName}
          </option>
        ))}
      </select>
            </div>
            <div className='col-md-6'>
              
              <input
                            className="form-control border-secondary"
                            placeholder="Pin-code"
                            value={pincode}
                            onChange={(e) => setpincode(e.target.value)}
                            style={{width:'98%'}}
                          />
             
       
                    </div>
                </div>
              
          <div className='col-md-12 d-flex grid gap-2'>
          <textarea
                    className="form-control border-secondary"
                    id="nameInput"
                    placeholder="Address"
                    value={message}
                onChange={(e) => setMessage(e.target.value)}
                  />
         
          </div>
          <div className='col-md-12 d-flex grid gap-2'>
        <Button style={{borderRadius: '30px',
background: '#1F3584',color:'white',width:'100%'}}    onClick={handleMakeAppointment}> Make an Appointment</Button>
         
          </div>
            </div>
          


            
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
 <Footer/>
 </>  
)
}
export default Appointment;