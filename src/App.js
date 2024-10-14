import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import Body from "./components/Body/body";
import Footer from "./components/footer/footer";
import './App.css';
import AboutUs from "./components/aboutus/AboutUs";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import TermsAndConditions from "./components/termsandconditions/TermsAndConditions";
import Preloader from "./components/Preloader/Preloader";
import TicketDetails from "./components/tickets/ticketdetails";
import CheckoutPage from "./components/checkout/checkout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <div className="App">
      <Navbar/>   
      <Routes> 
        <Route path="/" element={<Body/>} /> 
        <Route path="/tickets/:id" element={<TicketDetails/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/terms-and-conditons" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
