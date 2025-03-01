import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { useState ,useEffect} from 'react';

 
const AdminDashboard = () => {
  const navigate = useNavigate();

  const [adminName, setAdminName]=useState('');
 
  useEffect(()=>{
    const storedName= sessionStorage.getItem('adminName');
    if(storedName){
      setAdminName(storedName);
    }else{
      navigate('/');
    }
  },[navigate]);
 
const handleLogout=()=>{
  sessionStorage.clear();
  navigate('/')
}


 
  return (
    <div 
    className="text-center mt-5 shadow p-3 mb-5 text-white fw-bold my-auto bg-secondary opacity-75"
    // style={{ textAlign: 'center', marginTop: '50px' }}
    >
       { adminName && <p className='text-center mt-5 me-5 fw-bold h4 text-light'>Hello {adminName}, Welcome to the Admin Dashboard!!</p>}

       <div className='text-center mt-3'><button className='btn btn-danger mb-3' onClick={handleLogout}>Logout
    </button></div>

      <h1 className='fs-3'>Loan Management Application</h1>
      <h2 className='mb-5 mt-3 fs-5'>Admin Dashboard</h2>
      <div className='mt-4'
      // style={{ marginTop: '20px' }}
      >
        <button
          // 
          className='btn btn-dark me-3 mb-5'
          onClick={() => navigate('/customer-data')}>
          Customer Data Management
        </button>
        <button
         
          className='btn btn-success me-3 mb-5'
          onClick={() => navigate('/loan-card')}>
          Loan Card Management
        </button>
        <button
         
          className='btn btn-info mb-5'
          onClick={() => navigate('/items-master')}>
          Items Master Data
        </button>
      </div>
      
     
    </div>
  );
};
 

 
export default AdminDashboard;