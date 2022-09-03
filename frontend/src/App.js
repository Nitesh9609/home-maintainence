import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserRegister from "./pages/UserRegister";
import AdminRegister from "./pages/AdminRegister";
import UserDetails from "./pages/User/UserDetails";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userRegister" element={<UserRegister/>}/>
        <Route path="adminRegister" element={<AdminRegister/>}/>
        <Route path='/userDetail' element={<UserDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
