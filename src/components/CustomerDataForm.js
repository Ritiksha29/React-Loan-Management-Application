import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const CustomerDataForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    department: "",
    gender: "",
    designation: "",
    dateOfBirth: "",
    dateOfJoining: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/empData", formData).then(() => {
      alert("data added");
    });
    navigate("/customer-data-form");
  };

  return (<>
    
    <div className="container-fluid px-1 py-5 mx-aut">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="border border-secondary-subtle px-4 py-4 rounded-3  text-white bg-dark opacity-75">
            <h2 className="mb-4 fs-4">Loan Application Management </h2>
            <h3 className="mb-4 fs-5">Customer Data Management</h3>
            <form onSubmit={handleSubmit}>
            <div class="row justify-content-between text-left mb-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Employee ID<span class="text-danger"> *</span></label> <input className=""  type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            required/> 
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Employee Name<span className="text-danger"> *</span></label> <input type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required/>
                         </div>
                    </div>

                    <div className="row justify-content-between text-left mb-4">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Department<span class="text-danger"> *</span></label> <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
          </select>
                         </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Gender<span className="text-danger"> *</span></label> <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
                        </div>
                    </div>
                    <div className="row justify-content-between text-left mb-4">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Designation <span className="text-danger"> *</span></label> <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="Manager">Manager</option>
            <option value="Assistant">Assistant</option>
            <option value="Executive">Executive</option>
          </select>
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex "> <label className="form-control-label ">Date of Birth<span className="text-danger"> *</span></label> <input className="" type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required/>
                         </div>
                    </div>

                    <div className="row justify-content-between text-left mb-4">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Date of Joining<span className="text-danger"> *</span></label> <input type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required/>
                         </div>
                        
                    </div>

                    


                    <div className="row justify-content-end mb-4">
                    <div className="form-group col-sm-6 flex-column d-flex"> <button type="submit" onClick={() => navigate("/admin-dashboard")} className="btn btn-success w-50">Back</button> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <button type="submit" className="btn btn-primary w-50">Add Data</button> </div>

                    </div>

            </form>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomerDataForm;
