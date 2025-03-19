import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import ContactUs from './Pages/ContactUs';
import TermsAndCondition from './Pages/TermsAndCondition';
import Refund from './Pages/Refund';
import Privacy from './Pages/Privacy';
import { Download } from './components/Download';
import WelcomeModal from './components/WelcomeModel';

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
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/download" element={<Download/>}/>
        <Route path="/welcome" element={<WelcomeModal/>}/>
      </Routes>
    </div>
  )
}

export default App