import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./components/AdminDashboard";
import CustomerDataForm from "./components/CustomerDataForm";
import CustomerDataList from "./components/CustomerDataList";
import EditCustomerForm from "./components/EditCustomerForm";
import ItemMasterData from "./components/ItemMasterData";
import ItemMasterForm from "./components/ItemMasterForm";
import LoanCardForm from "./components/LoanCardForm";
import LoanDataEdit from "./components/LoanDataEdit";
import Login from "./components/Login";
import EditLoanForm from "./components/EditLoanForm";
import EditItemForm from "./components/EditItemForm";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/customer-data" element={<CustomerDataForm />} />
          <Route path="/customer-data-form" element={<CustomerDataList />} />

          <Route path="/loan-card" element={<LoanCardForm />} />
          <Route path="/loan-data-edit" element={<LoanDataEdit />} />

          <Route path="/items-master" element={<ItemMasterForm />} />
          <Route path="/item-master-data" element={<ItemMasterData />} />
          <Route path="/edit-customer/:id" element={<EditCustomerForm />} />
          <Route path = "/edit-loan/:id"  element ={<EditLoanForm/>}/>
          <Route path = "/edit-item/:id" element={<EditItemForm/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
