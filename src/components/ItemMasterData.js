// item master data ...............

import axios from "axios";
import React, { useEffect, useState } from "react";
// import ItemMasterForm from "./ItemMasterForm";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

const ItemMasterData = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch items from JSON server
  React.useEffect(() => {
    axios
      .get("http://localhost:3032/items") // GET request to JSON server
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      })
  }, []);


  const handleEdit=(id)=>{
    navigate(`/edit-item/${id}`);
  


  }
  const handleDelete=(id)=>{
    const confirmDelete =window.confirm("Are you sure you want to delete?");
    if(confirmDelete){
      axios
      .delete(`http://localhost:3032/items/${id}`)
      .then(()=>{
        setItems(items.filter((item) => item.id !== id));
        alert("Item deleted successfully ");

      })
      .catch((err)=>{
        console.log("Error deleting the item:",err);
        alert("Failed to delete item");

      })
    }

  }

  return (
    <div className="">
      <h2 className="text-center fs-3 mt-5 fw-bold">Item Master Details</h2>
      {/* <Link to="/item/new">Add New Item</Link>  */}
      {/* Link to navigate to new item form */}
      <h3 className="text-center fs-4 mt-3 fw-semibold">Items List</h3>

      <div className="w-100 d-flex justify-content-center">
      <table className="w-75 mx-auto mt-4 table table-striped border border-secondary-subtle text-white ">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Category</th>
            <th className="text-center" >Description</th>
            <th className="text-center">Value</th>
            <th className="text-center">Status</th>
            <th className="text-center" >Make</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.itemId}</td>
              <td className="text-center">{item.itemCategory}</td>
              <td className="text-center">{item.itemDescription}</td>
              <td className="text-center">{item.itemValue}</td>
              <td className="text-center">{item.issueStatus}</td>
              <td className="text-center">{item.itemMake}</td>
              <td className="d-flex justify-content-center">
              <button
                  onClick={() => handleEdit(item.id)}
                  className="btn btn-primary ms-2 me-2"
                  // style={{ marginRight: "5px" }}
                >
                  Edit
                </button>

                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>

      
      <div>
      <div className="form-group col-sm-3 d-flex justify-content-center"> <button type="submit" onClick={() => 
        navigate("/items-master")} className="btn btn-success w-25 ">Back</button> </div>
      </div>

      

  
      
    </div>
  );
};

export default ItemMasterData;
