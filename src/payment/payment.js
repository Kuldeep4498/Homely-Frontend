import React from "react";
import "./payment.css";

const Payment = () => {
  return (
    <section className="gradient-custom">
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <div className="col-md-12 d-flex justify-content-center py-5">
          <div className="col-md-7 col-lg-5 col-xl-4">
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4">
                <form>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-outline" style={{ border: 'none' }}>
                      <input
                        type="text"
                        id="typeText"
                        className="form-control form-control-lg"
                        size="17"
                        placeholder="Card Number"
                        minLength="19"
                        maxLength="19"
                        style={{ border: 'none' }}
                      />
             
                    </div>
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-outline" style={{ border: 'none' }}>
                      <input
                        type="text"
                        id="typeName"
                        className="form-control form-control-lg"
                        size="17"
                        placeholder="Cardholder's Name"
                        style={{ border: 'none' }}
                      />
                 
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <div className="form-outline" style={{ border: 'none' }}>
                      <input
                        type="text"
                        id="typeExp"
                        className="form-control form-control-lg"
                        placeholder="MM/YYYY"
                        size="7"
                        minLength="7"
                        maxLength="7"
                        style={{ border: 'none' }}
                      />
            
                    </div>
                    <div className="form-outline" style={{ border: 'none' }}>
                      <input
                        type="password"
                        id="typeText2"
                        className="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="1"
                        minLength="3"
                        maxLength="3"
                        style={{ border: 'none' }}
                      />
                  
                    </div>
                    <button
                      type="button"
                      className="btn btn-info btn-lg btn-rounded"
                    >
                      <i className="fas fa-arrow-right" style={{ color: 'white' }}></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
