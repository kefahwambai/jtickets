import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import Body from "./components/Body/body";
import Footer from "./components/footer/footer";
import './App.css';
import Preloader from "./components/Preloader/Preloader";
import TicketDetails from "./components/tickets/ticketdetails";
import * as $ from "jquery"

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
        <Route path="/tickets" element={<TicketDetails/>} />

      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
