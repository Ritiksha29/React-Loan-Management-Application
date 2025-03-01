import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanDataEdit = () => {
  const [loans, setLoans] = useState([]);
  const navigate = useNavigate();

  // Fetch Loan data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3031/loans")
      .then((response) => {
        setLoans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching loan data:", error);
      });
  }, []);

  // Handle edit navigation
  const handleEdit = (id) => {
    navigate(`/edit-loan/${id}`);
  };

  // Handle delete action
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this loan?")) {
      axios
        .delete(`http://localhost:3031/loans/${id}`)
        .then(() => {
          alert("Loan deleted successfully!");
          setLoans((prevLoans) => prevLoans.filter((loan) => loan.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting loan:", error);
          alert("Failed to delete loan");
        });
    }
  };

  return (
    <div className="ps-5 text-black  pt-3 "

    //  style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h2 className="text-center fs-3 mt-5 fw-bold">
        Loan Management Application
      </h2>
      <h3 className="text-center fs-4 mt-3 fw-semibold">Loan Data Details</h3>
      <div className="w-100 d-flex justify-content-center">
        <table
          className=" w-75 mx-auto mt-4 table table-striped border border-secondary-subtle shadow p-3 mb-5 bg-body-tertiary"
          // style={{
          //   width: "80%",
          //   margin: "20px auto",
          //   border: "1px solid #ddd",
          //   borderCollapse: "collapse",
          // }}
        >
          <thead>
            <tr>
              <th className="text-center">Loan ID</th>
              <th className="text-center">Loan Type</th>
              <th className="text-center">Duration</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td className="text-center">{loan.loanId}</td>
                <td className="text-center">{loan.loanType}</td>
                <td className="text-center">{loan.duration} years</td>
                <td className="d-flex justify-content-center">
                  <button className="btn btn-primary ms-2 me-2" onClick={() => handleEdit(loan.id)}>Edit</button>

                  <button className="btn btn-danger" onClick={() => handleDelete(loan.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        

      
      </div>

      <div className="form-group col-sm-3 d-flex justify-content-center"> <button type="submit" onClick={() => navigate("/loan-card")} className="btn btn-success w-25 mt-2 mb-3">Back</button> 
      </div>
    </div>
  );
};

export default LoanDataEdit;
