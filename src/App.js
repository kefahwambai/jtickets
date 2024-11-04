import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import './App.css';
import Preloader from "./components/Preloader/Preloader";

const Body = lazy(() => import("./components/Body/body"));
const AboutUs = lazy(() => import("./components/aboutus/AboutUs"));
const PrivacyPolicy = lazy(() => import("./components/privacypolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/termsandconditions/TermsAndConditions"));
const TicketDetails = lazy(() => import("./components/tickets/ticketdetails"));
const CheckoutPage = lazy(() => import("./components/checkout/checkout"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Body.preload?.();
    AboutUs.preload?.();
    TicketDetails.preload?.();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App bg-gray-50 sm:bg-gray-100 md:bg-gray-200 lg:bg-gray-300 xl:bg-gray-400 2xl:bg-gray-500 min-h-screen transition-all duration-300 ease-in-out">
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-gray-50">
          <span className="text-lg font-semibold text-gray-600">Loading...</span>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/tickets/:id" element={<TicketDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
