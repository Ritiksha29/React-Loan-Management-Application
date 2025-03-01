
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

 
const EditItemForm = () => {
  const { id } = useParams(); // Get item ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemId: "",
    itemCategory: "Furniture",
    itemDescription: "",
    itemValue: "",
    issueStatus: "Yes",
    itemMake: "Wooden",
  });
 
  // Fetch the item details for the given ID
  useEffect(() => {
    axios
.get(`http://localhost:3032/items/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id]);
 
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  // Handle form submission to update the item
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
.put(`http://localhost:3032/items/${id}`, formData)
      .then(() => {
        alert("Item updated successfully!");
        navigate("/item-master-data"); // Navigate back to the item list
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        alert("Failed to update the item!");
      });
  };
 
 

return(
  <>
   
   <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
      <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">

        <div className="border border-secondary-subtle pb-4 pt-3 ps-4 border rounded-3    text-white bg-dark opacity-75">

        <h2 className="fs-3 mb-4">Loan Management Application</h2>
        <h3 className="fs-4 mb-3">Item Master Form</h3>

        <form onSubmit={handleSubmit} className="me-3">
        <div class="row justify-content-between text-left mb-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Item ID<span class="text-danger"> *</span></label> <input
          type="text"
          name="itemId"
          value={formData.itemId}
          onChange={handleChange}
        />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Item Categoery<span className="text-danger"> *</span></label>  <select
          name="itemCategory"
          value={formData.itemCategory}
          onChange={handleChange}
        >
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="Other">Other</option>
        </select>
                         </div>
                    </div>

                    <div class="row justify-content-between text-left mb-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Item Description<span class="text-danger"> *</span></label>  <input
          type="text"
          name="itemDescription"
          value={formData.itemDescription}
          onChange={handleChange}
        />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Item Value<span className="text-danger"> *</span></label>  <input
          type="number"
          name="itemValue"
          value={formData.itemValue}
          onChange={handleChange}
        />
                         </div>
                    </div>

                    <div class="row justify-content-between text-left mb-4">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Issue Status<span class="text-danger"> *</span></label>  <select
          name="issueStatus"
          value={formData.issueStatus}
          onChange={handleChange}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Item Make<span className="text-danger"> *</span></label> <select
          name="itemMake"
          value={formData.itemMake}
          onChange={handleChange}
        >
          <option value="Wooden">Wooden</option>
          <option value="Metal">Metal</option>
          <option value="Plastic">Plastic</option>
        </select>
                         </div>

                    </div>

                    <div className="row justify-content-center mb-4 mt-5">
                        <div className="form-group col-sm-6"> <button type="submit" className="btn btn-primary w-50">Add Data</button> </div>
                    </div>      
    </form >

        </div>    

      </div>
    </div>
  </div> 
  </>
)
}
export default EditItemForm;

