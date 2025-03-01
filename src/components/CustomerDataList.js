// components/CustomerDataList.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const CustomerDataList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3030/empData")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Handle delete action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:3030/empData/${id}`)
        .then(() => {
          alert("Customer deleted successfully");
          setCustomers(customers.filter((customer) => customer.id !== id));
        })
        .catch((err) => {
          console.error("Error deleting customer:", err);
          alert("Failed to delete customer");
        });
    }
  };

  // Navigate to the edit form
  const handleEdit = (id) => {
    navigate(`/edit-customer/${id}`);
  };

  return (
    <div className="m-auto mx-5 my-5 p-5   mb-5  text-black"
    // style={{ maxWidth: "800px", margin: "50px auto" }}
    >
      <h1 className="text-center fs-3 mb-4 fw-bold">Loan Management Application</h1>

      <h2 className="fs-4 text-center fw-semibold">Customer Data List</h2>
      <table
        className="table table-bordered table-striped mt-5 "
        // style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Date of Birth</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.employeeId}</td>
                <td>{customer.employeeName}</td>
                <td>{customer.department}</td>
                <td>{customer.gender}</td>
                <td>{customer.designation}</td>
                <td>{customer.dateOfBirth}</td>
                <td>{customer.dateOfJoining}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2 ms-3"
                    onClick={() => handleEdit(customer.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm "
                    // style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
      <div className="form-group col-sm-6 flex-column d-flex"> <button type="submit" onClick={() => 
        navigate("/customer-data")} className="btn btn-success w-25 mt-3">Back</button> </div>
      </div>
    </div>
  );
};

export default CustomerDataList;
