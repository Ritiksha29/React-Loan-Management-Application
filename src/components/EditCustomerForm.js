import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const EditCustomerForm = () => {
  const { id } = useParams(); // Get customer ID from URL
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

  // Fetch customer data
  useEffect(() => {
    axios
      .get(`http://localhost:3030/empData/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching customer data:", err);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3030/empData/${id}`, formData)
      .then(() => {
        alert("Customer updated successfully");
        navigate("/customer-data-form");
      })
      .catch((err) => {
        console.error("Error updating customer data:", err);
        alert("Failed to update customer");
      });
  };

  return (

    <>
    
    <div className="container-fluid px-1 py-5 mx-aut">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="border border-secondary-subtle px-4 py-4 rounded-3  opacity-75 text-black text-white bg-dark opacity-75">
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
                        <div className="form-group col-sm-6"> <button type="submit" className="btn btn-primary w-50">Add Data</button> </div>
                    </div>

            </form>

          </div>
        </div>
      </div>
    </div>
    </>


    // <div style={{ maxWidth: "600px", margin: "50px auto" }}>
    //   <h2>Edit Customer Data</h2>
    //   <form
    //     onSubmit={handleSubmit}
    //     style={{ display: "flex", flexDirection: "column" }}
    //   >
    //     <label>
    //       Employee ID:
    //       <input
    //         type="text"
    //         name="employeeId"
    //         value={formData.employeeId}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>

    //     <label>
    //       Employee Name:
    //       <input
    //         type="text"
    //         name="employeeName"
    //         value={formData.employeeName}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>

    //     <label>
    //       Department:
    //       <select
    //         name="department"
    //         value={formData.department}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="Finance">Finance</option>
    //         <option value="HR">HR</option>
    //         <option value="IT">IT</option>
    //       </select>
    //     </label>

    //     <label>
    //       Gender:
    //       <select
    //         name="gender"
    //         value={formData.gender}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="Male">Male</option>
    //         <option value="Female">Female</option>
    //       </select>
    //     </label>

    //     <label>
    //       Designation:
    //       <select
    //         name="designation"
    //         value={formData.designation}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="Manager">Manager</option>
    //         <option value="Assistant">Assistant</option>
    //         <option value="Executive">Executive</option>
    //       </select>
    //     </label>

    //     <label>
    //       Date of Birth:
    //       <input
    //         type="date"
    //         name="dateOfBirth"
    //         value={formData.dateOfBirth}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>

    //     <label>
    //       Date of Joining:
    //       <input
    //         type="date"
    //         name="dateOfJoining"
    //         value={formData.dateOfJoining}
    //         onChange={handleChange}
    //         required
    //       />
    //     </label>

    //     <button
    //       type="submit"
    //       style={{ padding: "10px 20px", marginTop: "20px" }}
    //     >
    //       Update Customer
    //     </button>
    //   </form>
    // </div>
  );
};

export default EditCustomerForm;
