// components/LoanCardForm.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const LoanCardForm = () => {
  const [loanData, setLoanData] = useState({
    loanId: "",
    loanType: "Furniture",
    duration: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Card Data Submitted:", loanData);
    alert("Loan Card Data Added Successfully");
    axios.post("http://localhost:3031/loans", loanData).then(() => {
      alert("data added");
    });
    navigate("/loan-data-edit");
    // Implement the logic to save data to the backend here
  };

  return (
    <>
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          
          <div className="border border-secondary-subtle pb-4 pt-3 ps-4 border rounded-3   text-black text-white bg-dark opacity-75">
          <h2 className="mb-3 fs-4">Loan Management Application</h2>
            <h3 className="fs-5 mb-3">Loan Card Form</h3>
            <form onSubmit={handleSubmit}>

            <div class="row justify-content-center text-left">
                        <div class="form-group col-sm-6 flex-column d-flex mb-3 "> <label className="form-control-label px-3 text-start">Loan ID<span className="text-danger"> *</span></label> <input type="text" className=""
            name="loanId"
            value={loanData.loanId}
            onChange={handleChange}
            required/> 
                        </div>
                        </div>

                        <div className="row justify-content-center text-left">
                        <div className="form-group col-sm-6 flex-column d-flex mb-3"> <label className="form-control-label px-3 text-start">Loan Type <span className="text-danger"> *</span></label>  <select
            name="loanType"
            value={loanData.loanType}
            onChange={handleChange}
          >
            <option value="Furniture">Furniture</option>
            <option value="Stationery">Stationery</option>
            <option value="Crockery">Crockery</option>
          </select>
                        </div>
                        </div>

                        

                         <div className="row justify-content-center text-left">
                        <div className="form-group col-sm-6 flex-column d-flex mb-3"> <label className="form-control-label px-3 text-start">Duration<span className="text-danger"> *</span></label><input
            type="number"
            name="duration"
            value={loanData.duration}
            onChange={handleChange}
            required
          />
                       
                    </div>
                    </div>

                    <div className="row justify-content-end mb-4">
                    <div className="form-group col-sm-6  "> <button type="submit" onClick={() => navigate("/admin-dashboard")} className="btn btn-success w-50 mt-3">Back</button> </div>
                        <div className="form-group col-sm-6 "> <button type="submit" className="btn btn-primary w-50 mt-3">Add Data</button> </div>

                    </div>



            </form>

          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default LoanCardForm;
