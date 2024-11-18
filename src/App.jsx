import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import ContactUs from './Pages/ContactUs';
import TermsAndCondition from './Pages/TermsAndCondition';
import Refund from './Pages/Refund';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/terms-condition" element={<TermsAndCondition/>}/>
        <Route path="/refund-policy" element={<Refund/>}/>
      </Routes>
    </div>
  )
}

export default App